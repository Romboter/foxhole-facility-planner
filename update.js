const fs = require('fs');
const path = require('path');

const foxholeDataVariable = 'const foxholeData = ';
let foxholeData = JSON.parse(fs.readFileSync('./public/foxholeData.js').toString().substring(foxholeDataVariable.length));

let structureList = foxholeData.buildings;
let itemList = {};

// Switch IDs for CodeNames so the parser has an easier time identifying entries as their Foxhole counterpart.
structureList = Object.keys(structureList).reduce((structures, id) => {
    let structure = structureList[id];
    if (structure.upgrades) {
        structure.upgrades = Object.keys(structure.upgrades).reduce((upgrades, id) => {
            let upgrade = structure.upgrades[id];
            upgrades[upgrade.codeName?.toLowerCase() ?? id] = structure.upgrades[id];
            upgrade.id = id;
            return upgrades;
        }, {});
    }
    structures[structure.codeName?.toLowerCase() ?? id] = structureList[id];
    structure.id = id;
    return structures;
}, {});

const conversionEntriesMap = {
    'Input': 'input',
    'FuelInput': 'input',
    'Output': 'output',
    'FuelOutput': 'output'
};

const liquidResourceMap = {
    'Oil': 50,
    'Water': 50
}

function getLocalIcon(component) {
    let iconPath = component?.Icon?.ObjectPath ?? component?.Icon?.ResourceObject?.ObjectPath;
    if (iconPath) {
        return `game/${iconPath.slice(12, -1)}webp`;
    }
}

function iterateItemList(resourceList) {
    if (resourceList) {
        resourceList.forEach(resource => {
            itemList[resource.CodeName.toLowerCase()] = {};
        });
    }
}

// This ensures we're only getting items for structures we have in the planner since there are a lot we don't use.
function initializeStructureItems(component) {
    if (component.AssemblyItems) {
        for (const [id, recipe] of Object.entries(component.AssemblyItems)) {
            itemList[recipe.CodeName.toLowerCase()] = {};
            if (recipe.RequiredCodeName !== 'None') {
                itemList[recipe.RequiredCodeName.toLowerCase()] = {};
            }
        }
    }
    if (component.ConversionEntries) {
        for (const [id, recipe] of Object.entries(component.ConversionEntries)) {
            for (const [from, to] of Object.entries(conversionEntriesMap)) {
                iterateItemList(recipe[from]);
            }
        }
    }
}

function iterateBaseStructures(uProperty, baseData) {
    let basePath = `${uProperty.SuperStruct.ObjectPath.slice(0, -1)}json`;
    let baseAsset = fs.readFileSync(basePath);
    baseAsset = JSON.parse(baseAsset);
    let className = null;
    baseAsset.forEach(uProperty => {
        if (uProperty.Type === 'BlueprintGeneratedClass') {
            className = uProperty.Name ?? className;
            if (uProperty.Super) {
                iterateBaseStructures(uProperty, baseData);
            }
        } else if (uProperty.Type === className && uProperty.Properties) {
            const structure = uProperty.Properties;
            baseData.name = structure.DisplayName?.SourceString ?? baseData.name;
            baseData.description = structure.Description?.SourceString ?? baseData.description;
            baseData.BuildCategory = structure.BuildCategory ?? baseData.BuildCategory;
            baseData.icon = getLocalIcon(structure) ?? baseData.icon;
            baseData.garrisonSupplyMultiplier = structure.DecaySupplyDrain ?? baseData.garrisonSupplyMultiplier;
            baseData.power = structure.PowerGridInfo?.PowerDelta ?? baseData.power;
        }
    });
}

let buildCategories = ['EBuildCategory::Foundation', 'EBuildCategory::Facility', 'EBuildCategory::Power', 'EBuildCategory::Mining'];

function iterateStructures(dirPath) {
    dirPath = dirPath ?? 'War/Content/Blueprints/';
    let files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const fileStats = fs.statSync(filePath);
        if (fileStats.isFile() && path.extname(filePath) === '.json') {
            const uAsset = JSON.parse(fs.readFileSync(filePath));
            let className = null;
            let structureCodeName = null;
            let structure = null;
            let structureData;
            let baseData = {
                'name': undefined,
                'description': 'No Description Provided.',
                'category': undefined,
                'icon': undefined,
                'garrisonSupplyMultiplier': undefined,
                'power': undefined,
                'cost': undefined
            };
            let modificationsData = [];
            uAsset.forEach(uProperty => {
                switch(uProperty.Type) {
                    case 'BlueprintGeneratedClass':
                        className = uProperty.Name ?? className;
                        if (uProperty.Super) {
                            iterateBaseStructures(uProperty, baseData);
                        }
                        break;
                    case className:
                        if (uProperty.Properties && uProperty.Properties.CodeName && ((uProperty.Properties.BuildCategory && buildCategories.includes(uProperty.Properties.BuildCategory) || (baseData.BuildCategory && buildCategories.includes(baseData.BuildCategory))))) {
                            structureCodeName = uProperty.Properties.CodeName.toLowerCase();
                            if (structureList[structureCodeName]) {
                                structure = uProperty.Properties;
                                structureData = structureList[structureCodeName];
                                structureList[structureCodeName] = {
                                    'id': structureData.id,
                                    'name': structure.DisplayName?.SourceString ?? (baseData.name ?? structure.CodeName),
                                    'codeName': structure.CodeName,
                                    'description': structure.Description?.SourceString ?? baseData.description,
                                    'category': structureData.category,
                                    'color': structureData.color,
                                    'hideInList': structureData.hideInList,
                                    'width': structureData.width,
                                    'length': structureData.length,
                                    'range': structureData.range,
                                    'rangeColor': structureData.rangeColor,
                                    'overlapDist': structure.overlapDist,
                                    'sortOffset': structureData.sortOffset,
                                    'isBezier': structureData.isBezier,
                                    'maxLength': structureData.maxLength,
                                    'icon': getLocalIcon(structure) ?? baseData.icon,
                                    'texture': structureData.texture,
                                    'textureIcon': structureData.textureIcon,
                                    'garrisonSupplyMultiplier': structure.DecaySupplyDrain ?? baseData.garrisonSupplyMultiplier,
                                    'power': (structure.PowerGridInfo?.PowerDelta ?? baseData.power) / 1000 || undefined,
                                    'cost': baseData.cost,
                                    '_productionLength': structureData._productionLength,
                                    'production': structureData.production,
                                    'AssemblyItems': structure.AssemblyItems,
                                    'ConversionEntries': structure.ConversionEntries,
                                    'upgrades': structureData.upgrades
                                }
                                initializeStructureItems(structure);
                                if (structure.Modifications) {
                                    for (const [id, modification] of Object.entries(structure.Modifications)) {
                                        initializeStructureItems(modification);
                                    }
                                    modificationsData = structure.Modifications;
                                }
                            }
                        }
                        break;
                    case 'ModificationSlotComponent':
                        if (structure) {
                            let modifications;
                            for (const [codeName, modification] of Object.entries(uProperty.Properties.Modifications)) {
                                const modificationData = modificationsData[codeName];
                                if (codeName !== 'EFortModificationType::Default') {
                                    const displayName = codeName.substring(23);
                                    const storedModData = structureData?.upgrades[displayName.toLowerCase()];
                                    modifications = modifications ?? {};
                                    modifications[displayName.toLowerCase()] = {
                                        'id': storedModData?.id,
                                        'name': modification.DisplayName?.SourceString ?? displayName,
                                        'codeName': displayName,
                                        'description': modification.Description?.SourceString ?? 'No Description Provided.',
                                        'icon': getLocalIcon(modification),
                                        'cost': undefined,
                                        '_productionLength': storedModData?._productionLength,
                                        'production': storedModData?.production,
                                        'AssemblyItems': modificationData?.AssemblyItems,
                                        'ConversionEntries': modificationData?.ConversionEntries
                                        // There is a FuelCost variable which is never used here.
                                    }
                                    if (modification.Tiers) {
                                        for (let [tier, tierData] of Object.entries(modification.Tiers)) {
                                            if (tierData.ResourceAmounts) {
                                                modifications[displayName.toLowerCase()].cost = getResourceCosts(tierData.ResourceAmounts);
                                                break; // Unsure how tiers work yet, and just want to make sure we don't get any extra data.
                                            }
                                        }
                                    }
                                }
                            }
                            structureList[structureCodeName].upgrades = modifications;
                        }
                        break;
                    case 'BoxComponent':
                        /*
                        
                        Avoid this for now.

                        if (structure && uProperty.Name === 'UseAreaBox' && uProperty.Properties?.BoxExtent) {
                            structureList[structureCodeName].width = uProperty.Properties.BoxExtent.Y;
                            structureList[structureCodeName].length = uProperty.Properties.BoxExtent.X;
                        }
                        */
                        break;
                }
            });
        } else if (fileStats.isDirectory()) {
            iterateStructures(filePath);
        }
    });
}
iterateStructures('War/Content/Blueprints/Structures/');

function iterateBaseAssets(uProperty, baseData) {
    let basePath = `${uProperty.SuperStruct.ObjectPath.slice(0, -1)}json`;
    let baseAsset = fs.readFileSync(basePath);
    baseAsset = JSON.parse(baseAsset);
    let className = null;
    baseAsset.forEach(uProperty => {
        if (uProperty.Type === 'BlueprintGeneratedClass') {
            className = uProperty.Name ?? className;
            if (uProperty.Super) {
                iterateBaseAssets(uProperty, baseData);
            }
        } else if (uProperty.Type === className && uProperty.Properties) {
            const item = uProperty.Properties;
            baseData.name = item.DisplayName?.SourceString ?? baseData.name;
            baseData.description = item.Description?.SourceString ?? baseData.description;
            baseData.icon = getLocalIcon(item) ?? baseData.icon;
            baseData.faction = item.FactionVariant === 'EFactionId::Wardens' ? 'w' : item.FactionVariant === 'EFactionId::Colonials' ? 'c' : baseData.faction;
            baseData.isLiquid = item.bIsLiquid ?? baseData.isLiquid;
        }
    });
}

function getResourceCosts(resources) {
    if (resources && resources.Resource.CodeName !== 'None') {
        let resourceCost = {};
        let resourceCodeName = resources.Resource.CodeName.toLowerCase();
        itemList[resourceCodeName] = {};
        resourceCost[resourceCodeName] = resources.Resource.Quantity;
        if (resources.OtherResources) {
            resources.OtherResources.forEach(resource => {
                resourceCodeName = resource.CodeName.toLowerCase();
                itemList[resourceCodeName] = {};
                resourceCost[resourceCodeName] = resource.Quantity;
            });
        }
        return resourceCost;
    }
}

function iterateData(filePath, list, isItem) {
    let rawdata = fs.readFileSync(filePath);
    let uAsset = JSON.parse(rawdata)[0];
    if (uAsset.Rows) {
        for (let [codeName, data] of Object.entries(uAsset.Rows)) {
            codeName = codeName.toLowerCase();
            if (list[codeName]) {
                if (isItem) {
                    if (data.AltResourceAmounts && data.AltResourceAmounts.Resource.CodeName !== 'None') {
                        list[codeName].cost = getResourceCosts(data.AltResourceAmounts);
                    }
                    /*
                    This seems to be where Field Modification Center pulls its data from.
                    if (data.bHasTierUpgrades) {
                        if (data.UpgradeResourceAmounts && data.UpgradeResourceAmounts.Resource.CodeName !== 'None') {
                            list[codeName].UpgradeResourceAmounts = data.UpgradeResourceAmounts;
                        }
                    }
                    */
                } else if (data.ResourceAmounts && data.ResourceAmounts.Resource.CodeName !== 'None') {
                    list[codeName].cost = getResourceCosts(data.ResourceAmounts);
                }
            }
        }
    }
}

// War/Content/Blueprints/Data/BPItemDynamicData.json - Doesn't appear to have any useful information ATM.
iterateData('War/Content/Blueprints/Data/BPVehicleDynamicData.json', itemList, true);
iterateData('War/Content/Blueprints/Data/BPStructureDynamicData.json', itemList, true); // Check for items in the structure data... Yes, Material Pallet is stored here.
iterateData('War/Content/Blueprints/Data/BPStructureDynamicData.json', structureList);

function iterateAssets(dirPath) {
    let files = fs.readdirSync(dirPath);
    files.forEach(file => {
        let filePath = path.join(dirPath, file);
        let fileStats = fs.statSync(filePath);
        if (fileStats.isFile() && path.extname(filePath) === '.json') {
            let rawdata = fs.readFileSync(filePath);
            let uAsset = JSON.parse(rawdata);
            let className = null;
            let baseData = {
                'name': null,
                'description': 'No Description Provided.',
                'icon': undefined,
                'faction': undefined,
                'isLiquid': undefined
            };
            uAsset.forEach(uProperty => {
                if (uProperty.Type === 'BlueprintGeneratedClass') {
                    className = uProperty.Name ?? className;
                    if (uProperty.Super) {
                        iterateBaseAssets(uProperty, baseData);
                    }
                } else if (uProperty.Type === className && uProperty.Properties) {
                    const item = uProperty.Properties;
                    if (item.CodeName) {
                        let codeName = item.CodeName.toLowerCase();
                        if (itemList[codeName]) {
                            itemList[codeName] = {
                                'name': item.DisplayName?.SourceString ?? (baseData.name ?? item.CodeName),
                                'description': item.Description?.SourceString ?? baseData.description,
                                'icon': getLocalIcon(item) ?? baseData.icon,
                                'faction': item.FactionVariant === 'EFactionId::Wardens' ? 'w' : item.FactionVariant === 'EFactionId::Colonials' ? 'c' : baseData.faction,
                                'isLiquid': item.bIsLiquid ?? baseData.isLiquid,
                                'cost': itemList[codeName]?.cost
                            };
                        }
                    }
                }
            });
        } else if (fileStats.isDirectory()) {
            iterateAssets(filePath);
        }
    });
}
iterateAssets('War/Content/Blueprints/');

function compareItems(oldItems, newItems) {
    if (!oldItems || !newItems) {
        return oldItems === newItems;
    }

    const oldItemCodeNames = Object.keys(oldItems);
    const newItemCodeNames = Object.keys(newItems);

    if (oldItemCodeNames.length !== newItemCodeNames.length) {
        return false;
    }

    for (const itemCodeName of oldItemCodeNames) {
        if (oldItems[itemCodeName] !== newItems[itemCodeName]) {
            return false;
        }
    }

    return true;
}

function compareRecipe(oldRecipe, newRecipe) {
    return compareItems(oldRecipe?.input, newRecipe?.input) && compareItems(oldRecipe?.output, newRecipe?.output) && (oldRecipe?.faction === newRecipe?.faction) && (oldRecipe?.time === newRecipe?.time) && (oldRecipe?.power === newRecipe?.power);
}

function updateProductionRecipes(component) {
    let id = component._productionLength ?? 0;
    let constructionRecipes = [];
    if (component.ConversionEntries?.length) {
        component.ConversionEntries.forEach(entry => {
            let constructionRecipe = {
                'id': undefined,
                'input': undefined,
                'output': undefined,
                'faction': undefined,
                'time': entry.Duration,
                'power': entry.PowerDelta ? entry.PowerDelta / 1000 : undefined
            }
            for (const [from, to] of Object.entries(conversionEntriesMap)) {
                if (entry[from]?.length) {
                    constructionRecipe[to] = constructionRecipe[to] ?? {};
                    entry[from].forEach(resource => {
                        let resourceQuantity = resource.Quantity;
                        if ((from === 'Input' || from === 'Output') && itemList[resource.CodeName.toLowerCase()].isLiquid) {
                            if (liquidResourceMap[resource.CodeName]) {
                                resourceQuantity *= liquidResourceMap[resource.CodeName];
                            } else {
                                console.error('Unknown liquid type. Update script to include liters for:', resource.CodeName);
                            }
                        }
                        constructionRecipe[to][resource.CodeName.toLowerCase()] = resourceQuantity;
                    });
                }
            }
            // Ensures we keep the Faction stored for an item. There shouldn't be any conflicts here.
            if (constructionRecipe.output) {
                for (let [codeName, item] of Object.entries(constructionRecipe.output)) {
                    codeName = codeName.toLowerCase();
                    if (itemList[codeName]?.faction) {
                        constructionRecipe.faction = itemList[codeName].faction;
                    }
                }
            }
            constructionRecipes.push(constructionRecipe);
        });
        delete component.ConversionEntries;
    }
    if (component.AssemblyItems?.length) {
        component.AssemblyItems.forEach(assembly => {
            let constructionRecipe = {
                'id': undefined,
                'input': {},
                'output': {},
                'faction': undefined,
                'time': assembly.Duration,
            }
            if (assembly.RequiredCodeName !== 'None') {
                constructionRecipe.input[assembly.RequiredCodeName.toLowerCase()] = 1;
            }
            let itemCodeName = assembly.CodeName.toLowerCase();
            let item = itemList[itemCodeName];
            Object.assign(constructionRecipe.input, item?.cost);
            constructionRecipe.output[itemCodeName] = 1;
            constructionRecipe.faction = item?.faction;
            constructionRecipes.push(constructionRecipe);
        });
        delete component.AssemblyItems;
    }
    constructionRecipes.forEach(newRecipe => {
        let oldId = undefined;
        component.production?.every(oldRecipe => {
            if (compareRecipe(oldRecipe, newRecipe)) {
                oldId = oldRecipe.id;
                return false;
            }
            return true;
        });
        newRecipe.id = oldId ?? id++;
    });
    component._productionLength = id;
    component.production = constructionRecipes;
}

for (let [codeName, structure] of Object.entries(structureList)) {
    updateProductionRecipes(structure);
    if (structure.upgrades) {
        for (let [id, upgrade] of Object.entries(structure.upgrades)) {
            updateProductionRecipes(upgrade);
        }
    }
}

for (let [codeName, item] of Object.entries(itemList)) {
    delete item.cost;
    delete item.faction;
}

structureList = Object.keys(structureList).reduce((structures, codeName) => {
    let structure = structureList[codeName];
    if (structure.upgrades) {
        structure.upgrades = Object.keys(structure.upgrades).reduce((upgrades, codeName) => {
            let upgrade = structure.upgrades[codeName];
            upgrades[upgrade.id ?? codeName] = structure.upgrades[codeName];
            delete upgrade.id;
            return upgrades;
        }, {});
    }
    structures[structure.id ?? codeName] = structureList[codeName];
    delete structure.id;
    return structures;
}, {});

function sortList(list) {
    return Object.keys(list).sort().reduce((data, codeName) => {
        data[codeName] = list[codeName];
        return data;
    }, {});
}

fs.writeFile('public/foxholeData.js', foxholeDataVariable + JSON.stringify({
    'resources': sortList(itemList),
    'buildings': sortList(structureList)
}, null, '\t'), err => {
    if (err) {
        throw err;
    }
});