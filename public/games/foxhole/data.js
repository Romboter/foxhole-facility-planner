const gameData = {
	"categories": {
		"presets": {
			"name": "Modules",
			"hideInBuildingList": true,
			"icon": "game/Textures/UI/Menus/IconFilterModules.webp"
		},
		"defenses": {
			"name": "Defenses",
			"buildCategory": "Defense",
			"icon": "game/Textures/UI/Menus/IconFilterDefense.webp"
		},
		"entrenchments": {
			"name": "Entrenchments",
			"buildCategory": "Bunker",
			"icon": "game/Textures/UI/Menus/IconFilterBunker.webp"
		},
		"misc": {
			"name": "Utilities",
			"buildCategory": true,
			"icon": "game/Textures/UI/Menus/IconFilterGeneral.webp"
		},
		"factories": {
			"name": "Facilities",
			"buildCategory": "Facility",
			"icon": "game/Textures/UI/Menus/IconFilterFacility.webp"
		},
		"harvesters": {
			"name": "Harvesters",
			"buildCategory": "Mining",
			"icon": "game/Textures/UI/Menus/IconFilterMining.webp"
		},
		"power": {
			"name": "Power",
			"buildCategory": "Power",
			"icon": "game/Textures/UI/Menus/IconFilterPower.webp"
		},
		"foundations": {
			"name": "Foundations",
			"buildCategory": "Foundation",
			"icon": "game/Textures/UI/Menus/IconFilterFoundation.webp"
		},
		"shippables": {
			"name": "Shippables",
			"buildCategory": "Shippables",
			"icon": "game/Textures/UI/Menus/IconFilterShippingContainer.webp"
		},
		"vehicles": {
			"name": "Vehicles",
			"hideInBuildingList": true,
			"icon": "game/Textures/UI/Menus/IconFilterVehicle.webp"
		},
		"trains": {
			"name": "Locomotives",
			"hideInBuildingList": true,
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeEngineVehicleIcon.webp"
		},
		"world": {
			"name": "References",
			"icon": "game/Textures/UI/Menus/IconFilterGarrisonHouse.webp"
		},
		"showcase": {
			"name": "Showcase",
			"hideInBuildingList": true,
			"icon": "game/Textures/UI/Menus/IconFilterShowcase.webp"
		}
	},
	"presets": {
		"classic_storm_cannon": {
			"name": "Classic Storm Cannon",
			"description": "Storm Cannon setup with corner howitzers.",
			"author": "Stonefox",
			"module": true
		},
		"classic_intel_center": {
			"name": "Classic Intelligence Center",
			"description": "Intelligence Center setup with corner howitzers.",
			"author": "Stonefox",
			"module": true
		},
		"360_zero": {
			"name": "360 ZERO",
			"description": "Cheap, Effective, Practical.",
			"author": "Unknown",
			"module": true
		},
		"360_one": {
			"name": "360 ONE",
			"description": "The older brother of the zero, more expensive, but more aggressive.",
			"author": "Unknown",
			"module": true
		},
		"360_dual": {
			"name": "360 DUAL",
			"description": "Retains compactness while significantly augmenting resistance to artillery.",
			"author": "AllShallKneel",
			"module": true
		},
		"long_shall": {
			"name": "LongShall",
			"description": "Did somebody say compact? While this bunker sacrifices some coverage for extreme density, it does so marvelously.",
			"author": "AllShallKneel",
			"module": true
		},
		"inique": {
			"name": "Inique",
			"description": "Hard hitting, compact, great coverage, this bunker proves that absolute efficiency is indifferent to symmetry.",
			"author": "AllShallKneel",
			"module": true
		},
		"mini_obs": {
			"name": "miniObs",
			"description": "Extremely lightweight, but provides RG coverage at the bare minimum cost.",
			"author": "AllShallKneel",
			"module": true
		},
		"halberd_bunker": {
			"name": "\"Halberd\" Bunker",
			"description": "A common reliable defensive bunker pattern.",
			"author": "Unknown",
			"module": true
		},
		"xi_observation_bunker1": {
			"name": "XI Observation Bunker",
			"description": "Simple observation bunker split into two pieces to help with integrity (especially if left T2). Only 2 RGs can be lit, but that should be enough to prevent anyone from slipping into the bunker without suppression.",
			"author": "nondidjos",
			"module": true
		},
		"m_bunker_t3": {
			"name": "\"M\" Bunker T3",
			"description": "Wide concrete bunker. This bunker has a lower garrison density but is better for wide fronts.",
			"author": "Stonefox",
			"module": true
		},
		"squid_bunker_t2_1": {
			"name": "\"Squid\" Bunker T2",
			"description": "Fragile but hard hitting T2 bunker.",
			"author": "Stonefox",
			"module": true
		},
		"squid_bunker_t3": {
			"name": "\"Squid\" Bunker T3",
			"description": "Conversion for T2 version but not purpose built concrete structure. This is more an upgrade for the T2 \"Squid\", not recommended if you plan for concrete.",
			"author": "Stonefox",
			"module": true
		},
		"bunker_w_module": {
			"name": "\"W\" Bunker",
			"description": "A meta bunker design that has lots of health with great structural integrity and defenses.",
			"author": "Unknown",
			"module": true
		},
		"compact_corner_bunker": {
			"name": "Compact Corner Bunker",
			"description": "This is a compact AT, MG and HG corner design that covers a 90 degree angle. This design is meant to be integrated into a straight line defence without wasting any space, or making any concessions on defence. Corner cutting is needed in the middle where 4 corner cuts are needed, but are easy to do. Do note that this design is only viable at the concrete tier.",
			"author": "Danetello",
			"module": true
		},
		"obs_bunker": {
			"name": "OBS Bunker",
			"description": "Standard observation bunker. Power only 2 rifle garrisons and the OBS bunker.",
			"author": "Unknown",
			"module": true
		},
		"locomotive_factory_by_eg0611": {
			"name": "Locomotive Factory",
			"description": "A facility that is capable to build Black Bolt, Longrider, Holdout, Rockhold and Roadhouse and their necessary manufacturing materials. 4 independent power systems allow facility to be functional 7/24.",
			"author": "EG0611"
		},
		"m_bunker_w_trenches": {
			"name": "\"M\" Bunker w/ Trenches",
			"description": "Wide concrete bunker with trench support.",
			"author": "Stonefox"
		},
		"t2_courtyard": {
			"name": "T2 Courtyard",
			"description": "A courtyard T2 bunker layout for early - mid war.",
			"author": "Stonefox"
		},
		"t2_or_t3_halberd_trench_designs": {
			"name": "T2 / T3 Halberd Trench Designs",
			"description": "Using the Halberd bunker design here are some trenches you can use to connect them, varying in amount of emplacements.",
			"author": "Stonefox"
		},
		"t2_oil_field": {
			"name": "T2 Oil Field",
			"description": "Supply the whole back line with petrol! Basic Oil field at tier 2 facilities with 6 oil reformer and 1 cracking unit, never waste a drop of oil anymore.",
			"author": "[5th] Menxs"
		},
		"small_munition_factory": {
			"name": "Small Munition Factory",
			"description": "Small one man Facility with Low Gsupps cost of 432 for 24h when the lvl 3 Encampment is reached.",
			"author": "Oberst_Den"
		},
		"frontline_sandbag_factory": {
			"name": "Frontline Sandbag Factory",
			"description": "Simple, easy to maintain frontline sandbag factory. Heavily based off of Small Munition Factory by Oberst_Den",
			"author": "runningpeanuts"
		},
		"compact_coal_liquefaction": {
			"name": "Compact Coal Liquefaction",
			"description": "Produce coal with the power of coal! You can easily power this setup with a coal power station and an extra water pump for \"automatic\" coal. The coal to coal conversion factor is of ≃2.6. Taking into account power the multiplier is of ≃2.286",
			"author": "[5th] Menxs"
		},
		"5mw_80h_drip_power": {
			"name": "5mw 80h Drip Power",
			"description": "Very useful to ease maintenance. This Design will be producing power ≃50% of the time, maintenance tunnels on its grid will be generating ≃80 Gsups/h and fuel will last twice as much (80h)",
			"author": "[5th] Menxs"
		},
		"coastal_storage_facility_by_eg0611": {
			"name": "Coastal Storage Facility",
			"description": "A small facility with only purpose of storing items. No power production and consumption. It depends nearby bunker base for GSUPS usage.",
			"author": "EG0611"
		},
		"simple_vehicle_factory": {
			"name": "Simple Vehicle Factory (Example)",
			"description": "A simple vehicle factory to output upgraded vehicles per hour. This is an example of a preset for the planner. Contribute your own saves to our Discord!",
			"author": "Jimbo"
		},
		"eat_maker": {
			"name": "EAT Maker",
			"description": "Small EAT making facility\na train will make imports/exports easier but is not necessary",
			"author": "maverick0537",
			"module": true
		}
	},
	"tech": {
		"unlockfacilitytier2": {
			"name": "Facilities (Tier 2)",
			"description": "Allows for the construction of advanced Facilities structures.",
			"icon": "game/Textures/UI/StructureIcons/FacilityRefinery2Icon.webp"
		},
		"unlockfacilitytier3": {
			"name": "Facilities (Tier 3)",
			"description": "Allows for the construction of specialized Facilities structures.",
			"icon": "game/Textures/UI/StructureIcons/FacilityRefinery2Icon.webp"
		}
	},
	"resources": {
		"ambulancec": {
			"name": "R-12 - “Salus” Ambulance",
			"description": "The “Salus” Ambulance is efficient at transporting Critically Wounded Soldiers and carrying medical supplies.",
			"icon": "game/Textures/UI/VehicleIcons/Ambulance.webp"
		},
		"ambulanceflamec": {
			"name": "R-12b - “Salva” Flame Truck",
			"description": "This simple variant of the “Salus” ambulance is fitted with a high-powered hose designed to quell wildfires.",
			"icon": "game/Textures/UI/VehicleIcons/AmbulanceFlameC.webp"
		},
		"ambulanceflamew": {
			"name": "Dunne Dousing Engine 3r",
			"description": "A simple variant of the Dunne Responder 3e that’s fitted with a high-powered hose designed to extinguish raging flames.",
			"icon": "game/Textures/UI/VehicleIcons/AmbulanceFlameW.webp"
		},
		"ambulancew": {
			"name": "Dunne Responder 3e",
			"description": "The Responder Ambulance is efficient at transporting Critically Wounded Soldiers and carrying medical supplies.",
			"icon": "game/Textures/UI/VehicleIcons/AmbulanceWar.webp"
		},
		"armoredcaratw": {
			"name": "O’Brien V.113 Gravekeeper",
			"description": "A slight variation of the V.110, the Gravekeeper comes fitted with an embedded Bonesaw launcher, transforming the humble armoured car into an effective indirect anti-armour vehicle.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarATWVehicleIcon.webp"
		},
		"armoredcarc": {
			"name": "T3 “Xiphos”",
			"description": "Colonial Armoured Cars are quick, well-rounded urban assault platforms. These anti-infantry vehicles are equipped with twin-barrelled machineguns.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarVehicleIcon.webp"
		},
		"armoredcarflamew": {
			"name": "O’Brien V.130 Wild Jack",
			"description": "While the Noble Firebrand Mk. XVII is a deadly flamethrower tank, a more efficient means of employing flame weapons was needed. Enter the Wild Jack. Named for the fiery idols made by children for Dead Harvest, the Wild Jack is a variation of the Highlander.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarFlameWarVehicleIcon.webp"
		},
		"armoredcarmobilityw": {
			"name": "O’Brien V.121 Highlander",
			"description": "Fitted with all-terrain treads, the Highlander brings significant all-terrain mobility and performs especially well in snowy and mountainous environments. ",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarMobilityWarVehicleIcon.webp"
		},
		"armoredcaroffensivec": {
			"name": "T5 “Percutio”",
			"description": "This “Xiphos” variant is fitted with a high-powered anti-tank turret in place of the twin machine gun platform.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarOffensiveCVehicleIcon.webp"
		},
		"armoredcaroffensivew": {
			"name": "O’Brien V.101 Freeman",
			"description": "This early O’Brien variant, the V.101 Freeman is fitted with a 360 degree ballistics cannon turret at the expense of top speed.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarOffensiveWVehicleIcon.webp"
		},
		"armoredcartwinc": {
			"name": "T8 “Gemini”",
			"description": "Fitted with twin RPG launchers, the T8 employs hit-and-run assaults against enemy structures and emplacements.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarTwinCItemIcon.webp"
		},
		"armoredcartwinw": {
			"name": "O’Brien v.190 Knave",
			"description": "One of Conor O’Brien’s best traits was his ability to modernize and make use of older technology in his designs. The v.190 Knave is the perfect example of this philosophy. Fitted with a modified, outdated twin-grenade launcher turret, the Knave is a surprising combination of speed and subterfuge that quickly routs the enemy, leaving them befuddled.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarTwinWIcon.webp"
		},
		"armoredcarw": {
			"name": "O’Brien V.110",
			"description": "Warden Armoured Cars are quick, well-rounded urban assault platforms. These anti-infantry vehicles are equipped with twin-barrelled machineguns.",
			"icon": "game/Textures/UI/VehicleIcons/ArmoredCarWarVehicleIcon.webp"
		},
		"atlargeammo": {
			"name": "94.5mm",
			"description": "A heavy anti-tank shell.",
			"icon": "game/Textures/UI/ATLargeAmmoIcon.webp"
		},
		"atrifletc": {
			"name": "“Typhon” ra.XII",
			"description": "This mounted anti-tank rifle boasts improved accuracy over its free-standing counterparts. The Typhon was specifically designed with shock absorption in mind, allowing for faster, more consistent firing patterns.",
			"icon": "game/Textures/UI/ItemIcons/ATRifleTCIcon.webp"
		},
		"atrpgtw": {
			"name": "Mounted Bonesaw MK.3",
			"description": "This variant of the Bonesaw MK.3 is specially designed for use with tripod mounts. This affords it with increased stability and maximum potential range.",
			"icon": "game/Textures/UI/ItemIcons/ATMortarWTripodItemIcon.webp"
		},
		"barbedwirematerials": {
			"name": "Barbed Wire",
			"description": "Used to construct Barbed Wire defenses.",
			"icon": "game/Textures/UI/ItemIcons/BarbedWireMaterialItemIcon.webp"
		},
		"battletankammo": {
			"name": "75mm",
			"description": "Standard payload for battle tanks.",
			"icon": "game/Textures/UI/ItemIcons/BattleTankAmmoItemIcon.webp"
		},
		"battletankatc": {
			"name": "Lance-25 “Hasta”",
			"description": "A heavy Lance variation, the 25, or “Hasta”, was employed in the first siege on Brightwall, a city now colloquially referred to as, “The Blemish”. Bombarded by heavy, armoured resistance in northern Veli, Colonial tank regiments requested a heavy vehicle with more effective search and destroy capabilities. Fitted with a front-facing 94.5mm cannon, the “Hasta” is a more than capable tank destroyer.",
			"icon": "game/Textures/UI/VehicleIcons/BattleTankATCIcon.webp"
		},
		"battletankc": {
			"name": "Lance-36",
			"description": "A heavy-duty Battle Tank with thick armour plating and destructive firepower. The Lance is fitted with a 75mm turret and a front-facing 12.7mm anti-infantry machine gun. The heavy armour limits top speed, but in exchange it can take a lot of punishment.",
			"icon": "game/Textures/UI/VehicleIcons/BattleTank.webp"
		},
		"battletankdefensivew": {
			"name": "Flood Juggernaut Mk. VII",
			"description": "The Juggernaut is a heavily armoured Flood variant fitted with a heavy flamethrower turret that fires an advanced adhesive propellant. Its shovel-like treads may hinder top speeds, but this beast is quite capable in extreme weather conditions.",
			"icon": "game/Textures/UI/VehicleIcons/BattleTankWarDefensiveVehicleIcon.webp"
		},
		"battletankw": {
			"name": "Flood Mk. I",
			"description": "A heavy-duty Battle Tank with thick armour plating and destructive firepower. The Flood is fitted with a 75mm turret and a front-facing 12.7mm anti-infantry machine gun. The heavy armour limits top speed, but in exchange it can take a lot of punishment.",
			"icon": "game/Textures/UI/VehicleIcons/BattleTankWar.webp"
		},
		"cloth": {
			"name": "Basic Materials",
			"description": "Resource used for building basic structures and producing items.",
			"icon": "game/Textures/UI/ItemIcons/BasicMaterialsIcon.webp"
		},
		"coal": {
			"name": "Coal",
			"description": "Chunks of raw Coal that can be refined into materials needed for production and power generation at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/CoalIcon.webp"
		},
		"components": {
			"name": "Components",
			"description": "Components that can be salvaged into Refined Materials at a Refinery",
			"icon": "game/Textures/UI/ItemIcons/ComponentsIcon.webp"
		},
		"concrete": {
			"name": "Concrete Materials",
			"description": "A concrete compound that is used to build heavily fortified structures.",
			"icon": "game/Textures/UI/ItemIcons/ConcreteBagIcon.webp"
		},
		"construction": {
			"name": "BMS - Universal Assembly Rig",
			"description": "A specialized vehicle designed by the Basset Motor Society used in the construction of large structures.",
			"icon": "game/Textures/UI/VehicleIcons/ConstructionVehicleIcon.webp"
		},
		"constructionutility": {
			"name": "BMS - Fabricator",
			"description": "An advanced variant of the Universal Assembly Rig, the BMS - Fabricator is fitted with a unique kit designed to handle advanced or specialized construction and excavation jobs.",
			"icon": "game/Textures/UI/VehicleIcons/AdvancedConstructionVehicleIcon.webp"
		},
		"destroyertankflamew": {
			"name": "Noble Firebrand Mk. XVII",
			"description": "In response to the Legion embarking on aggressive northern offensives, the Firebrand is designed to conflagrate and eradicate their garrisons with ease. Built using the aggressive frame of the Widow, the Firebrand is a pure force of nature when paired with a secondary armoured escort.",
			"icon": "game/Textures/UI/VehicleIcons/DestroyerTankFlameWIcon.webp"
		},
		"destroyertankw": {
			"name": "Noble Widow MK. XIV",
			"description": "This deadly tank turns predator into prey. A tank Destroyer, the Noble Widow specializes in ambush tactics, waiting for its quarry and striking with destructive high-velocity shells.",
			"icon": "game/Textures/UI/VehicleIcons/DestroyerTankWVehicleIcon.webp"
		},
		"diesel": {
			"name": "Diesel",
			"description": "Common fuel used to power all vehicles and resource mines.",
			"icon": "game/Slate/Images/ResourceFuelIcon.webp",
			"isLiquid": true
		},
		"emplacedatlargew": {
			"name": "Huber Starbreaker 94.5mm",
			"description": "Built to compliment other free-standing artillery pieces, the emplaced Huber Starbreaker launches 94.5mm shells over very long distances. A necessary tool for infantry to knock back armoured Colonial advances.",
			"icon": "game/Textures/UI/StructureIcons/EmplacedATLargeWIcon.webp"
		},
		"emplacedcannonlargec": {
			"name": "DAE 2a-1 “Ruptura”",
			"description": "Not to be outdone by its counterparts, the 2a-1 “Ruptura” is fitted with a 75mm cannon. Designed to aid in holding ground for longer durations, the “Ruptura” is a strong, efficient anti-armour tool.",
			"icon": "game/Textures/UI/StructureIcons/EmplacedCannonLargeC.webp"
		},
		"emplacedmultic": {
			"name": "DAE 3b-2 “Hades’ Net”",
			"description": "The DAE 3b-2 fires rockets over long distances from a safe, emplaced position. This unique weapon was given its name due to the screams heard across the battlefield during its first deployment, with some referring to the barrage as a “web of death.”",
			"icon": "game/Textures/UI/StructureIcons/EmplacedMultiCStructureIcon.webp"
		},
		"explosive": {
			"name": "Explosive Materials",
			"description": "Resource used for producing heavy explosive weapons.",
			"icon": "game/Textures/UI/ItemIcons/ExplosiveMaterialIcon.webp"
		},
		"facilitycoal1": {
			"name": "Coke",
			"description": "Refined Coal required for various Facility processes.",
			"icon": "game/Textures/UI/ItemIcons/CokeIcon.webp"
		},
		"facilitycomponents1": {
			"name": "Damaged Components",
			"description": "Damaged Components that can be salvaged into Components.",
			"icon": "game/Textures/UI/ItemIcons/ComponentsDamagedIcon.webp"
		},
		"facilitymaterials1": {
			"name": "Construction Materials",
			"description": "Metal beams needed to produce basic structures and vehicles at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/Facilities/ConstructionMaterialsIcon.webp"
		},
		"facilitymaterials2": {
			"name": "Processed Construction Materials",
			"description": "Refined metal bars needed to produce advanced structures and vehicles at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/Facilities/ProcessedConstructionMaterialsIcon.webp"
		},
		"facilitymaterials3": {
			"name": "Steel Construction Materials",
			"description": "Shaped, steel beams required for the most advanced processes at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/Facilities/SteelConstructionMaterialsIcon.webp"
		},
		"facilitymaterials4": {
			"name": "Assembly Materials I",
			"description": "Specialized metal sheets forged using Coal that are required to assemble advanced vehicles and equipment.",
			"icon": "game/Textures/UI/ItemIcons/AssemblyMaterials1Icon.webp"
		},
		"facilitymaterials5": {
			"name": "Assembly Materials II",
			"description": "Specialized metallic bars fortified with Petrol that are required to assemble advanced vehicles and equipment.",
			"icon": "game/Textures/UI/ItemIcons/AssemblyMaterials2Icon.webp"
		},
		"facilitymaterials6": {
			"name": "Assembly Materials III",
			"description": "Sulfur-enriched metallic bars that are required to assemble advanced vehicles and equipment.",
			"icon": "game/Textures/UI/ItemIcons/AssemblyMaterials3Icon.webp"
		},
		"facilitymaterials7": {
			"name": "Assembly Materials IV",
			"description": "High-end steel bars, fortified with Heavy Oil that are required to assemble advanced vehicles and equipment.",
			"icon": "game/Textures/UI/ItemIcons/AssemblyMaterials4Icon.webp"
		},
		"facilitymaterials8": {
			"name": "Assembly Materials V",
			"description": "Meticulously engineered alloy beams that are required to assemble advanced vehicles and equipment.",
			"icon": "game/Textures/UI/ItemIcons/AssemblyMaterials5Icon.webp"
		},
		"facilityoil1": {
			"name": "Heavy Oil",
			"description": "A high grade fuel that's refined from Oil. Used in a variety of applications at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/FacilityOil1Icon.webp",
			"isLiquid": true
		},
		"facilityoil2": {
			"name": "Enriched Oil",
			"description": "Oil that has been purified and enriched for advanced Facilities processes.",
			"icon": "game/Textures/UI/ItemIcons/FacilityOil2Icon.webp",
			"isLiquid": true
		},
		"fieldatc": {
			"name": "AA-2 \"Battering Ram\"",
			"description": "The \"Battering Ram\" is a mobile Anti-Tank field gun firing 68mm armour-piercing rounds.",
			"icon": "game/Textures/UI/VehicleIcons/FieldAntiTankColVehicleIcon.webp"
		},
		"fieldatdamagew": {
			"name": "Balfour Rampart 68mm",
			"description": "The Rampart is a powerful field cannon capable of dealing devastating damage to all but the heaviest of armoured vehicles while providing its crew with comprehensive ballistic shielding.",
			"icon": "game/Textures/UI/VehicleIcons/FieldCannonOffensiveWIcon.webp"
		},
		"fieldatlargec": {
			"name": "945g “Stygian Bolt”",
			"description": "The “Stygian Bolt” Heavy Field Gun is fitted with a monstrous 94.5mm cannon paired with heavy angled blast shielding. Inspired by the rows of narrow canyons in their homeland of the Lacrista province, Mesean engineers designed this field weapon to keep its crew as safe from ancillary fire as possible while maintaining forward momentum.",
			"icon": "game/Textures/UI/VehicleIcons/FieldATHeavyCIcon.webp"
		},
		"fieldatw": {
			"name": "Collins Cannon 68mm",
			"description": "The Collins Cannon is a mobile Anti-Tank field gun firing 68mm armour-piercing rounds.",
			"icon": "game/Textures/UI/VehicleIcons/FieldAntiTankWarVehicleIcon.webp"
		},
		"fieldcannondamagec": {
			"name": "40-45 “Smelter”",
			"description": "Armed with explosive 40mm rounds, the Smelter is perfect for engaging enemy armour. The frontal blast shielding provides operators with ample cover during heated skirmishes.",
			"icon": "game/Textures/UI/VehicleIcons/FieldATOffensiveCIcon.webp"
		},
		"fieldcannonlargew": {
			"name": "Balfour Stockade 75mm",
			"description": "This robust field cannon not only allows infantry to fire heavy 75mm shells with ease, but it provides state-of-the-art curved blast shielding for maximum protection from crossfire.",
			"icon": "game/Textures/UI/VehicleIcons/FieldCannonHeavyWIcon.webp"
		},
		"fieldcannonw": {
			"name": "Balfour Wolfhound 40mm",
			"description": "This destructive short-ranged cannon is designed for direct engagement with enemy fortifications. The Wolfhound is fitted with reinforced shielding and a 40mm barrel. ",
			"icon": "game/Textures/UI/VehicleIcons/FieldCannonWVehicleIcon.webp"
		},
		"fieldmultiw": {
			"name": "Rycker 4/3-F Wasp Nest",
			"description": "Lyle Rycker first built a prototype of the Wasp Nest as a test for his rack mounted rocket batteries that would eventually find their way onto armoured vehicles. Capable of firing twelve compact rockets in quick succession, the Wasp Nest became a quick favourite of the Warden infantry testing it, so an official design was requisitioned.",
			"icon": "game/Textures/UI/VehicleIcons/FieldMultiWItemIcon.webp"
		},
		"firerocketammo": {
			"name": "4C-Fire Rocket",
			"description": "Standard calibre rocket with an incendiary explosion. Will ignite objects near impact.",
			"icon": "game/Textures/UI/ItemIcons/FlameRocketAmmoIcon.webp"
		},
		"flameammo": {
			"name": "Flame Ammo",
			"description": "A drum containing fuel for use with flame weapons.",
			"icon": "game/Textures/UI/ItemIcons/FlameAmmoIcon.webp"
		},
		"grenadelaunchertc": {
			"name": "Mounted Fissura gd.I",
			"description": "Capable of firing different grenades, quickly and at long range, the Fissura gd.I is mobile enough for easy transport, while increasing the effectiveness of infantry ordinance. ",
			"icon": "game/Textures/UI/ItemIcons/GrenadeLauncherTCIcon.webp"
		},
		"groundmaterials": {
			"name": "Gravel",
			"description": "Resource used for building Roads and Foundations.",
			"icon": "game/Textures/UI/ItemIcons/GroundMaterialsIcon.webp"
		},
		"halftrackartilleryc": {
			"name": "HH-d “Peltast”",
			"description": "This “Javelin” variant is fitted with a 360 degree mortar platform, designed to support infantry in frontline operations.",
			"icon": "game/Textures/UI/VehicleIcons/HalfTrackArtilleryCIcon.webp"
		},
		"halftrackc": {
			"name": "HH-a “Javelin”",
			"description": "Designed for escort missions and to support infantry operations, the HH-a class “Javelin” Half-Track is an armoured, versatile all-terrain vehicle that can be equipped with a variety of mounted weapons.",
			"icon": "game/Textures/UI/VehicleIcons/HalfTrackColVehicleIcon.webp"
		},
		"halftrackdefensivec": {
			"name": "HH-b “Hoplite”",
			"description": "With reinforced armour at the expense of speed, the \"Hoplite\" is a formidable force in the heat of combat.",
			"icon": "game/Textures/UI/VehicleIcons/HalfTrackColHeavyArmorVehicleIcon.webp"
		},
		"halftrackmultiw": {
			"name": "Niska-Rycker Mk. IX Skycaller",
			"description": "A first of its kind, the Skycaller is a variation of the Niska Motor Carriage with a Rycker designed rocket battery fitted in the rear bed. This unique armoured vehicle quickly fires rockets over long distances with ease, and can be rearmed and relocated at the drop of a hat. The Skycaller is the deadly result of combined Nevish and Caoivish engineering.",
			"icon": "game/Textures/UI/VehicleIcons/HalftrackMultiWIcon.webp"
		},
		"halftrackoffensivew": {
			"name": "Niska Mk. II Blinder",
			"description": "Fitted with a heavy-duty anti-tank gun, the Blinder is capable of punching through all but the most tempered of alloys.",
			"icon": "game/Textures/UI/VehicleIcons/HalfTrackOffensiveWarVehicleIcon.webp"
		},
		"halftrackw": {
			"name": "Niska Mk. I Gun Motor Carriage",
			"description": "Designed for escort missions and to support infantry operations, the Niska Gun Motor Carriage Half-Track is an armoured, versatile all-terrain vehicle that can be equipped with a variety of mounted weapons.",
			"icon": "game/Textures/UI/VehicleIcons/HalfTrackWarVehicleIcon.webp"
		},
		"harvester": {
			"name": "BMS - Scrap Hauler",
			"description": "The Scrap Hauler, designed by the Bassett Motor Society is a heavy-duty piece of machinery designed to reduce scrap metal and other materials into usable, raw resources. Scrap Haulers are often used to extract battlefield resources following skirmishes.",
			"icon": "game/Textures/UI/VehicleIcons/Harvester.webp"
		},
		"heavyartilleryammo": {
			"name": "150mm",
			"description": "Payload for heavy artillery weapons.",
			"icon": "game/Textures/UI/ItemIcons/HeavyArtilleryAmmoItemIcon.webp"
		},
		"heavyexplosive": {
			"name": "Heavy Explosive Materials",
			"description": "Resource used for producing heavy explosive weapons.",
			"icon": "game/Textures/UI/ItemIcons/HeavyExplosiveMaterialIcon.webp"
		},
		"herocketammo": {
			"name": "3C-High Explosive Rocket",
			"description": "Standard calibre rocket with a heavy explosive payload. Chance to ignite objects near impact.",
			"icon": "game/Textures/UI/ItemIcons/HERocketAmmoIcon.webp"
		},
		"isgtc": {
			"name": "Daucus isg.III",
			"description": "This heavy infantry cannon requires a tripod for stability. The Daucus is designed to give infantry a foothold against enemy vehicles and light fortifications or established fortified garrisons.",
			"icon": "game/Textures/UI/ItemIcons/InfantrySupportGunItemIcon.webp"
		},
		"landingcraftc": {
			"name": "AB-8 “Acheron”",
			"description": "The \"Acheron\" is an armoured amphibious vehicle designed for carrying troops across large bodies of water to aid in coordinated beach landings and flanking assaults. ",
			"icon": "game/Textures/UI/VehicleIcons/LandingCraftVehicleIcon.webp"
		},
		"landingcraftoffensivec": {
			"name": "AB-11 “Doru”",
			"description": "With its mounted machinegun, the \"Doru\" is the perfect addition to any shoreline assault. ",
			"icon": "game/Textures/UI/VehicleIcons/LandingCraftOffensiveVehicleIcon.webp"
		},
		"lightartilleryammo": {
			"name": "120mm",
			"description": "Payload for light artillery weapons.",
			"icon": "game/Textures/UI/ItemIcons/LightArtilleryAmmoItemIcon.webp"
		},
		"lighttank2infantryc": {
			"name": "HC-2 “Scorpion”",
			"description": "The “Scorpion” HC-class tank is a moderately armoured infantry support vehicle with twin, high-powered heavy machine guns and short-range radios for improved intelligence support. In addition, exterior seating is available for infantry. ",
			"icon": "game/Textures/UI/VehicleIcons/LightTank2InfantryCVehicleIcon.webp"
		},
		"lighttankartilleryw": {
			"name": "Devitt-Caine Mk. IV MMR",
			"description": "A modified Devitt fitted with a specialized Caine mortar turret at the expense of top speed.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankArtilleryWar.webp"
		},
		"lighttankc": {
			"name": "H-5 \"Hatchet\"",
			"description": "A highly maneuverable lightweight tank. Designed for urban environments, the “Hatchet” is fitted with a 40mm cannon.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankColVehicleIcon.webp"
		},
		"lighttankdefensivew": {
			"name": "Devitt Ironhide Mk. IV ",
			"description": "The Ironhide Light Tank is similar to the Mk. III but reinforced with plates of heavy steel at the expense of speed and maneuverability.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankWarDefensiveVehicleIcon.webp"
		},
		"lighttankflamec": {
			"name": "H-19 “Vulcan”",
			"description": "This modified “Hatchet” features a reinforced fuel cell fixed to its rear alongside a flamethrower turret. This light tank can launch litres of burning fuel a fair distance, while its crew remains protected behind light armour plating.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankFlameCIcon.webp"
		},
		"lighttankmobilityc": {
			"name": "H-8 “Kranesca”",
			"description": "The “Kranesca” Light Tank is fitted with an overpowered engine and a reinforced chassis, capable of boosting its top speed at the expense of overall acceleration and maneuverability.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankColMobilityVehicleIcon.webp"
		},
		"lighttankoffensivec": {
			"name": "H-10 “Pelekys”",
			"description": "The “Pelekys” H-class light tank is heavily modified with an open top chassis and equipped with a devastating long-range anti-tank cannon.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankOffensiveCVehicleIcon.webp"
		},
		"lighttankw": {
			"name": "Devitt Mk. III",
			"description": "A highly maneuverable lightweight tank. Designed for urban environments, the Devitt is fitted with a 40mm cannon.",
			"icon": "game/Textures/UI/VehicleIcons/LightTankWarVehicleIcon.webp"
		},
		"lrartilleryammo": {
			"name": "300mm",
			"description": "Standard payload used with Storm Cannons.",
			"icon": "game/Textures/UI/ItemIcons/LRArtilleryAmmoItemIcon.webp"
		},
		"maintenancesupplies": {
			"name": "Maintenance Supplies",
			"description": "Supplies for maintaining structures. Store at Bases or Maintenance Tunnels to prevent decay on surrounding structures.",
			"icon": "game/Textures/UI/ItemIcons/MaintenanceSuppliesIcon.webp"
		},
		"materialplatform": {
			"name": "Material Pallet",
			"description": "A material pallet.",
			"icon": "game/Textures/UI/ItemIcons/MaterialPlatformItemIcon.webp"
		},
		"mediumtank2c": {
			"name": "86K-a “Bardiche”",
			"description": "Unlike the 85-series, the \"Bardiche\" sports a heavier, more durable build and is fitted with a coaxial heavy machinegun along with a powerful, short-barrelled 68mm turret. Modern Kraunian engineering allows for a fast reload, making it an ideal tool to combat enemy armour.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTank2CIcon.webp"
		},
		"mediumtank2indirectw": {
			"name": "Gallagher Thornfall Mk. VI",
			"description": "Armed with a rack of Bonesaw mortar launchers, the Thornfall is designed to launch an indirect mechanized assault on enemy armour. This unique vehicle supports an allied assault and cannot withstand large amounts of punishment.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTank2IndirectWIcon.webp"
		},
		"mediumtank2multiw": {
			"name": "Gallagher Highwayman Mk. III",
			"description": "Colm Gallagher’s engineers designed a variation of the Outlaw that features an independently rotating MG turret sitting atop the main armament of twin anti-tank cannons. What it lacks in raw firepower compared to its older sibling, the Highwayman more than makes up for it with versatility.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTank2MultiWIcon.webp"
		},
		"mediumtank2rangew": {
			"name": "Gallagher Outlaw Mk. II",
			"description": "Originally designed in response to increasing swarms of Mesean armour, the Outlaw is an exceptionally capable medium tank armed with a long-range 40mm turret and includes a built-in storm rifle support position.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTank2RangeWIcon.webp"
		},
		"mediumtank2twinc": {
			"name": "86K-c “Ranseur”",
			"description": "This evolution of the “Bardiche” is fitted quad-mounted RPG launchers paired with a high-velocity 12.7mm cannon. The “Ranseur” indicates progress in Kraunian design as they continue to leverage outdated equipment to create deadly, modern armour.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTank2TwinCVehicleIcon.webp"
		},
		"mediumtankatw": {
			"name": "Silverhand Lordscar - Mk. X",
			"description": "A cut down variation of the Silverhand Assault Tank that sacrifices armour and protection in favour of a high-powered 94.5mm cannon. This open-top weapon platform is uniquely designed to intercept enemy armour before they’re given time to retaliate. Its moniker is a tribute to the maiming of the great king the Silverhand is named for; while his title was stripped, and his pride damaged, his rage was never quelled.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTankATWIcon.webp"
		},
		"mediumtankc": {
			"name": "85K-b “Falchion”",
			"description": "Designed for mass-production in Kraunia, this assault tank features a modular turret system for maximum versatility. The “Falchion” class features a powerful if understated, 40mm cannon.",
			"icon": "game/Textures/UI/VehicleIcons/ColonialMediumTankIcon.webp"
		},
		"mediumtanklargec": {
			"name": "85V-g \"Talos\"",
			"description": "The \"Talos\" is a Velian modification to the 85-series, fitted with an oversized 75mm cannon. Knowing that such a heavy cannon would likely not be suitable, the engineers built it to disperse weight in such a manner that the 85-series chassis could bear it.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTankLargeCIcon.webp"
		},
		"mediumtankoffensivec": {
			"name": "85K-a “Spatha”",
			"description": "The “Spatha” assault tank features a unique and destructive 40mm turret that fires high-velocity shells. This specialized turret is not as well suited to mass-production as its more refined counterpart, the “Falchion.”",
			"icon": "game/Textures/UI/VehicleIcons/ColonialMediumTankOffensive.webp"
		},
		"mediumtanksiegew": {
			"name": "Silverhand Chieftain - Mk. VI",
			"description": "The Chieftan assault tank is fitted with asymmetrical armaments, including a 250mm mortar cannon and a twin-barrelled 12.7mm turret.",
			"icon": "game/Textures/UI/VehicleIcons/MediumTankSiegeWVehicleIcon.webp"
		},
		"mediumtankw": {
			"name": "Silverhand - Mk. IV",
			"description": "The Silverhand assault tank is fitted with destructive dual-barrel armaments, and heavy frontal and rear armour. Its 68mm frontal cannon is paired with a lighter 40mm turret. ",
			"icon": "game/Textures/UI/VehicleIcons/WardenMediumTankIcon.webp"
		},
		"metal": {
			"name": "Salvage",
			"description": "Salvage that can be recycled into other resources at a Refinery",
			"icon": "game/Textures/UI/ItemIcons/SalvageIcon.webp"
		},
		"metalbeammaterials": {
			"name": "Metal Beam",
			"description": "Used to construct Metal Beam defenses.",
			"icon": "game/Textures/UI/ItemIcons/MetalBeamMaterialItemIcon.webp"
		},
		"mgtc": {
			"name": "Lamentum mm.IV",
			"description": "Built on the bones of the first automatic weapons introduced to the Legion, the “Lamentum” mm.IV is still quite an intimidating force to encounter on the battlefield. Boasting a large magazine and impressive active range, this mounted machinegun excels at laying down consistent suppressive fire.",
			"icon": "game/Textures/UI/ItemIcons/HeavyMachineGunIcon.webp"
		},
		"mgtw": {
			"name": "Malone Ratcatcher MK.1",
			"description": "Early iterations of this machinegun were built to be emplaced in bunkers and on the decks of lightly armed warships, the Ratcatcher is Harvey Malone’s first freely mountable infantry weapon designed for field use. Just like its predecessors, this heavy weapon suppresses enemy soldiers with unmatched efficiency. ",
			"icon": "game/Textures/UI/ItemIcons/MGHeavyTWItemIcon.webp"
		},
		"mortartankammo": {
			"name": "250mm",
			"description": "A shell that is launched over short distances by a spigot mortar.",
			"icon": "game/Textures/UI/ItemIcons/MortarTankIcon.webp"
		},
		"mortartankc": {
			"name": "HC-7 \"Ballista\"",
			"description": "The HC-Class “Ballista” is a heavy tank designed to obliterate opposition defenses with its 250mm Hades Mortar Cannon.",
			"icon": "game/Textures/UI/VehicleIcons/MortarTankVehicleIcon.webp"
		},
		"motorcyclec": {
			"name": "03MM “Caster”",
			"description": "A motorcycle and sidecar used to patrol large areas. Speed can be boosted at the cost of additional fuel.",
			"icon": "game/Textures/UI/VehicleIcons/MotorcycleVehicleIcon.webp"
		},
		"motorcycleoffensivec": {
			"name": "00MS “Stinger”",
			"description": "The cab of this Motorcycle is fitted with an LMG for fast-response hit and run assaults.",
			"icon": "game/Textures/UI/VehicleIcons/MotorcycleOffensiveVehicleIcon.webp"
		},
		"oil": {
			"name": "Oil",
			"description": "A raw viscous liquid that must be refined into fuel at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/Facilities/OilIcon.webp",
			"isLiquid": true
		},
		"oilcan": {
			"name": "Oil (Canned)",
			"description": "A raw viscous liquid that must be refined into fuel at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/Facilities/OilIcon.webp"
		},
		"petrol": {
			"name": "Petrol",
			"description": "A medium grade fuel that's refined from Oil. Used as a higher end fuel for vehicles and in various applications at Facilities.",
			"icon": "game/Textures/UI/ItemIcons/RefinedFuelIcon.webp",
			"isLiquid": true
		},
		"pipematerials": {
			"name": "Pipe",
			"description": "Used to construct various types of pipelines for transporting liquids.",
			"icon": "game/Textures/UI/StructureIcons/EngineRoomPipeIcon.webp"
		},
		"rpgtw": {
			"name": "Cutler Foebreaker",
			"description": "This unique dual-barrelled RPG launcher can fire two RPG shells in relatively quick succession. This increase in firepower makes it nearly impossible for a single soldier to operate without the support of a sturdy mount.",
			"icon": "game/Textures/UI/ItemIcons/ATRPGTWIcon.webp"
		},
		"sandbagmaterials": {
			"name": "Sandbag",
			"description": "Used to construct Sandbag defenses.",
			"icon": "game/Textures/UI/ItemIcons/SandbagMaterialItemIcon.webp"
		},
		"scouttankoffensivew": {
			"name": "King Gallant Mk. II",
			"description": "A heavily armoured variant of the King Spire, the Gallant Mk. II boasts a weighty 30mm cannon at the cost of top speed.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutTankOffensiveWIcon.webp"
		},
		"scouttankw": {
			"name": "King Spire Mk. I",
			"description": "This small tank has been recently recommissioned to the Warden arsenal. It boasts high maneuverability and an antenna that allows for long-range communications during high-stakes recon operations.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutTankWIcon.webp"
		},
		"scoutvehiclemobilityc": {
			"name": "UV-05a “Argonaut”",
			"description": "This stripped down Light Utility Vehicle provides extra seating for a small crew to engage in hit and run tactics.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleMobilityVehicleIcon.webp"
		},
		"scoutvehicleoffensivec": {
			"name": "UV-24 “Icarus”",
			"description": "This RPG-mounted Light Utility Vehicle provides a heavy-duty weapons platform with superior speed. Perfectly suited for assaulting enemy structures and vehicles, or supporting an armoured assault.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleOffensiveVehicleIcon.webp"
		},
		"scoutvehicleoffensivew": {
			"name": "Drummond Spitfire 100d",
			"description": "This LMG-mounted Light Utility Vehicle provides a heavy-duty weapons platform with superior speed. Perfectly suited for supporting flanking infantry or an armoured assault.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleOffensiveWarVehicleIcon.webp"
		},
		"scoutvehicleutilityc": {
			"name": "UV-5c “Odyssey”",
			"description": "This simple, modified Utility Vehicle is fitted with a reinforced hatch to provide one crew member with increased visibility for intense recon operations.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleUtilityCVehicleIcon.webp"
		},
		"scoutvehicleutilityw": {
			"name": "Drummond Loscann 55c",
			"description": "This amphibious Light Utility Vehicle has been heavily modified to cross rivers and lakes with ease. Venturing out into the open sea is ill-advised, however.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleAmphibiousWarVehicleIcon.webp"
		},
		"scoutvehiclew": {
			"name": "Drummond 100a",
			"description": "A multipurpose off-road Warden vehicle that can scout nearby targets.",
			"icon": "game/Textures/UI/VehicleIcons/ScoutVehicleWarVehicleIcon.webp"
		},
		"smalltraindump": {
			"name": "BMS Railtruck",
			"description": "A small gauge container car for transporting raw materials. ",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeResourceCarVehicleIcon.webp"
		},
		"smalltrainengine": {
			"name": "BMS Mineseeker",
			"description": "The Mineseeker is the Bassett Motor Society’s mechanized mule. This small 0-4-0 locomotive can haul tonnes of weight over short distances with little overhead. Ideal for a mining operation or short-range supply chains. ",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeEngineVehicleIcon.webp"
		},
		"smalltrainfuelcontainer": {
			"name": "BMS Tinderbox",
			"description": "The Tinderbox is a simple car used for transporting liquids between facilities.",
			"icon": "game/Textures/UI/VehicleIcons/SmallTrainFuelContainerIcon.webp"
		},
		"smalltrainresourceplatform": {
			"name": "BMS Linerunner",
			"description": "A low profile flatbed car for transporting large resources and munitions over short distances on small gauge tracks.",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeFlatbedCarVehicleIcon.webp"
		},
		"sulfur": {
			"name": "Sulfur",
			"description": "Sulfur that can be refined into Heavy Explosive Materials at a Refinery",
			"icon": "game/Textures/UI/ItemIcons/SulfurIcon.webp"
		},
		"supertankc": {
			"name": "O-75b \"Ares\"",
			"description": "Armed with a dual 75mm turret, what the “Ares” lacks in speed and versatility, it more than makes up for with raw destructive power. Development of the “Ares” was fraught with strife, and its history is intertwined with a period of several riots erupting on the streets of Dimiourg. Rebels commandeered the first “Ares” Prototype, the O-75a, and turned it against Colonial forces in the region, ultimately leading to its destruction—albeit not without great effort. This event wove the great behemoth into the tapestry of Colonial legend.",
			"icon": "game/Textures/UI/VehicleIcons/SuperTankCtemIcon.webp"
		},
		"supertankw": {
			"name": "Cullen Predator Mk. III",
			"description": "This gargantuan beast is the brainchild of Gray Cullen. Once thought impossible, the Predator was Cullen’s idea of how a great ship might operate on land. It boasts two sets of quad-barrelled grenade launches and a heavy-duty 94.5mm forward facing cannon. While limitations of ground-based travel posed certain restrictions on the scope of the project, Cullen wasn’t deterred and made necessary adjustments to meet his vision of the ideal land ship.",
			"icon": "game/Textures/UI/VehicleIcons/SuperTankWVehicleIcon.webp"
		},
		"tankettec": {
			"name": "T12 “Actaeon” Tankette",
			"description": "This complete overhaul of the T3 Armoured Car is reinforced with tank armour. While these extra defenses lower the T12’s overall speed and handling, the addition of treads provide increased performance in less than ideal terrain.",
			"icon": "game/Textures/UI/VehicleIcons/TanketteCVehicleIcon.webp"
		},
		"tanketteflamec": {
			"name": "T14 “Vesta” Tankette",
			"description": "The first T-class tankette to utilize this sturdier frame and versatile treads, the Vesta also represents the Velian’s first foray into fire weapons. The “Vesta” boasts a light flame turret and ample storage for the additional fuel supply required.",
			"icon": "game/Textures/UI/VehicleIcons/TanketteFlameCIcon.webp"
		},
		"tanketteoffensivec": {
			"name": "T20 “Ixion” Tankette",
			"description": "A bombastic variant of the T12 Tankette, the “Ixion” provides its crew with more support and a mounted Infantry Support Gun. Added weight from the armour results in reduced overall speed.",
			"icon": "game/Textures/UI/VehicleIcons/TanketteOffensiveCVehicleIcon.webp"
		},
		"traincaboose": {
			"name": "BMS Roadhouse",
			"description": "A simple caboose that allows rail crews to maintain tracks more efficiently.",
			"icon": "game/Textures/UI/VehicleIcons/TrainCabooseItemIcon.webp"
		},
		"traincoal": {
			"name": "BMS Rockhold",
			"description": "A container car for transporting coal to refuel trains over long-distance trips. ",
			"icon": "game/Textures/UI/VehicleIcons/TrainCoalCarVehicleIcon.webp"
		},
		"traincombatcarc": {
			"name": "Aegis Steelbreaker K5a",
			"description": "Known across the colonies as King of the Rails, this heavily armoured train car is designed to protect and exert dominance over contested rail lines, especially when transporting supplies into contested territory as well as safely transporting infantry. This armoured beast boasts a forward facing cannon, as well as heavy lateral guns.",
			"icon": "game/Textures/UI/VehicleIcons/CombatCarCVehicleIcon.webp"
		},
		"traincombatcarw": {
			"name": "O’Brien Warsmith v.215",
			"description": "In his later years, O’Brien nearly died in an attack on a military passenger train while travelling to Whedon’s Row. In response, he put his team to work designing not only an infantry car that offered powerful protection to any locomotive, but one that just the sight of it would run off all but the most committed of attackers—Namely its thick armour plating and powerful twin turrets. ",
			"icon": "game/Textures/UI/VehicleIcons/CombatCarWVehicleIcon.webp"
		},
		"trainengine": {
			"name": "BMS Black Bolt",
			"description": "One of the most storied mass-market 0-6-2 locomotives engineered by the Bassett Motor Society, this coal-powered industrial train engine is reliable, tested, and incredibly durable. The Black Bolt’s legacy is unmatched having aided the Bassett Motor Society in supplying countries across the globe.",
			"icon": "game/Textures/UI/VehicleIcons/TrainEngineVehicleIcon.webp"
		},
		"trainflatbed": {
			"name": "BMS Longrider",
			"description": "A flatbed car for transporting large resources and munitions by train over long-distances. ",
			"icon": "game/Textures/UI/VehicleIcons/TrainCarVehicleIcon.webp"
		},
		"traininfantry": {
			"name": "BMS Holdout",
			"description": "An armoured train car with a mounted machinegun position for transporting infantry safely over long distances.",
			"icon": "game/Textures/UI/VehicleIcons/InfantryCarVehicleIcon.webp"
		},
		"trainlrartillery": {
			"name": "Tempest Cannon RA-2",
			"description": "All the power of a stationary Storm Cannon, but easily relocated via rails. This devastating cannon is capable of leveling enemy fortifications at very large distances.",
			"icon": "game/Textures/UI/VehicleIcons/TrainLRArtilleryVehicleIcon.webp"
		},
		"tripod": {
			"name": "Tripod",
			"description": "A mount point for deployable infantry weapons and equipment.",
			"icon": "game/Textures/UI/ItemIcons/DeployableTripodItemIcon.webp"
		},
		"truckc": {
			"name": "R-1 Hauler",
			"description": "A heavy-duty Colonial truck used to mobilize troops and supplies.",
			"icon": "game/Textures/UI/VehicleIcons/TruckVehicleIcon.webp"
		},
		"truckdefensivew": {
			"name": "Dunne Leatherback 2a",
			"description": "A heavy, reinforced Dunne transport. Fitted with a heavier frame, the Leatherback is capable of enduring more punishment at the cost of initial acceleration. ",
			"icon": "game/Textures/UI/VehicleIcons/TruckDefensiveWIcon.webp"
		},
		"truckmobilityc": {
			"name": "R-5b “Sisyphus” Hauler",
			"description": "This variation of the standard R-5 Hauler is fitted with an improved suspension and axle system resulting in better overall handling. However, these improvements may not hold up under severe weather conditions.",
			"icon": "game/Textures/UI/VehicleIcons/TruckMobilityCVehicleIcon.webp"
		},
		"truckmobilityw": {
			"name": "Dunne Landrunner 12c",
			"description": "This standard Truck is fitted with rugged off-road treads, allowing for more efficient movement on rough terrain and conditions at the expense of maximum speed.",
			"icon": "game/Textures/UI/VehicleIcons/TruckMobilityWarVehicleIcon.webp"
		},
		"truckmultic": {
			"name": "R-17 “Retiarius” Skirmisher",
			"description": "A truck fitted with an advanced rocket propulsion rack, the “Retiarius” webs the sky with deadly, screeching rockets shot at a high frequency over long distances. Holds sixteen rockets.",
			"icon": "game/Textures/UI/VehicleIcons/TruckMultiCIcon.webp"
		},
		"truckoffensivec": {
			"name": "R-9 “Speartip” Escort",
			"description": "This standard Truck is fitted with Light Machinegun in place of the passenger seat. It’s well suited as an escort for convoys or lightly armoured operations.",
			"icon": "game/Textures/UI/VehicleIcons/TruckOffensiveVehicleIcon.webp"
		},
		"truckw": {
			"name": "Dunne Transport",
			"description": "A heavy-duty Warden truck used to mobilize troops and supplies.",
			"icon": "game/Textures/UI/VehicleIcons/TruckWarVehicleIcon.webp"
		},
		"water": {
			"name": "Water",
			"description": "Water... in a can!",
			"icon": "game/Textures/UI/ItemIcons/WaterIcon.webp",
			"isLiquid": true
		},
		"watercan": {
			"name": "Water (Canned)",
			"description": "Water... in a can!",
			"icon": "game/Textures/UI/ItemIcons/WaterIcon.webp"
		},
		"wood": {
			"name": "Refined Materials",
			"description": "Resource used for building advanced structures and producing special items.",
			"icon": "game/Textures/UI/ItemIcons/RefinedMaterialsIcon.webp"
		}
	},
	"weapons": {
		"hegrenade": {
			"name": "Mammon 91-b",
			"description": "Mammon 91-b",
			"icon": "game/Textures/UI/ItemIcons/HEGrenadeItemIcon.webp",
			"codeName": "hegrenade",
			"alias": "HE Grenade",
			"damageType": {
				"name": "Explosive",
				"multipliers": {
					"t2": 0.95,
					"t3": 0.95
				},
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			},
			"damage": 240
		},
		"helaunchedgrenade": {
			"name": "Tremola Grenade GPb-1",
			"description": "Tremola Grenade GPb-1",
			"icon": "game/Textures/UI/ItemIcons/HELaunchedGrenadeItemIcon.webp",
			"codeName": "helaunchedgrenade",
			"alias": "HE Launcher",
			"damageType": {
				"name": "Explosive",
				"multipliers": {
					"t2": 0.95,
					"t3": 0.95
				},
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			},
			"damage": 400
		},
		"minitankammo": {
			"name": "30mm",
			"description": "30mm",
			"icon": "game/Textures/UI/ItemIcons/MiniTankAmmoItemIcon.webp",
			"codeName": "minitankammo",
			"damageType": {
				"name": "Explosive",
				"multipliers": {
					"t2": 0.99,
					"t3": 0.99
				},
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			},
			"damage": 400
		},
		"rpgammo": {
			"name": "RPG",
			"description": "RPG",
			"icon": "game/Textures/UI/ItemIcons/RpgAmmoItemIcon.webp",
			"codeName": "rpgammo",
			"damageType": {
				"name": "Explosive",
				"multipliers": {
					"t3": 0.99
				},
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			},
			"damage": 550
		},
		"lighttankammo": {
			"name": "40mm",
			"description": "40mm",
			"icon": "game/Textures/UI/ItemIcons/LightTankAmmoItemIcon.webp",
			"codeName": "lighttankammo",
			"damage": 600,
			"damageType": {
				"name": "Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"battletankammo": {
			"name": "75mm",
			"description": "75mm",
			"icon": "game/Textures/UI/ItemIcons/BattleTankAmmoItemIcon.webp",
			"codeName": "battletankammo",
			"damage": 1750,
			"damageType": {
				"name": "Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"atammo": {
			"name": "68mm",
			"description": "68mm",
			"icon": "game/Textures/UI/ItemIcons/ATAmmoIcon.webp",
			"codeName": "atammo",
			"damage": 600,
			"damageType": {
				"name": "Armour Piercing",
				"profiles": {
					"t1": 0.25,
					"t2": 0.25,
					"t3": 0.06999999999999995
				}
			}
		},
		"atlargeammo": {
			"name": "94.5mm",
			"description": "94.5mm",
			"icon": "game/Textures/UI/ATLargeAmmoIcon.webp",
			"codeName": "atlargeammo",
			"damage": 1750,
			"damageType": {
				"name": "Armour Piercing",
				"profiles": {
					"t1": 0.25,
					"t2": 0.25,
					"t3": 0.06999999999999995
				}
			}
		},
		"mortarammo": {
			"name": "Mortar Shell",
			"description": "Mortar Shell",
			"icon": "game/Textures/UI/ItemIcons/MortarAmmoIcon.webp",
			"codeName": "mortarammo",
			"alias": "Mortar",
			"damage": 300,
			"damageType": {
				"name": "High Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"lightartilleryammo": {
			"name": "120mm",
			"description": "120mm",
			"icon": "game/Textures/UI/ItemIcons/LightArtilleryAmmoItemIcon.webp",
			"codeName": "lightartilleryammo",
			"damage": 400,
			"damageType": {
				"name": "High Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"heavyartilleryammo": {
			"name": "150mm",
			"description": "150mm",
			"icon": "game/Textures/UI/ItemIcons/HeavyArtilleryAmmoItemIcon.webp",
			"codeName": "heavyartilleryammo",
			"damage": 900,
			"damageType": {
				"name": "High Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"herocketammo": {
			"name": "3C-High Explosive Rocket",
			"description": "3C-High Explosive Rocket",
			"icon": "game/Textures/UI/ItemIcons/HERocketAmmoIcon.webp",
			"codeName": "herocketammo",
			"alias": "Rocket",
			"damage": 300,
			"damageType": {
				"name": "Incendiary",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"firerocketammo": {
			"name": "4C-Fire Rocket",
			"description": "4C-Fire Rocket",
			"icon": "game/Textures/UI/ItemIcons/FlameRocketAmmoIcon.webp",
			"codeName": "firerocketammo",
			"alias": "Fire Rocket",
			"damage": 145,
			"damageType": {
				"name": "Incendiary",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"explosivelightc": {
			"name": "Hydra’s Whisper",
			"description": "Hydra’s Whisper",
			"icon": "game/Textures/UI/Menus/BangaloreItemIcon.webp",
			"codeName": "explosivelightc",
			"alias": "Hydras",
			"damage": 350,
			"damageType": {
				"name": "Demolition",
				"profiles": {
					"t1": 1,
					"t2": 1,
					"t3": 1
				}
			}
		},
		"mortartankammo": {
			"name": "250mm",
			"description": "250mm",
			"icon": "game/Textures/UI/ItemIcons/MortarTankIcon.webp",
			"codeName": "mortartankammo",
			"damage": 1000,
			"damageType": {
				"name": "Demolition",
				"profiles": {
					"t1": 1,
					"t2": 1,
					"t3": 1
				}
			}
		},
		"lrartilleryammo": {
			"name": "300mm",
			"description": "300mm",
			"icon": "game/Textures/UI/ItemIcons/LRArtilleryAmmoItemIcon.webp",
			"codeName": "lrartilleryammo",
			"damage": 1500,
			"damageType": {
				"name": "High Explosive",
				"profiles": {
					"t1": 0.75,
					"t2": 0.75,
					"t3": 0.25
				}
			}
		},
		"satchelchargew": {
			"name": "Alligator Charge",
			"description": "Alligator Charge",
			"icon": "game/Textures/UI/StructureIcons/SatchelCharge.webp",
			"codeName": "satchelchargew",
			"alias": "Satchel",
			"damage": 300,
			"damageType": {
				"name": "Demolition",
				"profiles": {
					"t1": 1,
					"t2": 1,
					"t3": 1
				}
			}
		},
		"satchelcharget": {
			"name": "Havoc Charge Detonator",
			"description": "Havoc Charge Detonator",
			"icon": "game/Textures/UI/ItemIcons/SatchelChargeTIcon.webp",
			"codeName": "satchelcharget",
			"alias": "Havoc",
			"damage": 1850,
			"damageType": {
				"name": "Demolition",
				"profiles": {
					"t1": 1,
					"t2": 1,
					"t3": 1
				}
			}
		}
	},
	"buildings": {
		"ammunition_factory": {
			"name": "Ammunition Factory",
			"codeName": "FacilityFactoryAmmo",
			"description": "A factory for producing advanced ammo types such as large calibre shells, rockets, and flame ammo.",
			"category": "factories",
			"categoryOrder": 10,
			"hitArea": [
				{
					"shape": [ 84.16,-153.28,26.56,-152,27.2,-203.2,54.08,-209.6,83.52,-203.2 ]
				},
				{
					"shape": [ -109.12,180.16,-121.28,206.4,-121.28,180.16 ]
				},
				{
					"shape": [ -121.28,206.4,-109.12,180.16,84.8,151.36,84.8,206.4 ]
				},
				{
					"shape": [ -76.48,-135.36,-121.28,121.28,-121.28,-135.36 ]
				},
				{
					"shape": [ 26.56,-152,-76.48,-135.36,-75.84,-152 ]
				},
				{
					"shape": [ 26.56,-152,84.16,-153.28,111.04,-150.72,-109.12,121.28,-121.28,121.28,-76.48,-135.36 ]
				},
				{
					"shape": [ -109.12,121.28,111.04,-150.72,84.8,151.36,-109.12,180.16 ]
				},
				{
					"shape": [ 84.8,151.36,111.04,-150.72,112.32,150.72 ]
				}
			],
			"icon": "game/Textures/UI/ItemIcons/AmmoFactoryBaseIcon.webp",
			"texture": "game/Textures/Structures/ammunition_factory.webp",
			"power": -4,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 60,
					"y": 974,
					"rotation": 270
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 3000,
			"cost": {
				"facilitymaterials2": 25
			},
			"repairCost": 100,
			"_productionLength": 2,
			"production": [
				{
					"id": 0,
					"input": {
						"heavyexplosive": 1,
						"facilitymaterials1": 1
					},
					"output": {
						"flameammo": 1
					},
					"time": 25
				},
				{
					"id": 1,
					"input": {
						"heavyexplosive": 6,
						"facilitymaterials1": 5
					},
					"output": {
						"mortartankammo": 1
					},
					"time": 30
				}
			],
			"upgrades": {
				"tripod_factory": {
					"name": "Tripod Factory",
					"codeName": "TripodFactory",
					"description": "Produces various types of tripod weapons.",
					"hitArea": [
						{
							"shape": [ 84.16,-153.28,26.56,-152,27.2,-203.2,54.08,-209.6,83.52,-203.2 ]
						},
						{
							"shape": [ -109.12,180.16,-121.28,206.4,-121.28,180.16 ]
						},
						{
							"shape": [ -121.28,206.4,-109.12,180.16,84.8,151.36,84.8,206.4 ]
						},
						{
							"shape": [ -76.48,-135.36,-121.28,121.28,-121.28,-135.36 ]
						},
						{
							"shape": [ 26.56,-152,-76.48,-135.36,-75.84,-152 ]
						},
						{
							"shape": [ 26.56,-152,84.16,-153.28,111.04,-150.72,-109.12,121.28,-121.28,121.28,-76.48,-135.36 ]
						},
						{
							"shape": [ -109.12,121.28,111.04,-150.72,84.8,151.36,-109.12,180.16 ]
						},
						{
							"shape": [ 84.8,151.36,111.04,-150.72,112.32,150.72 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/FacilityFactoryAmmoTripod.webp",
					"texture": "game/Textures/Structures/ammunition_factory_tripod_factory.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials1": 50
					},
					"_productionLength": 8,
					"production": [
						{
							"id": 4,
							"input": {
								"facilitymaterials1": 2
							},
							"output": {
								"tripod": 1
							},
							"time": 25
						},
						{
							"id": 0,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"isgtc": 1
							},
							"faction": "c",
							"time": 25
						},
						{
							"id": 2,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"atrifletc": 1
							},
							"faction": "c",
							"time": 25
						},
						{
							"id": 3,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"mgtc": 1
							},
							"faction": "c",
							"time": 25
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"grenadelaunchertc": 1
							},
							"faction": "c",
							"time": 25
						},
						{
							"id": 6,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"rpgtw": 1
							},
							"faction": "w",
							"time": 25
						},
						{
							"id": 5,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"atrpgtw": 1
							},
							"faction": "w",
							"time": 25
						},
						{
							"id": 7,
							"input": {
								"facilitymaterials1": 3
							},
							"output": {
								"mgtw": 1
							},
							"faction": "w",
							"time": 25
						}
					]
				},
				"rocket_factory": {
					"name": "Rocket Factory",
					"codeName": "RocketFactory",
					"description": "Produces various types of Rockets.",
					"hitArea": [
						{
							"shape": [ 84.16,-153.28,26.56,-152,27.2,-203.2,54.08,-209.6,83.52,-203.2 ]
						},
						{
							"shape": [ -109.12,180.16,-121.28,206.4,-121.28,180.16 ]
						},
						{
							"shape": [ -121.28,206.4,-109.12,180.16,84.8,151.36,84.8,206.4 ]
						},
						{
							"shape": [ -76.48,-135.36,-121.28,121.28,-121.28,-135.36 ]
						},
						{
							"shape": [ 26.56,-152,-76.48,-135.36,-75.84,-152 ]
						},
						{
							"shape": [ 26.56,-152,84.16,-153.28,111.04,-150.72,-109.12,121.28,-121.28,121.28,-76.48,-135.36 ]
						},
						{
							"shape": [ -109.12,121.28,111.04,-150.72,84.8,151.36,-109.12,180.16 ]
						},
						{
							"shape": [ 84.8,151.36,111.04,-150.72,112.32,150.72 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/AmmoFactoryRocketFacilityModIcon.webp",
					"texture": "game/Textures/Structures/ammunition_factory_rocket_factory.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 35
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"heavyexplosive": 1,
								"facilitymaterials1": 2
							},
							"output": {
								"herocketammo": 1
							},
							"faction": "c",
							"time": 25
						},
						{
							"id": 1,
							"input": {
								"heavyexplosive": 1,
								"facilitymaterials1": 2
							},
							"output": {
								"firerocketammo": 1
							},
							"faction": "w",
							"time": 25
						}
					]
				},
				"large_shell_factory": {
					"name": "Large Shell Factory",
					"codeName": "LargeShellFactory",
					"description": "Produces large calibre ordnance for use with tanks and artillery.",
					"hitArea": [
						{
							"shape": [ 84.16,-153.28,26.56,-152,27.2,-203.2,54.08,-209.6,83.52,-203.2 ]
						},
						{
							"shape": [ -109.12,180.16,-121.28,206.4,-121.28,180.16 ]
						},
						{
							"shape": [ -121.28,206.4,-109.12,180.16,84.8,151.36,84.8,206.4 ]
						},
						{
							"shape": [ -76.48,-135.36,-121.28,121.28,-121.28,-135.36 ]
						},
						{
							"shape": [ 26.56,-152,-76.48,-135.36,-75.84,-152 ]
						},
						{
							"shape": [ 26.56,-152,84.16,-153.28,111.04,-150.72,-109.12,121.28,-121.28,121.28,-76.48,-135.36 ]
						},
						{
							"shape": [ -109.12,121.28,111.04,-150.72,84.8,151.36,-109.12,180.16 ]
						},
						{
							"shape": [ 84.8,151.36,111.04,-150.72,112.32,150.72 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/AmmoFactoryLargeShellFactoryModIcon.webp",
					"texture": "game/Textures/Structures/ammunition_factory_large_shell_factory.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 175
					},
					"_productionLength": 5,
					"production": [
						{
							"id": 0,
							"input": {
								"heavyexplosive": 2,
								"facilitymaterials1": 2
							},
							"output": {
								"battletankammo": 1
							},
							"time": 60
						},
						{
							"id": 1,
							"input": {
								"heavyexplosive": 2,
								"facilitymaterials1": 2
							},
							"output": {
								"atlargeammo": 1
							},
							"time": 60
						},
						{
							"id": 2,
							"input": {
								"heavyexplosive": 6,
								"facilitymaterials1": 4
							},
							"output": {
								"lrartilleryammo": 1
							},
							"time": 120,
							"power": -6
						},
						{
							"id": 3,
							"input": {
								"explosive": 3,
								"facilitymaterials1": 2
							},
							"output": {
								"lightartilleryammo": 1
							},
							"time": 25
						},
						{
							"id": 4,
							"input": {
								"heavyexplosive": 2,
								"facilitymaterials1": 3
							},
							"output": {
								"heavyartilleryammo": 1
							},
							"time": 40
						}
					]
				}
			}
		},
		"atpillbox": {
			"name": "Anti-Tank Pillbox",
			"codeName": "ATPillbox",
			"description": "This heavily reinforced pillbox allows the garrisoned infantry with anti-tank rifles to fire on approaching enemy armour from a safe position.",
			"category": "defenses",
			"categoryOrder": 8,
			"range": {
				"type": "killboxAT",
				"lineOfSight": true,
				"min": 3.5,
				"max": 28
			},
			"hitArea": [
				{
					"shape": [ -57.92,-90.24,52.16,-90.24,105.28,-3.2,54.72,90.24,-50.88,92.16,-108.48,3.84 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/ATPillboxIcon.webp",
			"texture": "game/Textures/Structures/atpillbox.webp",
			"techId": "unlockatpillbox",
			"maxHealth": 950,
			"cost": {
				"cloth": 85
			},
			"repairCost": 85
		},
		"barbedwirespline": {
			"name": "Barbed Wire",
			"codeName": "BarbedWireSpline",
			"description": "Used to slow down enemy infantry movement. Can be dismantled with a Wrench.",
			"category": "defenses",
			"categoryOrder": 1,
			"hasHandle": true,
			"isBezier": true,
			"simpleBezier": true,
			"minLength": 3,
			"maxLength": 10,
			"icon": "game/Textures/UI/StructureIcons/BarbedWireCornerStructureIcon.webp",
			"texture": "game/Textures/Structures/barbedwirespline.webp",
			"textureFrontCap": "game/Textures/Structures/barbedwirespline_front.webp",
			"textureBackCap": "game/Textures/Structures/barbedwirespline_back.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 4608,
							"category": 4096
						},
						{
							"mask": 1,
							"category": 4096
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 4608,
							"category": 4096
						},
						{
							"mask": 1,
							"category": 4096
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 600,
			"cost": {
				"barbedwirematerials": 3
			},
			"repairCost": 20
		},
		"barbedwirewallspline": {
			"name": "Barbed Wire Fence",
			"codeName": "BarbedWireWallSpline",
			"description": "Used to prevent enemy infantry movement through an area. This structure is difficult to destroy with conventional weapons and must be dismantled with a Wrench.",
			"category": "defenses",
			"categoryOrder": 2,
			"hideInList": true,
			"simpleBezier": true,
			"minLength": 4,
			"maxLength": 10,
			"icon": "game/Textures/UI/ItemIcons/BarbedWireFenceStructureIcon.webp",
			"texture": null,
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 4609,
							"category": 4608
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 4609,
							"category": 4608
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 10000,
			"cost": {
				"barbedwirematerials": 3
			},
			"repairCost": 20
		},
		"barge": {
			"name": "BMS - Aquatipper",
			"codeName": "Barge",
			"description": "A large shipping vessel, the Aquatipper is used to transport vehicles, equipment, and personnel over large bodies of water.",
			"category": "vehicles",
			"categoryOrder": 20,
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ -191.36,103.68,-192.64,-103.04,196.48,-103.68,197.12,101.12 ]
				},
				{
					"shape": [ -192.64,-103.04,-192.64,-39.68,-202.24,-72.96 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/BargeVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/barge.webp"
		},
		"bms_foreman_stacker": {
			"name": "BMS Foreman Stacker",
			"codeName": "FacilityCrane",
			"description": "The Foreman is an all-purpose, no-frills, easy to assemble crane. Perfect for hauling heavy loads in facilities where loading and offloading is commonplace.",
			"category": "factories",
			"categoryOrder": 100,
			"color": 1052688,
			"width": 3.74,
			"length": 3.74,
			"range": {
				"type": "crane",
				"min": 4.5,
				"max": 22.5
			},
			"sortLayer": "crane",
			"icon": "game/Textures/UI/FacilityCraneIcon.webp",
			"texture": "game/Textures/Structures/bms_foreman_stacker.webp",
			"textureIcon": {
				"width": 96,
				"height": 96
			},
			"textureOffset": {
				"x": 445,
				"y": 258
			},
			"power": -0.5,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": -22,
					"y": 330,
					"rotation": 270
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 1000,
			"cost": {
				"facilitymaterials2": 10
			},
			"repairCost": 100
		},
		"bms_overseer_skyhauler": {
			"name": "BMS Overseer Sky-Hauler",
			"codeName": "LargeCrane",
			"description": "The star of the BMS arsenal of military-grade construction equipment, the Overseer Sky-Hauler makes several tonnes look like a feather, and enjoys a high level of mobility while deployed along heavy-duty rail lines.",
			"category": "factories",
			"categoryOrder": 105,
			"width": 6.86,
			"length": 11.52,
			"range": {
				"type": "crane",
				"min": 13.75,
				"max": 33.75
			},
			"sortLayer": "crane",
			"icon": "game/Textures/UI/LargeCraneItemIcon.webp",
			"texture": "game/Textures/Structures/large_crane.webp",
			"textureOffset": {
				"x": 382,
				"y": 578
			},
			"garrisonSupplyMultiplier": 0,
			"techId": "unlockfacilitytier3",
			"maxHealth": 1000,
			"cost": {
				"facilitymaterials3": 35
			},
			"repairCost": 100
		},
		"busc": {
			"name": "R-15 - “Chariot”",
			"codeName": "BusC",
			"description": "The “Chariot” is a transport vehicle used to shuttle personnel to the front line.",
			"category": "vehicles",
			"categoryOrder": 5,
			"faction": "c",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/BusIcon.webp",
			"texture": "game/Textures/Vehicles/busc.webp",
			"techId": "unlockbus"
		},
		"busw": {
			"name": "Dunne Caravaner 2f",
			"codeName": "BusW",
			"description": "The Caravaner is a transport vehicle used to shuttle personnel to the front line.",
			"category": "vehicles",
			"categoryOrder": 6,
			"faction": "w",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/BusWarIcon.webp",
			"texture": "game/Textures/Vehicles/busw.webp"
		},
		"catwalk_bridge": {
			"name": "Catwalk Bridge",
			"codeName": "FacilityCatwalkBridge",
			"description": "A raised walkway for creating paths above complex Facilities.",
			"category": "factories",
			"categoryOrder": 95,
			"sortLayer": "overhead",
			"hasHandle": true,
			"hasOutline": false,
			"minLength": 8,
			"maxLength": 20,
			"icon": "game/Textures/UI/ItemIcons/facilitieCatwalkPlatfromIcon.webp",
			"texture": "game/Textures/Structures/catwalk_bridge.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 33554432,
							"category": 33554432
						},
						{
							"mask": 33554432,
							"category": 67108864
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 33554432,
							"category": 33554432
						},
						{
							"mask": 33554432,
							"category": 67108864
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 150,
			"cost": {
				"facilitymaterials2": 10
			},
			"repairCost": 100
		},
		"catwalk_platform": {
			"name": "Catwalk Platform",
			"codeName": "FacilityCatwalkPlatform",
			"description": "A raised walkway for creating paths above complex Facilities.",
			"category": "factories",
			"categoryOrder": 90,
			"sortLayer": "overhead",
			"icon": "game/Textures/UI/ItemIcons/FacilityCatwalkRampConnectorIcon.webp",
			"texture": "game/Textures/Structures/catwalk_platform.webp",
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 67108864,
							"category": 100663296
						}
					],
					"x": 3,
					"y": 138,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 67108864,
							"category": 100663296
						}
					],
					"x": 139,
					"y": 2,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 67108864,
							"category": 100663296
						}
					],
					"x": 276,
					"y": 138,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 67108864,
							"category": 100663296
						}
					],
					"x": 139,
					"y": 275,
					"rotation": 180
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 150,
			"cost": {
				"facilitymaterials2": 10
			},
			"repairCost": 100
		},
		"catwalk_stairs": {
			"name": "Catwalk Stairs",
			"codeName": "FacilityCatwalkStairs",
			"description": "Stairs that connect to raised Catwalks, which create paths above complex Facilities.",
			"category": "factories",
			"categoryOrder": 85,
			"sortLayer": "overhead",
			"icon": "game/Textures/UI/ItemIcons/FacilityCatwalkRampIcon.webp",
			"texture": "game/Textures/Structures/catwalk_stairs.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 67108864,
							"category": 100663296
						}
					],
					"x": 1235,
					"y": 141,
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 150,
			"cost": {
				"facilitymaterials2": 10
			},
			"repairCost": 100
		},
		"coal_refinery": {
			"name": "Coal Refinery",
			"codeName": "FacilityRefineryCoal",
			"description": "A processing plant that refines Coal into useful materials used in facility production and power.",
			"category": "factories",
			"categoryOrder": 30,
			"color": 4210752,
			"hitArea": [
				{
					"shape": [ -73.28,194.88,-57.92,111.04,7.36,111.04,7.36,194.88 ]
				},
				{
					"shape": [ 19.52,21.44,69.44,-40,69.44,21.44 ]
				},
				{
					"shape": [ -8,42.56,-57.92,42.56,19.52,21.44,19.52,40.64 ]
				},
				{
					"shape": [ 88.64,-40,69.44,-40,19.52,-146.88,88.64,-146.24 ]
				},
				{
					"shape": [ -88.64,0.96,-88.64,-155.84,19.52,-146.88,69.44,-40,19.52,21.44,-57.92,42.56,-85.44,42.56 ]
				},
				{
					"shape": [ 19.52,-146.88,-88.64,-155.84,-85.44,-194.24,17.6,-196.16 ]
				},
				{
					"shape": [ -57.92,111.04,-73.28,194.88,-73.28,111.04 ]
				},
				{
					"shape": [ -8,111.04,-57.92,111.04,-57.92,42.56,-8,42.56 ]
				}
			],
			"icon": "game/Textures/UI/ItemIcons/FacilitiesCoolRefineryBaseIcon.webp",
			"texture": "game/Textures/Structures/coal_refinery.webp",
			"power": -3,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 0,
					"y": 273,
					"rotation": 270
				}
			],
			"maxHealth": 3000,
			"cost": {
				"facilitymaterials1": 50
			},
			"repairCost": 150,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"coal": 200
					},
					"output": {
						"facilitycoal1": 180
					},
					"time": 270
				}
			],
			"upgrades": {
				"coke_furnace": {
					"name": "Coke Furnace",
					"codeName": "CokeFurnace",
					"description": "A high powered furnace that brings Coal to high temperatures to separate out non-volatile Coke.",
					"hitArea": [
						{
							"shape": [ -66.56,194.88,-66.56,111.04,14.08,111.04,14.08,194.88 ]
						},
						{
							"shape": [ 26.24,-168.64,-78.72,42.56,-78.72,-191.68,-26.88,-196.16,26.24,-191.68 ]
						},
						{
							"shape": [ 81.28,15.68,-78.72,42.56,26.24,-168.64,81.92,-160.32 ]
						},
						{
							"shape": [ 39.04,55.36,0,58.56,-51.2,42.56,48,21.44,48,43.84 ]
						},
						{
							"shape": [ -51.2,111.04,-51.2,42.56,0,58.56,-1.28,111.04 ]
						},
						{
							"shape": [ -78.72,42.56,48,21.44,-51.2,42.56 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/FacilitiesCoolRefineryCokeFurnaceIcon.webp",
					"texture": "game/Textures/Structures/coal_refinery_coke_furnace.webp",
					"positionOffset": {
						"x": -21
					},
					"cost": {
						"facilitymaterials1": 200
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"coal": 200
							},
							"output": {
								"facilitycoal1": 165,
								"sulfur": 15
							},
							"time": 270
						}
					]
				},
				"liquifier": {
					"name": "Coal Liquefier",
					"codeName": "CoalLiquefier",
					"description": "Processing vats that refines Coal into Oil.",
					"hitArea": [
						{
							"shape": [ -90.56,194.88,-90.56,111.04,-9.28,111.04,-9.28,194.88 ]
						},
						{
							"shape": [ -24.64,43.84,69.44,-9.28,70.08,41.28 ]
						},
						{
							"shape": [ 2.88,-168.64,-102.72,42.56,-102.72,-191.68,-48.32,-196.8,2.88,-191.68 ]
						},
						{
							"shape": [ 77.76,-37.44,76.48,-146.88,90.56,-140.48,100.16,-125.12,104.64,-39.36 ]
						},
						{
							"shape": [ 76.48,-146.88,-102.72,42.56,2.88,-168.64,76.48,-168.64 ]
						},
						{
							"shape": [ 77.76,-37.44,-74.56,42.56,-102.72,42.56,76.48,-146.88 ]
						},
						{
							"shape": [ 69.44,-9.28,-24.64,43.84,-74.56,42.56,77.76,-37.44,76.48,-13.76 ]
						},
						{
							"shape": [ -24.64,43.84,-25.28,111.04,-74.56,111.04,-74.56,42.56 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityCoalLiquefierIcon.webp",
					"texture": "game/Textures/Structures/coal_refinery_liquifier.webp",
					"positionOffset": {
						"x": 52
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 0,
							"y": 273,
							"rotation": 270
						},
						{
							"id": 1,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 611,
							"y": 494,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 502,
							"y": 747,
							"rotation": 180
						}
					],
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 20
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"coal": 300,
								"water": 50
							},
							"output": {
								"concrete": 1,
								"oil": 50
							},
							"time": 270,
							"power": -6
						}
					]
				},
				"adv_liquifier": {
					"name": "Advanced Coal Liquefier",
					"codeName": "AdvCoalLiquefier",
					"description": "Advanced processing vats that refine large amounts of coal into Heavy Oil.",
					"hitArea": [
						{
							"shape": [ -89.92,194.88,-89.92,111.04,-9.28,111.04,-9.28,194.88 ]
						},
						{
							"shape": [ 43.84,-13.76,77.76,-37.44,76.48,-13.76 ]
						},
						{
							"shape": [ 77.76,-37.44,2.88,-168.64,76.48,-146.88,98.24,-126.4,102.08,-92.48,104,-38.08 ]
						},
						{
							"shape": [ 39.36,97.6,64.96,12.48,69.44,109.76,38.72,110.4 ]
						},
						{
							"shape": [ 2.88,-168.64,-102.72,42.56,-102.08,-192.32,-49.6,-196.16,2.88,-191.68 ]
						},
						{
							"shape": [ -24.64,98.88,-74.56,42.56,43.84,-13.76,64.96,12.48,39.36,97.6 ]
						},
						{
							"shape": [ 98.24,-126.4,76.48,-146.88,90.56,-140.48 ]
						},
						{
							"shape": [ 76.48,-146.88,2.88,-168.64,76.48,-168.64 ]
						},
						{
							"shape": [ 77.76,-37.44,43.84,-13.76,-74.56,42.56,-102.72,42.56,2.88,-168.64 ]
						},
						{
							"shape": [ -74.56,42.56,-24.64,98.88,-24.64,111.04,-74.56,111.04 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityAdvancedCoalLiquefierIcon.webp",
					"texture": "game/Textures/Structures/coal_refinery_adv_liquifier.webp",
					"positionOffset": {
						"x": 52
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 0,
							"y": 273,
							"rotation": 270
						},
						{
							"id": 1,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 611,
							"y": 494,
							"rotation": 180
						},
						{
							"id": 3,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 503,
							"y": 963,
							"rotation": 180
						}
					],
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 65
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"coal": 300,
								"water": 100
							},
							"output": {
								"facilitycoal1": 260,
								"facilityoil1": 60
							},
							"time": 405,
							"power": -6
						}
					]
				}
			}
		},
		"concretemixer": {
			"name": "Concrete Mixer",
			"codeName": "ConcreteMixer",
			"description": "A portable device that mixes various materials to form Concrete, which are used to build heavily fortified structures.",
			"category": "shippables",
			"categoryOrder": 5,
			"icon": "game/Textures/UI/StructureIcons/ConcreteMixerIcon.webp",
			"texture": "game/Textures/Structures/concretemixer.webp",
			"techId": "unlockconcretemixer",
			"maxHealth": 1200,
			"cost": {
				"wood": 75
			},
			"repairCost": 75,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"components": 20
					},
					"output": {
						"concrete": 1
					},
					"time": 20
				}
			]
		},
		"construction_vehicle": {
			"name": "BMS - Universal Assembly Rig",
			"codeName": "Construction",
			"description": "A specialized vehicle designed by the Basset Motor Society used in the construction of large structures.",
			"category": "vehicles",
			"categoryOrder": 9,
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ -106.56,19.52,-121.28,43.84,-121.28,20.16 ]
				},
				{
					"shape": [ 31.04,-19.52,44.48,-43.84,45.12,-19.52 ]
				},
				{
					"shape": [ 91.84,40.64,84.8,32.96,84.8,17.6,91.84,9.92,120,15.68,120.64,34.88 ]
				},
				{
					"shape": [ -121.28,-43.84,44.48,-43.84,-107.2,-18.88,-121.28,-19.52 ]
				},
				{
					"shape": [ 56,32.96,31.68,18.24,84.8,17.6,84.8,32.96 ]
				},
				{
					"shape": [ 45.12,43.84,-121.28,43.84,31.68,18.24,56,32.96 ]
				},
				{
					"shape": [ -121.28,43.84,-106.56,19.52,31.04,-19.52,31.68,18.24 ]
				},
				{
					"shape": [ 44.48,-43.84,31.04,-19.52,-106.56,19.52,-107.2,-18.88 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/ConstructionVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/construction_vehicle.webp",
			"cost": false
		},
		"constructionutility": {
			"name": "BMS - Fabricator",
			"codeName": "ConstructionUtility",
			"description": "An advanced variant of the Universal Assembly Rig, the BMS - Fabricator is fitted with a unique kit designed to handle advanced or specialized construction and excavation jobs.",
			"category": "vehicles",
			"categoryOrder": 10,
			"hitArea": [
				{
					"shape": [ -109.76,19.52,-124.48,43.84,-124.48,20.16 ]
				},
				{
					"shape": [ 27.84,-19.52,41.28,-43.84,41.92,-19.52 ]
				},
				{
					"shape": [ 88.64,40.64,81.6,32.96,81.6,17.6,88.64,9.92,116.8,15.68,117.44,34.88 ]
				},
				{
					"shape": [ -124.48,-43.84,41.28,-43.84,-110.4,-18.88,-124.48,-19.52 ]
				},
				{
					"shape": [ 52.8,32.96,28.48,18.24,81.6,17.6,81.6,32.96 ]
				},
				{
					"shape": [ 41.92,43.84,-124.48,43.84,28.48,18.24,52.8,32.96 ]
				},
				{
					"shape": [ -124.48,43.84,-109.76,19.52,27.84,-19.52,28.48,18.24 ]
				},
				{
					"shape": [ 41.28,-43.84,27.84,-19.52,-109.76,19.52,-110.4,-18.88 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/AdvancedConstructionVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/advanced_construction_vehicle.webp",
			"techId": "unlockconstructionutility"
		},
		"crane": {
			"name": "BMS - Class 2 Mobile Auto-Crane",
			"codeName": "Crane",
			"description": "The Basset Motor Society’s Class 2 Mobile Auto-Crane is used to lift and reposition vehicles and very heavy equipment.",
			"category": "vehicles",
			"categoryOrder": 11,
			"range": {
				"type": "crane",
				"min": null,
				"max": null
			},
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ -26.56,77.76,-61.76,44.48,-26.56,45.12 ]
				},
				{
					"shape": [ -62.4,-45.12,-26.56,-77.76,-26.56,-45.12 ]
				},
				{
					"shape": [ -249.92,-77.76,-26.56,-77.76,-62.4,-45.12,-233.92,-38.72,-249.92,-45.12 ]
				},
				{
					"shape": [ -233.28,36.8,-26.56,77.76,-249.92,77.76,-249.92,45.12 ]
				},
				{
					"shape": [ 248.64,9.92,203.2,20.8,-69.44,20.8,-69.44,-20.8,202.56,-20.8,249.92,-10.56 ]
				},
				{
					"shape": [ -233.92,-38.72,-61.76,44.48,-26.56,77.76,-233.28,36.8 ]
				},
				{
					"shape": [ -69.44,-20.8,-233.92,-38.72,-62.4,-45.12 ]
				},
				{
					"shape": [ -69.44,20.8,-233.92,-38.72,-69.44,-20.8 ]
				},
				{
					"shape": [ -61.76,44.48,-233.92,-38.72,-69.44,20.8 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/CraneVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/crane.webp",
			"cost": false
		},
		"diesel_power_plant": {
			"name": "Diesel Power Plant",
			"codeName": "FacilityPowerDiesel",
			"description": "A structure that generates power by burning Diesel.",
			"category": "power",
			"categoryOrder": 3,
			"hitArea": [
				{
					"shape": [ -49.28,45.12,119.04,118.72,-49.28,116.8 ]
				},
				{
					"shape": [ 95.36,-107.2,119.04,17.6,119.04,118.72,-90.88,-77.12,-83.2,-96.32,51.84,-125.12,91.52,-119.36 ]
				},
				{
					"shape": [ 51.84,-125.12,-83.2,-96.32,-84.48,-127.68 ]
				},
				{
					"shape": [ -90.24,36.16,-49.28,45.12,-90.24,45.12 ]
				},
				{
					"shape": [ -133.12,31.04,-133.12,-74.56,-90.24,36.16,-123.52,39.36 ]
				},
				{
					"shape": [ -133.12,-74.56,-49.28,45.12,-90.24,36.16 ]
				},
				{
					"shape": [ -133.12,-74.56,-122.24,-80.32,-90.88,-77.12,119.04,118.72,-49.28,45.12 ]
				},
				{
					"shape": [ 134.4,98.88,119.04,98.88,119.04,17.6,134.4,17.6 ]
				},
				{
					"shape": [ 119.04,17.6,95.36,-107.2,118.4,-105.28 ]
				},
				{
					"shape": [ -83.2,-96.32,-90.88,-77.12,-90.24,-84.8 ]
				}
			],
			"icon": "game/Textures/UI/ItemIcons/DiesePowerPlanetBaseIcon.webp",
			"texture": "game/Textures/Structures/diesel_power_plant.webp",
			"power": 5,
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 152,
					"y": 57,
					"rotation": 270
				},
				{
					"id": 1,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 548,
					"y": 770,
					"rotation": 180
				}
			],
			"maxHealth": 1500,
			"cost": {
				"cloth": 150
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"diesel": 25
					},
					"time": 45
				}
			],
			"productionScaling": false,
			"upgrades": {
				"petrol_power": {
					"name": "Petrol Power Plant",
					"codeName": "Petrol",
					"description": "A generator that burns petrol to generate more power.",
					"hitArea": [
						{
							"shape": [ -46.08,27.84,-40.32,-84.8,19.2,118.08,-46.72,116.8 ]
						},
						{
							"shape": [ -81.92,-127.04,53.76,-126.4,96,-119.36,97.28,-107.84,-40.96,-96.32,-81.92,-96.96 ]
						},
						{
							"shape": [ -129.92,-84.8,-40.32,-84.8,-113.92,-54.72,-129.92,-55.36 ]
						},
						{
							"shape": [ 82.56,118.72,-40.32,-84.8,-40.96,-96.32,121.6,98.88,120.96,117.44 ]
						},
						{
							"shape": [ -103.04,51.52,-136.32,13.76,-114.56,-33.6,-40.32,-84.8,-46.08,27.84,-71.04,51.52 ]
						},
						{
							"shape": [ -114.56,-33.6,-136.32,13.76,-135.04,-13.12 ]
						},
						{
							"shape": [ -136.32,13.76,-103.04,51.52,-128,36.16 ]
						},
						{
							"shape": [ -40.32,-84.8,-114.56,-33.6,-113.92,-54.72 ]
						},
						{
							"shape": [ 121.6,17.6,-40.96,-96.32,97.28,-107.84,121.6,-105.28 ]
						},
						{
							"shape": [ 136.96,98.88,121.6,17.6,136.96,17.6 ]
						},
						{
							"shape": [ 136.96,98.88,121.6,98.88,-40.96,-96.32,121.6,17.6 ]
						},
						{
							"shape": [ 19.2,118.08,82.56,127.68,19.84,127.68 ]
						},
						{
							"shape": [ -40.32,-84.8,82.56,118.72,82.56,127.68,19.2,118.08 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/DiesePowerPlanetPetrolIcon.webp",
					"texture": "game/Textures/Structures/diesel_power_plant_petrol_power.webp",
					"positionOffset": {
						"x": -8
					},
					"sockets": [
						{
							"id": 0,
							"name": "pipein",
							"type": [
								{
									"mask": 2048,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 167,
							"y": 57,
							"rotation": 270
						},
						{
							"id": 1,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 563,
							"y": 770,
							"rotation": 180
						}
					],
					"cost": {
						"facilitymaterials1": 100
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"petrol": 50
							},
							"time": 90,
							"power": 12
						}
					]
				},
				"coal": {
					"name": "Coal Power Plant",
					"codeName": "Coal",
					"description": "A generator that burns coal to generate power.",
					"hitArea": [
						{
							"shape": [ -108.8,-96.32,-83.2,-96.32,-122.88,63.68,-122.60571411132813,-81.23427734375,-117.76,-91.2 ]
						},
						{
							"shape": [ -122.88,63.68,51.84,-125.12,91.52,-119.36,95.36,-107.2,-49.28,72.64,-58.88,77.76,-110.08,77.76,-118.4,72.64 ]
						},
						{
							"shape": [ -49.28,72.64,95.36,-107.2,118.4,-105.28,119.04,118.72,-49.28,116.8 ]
						},
						{
							"shape": [ 51.84,-125.12,-83.2,-96.32,-84.48,-127.68 ]
						},
						{
							"shape": [ 51.84,-125.12,-122.88,63.68,-83.2,-96.32 ]
						},
						{
							"shape": [ 134.4,98.88,119.04,98.88,119.04,17.6,134.4,17.6 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/FacilityPowerDieselCoalIcon.webp",
					"texture": "game/Textures/Structures/diesel_power_plant_coal.webp",
					"cost": {
						"facilitymaterials1": 100
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"coal": 60
							},
							"time": 90,
							"power": 5
						}
					]
				}
			}
		},
		"field_modification_center": {
			"name": "Field Modification Center",
			"codeName": "FacilityModificationCenter",
			"description": "A garage that facilitates vehicle modifications and upgrades.",
			"category": "factories",
			"categoryOrder": 25,
			"color": 8184298,
			"hitArea": [
				{
					"shape": [ -115.84,248,-115.84,198.72,115.2,198.72,115.2,248 ]
				},
				{
					"shape": [ 115.2,-248,115.2,-199.36,-115.84,-199.36,-115.84,-248 ]
				},
				{
					"shape": [ -159.36,198.72,-159.36,-198.72,159.36,-198.72,159.36,198.72 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityModificationCenterIcon.webp",
			"texture": "game/Textures/Structures/field_modification_center.webp",
			"textureIcon": {
				"width": 160,
				"height": 160
			},
			"power": -8,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 104,
					"y": 142,
					"rotation": 0
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 2000,
			"cost": {
				"facilitymaterials2": 250
			},
			"repairCost": 100
		},
		"fieldbridge": {
			"name": "Field Bridge",
			"codeName": "FieldBridge",
			"description": "A makeshift bridge for transporting light equipment over a short distance. Will take damage when vehicles drive across.",
			"category": "misc",
			"categoryOrder": 8,
			"hasHandle": true,
			"hasOutline": false,
			"minLength": 4,
			"maxLength": 25,
			"icon": "game/Textures/UI/StructureIcons/FieldBridgeItemIcon.webp",
			"texture": "game/Textures/Structures/fieldbridge.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 8192,
							"category": 8192
						},
						{
							"mask": 8192,
							"category": 8192
						}
					],
					"texture": "game/Textures/Structures/fieldbridge_end.webp",
					"textureAlt": "game/Textures/Structures/fieldbridge_connector.webp",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 8192,
							"category": 8192
						},
						{
							"mask": 8192,
							"category": 8192
						}
					],
					"texture": "game/Textures/Structures/fieldbridge_end.webp",
					"textureAlt": "game/Textures/Structures/fieldbridge_connector.webp",
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfieldbridge",
			"maxHealth": 1500,
			"cost": {
				"metalbeammaterials": 5
			},
			"repairCost": 100
		},
		"fieldhospital": {
			"name": "Field Hospital",
			"codeName": "FieldHospital",
			"description": "A field medical facility used to treat critically wounded soldiers at the front line. ",
			"category": "misc",
			"categoryOrder": 1,
			"hitArea": [
				{
					"shape": [ 39.36,-143.68,-38.72,-143.68,-34.88,-179.52,36.16,-179.52 ]
				},
				{
					"shape": [ -34.88,178.88,-38.72,143.04,39.36,143.04,36.16,178.88 ]
				},
				{
					"shape": [ 106.56,142.4,-38.72,143.04,-105.28,-142.4,106.56,-143.68 ]
				},
				{
					"shape": [ -105.28,-142.4,-38.72,143.04,-105.28,142.4 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FieldHospitalIcon.webp",
			"texture": "game/Textures/Structures/fieldhospital.webp",
			"maxHealth": 500,
			"cost": {
				"cloth": 200
			},
			"repairCost": 200
		},
		"flatbedtruck": {
			"name": "BMS - Packmule Flatbed",
			"codeName": "FlatbedTruck",
			"description": "A heavy duty shipping transport truck designed by Bassett Motor Society. It’s built for hauling the heaviest of equipment over long distances with ease. ",
			"category": "vehicles",
			"categoryOrder": 7,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/FlatbedTruckVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/flatbedtruck.webp"
		},
		"fortbaset1": {
			"name": "Bunker Base",
			"codeName": "FortBaseT1",
			"parentKey": "fortt1",
			"description": "A large forward operating base. Players can spawn and stockpile items here.",
			"category": "entrenchments",
			"baseGarrisonRadius": 80,
			"sortLayer": "upgrade2",
			"hitArea": [
				{
					"shape": [ 90.88,92.16,-85.12,91.52,-92.16,-88.32,88.96,-90.88 ]
				},
				{
					"shape": [ -83.84,260.48,-85.12,91.52,84.48,92.16,83.84,260.48 ]
				},
				{
					"shape": [ -92.16,-88.32,-85.12,91.52,-90.24,91.52 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT1BaseIcon.webp",
			"texture": "game/Textures/Structures/fortt1_base.webp",
			"textureOffset": {
				"x": 306,
				"y": 312
			},
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 792,
					"rotation": 90
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 792,
					"rotation": 270
				}
			],
			"maxHealth": 1750,
			"structuralIntegrity": 0.65,
			"cost": {
				"cloth": 300
			},
			"repairCost": 300,
			"upgrades": {
				"fortbaset1": {
					"reference": "fortbaset1"
				},
				"fortbaset2": {
					"reference": "fortbaset2"
				},
				"fortbaset3": {
					"reference": "fortbaset3"
				}
			}
		},
		"fortbaset2": {
			"name": "Bunker Base",
			"codeName": "FortBaseT2",
			"parentKey": "fortbaset1",
			"description": "A large forward operating base. Players can spawn and stockpile items here.",
			"tier": 2,
			"hitArea": [
				{
					"shape": [ -94.08,113.28,89.6,112.64,87.04,290.56,-93.44,290.56 ]
				},
				{
					"shape": [ 108.16,-113.28,108.16,112.64,-110.72,112.64,-110.72,-113.92 ]
				},
				{
					"shape": [ -110.72,112.64,89.6,112.64,-94.08,113.28 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT2BaseIcon.webp",
			"texture": "game/Textures/Structures/fortt2_base.webp",
			"textureOffset": {
				"x": 384,
				"y": 402
			},
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 792,
					"rotation": 90
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 792,
					"rotation": 270
				}
			],
			"maxHealth": 2000,
			"structuralIntegrity": 0.7,
			"cost": {
				"cloth": 100
			},
			"repairCost": 100,
			"upgrades": {
				"fortbaset1": {
					"reference": "fortbaset1"
				},
				"fortbaset2": {
					"reference": "fortbaset2"
				},
				"fortbaset3": {
					"reference": "fortbaset3"
				}
			}
		},
		"fortbaset3": {
			"name": "Bunker Base",
			"codeName": "FortBaseT3",
			"parentKey": "fortbaset2",
			"description": "A large forward operating base. Players can spawn and stockpile items here.",
			"tier": 3,
			"hitArea": [
				{
					"shape": [ -88.32,111.36,87.68,111.36,83.84,285.44,-85.12,285.44 ]
				},
				{
					"shape": [ 87.68,111.36,-88.32,111.36,-112.64,95.36,-112.64,-99.2,-98.56,-113.28,111.36,-98.56,112,91.52,103.68,104.96 ]
				},
				{
					"shape": [ -112.64,95.36,-88.32,111.36,-101.76,108.16 ]
				},
				{
					"shape": [ 111.36,-98.56,-98.56,-113.28,97.92,-113.28 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT3BaseIcon.webp",
			"texture": "game/Textures/Structures/fortt3_base.webp",
			"textureOffset": {
				"x": 382,
				"y": 382
			},
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 528,
					"y": 792,
					"rotation": 90
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"x": 0,
					"y": 792,
					"rotation": 270
				}
			],
			"maxHealth": 3500,
			"structuralIntegrity": 0.75,
			"cost": {
				"concrete": 25
			},
			"repairCost": 200,
			"upgrades": {
				"fortbaset1": {
					"reference": "fortbaset1"
				},
				"fortbaset2": {
					"reference": "fortbaset2"
				},
				"fortbaset3": {
					"reference": "fortbaset3"
				}
			}
		},
		"fortcornert1": {
			"name": "Bunker Corner (Tier 1)",
			"codeName": "FortCornerT1",
			"parentKey": "fortt1",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"category": "entrenchments",
			"categoryOrder": 4,
			"hitArea": [
				{
					"shape": [ 89.6,-85.12,89.6,-30.08,-31.36,92.8,-83.84,93.44,-85.12,-84.48 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT1CornerIcon.webp",
			"texture": "game/Textures/Structures/fortt1_corner.webp",
			"textureOffset": null,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"x": 358,
					"y": 358,
					"rotation": 135
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 1500,
			"structuralIntegrity": 0.85,
			"repairCost": 75,
			"upgrades": {
				"fortcornert1": {
					"reference": "fortcornert1"
				},
				"fortcornert2": {
					"reference": "fortcornert2"
				},
				"fortcornert3": {
					"reference": "fortcornert3"
				}
			}
		},
		"fortcornert2": {
			"name": "Bunker Corner (Tier 2)",
			"codeName": "FortCornerT2",
			"parentKey": "fortt1",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"category": "entrenchments",
			"categoryOrder": 4,
			"tier": 2,
			"hitArea": [
				{
					"shape": [ 87.68,-88.96,87.68,-24.32,-29.44,91.52,-86.4,91.52,-86.4,-89.6 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT2CornerIcon.webp",
			"texture": "game/Textures/Structures/fortt2_corner.webp",
			"textureOffset": null,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"x": 358,
					"y": 358,
					"rotation": 135
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 1850,
			"structuralIntegrity": 0.95,
			"cost": {
				"cloth": 75
			},
			"repairCost": 75,
			"upgrades": {
				"fortcornert1": {
					"reference": "fortcornert1"
				},
				"fortcornert2": {
					"reference": "fortcornert2"
				},
				"fortcornert3": {
					"reference": "fortcornert3"
				}
			}
		},
		"fortcornert3": {
			"name": "Bunker Corner (Tier 3)",
			"codeName": "FortCornerT3",
			"parentKey": "fortt2",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"categoryOrder": 5,
			"tier": 3,
			"hitArea": [
				{
					"shape": [ 103.04,-90.24,102.4,-33.28,-32.64,103.04,-90.88,103.04,-90.88,-90.24 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FortT3CornerIcon.webp",
			"texture": "game/Textures/Structures/fortt3_corner.webp",
			"textureOffset": null,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"x": 358,
					"y": 358,
					"rotation": 135
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 2000,
			"structuralIntegrity": 0.99,
			"cost": {
				"concrete": 15
			},
			"repairCost": 120,
			"upgrades": {
				"fortcornert1": {
					"reference": "fortcornert1"
				},
				"fortcornert2": {
					"reference": "fortcornert2"
				},
				"fortcornert3": {
					"reference": "fortcornert3"
				}
			}
		},
		"fortt1": {
			"name": "Bunker (Tier 1)",
			"codeName": "FortT1",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"category": "entrenchments",
			"categoryOrder": 3,
			"tier": 1,
			"width": 5.28,
			"length": 5.28,
			"icon": "game/Textures/UI/StructureIcons/FortT1Icon.webp",
			"texture": "game/Textures/Structures/fortt1.webp",
			"canSnap": true,
			"canUnion": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 264,
					"y": 528,
					"rotation": 180
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt1_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 1500,
			"structuralIntegrity": 0.85,
			"repairCost": 75,
			"upgrades": {
				"fortt2": {
					"reference": "fortt2"
				},
				"fortbaset1": {
					"reference": "fortbaset1"
				},
				"fortcornert2": {
					"reference": "fortcornert2"
				},
				"mgait1": {
					"name": "Machine Gun Garrison (Tier 1)",
					"codeName": "MGAIT1",
					"description": "An entrenched machine gun manned by stationed troops.",
					"range": {
						"type": "killboxMG",
						"lineOfSight": true,
						"arc": 45,
						"max": 33.5
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT1MGunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt1_mgai.webp",
					"textureOffset": {
						"x": 323,
						"y": 312
					},
					"maxHealth": 1650,
					"structuralIntegrity": 0.65,
					"cost": {
						"cloth": 75
					},
					"repairCost": 75
				},
				"fortrampt1": {
					"name": "Bunker Ramp (Tier 1)",
					"codeName": "FortRampT1",
					"description": "A ramp that enables access to underground Bunkers.",
					"icon": "game/Textures/UI/StructureIcons/FortT1RampIcon.webp",
					"texture": "game/Textures/Structures/fortt1_ramp.webp",
					"textureOffset": {
						"x": 300,
						"y": 324
					},
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 0,
							"rotation": 0
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 528,
							"y": 264,
							"rotation": 90
						},
						{
							"id": 2,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 528,
							"rotation": 180
						},
						{
							"id": 3,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 0,
							"y": 264,
							"rotation": 270
						}
					],
					"maxHealth": 1500,
					"structuralIntegrity": 0.85,
					"cost": {
						"cloth": 50
					},
					"repairCost": 75
				},
				"rifleait1": {
					"name": "Rifle Garrison (Tier 1)",
					"codeName": "RifleAIT1",
					"description": "An entrenched bunker manned by stationed troops armed with Rifles.",
					"range": {
						"type": "killbox",
						"lineOfSight": true,
						"max": 25
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT1GunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt1_rifleai.webp",
					"textureOffset": {
						"x": 342,
						"y": 328
					},
					"maxHealth": 1500,
					"structuralIntegrity": 0.65,
					"cost": {
						"cloth": 50
					},
					"repairCost": 50
				}
			}
		},
		"fortt2": {
			"name": "Bunker (Tier 2)",
			"codeName": "FortT2",
			"parentKey": "fortt1",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"tier": 2,
			"icon": "game/Textures/UI/StructureIcons/FortT2Icon.webp",
			"texture": "game/Textures/Structures/fortt2.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 264,
					"y": 528,
					"rotation": 180
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt2_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 1850,
			"structuralIntegrity": 0.95,
			"cost": {
				"cloth": 75
			},
			"repairCost": 75,
			"upgrades": {
				"fortt3": {
					"reference": "fortt3"
				},
				"atgunait2": {
					"name": "AT Gun Garrison (Tier 2)",
					"codeName": "ATGunAIT2",
					"description": "An entrenched AT gun manned by stationed troops.",
					"range": {
						"type": "killboxAT",
						"lineOfSight": true,
						"arc": 90,
						"max": 30
					},
					"sortLayer": "upgrade",
					"hitArea": [
						{
							"shape": [ 73.6,-78.72,74.24,44.8,32,76.16,-41.6,76.16,-84.48,45.44,-83.2,-78.72 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FortT2ATGunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt2_atgunai.webp",
					"maxHealth": 1650,
					"structuralIntegrity": 0.82,
					"cost": {
						"cloth": 150
					},
					"repairCost": 150
				},
				"fortcornert3": {
					"reference": "fortcornert3"
				},
				"engineroomt2": {
					"name": "Engine Room (Tier 2)",
					"codeName": "EngineRoomT2",
					"description": "A engineering facility that provides power to Bunker structures using pipe connections.",
					"icon": "game/Textures/UI/StructureIcons/EngineRoomIcon.webp",
					"texture": "game/Textures/Structures/fortt2_engineroom.webp",
					"maxHealth": 1350,
					"structuralIntegrity": 0.75,
					"cost": {
						"cloth": 150
					},
					"repairCost": 120
				},
				"mgait2": {
					"name": "Machine Gun Garrison (Tier 2)",
					"codeName": "MGAIT2",
					"description": "An entrenched machine gun manned by stationed troops.",
					"range": {
						"type": "killboxMG",
						"lineOfSight": true,
						"arc": 45,
						"max": 33.5
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT2MGunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt2_mgai.webp",
					"maxHealth": 2150,
					"structuralIntegrity": 0.85,
					"cost": {
						"cloth": 100
					},
					"repairCost": 100
				},
				"observationbunkert2": {
					"name": "Observation Bunker (Tier 2)",
					"codeName": "ObservationBunkerT2",
					"description": "A radio bunker that provides intel to friendly units about the surrounding area. Reinforced with wood, it can withstand more punishment than a standard radio tower, and therefore is capable of increased effectiveness.",
					"range": {
						"type": "radio",
						"max": 130
					},
					"sortLayer": "upgrade",
					"hitArea": [
						{
							"shape": [ -30.72,-73.6,35.2,-72.96,75.52,-32.64,75.52,33.92,35.2,74.24,-31.36,74.88,-71.68,33.92,-72.32,-32 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/ObservationBunkerT2ItemIcon.webp",
					"texture": "game/Textures/Structures/fortt2_observationbunker.webp",
					"maxHealth": 1650,
					"structuralIntegrity": 0.82,
					"cost": {
						"cloth": 125
					},
					"repairCost": 150
				},
				"fortrampt2": {
					"name": "Bunker Ramp (Tier 2)",
					"codeName": "FortRampT2",
					"description": "A ramp that enables access to underground Bunkers.",
					"icon": "game/Textures/UI/StructureIcons/FortT2RampIcon.webp",
					"texture": "game/Textures/Structures/fortt2_ramp.webp",
					"textureOffset": {
						"x": 328,
						"y": 318
					},
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 0,
							"rotation": 0
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 528,
							"y": 264,
							"rotation": 90
						},
						{
							"id": 2,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 528,
							"rotation": 180
						},
						{
							"id": 3,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 0,
							"y": 264,
							"rotation": 270
						}
					],
					"maxHealth": 1850,
					"structuralIntegrity": 0.95,
					"cost": {
						"cloth": 50
					},
					"repairCost": 75
				},
				"rifleait2": {
					"name": "Rifle Garrison (Tier 2)",
					"codeName": "RifleAIT2",
					"description": "An entrenched bunker manned by stationed troops armed with Rifles.",
					"range": {
						"type": "killbox",
						"lineOfSight": true,
						"max": 29
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT2GunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt2_rifleai.webp",
					"maxHealth": 1850,
					"structuralIntegrity": 0.85,
					"cost": {
						"cloth": 75
					},
					"repairCost": 75
				},
				"ammoroomt2": {
					"name": "Storage Room (Tier 2)",
					"codeName": "AmmoRoomT2",
					"description": "A facility that stores equipment and ammunition for artillery. Retrieval is very quick for this structure.",
					"icon": "game/Textures/UI/StructureIcons/AmmoRoomIcon.webp",
					"texture": "game/Textures/Structures/fortt2_ammoroom.webp",
					"maxHealth": 1850,
					"structuralIntegrity": 0.85,
					"cost": {
						"cloth": 35
					},
					"repairCost": 120
				}
			}
		},
		"fortt3": {
			"name": "Bunker (Tier 3)",
			"codeName": "FortT3",
			"parentKey": "fortt2",
			"description": "An underground shelter that serves as a foundation for permanent fortifications. Connects to other Bunkers and Trenches.",
			"tier": 3,
			"icon": "game/Textures/UI/StructureIcons/FortT3Icon.webp",
			"texture": "game/Textures/Structures/fortt3.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 264,
					"y": 528,
					"rotation": 180
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 4
						},
						{
							"mask": 4,
							"category": 4
						}
					],
					"texture": "game/Textures/Structures/fortt3_border.webp",
					"below": true,
					"x": 0,
					"y": 264,
					"rotation": 270
				}
			],
			"maxHealth": 2000,
			"structuralIntegrity": 0.99,
			"cost": {
				"concrete": 15
			},
			"repairCost": 120,
			"upgrades": {
				"intelcenter": {
					"name": "Intelligence Center",
					"codeName": "IntelCenter",
					"description": "A high-tech listening post designed to intercept and decode enemy transmissions. The Intelligence Center can target distant locations and will continue to decipher sensitive transmissions over a sustained period.",
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/IntelligenceCenterIcon.webp",
					"texture": "game/Textures/Structures/fortt3_intelcenter.webp",
					"textureOffset": null,
					"maxHealth": 2550,
					"structuralIntegrity": 0.65,
					"cost": {
						"concrete": 125
					},
					"repairCost": 1200
				},
				"lrartillery": {
					"name": "Storm Cannon",
					"codeName": "LRArtillery",
					"description": "A heavy fixed position artillery piece that can release devastating firepower on distant enemy targets.",
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/LongRangedArtilleryIcon.webp",
					"texture": "game/Textures/Structures/fortt3_lrartillery.webp",
					"textureOffset": {
						"x": 770,
						"y": 792
					},
					"maxHealth": 2550,
					"structuralIntegrity": 0.65,
					"cost": {
						"concrete": 200
					},
					"repairCost": 500
				},
				"ammoroomt3": {
					"name": "Storage Room (Tier 3)",
					"codeName": "AmmoRoomT3",
					"prevUpgradeKey": "fortt2_ammoroomt2",
					"description": "A facility that stores equipment and ammunition for artillery. Retrieval is very quick for this structure.",
					"icon": "game/Textures/UI/StructureIcons/AmmoRoomIcon.webp",
					"texture": "game/Textures/Structures/fortt3_ammoroom.webp",
					"maxHealth": 2000,
					"structuralIntegrity": 0.95,
					"cost": {
						"concrete": 10
					},
					"repairCost": 160
				},
				"artilleryait3": {
					"name": "Howitzer Garrison",
					"codeName": "ArtilleryAIT3",
					"description": "An entrenched Howitzer manned by stationed troops.",
					"range": {
						"type": "killboxArty",
						"min": 25,
						"max": 600,
						"arc": 60
					},
					"sortLayer": "upgrade",
					"hitArea": [
						{
							"shape": [ -31.499130859375,74.629560546875,31.36,74.24,30.83130859375,81.864345703125,26.88,90.24,-24.96,90.24,-31.499130859375,82.699130859375 ]
						},
						{
							"shape": [ 47.80521484375,73.79478515625,-31.499130859375,74.629560546875,-84.64695678710937,-77.0226171875,-73.6,-85.76,77.8573828125,-85.3704296875,87.04,-76.8,85.76,40.32 ]
						},
						{
							"shape": [ -84.64695678710937,-77.0226171875,-31.499130859375,74.629560546875,-49.28,73.6,-84.48,47.36 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FortT3HowitzerAIIcon.webp",
					"texture": "game/Textures/Structures/fortt3_artilleryai.webp",
					"textureOffset": {
						"x": 288,
						"y": 288
					},
					"maxHealth": 1750,
					"structuralIntegrity": 0.93,
					"cost": {
						"concrete": 20
					},
					"repairCost": 160
				},
				"atgunait3": {
					"name": "AT Gun Garrison (Tier 3)",
					"codeName": "ATGunAIT3",
					"prevUpgradeKey": "fortt2_atgunait2",
					"description": "An entrenched AT gun manned by stationed troops.",
					"range": {
						"type": "killboxAT",
						"lineOfSight": true,
						"arc": 90,
						"max": 30
					},
					"sortLayer": "upgrade",
					"hitArea": [
						{
							"shape": [ 92.16,-92.16,92.8,35.2,47.36,94.72,-23.68,104.32,-47.36,95.36,-67.2,81.28,-92.8,37.12,-92.16,-92.16 ]
						},
						{
							"shape": [ 47.36,94.72,92.8,35.2,82.56,60.16,67.84,80 ]
						},
						{
							"shape": [ -92.8,37.12,-67.2,81.28,-83.2,61.44 ]
						},
						{
							"shape": [ -23.68,104.32,47.36,94.72,25.6,104.32,0,108.16 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FortT3ATGunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt3_atgunai.webp",
					"textureOffset": {
						"x": 288,
						"y": 288
					},
					"maxHealth": 1750,
					"structuralIntegrity": 0.93,
					"cost": {
						"concrete": 20
					},
					"repairCost": 160
				},
				"engineroomt3": {
					"name": "Engine Room (Tier 3)",
					"codeName": "EngineRoomT3",
					"prevUpgradeKey": "fortt2_engineroomt2",
					"description": "A engineering facility that provides power to Bunker structures using pipe connections.",
					"icon": "game/Textures/UI/StructureIcons/EngineRoomIcon.webp",
					"texture": "game/Textures/Structures/fortt3_engineroom.webp",
					"maxHealth": 1500,
					"structuralIntegrity": 0.85,
					"cost": {
						"concrete": 25
					},
					"repairCost": 120
				},
				"mgait3": {
					"name": "Machine Gun Garrison (Tier 3)",
					"codeName": "MGAIT3",
					"prevUpgradeKey": "fortt2_mgait2",
					"description": "An entrenched machine gun manned by stationed troops.",
					"range": {
						"type": "killboxMG",
						"lineOfSight": true,
						"arc": 45,
						"max": 33.5
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT3MGunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt3_mgai.webp",
					"textureOffset": null,
					"maxHealth": 3000,
					"structuralIntegrity": 0.96,
					"cost": {
						"concrete": 15
					},
					"repairCost": 120
				},
				"observationbunkert3": {
					"name": "Observation Bunker (Tier 3)",
					"codeName": "ObservationBunkerT3",
					"prevUpgradeKey": "fortt2_observationbunkert2",
					"description": "A radio bunker that provides intel to friendly units about the surrounding area. Built from solid concrete, this reliable structure can push its effective range beyond lesser fortified radio structures.",
					"range": {
						"type": "radio",
						"max": 180
					},
					"sortLayer": "upgrade",
					"hitArea": [
						{
							"shape": [ -76.16,-30.08,-31.36,-76.16,31.36,-76.16,76.8,31.36,32.64,76.16,-31.499130859375,75.46434814453124,-76.16,32.64 ]
						},
						{
							"shape": [ 76.8,31.36,31.36,-76.16,76.46609375,-31.666083984375 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/ObservationBunkerT3ItemIcon.webp",
					"texture": "game/Textures/Structures/fortt3_observationbunker.webp",
					"maxHealth": 1750,
					"structuralIntegrity": 0.93,
					"cost": {
						"concrete": 10
					},
					"repairCost": 160
				},
				"fortrampt3": {
					"name": "Bunker Ramp (Tier 3)",
					"codeName": "FortRampT3",
					"prevUpgradeKey": "fortt2_fortrampt2",
					"description": "A ramp that enables access to underground Bunkers.",
					"icon": "game/Textures/UI/StructureIcons/FortT3RampIcon.webp",
					"texture": "game/Textures/Structures/fortt3_ramp.webp",
					"textureOffset": {
						"x": 315,
						"y": 287
					},
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 0,
							"rotation": 0
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 528,
							"y": 264,
							"rotation": 90
						},
						{
							"id": 2,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 264,
							"y": 528,
							"rotation": 180
						},
						{
							"id": 3,
							"type": [
								{
									"mask": 2,
									"category": 4
								},
								{
									"mask": 4,
									"category": 4
								}
							],
							"x": 0,
							"y": 264,
							"rotation": 270
						}
					],
					"maxHealth": 2000,
					"structuralIntegrity": 0.99,
					"cost": {
						"concrete": 10
					},
					"repairCost": 120
				},
				"rifleait3": {
					"name": "Rifle Garrison (Tier 3)",
					"codeName": "RifleAIT3",
					"prevUpgradeKey": "fortt2_rifleait2",
					"description": "An entrenched bunker manned by stationed troops armed with Rifles.",
					"range": {
						"type": "killbox",
						"lineOfSight": true,
						"max": 29
					},
					"sortLayer": "upgrade",
					"icon": "game/Textures/UI/StructureIcons/FortT3GunAIIcon.webp",
					"texture": "game/Textures/Structures/fortt3_rifleai.webp",
					"textureOffset": null,
					"maxHealth": 2250,
					"structuralIntegrity": 0.96,
					"cost": {
						"concrete": 15
					},
					"repairCost": 120
				}
			}
		},
		"forwardbase1": {
			"name": "Encampment",
			"codeName": "ForwardBase1",
			"description": "A temporary forward operating base. Players can spawn and stockpile items here.",
			"category": "misc",
			"baseGarrisonRadius": 80,
			"icon": "game/Textures/UI/StructureIcons/EncampmentIcon.webp",
			"texture": "game/Textures/Structures/forwardbase1.webp",
			"maxHealth": 1725,
			"cost": {
				"cloth": 300
			},
			"repairCost": 300
		},
		"foundation_1x1": {
			"name": "Foundation (1x1)",
			"codeName": "Foundation01T1",
			"description": "A foundation that provides a suitable surface for constructing Facilities.",
			"category": "foundations",
			"categoryOrder": 2,
			"sortLayer": "foundation",
			"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation01Icon.webp",
			"texture": "game/Textures/Structures/foundation_1x1.webp",
			"textureBorder": "game/Textures/Structures/foundation_border.webp",
			"textureIcon": {
				"disabled": true
			},
			"garrisonSupplyMultiplier": 2,
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 528,
					"rotation": 180
				}
			],
			"maxHealth": 2000,
			"cost": {
				"groundmaterials": 75
			},
			"repairCost": 100,
			"upgrades": {
				"foundation01t3": {
					"name": "Concrete Foundation (1x1)",
					"codeName": "Foundation01T3",
					"description": "A foundation that provides a suitable surface for constructing Facilities.",
					"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation01Icon.webp",
					"texture": "game/Textures/Structures/concrete_foundation_1x1.webp",
					"textureBorder": "game/Textures/Structures/concrete_foundation_border.webp",
					"garrisonSupplyMultiplier": 2,
					"cost": {
						"concrete": 5
					},
					"maxHealth": 3850,
					"repairCost": 100
				}
			}
		},
		"foundation_1x2": {
			"name": "Foundation (1x2)",
			"codeName": "Foundation011x2T1",
			"description": "A foundation that provides a suitable surface for constructing Facilities.",
			"category": "foundations",
			"categoryOrder": 1,
			"sortLayer": "foundation",
			"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation03Icon.webp",
			"texture": "game/Textures/Structures/foundation_1x2.webp",
			"textureBorder": "game/Textures/Structures/foundation_border.webp",
			"textureIcon": {
				"disabled": true
			},
			"garrisonSupplyMultiplier": 2,
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 528,
					"y": 792,
					"rotation": 90
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 0,
					"y": 792,
					"rotation": 270
				}
			],
			"maxHealth": 2000,
			"cost": {
				"groundmaterials": 115
			},
			"repairCost": 100,
			"upgrades": {
				"foundation011x2t3": {
					"name": "Concrete Foundation (1x2)",
					"codeName": "Foundation011x2T3",
					"description": "A foundation that provides a suitable surface for constructing Facilities.",
					"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation03Icon.webp",
					"texture": "game/Textures/Structures/concrete_foundation_1x2.webp",
					"textureBorder": "game/Textures/Structures/concrete_foundation_border.webp",
					"garrisonSupplyMultiplier": 2,
					"cost": {
						"concrete": 10
					},
					"maxHealth": 3850,
					"repairCost": 100
				}
			}
		},
		"foundation_2x2": {
			"name": "Foundation (2x2)",
			"codeName": "Foundation012x2T1",
			"description": "A foundation that provides a suitable surface for constructing Facilities.",
			"category": "foundations",
			"sortLayer": "foundation",
			"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation04Icon.webp",
			"texture": "game/Textures/Structures/foundation_2x2.webp",
			"textureBorder": "game/Textures/Structures/foundation_border.webp",
			"textureIcon": {
				"disabled": true
			},
			"garrisonSupplyMultiplier": 2,
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 0,
					"y": 264,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 792,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 1056,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 1056,
					"y": 792,
					"rotation": 90
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 792,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 7,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 0,
					"y": 792,
					"rotation": 270
				}
			],
			"maxHealth": 2000,
			"cost": {
				"groundmaterials": 150
			},
			"repairCost": 100,
			"upgrades": {
				"foundation012x2t3": {
					"name": "Concrete Foundation (2x2)",
					"codeName": "Foundation012x2T3",
					"description": "A foundation that provides a suitable surface for constructing Facilities.",
					"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation04Icon.webp",
					"texture": "game/Textures/Structures/concrete_foundation_2x2.webp",
					"textureBorder": "game/Textures/Structures/concrete_foundation_border.webp",
					"garrisonSupplyMultiplier": 2,
					"cost": {
						"concrete": 15
					},
					"maxHealth": 3850,
					"repairCost": 100
				}
			}
		},
		"foundation_corner": {
			"name": "Foundation Corner (1x1)",
			"codeName": "Foundation02T1",
			"description": "A foundation that provides a suitable surface for constructing Facilities.",
			"category": "foundations",
			"categoryOrder": 3,
			"width": 5.28,
			"length": 5.28,
			"sortLayer": "foundation",
			"hitArea": [
				{
					"shape": [ -91.52,93.44,-92.16,39.04,39.04,-92.16,92.16,-92.16,92.8,92.8 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation02Icon.webp",
			"texture": "game/Textures/Structures/foundation_corner.webp",
			"textureBorder": "game/Textures/Structures/foundation_border.webp",
			"textureIcon": {
				"disabled": true
			},
			"textureOffset": {
				"x": 288,
				"y": 288
			},
			"garrisonSupplyMultiplier": 2,
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 528,
					"y": 264,
					"rotation": 90
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 65536,
							"category": 65536
						}
					],
					"x": 264,
					"y": 528,
					"rotation": 180
				}
			],
			"maxHealth": 2000,
			"cost": {
				"groundmaterials": 75
			},
			"repairCost": 100,
			"upgrades": {
				"foundation02t3": {
					"name": "Concrete Foundation Corner (1x1)",
					"codeName": "Foundation02T3",
					"description": "A foundation that provides a suitable surface for constructing Facilities.",
					"icon": "game/Textures/UI/StructureIcons/ConcreteFoundation02Icon.webp",
					"texture": "game/Textures/Structures/concrete_foundation_corner.webp",
					"textureBorder": "game/Textures/Structures/concrete_foundation_border.webp",
					"garrisonSupplyMultiplier": 2,
					"cost": {
						"concrete": 5
					},
					"maxHealth": 3850,
					"repairCost": 100
				}
			}
		},
		"freighter": {
			"name": "BMS - Ironship",
			"codeName": "Freighter",
			"description": "The Basset Motor Society’s Ironship-class shipping vessel is used to freight shippable goods and heavy vehicles.",
			"category": "vehicles",
			"categoryOrder": 21,
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ 319.36,49.28,293.12,72.96,298.24,-69.76,322.56,-44.8,356.48,0.64 ]
				},
				{
					"shape": [ -345.6,90.88,-357.12,-1.92,-309.76,-126.08,184.32,-127.36,254.72,99.84,185.6,127.36,-302.72,126.72,-326.4,119.68 ]
				},
				{
					"shape": [ -309.76,-126.08,-357.12,-1.92,-346.24,-88.96,-331.52,-115.84 ]
				},
				{
					"shape": [ 247.68,-103.68,298.24,-69.76,293.12,72.96,254.72,99.84,184.32,-127.36 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/FreighterVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/freighter.webp"
		},
		"fuel_container": {
			"name": "Liquid Container",
			"codeName": "FuelContainer",
			"description": "A container for storing high volumes of liquids. Nearby structures and vehicles can refill directly from this container. ",
			"category": "shippables",
			"categoryOrder": 4,
			"sortLayer": "container",
			"icon": "game/Textures/UI/StructureIcons/FuelTankIcon.webp",
			"texture": "game/Textures/Structures/fuel_container.webp",
			"maxHealth": 1000,
			"cost": {
				"cloth": 100
			},
			"repairCost": 100
		},
		"fuel_silo": {
			"name": "Fuel Silo",
			"codeName": "FacilitySiloOil",
			"description": "An industrial silo for storing various types of Fuel.",
			"category": "factories",
			"categoryOrder": 80,
			"color": 1052688,
			"radius": 1.25,
			"icon": "game/Textures/UI/StructureIcons/OilSiloIcon.webp",
			"texture": "game/Textures/Structures/fuel_silo.webp",
			"textureIcon": {
				"width": 64,
				"height": 96
			},
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 98,
					"y": 264,
					"rotation": 180
				},
				{
					"id": 1,
					"name": "pipeout",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "out",
					"x": 98,
					"y": 0,
					"rotation": 0
				}
			],
			"techId": "unlockfacilitytier2",
			"liquidCapacity": 500,
			"maxHealth": 900,
			"cost": {
				"facilitymaterials1": 15
			},
			"repairCost": 100
		},
		"gatet1": {
			"name": "Gate (Tier 1)",
			"codeName": "GateT1",
			"description": "A gate that provides access to a walled off area.",
			"category": "defenses",
			"categoryOrder": 4,
			"sortLayer": "wall",
			"icon": "game/Textures/UI/StructureIcons/Gate-T1Icon.webp",
			"texture": "game/Textures/Structures/gatet1.webp",
			"canSnap": true,
			"canSnapRotate": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 512,
							"category": 512
						}
					],
					"texture": "game/Textures/Structures/wallsplinet1_post.webp",
					"textureAlt": "game/Textures/Structures/wallsplinet1_post.webp",
					"x": 18,
					"y": 40,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 512,
							"category": 512
						}
					],
					"texture": "game/Textures/Structures/wallsplinet1_post.webp",
					"textureAlt": "game/Textures/Structures/wallsplinet1_post.webp",
					"x": 1552,
					"y": 40,
					"rotation": 90
				}
			],
			"maxHealth": 500,
			"cost": {
				"cloth": 25
			},
			"repairCost": 25,
			"upgrades": {
				"gatet2": {
					"name": "Gate (Tier 2)",
					"codeName": "GateT2",
					"description": "A gate that provides access to a walled off area.",
					"icon": "game/Textures/UI/StructureIcons/Gate-T2Icon.webp",
					"texture": "game/Textures/Structures/gatet2.webp",
					"techId": "unlockgatetier2",
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 512,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet2_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet2_post.webp",
							"x": 18,
							"y": 22,
							"rotation": 270
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 512,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet2_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet2_post.webp",
							"x": 1552,
							"y": 22,
							"rotation": 90
						}
					],
					"cost": {
						"cloth": 50
					},
					"maxHealth": 1000,
					"repairCost": 50
				},
				"gatet3": {
					"name": "Gate (Tier 3)",
					"codeName": "GateT3",
					"description": "A gate that provides access to a walled off area.",
					"icon": "game/Textures/UI/StructureIcons/Gate-T3Icon.webp",
					"texture": "game/Textures/Structures/gatet3.webp",
					"techId": "unlockgatetier3",
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 512,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet3_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet3_post.webp",
							"x": 18,
							"y": 38,
							"rotation": 270
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 512,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet3_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet3_post.webp",
							"x": 1552,
							"y": 38,
							"rotation": 90
						}
					],
					"cost": {
						"concrete": 15
					},
					"maxHealth": 3000,
					"repairCost": 75
				}
			}
		},
		"harvester": {
			"name": "BMS - Scrap Hauler",
			"codeName": "Harvester",
			"description": "The Scrap Hauler, designed by the Bassett Motor Society is a heavy-duty piece of machinery designed to reduce scrap metal and other materials into usable, raw resources. Scrap Haulers are often used to extract battlefield resources following skirmishes.",
			"category": "vehicles",
			"categoryOrder": 8,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/Harvester.webp",
			"texture": "game/Textures/Vehicles/harvester.webp",
			"techId": "unlockharvester"
		},
		"large_assembly_factory": {
			"name": "Large Assembly Station",
			"codeName": "FacilityVehicleFactory2",
			"description": "A large Assembly Station for production of advanced vehicles and equipment, such as tanks and trains. Construction will take time and may be halted if resources are depleted.",
			"category": "factories",
			"categoryOrder": 20,
			"color": 8184298,
			"icon": "game/Textures/UI/ItemIcons/LargeAssemblyStationIcon.webp",
			"texture": "game/Textures/Structures/large_assembly_factory.webp",
			"textureIcon": {
				"width": 160,
				"height": 160
			},
			"power": -8,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 69,
					"y": 108,
					"rotation": 0
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 2700,
			"cost": {
				"facilitymaterials2": 250
			},
			"repairCost": 150,
			"_productionLength": 5,
			"production": [
				{
					"id": 0,
					"input": {
						"facilitymaterials2": 200,
						"facilitymaterials4": 60,
						"facilitymaterials7": 50
					},
					"output": {
						"trainengine": 1
					},
					"time": 21600
				},
				{
					"id": 1,
					"input": {
						"facilitymaterials2": 20,
						"facilitymaterials5": 15,
						"facilitymaterials6": 5
					},
					"output": {
						"traincoal": 1
					},
					"time": 1800
				},
				{
					"id": 2,
					"input": {
						"facilitymaterials2": 20,
						"facilitymaterials5": 15,
						"facilitymaterials6": 5
					},
					"output": {
						"traininfantry": 1
					},
					"time": 1800
				},
				{
					"id": 3,
					"input": {
						"facilitymaterials2": 20,
						"facilitymaterials5": 15,
						"facilitymaterials6": 10
					},
					"output": {
						"trainflatbed": 1
					},
					"time": 1800
				},
				{
					"id": 4,
					"input": {
						"facilitymaterials2": 20,
						"facilitymaterials5": 15,
						"facilitymaterials6": 5
					},
					"output": {
						"traincaboose": 1
					},
					"time": 1800
				}
			],
			"upgrades": {
				"train_assembly": {
					"name": "Train Assembly",
					"codeName": "TrainAssembly",
					"description": "An assembly station for producing train cars.",
					"icon": "game/Textures/UI/ItemIcons/TrainAssemblyStation.webp",
					"texture": "game/Textures/Structures/large_assembly_factory_train_assembly.webp",
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 150
					},
					"_productionLength": 3,
					"production": [
						{
							"id": 0,
							"input": {
								"facilitymaterials3": 30,
								"facilitymaterials4": 30,
								"facilitymaterials7": 30
							},
							"output": {
								"traincombatcarc": 1
							},
							"faction": "c",
							"time": 1800
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials3": 30,
								"facilitymaterials4": 30,
								"facilitymaterials7": 30
							},
							"output": {
								"traincombatcarw": 1
							},
							"faction": "w",
							"time": 1800
						},
						{
							"id": 2,
							"input": {
								"facilitymaterials3": 285,
								"facilitymaterials6": 95,
								"facilitymaterials7": 105,
								"facilitymaterials8": 175
							},
							"output": {
								"trainlrartillery": 1
							},
							"time": 259200
						}
					]
				},
				"heavy_tank_assembly": {
					"name": "Heavy Tank Assembly",
					"codeName": "HeavyTankAssembly",
					"description": "An assembly station for producing heavy tank class vehicles.",
					"icon": "game/Textures/UI/ItemIcons/HeavyTankAssemblyStation.webp",
					"texture": "game/Textures/Structures/large_assembly_factory_heavy_tank_assembly.webp",
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 150
					},
					"_productionLength": 6,
					"production": [
						{
							"id": 2,
							"input": {
								"facilitymaterials3": 275,
								"facilitymaterials8": 175,
								"facilitymaterials6": 105,
								"facilitymaterials7": 95
							},
							"output": {
								"supertankc": 1
							},
							"faction": "c",
							"time": 172800
						},
						{
							"id": 3,
							"input": {
								"facilitymaterials3": 275,
								"facilitymaterials8": 175,
								"facilitymaterials6": 105,
								"facilitymaterials7": 95
							},
							"output": {
								"supertankw": 1
							},
							"faction": "w",
							"time": 172800
						},
						{
							"id": 0,
							"input": {
								"facilitymaterials3": 50,
								"facilitymaterials6": 30,
								"facilitymaterials7": 60,
								"facilitymaterials8": 35
							},
							"output": {
								"battletankc": 1
							},
							"faction": "c",
							"time": 64800
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials3": 50,
								"facilitymaterials6": 30,
								"facilitymaterials7": 60,
								"facilitymaterials8": 35
							},
							"output": {
								"battletankw": 1
							},
							"faction": "w",
							"time": 64800
						},
						{
							"id": 4,
							"input": {
								"facilitymaterials3": 60,
								"facilitymaterials6": 65,
								"facilitymaterials7": 45,
								"facilitymaterials8": 65
							},
							"output": {
								"battletankatc": 1
							},
							"faction": "c",
							"time": 86400
						},
						{
							"id": 5,
							"input": {
								"facilitymaterials3": 55,
								"facilitymaterials6": 65,
								"facilitymaterials7": 30,
								"facilitymaterials8": 45
							},
							"output": {
								"battletankdefensivew": 1
							},
							"faction": "w",
							"time": 79200
						}
					]
				}
			}
		},
		"light_vehicle_assembly_station": {
			"name": "Small Assembly Station",
			"codeName": "FacilityVehicleFactory1",
			"description": "A standard Assembly Station for production of essential vehicles and equipment. Construction will take time and may be halted if resources are depleted. Some projects require a base vehicle to be present on the Assembly Station before production can begin.",
			"category": "factories",
			"categoryOrder": 15,
			"color": 8184298,
			"icon": "game/Textures/UI/ItemIcons/AssemblyStationIcon.webp",
			"texture": "game/Textures/Structures/light_vehicle_assembly_station.webp",
			"textureIcon": {
				"width": 160,
				"height": 160
			},
			"power": -2,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 108,
					"y": 41,
					"rotation": 0
				}
			],
			"maxHealth": 3600,
			"cost": {
				"facilitymaterials1": 75
			},
			"repairCost": 150,
			"_productionLength": 13,
			"production": [
				{
					"id": 0,
					"input": {
						"cloth": 25
					},
					"output": {
						"materialplatform": 1
					},
					"time": 5
				},
				{
					"id": 1,
					"input": {
						"motorcyclec": 1,
						"facilitymaterials1": 5
					},
					"output": {
						"motorcycleoffensivec": 1
					},
					"faction": "c",
					"time": 180
				},
				{
					"id": 3,
					"input": {
						"truckc": 1,
						"facilitymaterials1": 10
					},
					"output": {
						"truckmobilityc": 1
					},
					"faction": "c",
					"time": 300
				},
				{
					"id": 4,
					"input": {
						"truckc": 1,
						"facilitymaterials1": 10
					},
					"output": {
						"truckoffensivec": 1
					},
					"faction": "c",
					"time": 300
				},
				{
					"id": 5,
					"input": {
						"truckw": 1,
						"facilitymaterials1": 10
					},
					"output": {
						"truckdefensivew": 1
					},
					"faction": "w",
					"time": 300
				},
				{
					"id": 6,
					"input": {
						"truckw": 1,
						"facilitymaterials1": 10
					},
					"output": {
						"truckmobilityw": 1
					},
					"faction": "w",
					"time": 300
				},
				{
					"id": 7,
					"input": {
						"facilitymaterials1": 125,
						"facilitymaterials4": 10,
						"facilitymaterials5": 20
					},
					"output": {
						"smalltrainengine": 1
					},
					"time": 900
				},
				{
					"id": 8,
					"input": {
						"facilitymaterials1": 35,
						"facilitymaterials4": 15,
						"facilitymaterials5": 5
					},
					"output": {
						"smalltraindump": 1
					},
					"time": 300
				},
				{
					"id": 9,
					"input": {
						"facilitymaterials1": 35,
						"facilitymaterials4": 15,
						"facilitymaterials5": 5
					},
					"output": {
						"smalltrainresourceplatform": 1
					},
					"time": 300
				},
				{
					"id": 10,
					"input": {
						"ambulancec": 1,
						"facilitymaterials1": 15,
						"facilitymaterials5": 5
					},
					"output": {
						"ambulanceflamec": 1
					},
					"faction": "c",
					"time": 300
				},
				{
					"id": 11,
					"input": {
						"ambulancew": 1,
						"facilitymaterials1": 15,
						"facilitymaterials5": 5
					},
					"output": {
						"ambulanceflamew": 1
					},
					"faction": "w",
					"time": 300
				},
				{
					"id": 12,
					"input": {
						"facilitymaterials1": 35,
						"facilitymaterials4": 5,
						"facilitymaterials5": 15
					},
					"output": {
						"smalltrainfuelcontainer": 1
					},
					"time": 300
				}
			],
			"upgrades": {
				"motor_pool": {
					"name": "Motor Pool",
					"codeName": "MotorPool",
					"description": "An assembly station for producing light-duty logistics vehicles like trucks.",
					"icon": "game/Textures/UI/ItemIcons/MotorPoolAssemblyIcon.webp",
					"texture": "game/Textures/Structures/light_vehicle_assembly_station_motor_pool.webp",
					"cost": {
						"facilitymaterials1": 200
					},
					"_productionLength": 12,
					"production": [
						{
							"id": 0,
							"input": {
								"armoredcarc": 1,
								"facilitymaterials2": 5,
								"facilitymaterials4": 10
							},
							"output": {
								"armoredcaroffensivec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 1,
							"input": {
								"armoredcarc": 1,
								"facilitymaterials1": 10,
								"facilitymaterials4": 10
							},
							"output": {
								"armoredcartwinc": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 2,
							"input": {
								"tankettec": 1,
								"facilitymaterials1": 10,
								"facilitymaterials4": 15
							},
							"output": {
								"tanketteoffensivec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 3,
							"input": {
								"tankettec": 1,
								"facilitymaterials2": 10,
								"facilitymaterials4": 15
							},
							"output": {
								"tanketteflamec": 1
							},
							"faction": "c",
							"time": 600
						},
						{
							"id": 4,
							"input": {
								"scoutvehiclemobilityc": 1,
								"facilitymaterials1": 3
							},
							"output": {
								"scoutvehicleutilityc": 1
							},
							"faction": "c",
							"time": 180
						},
						{
							"id": 5,
							"input": {
								"scoutvehiclemobilityc": 1,
								"facilitymaterials1": 3,
								"facilitymaterials5": 10
							},
							"output": {
								"scoutvehicleoffensivec": 1
							},
							"faction": "c",
							"time": 180
						},
						{
							"id": 6,
							"input": {
								"armoredcarw": 1,
								"facilitymaterials2": 10,
								"facilitymaterials4": 10
							},
							"output": {
								"armoredcaratw": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 7,
							"input": {
								"armoredcarw": 1,
								"facilitymaterials1": 5,
								"facilitymaterials4": 5
							},
							"output": {
								"armoredcarmobilityw": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 8,
							"input": {
								"armoredcarw": 1,
								"facilitymaterials2": 10,
								"facilitymaterials4": 10
							},
							"output": {
								"armoredcarflamew": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 9,
							"input": {
								"armoredcartwinw": 1,
								"facilitymaterials1": 15,
								"facilitymaterials4": 15
							},
							"output": {
								"armoredcaroffensivew": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 10,
							"input": {
								"scoutvehiclew": 1,
								"facilitymaterials1": 3,
								"facilitymaterials5": 10
							},
							"output": {
								"scoutvehicleoffensivew": 1
							},
							"faction": "w",
							"time": 180
						},
						{
							"id": 11,
							"input": {
								"scoutvehiclew": 1,
								"facilitymaterials1": 3,
								"facilitymaterials5": 5
							},
							"output": {
								"scoutvehicleutilityw": 1
							},
							"faction": "w",
							"time": 180
						}
					]
				},
				"rocket_factory": {
					"name": "Rocket Factory",
					"codeName": "ArtilleryFactory",
					"description": "An assembly station for producing half-tracks and rocket vehicles.",
					"icon": "game/Textures/UI/ItemIcons/ArtilleryFactoryIcon.webp",
					"texture": "game/Textures/Structures/light_vehicle_assembly_station_rocket_factory.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 65
					},
					"_productionLength": 7,
					"production": [
						{
							"id": 0,
							"input": {
								"truckc": 1,
								"facilitymaterials2": 70,
								"facilitymaterials4": 10,
								"facilitymaterials6": 8
							},
							"output": {
								"truckmultic": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials2": 20,
								"facilitymaterials5": 15,
								"facilitymaterials7": 3
							},
							"output": {
								"emplacedmultic": 1
							},
							"faction": "c",
							"time": 600
						},
						{
							"id": 4,
							"input": {
								"halftrackw": 1,
								"facilitymaterials2": 10,
								"facilitymaterials4": 10,
								"facilitymaterials6": 8
							},
							"output": {
								"halftrackmultiw": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 5,
							"input": {
								"facilitymaterials2": 20,
								"facilitymaterials5": 15,
								"facilitymaterials7": 3
							},
							"output": {
								"fieldmultiw": 1
							},
							"faction": "w",
							"time": 600
						},
						{
							"id": 2,
							"input": {
								"halftrackc": 1,
								"facilitymaterials2": 3,
								"facilitymaterials7": 3
							},
							"output": {
								"halftrackdefensivec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 3,
							"input": {
								"halftrackc": 1,
								"facilitymaterials2": 5,
								"facilitymaterials5": 5,
								"facilitymaterials7": 3
							},
							"output": {
								"halftrackartilleryc": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 6,
							"input": {
								"halftrackw": 1,
								"facilitymaterials2": 5,
								"facilitymaterials5": 10,
								"facilitymaterials7": 3
							},
							"output": {
								"halftrackoffensivew": 1
							},
							"faction": "w",
							"time": 300
						}
					]
				},
				"field_station": {
					"name": "Field Station",
					"codeName": "LightVehicleAssembly",
					"description": "An assembly station for producing field weapons and utility vehicles such as Harvesters.",
					"icon": "game/Textures/UI/ItemIcons/LightVehicleAssemblyIcon.webp",
					"texture": "game/Textures/Structures/light_vehicle_assembly_station_field_station.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 25
					},
					"_productionLength": 7,
					"production": [
						{
							"id": 0,
							"input": {
								"facilitymaterials2": 90,
								"facilitymaterials7": 25
							},
							"output": {
								"harvester": 1
							},
							"time": 900
						},
						{
							"id": 6,
							"input": {
								"construction": 1,
								"facilitymaterials2": 10
							},
							"output": {
								"constructionutility": 1
							},
							"time": 900
						},
						{
							"id": 1,
							"input": {
								"mortartankc": 1,
								"facilitymaterials1": 5
							},
							"output": {
								"lighttank2infantryc": 1
							},
							"faction": "c",
							"time": 180
						},
						{
							"id": 2,
							"input": {
								"landingcraftc": 1,
								"facilitymaterials2": 5,
								"facilitymaterials6": 3
							},
							"output": {
								"landingcraftoffensivec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 3,
							"input": {
								"fieldatc": 1,
								"facilitymaterials2": 5,
								"facilitymaterials7": 5
							},
							"output": {
								"fieldcannondamagec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 4,
							"input": {
								"scouttankw": 1,
								"facilitymaterials2": 5,
								"facilitymaterials6": 5
							},
							"output": {
								"scouttankoffensivew": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 5,
							"input": {
								"fieldatw": 1,
								"facilitymaterials2": 5,
								"facilitymaterials7": 5
							},
							"output": {
								"fieldatdamagew": 1
							},
							"faction": "w",
							"time": 300
						}
					]
				},
				"tank_factory": {
					"name": "Tank Factory",
					"codeName": "TankAssembly",
					"description": "An assembly station for producing tank class vehicles.",
					"icon": "game/Textures/UI/ItemIcons/TankAssemblyIcon.webp",
					"texture": "game/Textures/Structures/light_vehicle_assembly_station_tank_factory.webp",
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 200
					},
					"_productionLength": 12,
					"production": [
						{
							"id": 6,
							"input": {
								"destroyertankw": 1,
								"facilitymaterials2": 10,
								"facilitymaterials5": 10,
								"facilitymaterials6": 15
							},
							"output": {
								"destroyertankflamew": 1
							},
							"faction": "w",
							"time": 420
						},
						{
							"id": 0,
							"input": {
								"lighttankc": 1,
								"facilitymaterials2": 35,
								"facilitymaterials5": 20,
								"facilitymaterials6": 5
							},
							"output": {
								"lighttankflamec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 1,
							"input": {
								"lighttankc": 1,
								"facilitymaterials2": 8,
								"facilitymaterials5": 20,
								"facilitymaterials6": 5
							},
							"output": {
								"lighttankoffensivec": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 2,
							"input": {
								"lighttankc": 1,
								"facilitymaterials2": 5,
								"facilitymaterials4": 20,
								"facilitymaterials7": 5
							},
							"output": {
								"lighttankmobilityc": 1
							},
							"faction": "c",
							"time": 300
						},
						{
							"id": 3,
							"input": {
								"mediumtankc": 1,
								"facilitymaterials2": 8,
								"facilitymaterials4": 10,
								"facilitymaterials7": 8
							},
							"output": {
								"mediumtankoffensivec": 1
							},
							"faction": "c",
							"time": 420
						},
						{
							"id": 4,
							"input": {
								"mediumtank2c": 1,
								"facilitymaterials2": 10,
								"facilitymaterials5": 10,
								"facilitymaterials6": 10
							},
							"output": {
								"mediumtank2twinc": 1
							},
							"faction": "c",
							"time": 420
						},
						{
							"id": 5,
							"input": {
								"facilitymaterials2": 135,
								"facilitymaterials4": 10,
								"facilitymaterials7": 15
							},
							"output": {
								"emplacedcannonlargec": 1
							},
							"faction": "c",
							"time": 600
						},
						{
							"id": 7,
							"input": {
								"lighttankw": 1,
								"facilitymaterials2": 8,
								"facilitymaterials5": 20,
								"facilitymaterials6": 5
							},
							"output": {
								"lighttankdefensivew": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 8,
							"input": {
								"lighttankw": 1,
								"facilitymaterials2": 3,
								"facilitymaterials4": 20,
								"facilitymaterials7": 3
							},
							"output": {
								"lighttankartilleryw": 1
							},
							"faction": "w",
							"time": 300
						},
						{
							"id": 9,
							"input": {
								"mediumtankw": 1,
								"facilitymaterials2": 5,
								"facilitymaterials4": 10,
								"facilitymaterials7": 8
							},
							"output": {
								"mediumtanksiegew": 1
							},
							"faction": "w",
							"time": 420
						},
						{
							"id": 10,
							"input": {
								"mediumtank2rangew": 1,
								"facilitymaterials2": 5,
								"facilitymaterials5": 10,
								"facilitymaterials6": 5
							},
							"output": {
								"mediumtank2multiw": 1
							},
							"faction": "w",
							"time": 420
						},
						{
							"id": 11,
							"input": {
								"facilitymaterials2": 135,
								"facilitymaterials4": 10,
								"facilitymaterials7": 15
							},
							"output": {
								"emplacedatlargew": 1
							},
							"faction": "w",
							"time": 600
						}
					]
				},
				"weapons_platform": {
					"name": "Weapons Platform",
					"codeName": "WeaponsPlatformAssembly",
					"description": "An assembly station for producing emplaced weapon platforms and specialized tanks.",
					"icon": "game/Textures/UI/ItemIcons/WeaponPlatfromAssemblyIcon.webp",
					"texture": "game/Textures/Structures/light_vehicle_assembly_station_weapons_platform.webp",
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 20
					},
					"_productionLength": 5,
					"production": [
						{
							"id": 0,
							"input": {
								"fieldatc": 1,
								"facilitymaterials3": 15,
								"facilitymaterials5": 20,
								"facilitymaterials6": 15
							},
							"output": {
								"fieldatlargec": 1
							},
							"faction": "c",
							"time": 420
						},
						{
							"id": 2,
							"input": {
								"fieldcannonw": 1,
								"facilitymaterials3": 15,
								"facilitymaterials5": 20,
								"facilitymaterials6": 15
							},
							"output": {
								"fieldcannonlargew": 1
							},
							"faction": "w",
							"time": 420
						},
						{
							"id": 1,
							"input": {
								"mediumtankc": 1,
								"facilitymaterials3": 5,
								"facilitymaterials4": 10,
								"facilitymaterials7": 15
							},
							"output": {
								"mediumtanklargec": 1
							},
							"faction": "c",
							"time": 600
						},
						{
							"id": 3,
							"input": {
								"mediumtank2rangew": 1,
								"facilitymaterials3": 10,
								"facilitymaterials4": 10,
								"facilitymaterials7": 15
							},
							"output": {
								"mediumtank2indirectw": 1
							},
							"faction": "w",
							"time": 600
						},
						{
							"id": 4,
							"input": {
								"mediumtankw": 1,
								"facilitymaterials3": 35,
								"facilitymaterials5": 15,
								"facilitymaterials6": 25
							},
							"output": {
								"mediumtankatw": 1
							},
							"faction": "w",
							"time": 600
						}
					]
				}
			}
		},
		"liquid_transfer_station": {
			"name": "Liquid Transfer Station",
			"codeName": "FacilityResourceTransfer3",
			"description": "Metal drums for storing various fuels that can be transferred into and out of Facilities. Stockpiles may be public or reserved.",
			"category": "factories",
			"categoryOrder": 55,
			"color": 8186514,
			"icon": "game/Textures/UI/ItemIcons/MaterialTransferStationLiquidIcon.webp",
			"texture": "game/Textures/Structures/liquid_transfer_station.webp",
			"textureIcon": {
				"y": -52
			},
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 13,
					"y": 431,
					"rotation": 270
				},
				{
					"id": 1,
					"name": "pipeout",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "out",
					"x": 13,
					"y": 154,
					"rotation": 270
				}
			],
			"maxHealth": 2200,
			"cost": {
				"facilitymaterials1": 35
			},
			"repairCost": 100
		},
		"maintenance_tunnel": {
			"name": "Maintenance Tunnel",
			"codeName": "MaintenanceTunnel",
			"description": "Prevents the decay of nearby structures when supplied.",
			"category": "misc",
			"color": 1052688,
			"radius": 2,
			"sortLayer": "resource",
			"maxRange": 100,
			"icon": "game/Textures/UI/StructureIcons/TunnelNetworkStructureIcon.webp",
			"texture": "game/Textures/Structures/maintenance_tunnel.webp",
			"textureIcon": {
				"width": 96,
				"height": 96
			},
			"maxHealth": 3000,
			"cost": {
				"cloth": 50
			},
			"repairCost": 100
		},
		"material_transfer_station": {
			"name": "Material Transfer Station",
			"codeName": "FacilityResourceTransfer2",
			"description": "A space marked for storing refined materials that can be transferred into and out of Facilities. Stockpiles may be public or reserved.",
			"category": "factories",
			"categoryOrder": 50,
			"color": 8186514,
			"icon": "game/Textures/UI/ItemIcons/FacilityResourceTransfer3Icon.webp",
			"texture": "game/Textures/Structures/material_transfer_station.webp",
			"textureIcon": {
				"y": -52
			},
			"maxHealth": 2200,
			"cost": {
				"facilitymaterials1": 35
			},
			"repairCost": 100
		},
		"materialplatform": {
			"name": "Material Pallet",
			"codeName": "MaterialPlatform",
			"description": "A material pallet.",
			"category": "shippables",
			"categoryOrder": 1,
			"icon": "game/Textures/UI/ItemIcons/MaterialPlatformItemIcon.webp",
			"texture": "game/Textures/Structures/material_platform.webp",
			"maxHealth": 1000,
			"cost": {
				"cloth": 25
			},
			"repairCost": 50
		},
		"materials_factory": {
			"name": "Materials Factory",
			"codeName": "FacilityRefinery1",
			"description": "A factory that refines raw resources into Construction Materials for advanced facilities. Additional modifications allow for the development of a variety of different materials.",
			"category": "factories",
			"hitArea": [
				{
					"shape": [ 41.28,192.32,22.72,-187.2,93.76,-117.44,94.4,143.04,84.8,192.32 ]
				},
				{
					"shape": [ 122.56,-163.52,112.96,-134.08,93.76,-117.44,22.72,-187.2,44.48,-210.24,75.84,-216,111.68,-197.44 ]
				},
				{
					"shape": [ 12.48,-196.16,22.72,-187.2,-77.76,192.32,-121.28,192.32,-121.28,-194.88 ]
				},
				{
					"shape": [ -77.12,211.52,-77.76,192.32,22.72,-187.2,41.92,211.52 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/MetalworksFactoryBase.webp",
			"texture": "game/Textures/Structures/materials_factory.webp",
			"power": -2,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 324,
					"y": 1287,
					"rotation": 180
				}
			],
			"maxHealth": 3000,
			"cost": {
				"cloth": 200
			},
			"repairCost": 150,
			"_productionLength": 2,
			"production": [
				{
					"id": 0,
					"input": {
						"metal": 10
					},
					"output": {
						"facilitymaterials1": 1
					},
					"time": 25
				},
				{
					"id": 1,
					"input": {
						"metal": 100
					},
					"output": {
						"maintenancesupplies": 20
					},
					"time": 25,
					"power": -3
				}
			],
			"upgrades": {
				"forge": {
					"name": "Forge",
					"codeName": "Forge",
					"description": "A unique factory for forging specialized machinery parts needed to construct vehicles. Requires Coke or Petrol.",
					"hitArea": [
						{
							"shape": [ -99.2,195.52,116.48,-121.28,116.48,146.24,106.88,195.52 ]
						},
						{
							"shape": [ 48.64,-215.36,116.48,-121.28,-10.88,-187.2,-10.24,-217.92 ]
						},
						{
							"shape": [ -127.36,-172.48,-118.4,-191.04,-99.2,-201.92,-77.44,-200.64,-57.6,-185.92,-99.2,-131.52,-120.96,-145.6 ]
						},
						{
							"shape": [ -10.88,-187.2,116.48,-121.28,-99.2,195.52,-99.2,-131.52,-57.6,-185.92 ]
						},
						{
							"shape": [ 116.48,-121.28,48.64,-215.36,72.32,-220.48,98.56,-214.08,115.2,-199.36,128.64,-169.28 ]
						},
						{
							"shape": [ -55.68,195.52,63.36,195.52,63.36,213.44,-55.04,214.72 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityForgeIcon.webp",
					"texture": "game/Textures/Structures/materials_factory_forge.webp",
					"positionOffset": {
						"x": -69,
						"y": -10
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 412,
							"y": 1306,
							"rotation": 180
						},
						{
							"id": 1,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 360,
							"y": 54,
							"rotation": 270
						}
					],
					"cost": {
						"facilitymaterials1": 200
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"metal": 15,
								"facilitycoal1": 75
							},
							"output": {
								"facilitymaterials4": 1
							},
							"time": 60
						},
						{
							"id": 1,
							"input": {
								"metal": 15,
								"petrol": 50
							},
							"output": {
								"facilitymaterials5": 1
							},
							"time": 60
						}
					]
				},
				"metal_press": {
					"name": "Metal Press",
					"codeName": "MetalPress",
					"description": "A heavy automatic press that refines materials into a denser form.",
					"hitArea": [
						{
							"shape": [ 122.24,-127.36,103.04,-128.64,44.8,-184.32,122.24,-185.6 ]
						},
						{
							"shape": [ 51.2,174.72,-111.36,-77.44,44.8,-184.32,103.04,-128.64,104.32,125.44,94.72,174.72 ]
						},
						{
							"shape": [ -93.44,-176.64,-118.4,-118.4,-124.16,-120.96,-123.52,-176.64 ]
						},
						{
							"shape": [ -58.88,-197.12,48,-197.12,41.6,-195.84,-64.64,-195.84 ]
						},
						{
							"shape": [ -111.36,-77.44,-67.84,174.72,-111.36,174.72 ]
						},
						{
							"shape": [ -67.84,174.72,51.2,192.64,-67.2,193.92 ]
						},
						{
							"shape": [ -111.36,-77.44,51.2,174.72,51.2,192.64,-67.84,174.72 ]
						},
						{
							"shape": [ -118.4,-118.4,-93.44,-176.64,-92.8,-167.04,-111.36,-77.44,-117.12,-93.44 ]
						},
						{
							"shape": [ -111.36,-77.44,-62.08,-167.04,41.6,-195.84,44.8,-184.32 ]
						},
						{
							"shape": [ -62.08,-167.04,-111.36,-77.44,-92.8,-167.04 ]
						},
						{
							"shape": [ -58.24,-195.84,41.6,-195.84,-62.08,-167.04 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityMetalPressIcon.webp",
					"texture": "game/Textures/Structures/materials_factory_metal_press.webp",
					"positionOffset": {
						"x": -32,
						"y": 55
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 363,
							"y": 1177,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 51,
							"y": 66,
							"rotation": 0
						}
					],
					"cost": {
						"facilitymaterials1": 25
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"metal": 15,
								"petrol": 25
							},
							"output": {
								"facilitymaterials1": 3
							},
							"time": 25,
							"power": -4
						}
					]
				},
				"recycler": {
					"name": "Assembly Bay",
					"codeName": "Recycler",
					"description": "An assembly bay with specialized equipment for quickly building and packing materials needed on the frontline.",
					"hitArea": [
						{
							"shape": [ 16.32,-176.32,0.96,-163.52,1.6,-176.32 ]
						},
						{
							"shape": [ -64.96,185.92,0.96,-163.52,16.32,-176.32,107.84,-130.88,107.2,136.64,97.6,185.92 ]
						},
						{
							"shape": [ -16.32,-176.32,-11.84,-164.16,-64.96,185.92,-96.96,-155.2,-96.96,-176.32 ]
						},
						{
							"shape": [ 107.84,-130.88,16.32,-176.32,72,-176.32,101.44,-165.44 ]
						},
						{
							"shape": [ -32.32,-200,-26.56,-176.32,-82.24,-176.32,-75.84,-198.72,-56,-210.88 ]
						},
						{
							"shape": [ 64.32,-200,72,-176.32,16.32,-176.32,22.72,-200,43.2,-210.24 ]
						},
						{
							"shape": [ -64.96,185.92,54.08,185.92,54.08,204.48,-64.32,205.12 ]
						},
						{
							"shape": [ -108.48,-155.2,-96.96,-155.2,-64.96,185.92,-108.48,185.92 ]
						},
						{
							"shape": [ -64.96,185.92,-11.84,-164.16,0.96,-163.52 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityRecyclerIcon.webp",
					"texture": "game/Textures/Structures/materials_factory_recycler.webp",
					"positionOffset": {
						"x": -41,
						"y": 21
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 324,
							"y": 1246,
							"rotation": 180
						}
					],
					"cost": {
						"cloth": 50
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"metal": 25
							},
							"output": {
								"facilitymaterials1": 1,
								"sandbagmaterials": 5
							},
							"time": 25
						},
						{
							"id": 1,
							"input": {
								"metal": 25
							},
							"output": {
								"facilitymaterials1": 1,
								"barbedwirematerials": 5
							},
							"time": 25
						}
					]
				},
				"smelter": {
					"name": "Smelter",
					"codeName": "Smelter",
					"description": "An industrial smelter for melting down Salvage to remove impurities. Requires Coke.",
					"hitArea": [
						{
							"shape": [ -108.48,185.92,92.48,-170.56,104,-161.6,107.84,-130.88,107.2,136.64,97.6,185.92 ]
						},
						{
							"shape": [ 90.56,-207.04,92.48,-170.56,-108.48,185.92,-106.56,-154.56,-98.24,-206.4 ]
						},
						{
							"shape": [ -64.96,185.92,54.08,185.92,54.08,204.48,-64.32,205.12 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilitySmelterIcon.webp",
					"texture": "game/Textures/Structures/materials_factory_smelter.webp",
					"positionOffset": {
						"x": -41,
						"y": 21
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 324,
							"y": 1246,
							"rotation": 180
						}
					],
					"cost": {
						"facilitymaterials1": 25
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"metal": 15,
								"facilitycoal1": 25
							},
							"output": {
								"facilitymaterials1": 3
							},
							"time": 25,
							"power": -4
						}
					]
				}
			}
		},
		"metalworks_factory": {
			"name": "Metalworks Factory",
			"codeName": "FacilityRefinery2",
			"description": "A factory for refining raw resources into Processed Construction Materials. Additional modifications can allow for additional refined materials needed for advanced facility operations.",
			"category": "factories",
			"categoryOrder": 5,
			"hitArea": [
				{
					"shape": [ 153.28,84.8,54.72,84.8,54.08,-27.2,153.28,-27.2 ]
				},
				{
					"shape": [ 52.8,-189.12,54.08,-160.32,54.08,-27.2,-145.6,-15.68,-143.04,-189.12 ]
				},
				{
					"shape": [ -169.92,-13.12,5.44,101.44,5.44,201.28,-166.72,201.28 ]
				},
				{
					"shape": [ 86.08,-99.52,54.08,-99.52,54.08,-160.32,87.36,-160.32 ]
				},
				{
					"shape": [ 5.44,101.44,-169.92,-13.12,-145.6,-15.68,54.08,-27.2,54.72,84.8,54.08,99.52 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityRefinery2Icon.webp",
			"texture": "game/Textures/Structures/metalworks_factory.webp",
			"textureIcon": {
				"width": 160,
				"height": 160
			},
			"power": -5,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 295,
					"y": 1277,
					"rotation": 180
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 3000,
			"cost": {
				"facilitymaterials1": 125
			},
			"repairCost": 150,
			"_productionLength": 2,
			"production": [
				{
					"id": 0,
					"input": {
						"facilitymaterials1": 3,
						"components": 20
					},
					"output": {
						"facilitymaterials2": 1
					},
					"time": 60
				},
				{
					"id": 1,
					"input": {
						"facilitymaterials2": 3
					},
					"output": {
						"pipematerials": 1
					},
					"time": 120
				}
			],
			"upgrades": {
				"recycler": {
					"name": "Recycler",
					"codeName": "Recycler",
					"description": "Advanced sorting machinery for sifting piles of scrap metal for useful materials.",
					"hitArea": [
						{
							"shape": [ 57.28,-189.12,57.92,-153.28,-141.12,8,-139.2,-189.12 ]
						},
						{
							"shape": [ -167.36,24.64,9.92,144.32,9.92,201.28,-162.24,201.28 ]
						},
						{
							"shape": [ -141.12,8,-167.36,24.64,-160.96,7.36 ]
						},
						{
							"shape": [ 121.92,-57.92,82.24,-147.52,107.2,-160.32,138.56,-155.84,162.24,-132.16,159.04,-83.52 ]
						},
						{
							"shape": [ 120.64,77.12,120.64,-29.76,148.8,-13.12,165.44,15.04,159.04,54.72 ]
						},
						{
							"shape": [ 96.96,139.2,9.92,144.32,-167.36,24.64,-141.12,8,120.64,-29.76,120.64,77.12,115.52,128.32 ]
						},
						{
							"shape": [ 121.92,-57.92,120.64,-29.76,-141.12,8,57.92,-153.28,82.24,-147.52 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityRefinery2RecyclerIcon.webp",
					"texture": "game/Textures/Structures/metalworks_factory_recycler.webp",
					"positionOffset": {
						"x": -13
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 296,
							"y": 1277,
							"rotation": 180
						}
					],
					"cost": {
						"facilitymaterials1": 25
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"facilitymaterials1": 3,
								"components": 20
							},
							"output": {
								"facilitymaterials2": 1,
								"metalbeammaterials": 1
							},
							"time": 60
						},
						{
							"id": 1,
							"input": {
								"facilitycomponents1": 30
							},
							"output": {
								"components": 20
							},
							"time": 90,
							"power": -4
						}
					]
				},
				"blast_furnace": {
					"name": "Blast Furnace",
					"codeName": "BlastFurnace",
					"description": "A large industrial cauldron for liquefying metals to remove impurities from advanced materials.",
					"hitArea": [
						{
							"shape": [ -154.24,49.28,19.2,108.16,19.2,208,-152.96,208 ]
						},
						{
							"shape": [ -129.28,3.84,-154.24,49.28,-164.48,48.64,-166.4,4.48 ]
						},
						{
							"shape": [ 55.68,135.68,19.2,108.16,107.52,-31.36,158.08,7.04,174.08,58.88,155.52,107.52,112,139.52 ]
						},
						{
							"shape": [ 32.64,-182.4,-129.28,3.84,-129.92,-182.4,-79.36,-197.76,-24.32,-210.56,21.76,-201.6 ]
						},
						{
							"shape": [ -154.24,49.28,-129.28,3.84,84.48,-172.16,107.52,-172.16,107.52,-31.36,19.2,108.16 ]
						},
						{
							"shape": [ -24.32,-210.56,-79.36,-197.76,-77.44,-211.2 ]
						},
						{
							"shape": [ 84.48,-172.16,-129.28,3.84,32.64,-182.4,67.2,-181.12 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityBlastFurnaceIcon.webp",
					"texture": "game/Textures/Structures/metalworks_factory_blast_furnace.webp",
					"positionOffset": {
						"x": -42,
						"y": -22
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 336,
							"y": 1320,
							"rotation": 180
						},
						{
							"id": 1,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 293,
							"y": 52,
							"rotation": 270
						}
					],
					"cost": {
						"facilitymaterials2": 200
					},
					"_productionLength": 3,
					"production": [
						{
							"id": 0,
							"input": {
								"facilitymaterials2": 1,
								"facilityoil1": 66
							},
							"output": {
								"facilitymaterials7": 1
							},
							"time": 120
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials1": 3,
								"sulfur": 20
							},
							"output": {
								"facilitymaterials6": 1
							},
							"time": 120
						},
						{
							"id": 2,
							"input": {
								"facilitymaterials1": 3,
								"components": 55,
								"facilityoil1": 6
							},
							"output": {
								"facilitymaterials2": 3
							},
							"time": 60,
							"power": -8
						}
					]
				},
				"engineering_station": {
					"name": "Engineering Station",
					"codeName": "EngineeringStation",
					"description": "An expanded workshop for manual process of delicate materials.",
					"hitArea": [
						{
							"shape": [ 66.56,-179.84,104.32,-147.2,-128.64,0,-120.96,-179.84 ]
						},
						{
							"shape": [ -144,53.12,30.08,151.68,28.16,210.56,-144,210.56 ]
						},
						{
							"shape": [ 96,-210.56,104.32,-147.2,66.56,-179.84,68.48,-209.28 ]
						},
						{
							"shape": [ 30.08,151.68,-144,53.12,88.96,104.96,88.96,151.68 ]
						},
						{
							"shape": [ 154.88,-192,152.32,-111.36,123.52,-146.56,123.52,-192 ]
						},
						{
							"shape": [ -128.64,0,-144,53.12,-161.92,46.08,-169.6,16.64,-153.6,-1.28 ]
						},
						{
							"shape": [ 88.96,104.96,-144,53.12,-128.64,0,152.32,-111.36,170.88,-110.08,170.88,104.96 ]
						},
						{
							"shape": [ 152.32,-111.36,-128.64,0,104.32,-147.2,123.52,-146.56 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityEngineeringStationIcon.webp",
					"texture": "game/Textures/Structures/metalworks_factory_engineering_station.webp",
					"positionOffset": {
						"x": -70,
						"y": -29
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 357,
							"y": 1336,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 791,
							"y": 2,
							"rotation": 0
						},
						{
							"id": 3,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 968,
							"y": 58,
							"rotation": 0
						}
					],
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials2": 150
					},
					"_productionLength": 3,
					"production": [
						{
							"id": 0,
							"input": {
								"facilitymaterials2": 3,
								"facilitycoal1": 200,
								"sulfur": 65,
								"facilityoil1": 35
							},
							"output": {
								"facilitymaterials3": 1
							},
							"time": 90,
							"power": -9
						},
						{
							"id": 1,
							"input": {
								"facilitymaterials2": 9,
								"facilitycoal1": 375,
								"facilityoil2": 90,
								"water": 100
							},
							"output": {
								"facilitymaterials3": 3
							},
							"time": 90,
							"power": -12
						},
						{
							"id": 2,
							"input": {
								"facilitymaterials3": 3,
								"facilitycoal1": 245,
								"facilitymaterials4": 10,
								"facilitymaterials5": 10
							},
							"output": {
								"facilitymaterials8": 1
							},
							"time": 120,
							"power": -8
						}
					]
				}
			}
		},
		"mgpillbox": {
			"name": "Machine Gun Pillbox",
			"codeName": "MGPillbox",
			"description": "A well-fortified bunker position fitted with a mounted machinegun. Garrisoned infantry will lay down heavy suppressive fire upon approaching enemies from a fixed angle.",
			"category": "defenses",
			"categoryOrder": 7,
			"range": {
				"type": "killboxMG",
				"lineOfSight": true,
				"arc": 45,
				"max": 30
			},
			"hitArea": [
				{
					"shape": [ 90.88,1.28,49.28,76.8,-49.28,76.8,-93.44,1.92,-46.72,-80,46.72,-80 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/MGPillboxIcon.webp",
			"texture": "game/Textures/Structures/mgpillbox.webp",
			"techId": "unlockmgpillbox",
			"maxHealth": 650,
			"cost": {
				"cloth": 75
			},
			"repairCost": 75
		},
		"oil_refinery": {
			"name": "Oil Refinery",
			"codeName": "FacilityRefineryOil",
			"description": "A refinery that processes Oil into other useful materials for the purposes of production and power generation.",
			"category": "factories",
			"categoryOrder": 35,
			"color": 2368548,
			"hitArea": [
				{
					"shape": [ 64,-129.6,69.76,77.12,58.24,103.36,-37.76,166.08,-41.6,-129.6 ]
				},
				{
					"shape": [ -45.44,-104.64,-41.6,-91.84,-37.76,166.08,-65.82857147216797,118.2628564453125,-62.72,-103.36,-53.76,-111.04 ]
				},
				{
					"shape": [ 26.24,-129.6,-4.48,-129.6,-4.48,-174.4,26.88,-174.4 ]
				},
				{
					"shape": [ -37.76,166.08,58.24,103.36,58.24,166.08 ]
				},
				{
					"shape": [ -69.302857131958,119.725712890625,-65.82857147216797,118.2628564453125,-37.76,166.08,-39.04,173.76,-69.12,173.76 ]
				},
				{
					"shape": [ 58.24,103.36,69.76,77.12,64,103.36 ]
				}
			],
			"icon": "game/Textures/UI/ItemIcons/OilRefineryBaseIcon.webp",
			"texture": "game/Textures/Structures/oil_refinery.webp",
			"power": -1,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 255,
					"y": 149,
					"rotation": 0
				},
				{
					"id": 1,
					"name": "pipein",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 53,
					"y": 1104,
					"rotation": 180
				},
				{
					"id": 2,
					"name": "pipeout",
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "out",
					"x": 255,
					"y": 2,
					"rotation": 0
				}
			],
			"maxHealth": 3000,
			"cost": {
				"facilitymaterials1": 50
			},
			"repairCost": 150,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"oil": 150
					},
					"output": {
						"petrol": 150
					},
					"time": 150
				}
			],
			"upgrades": {
				"reformer": {
					"name": "Reformer",
					"codeName": "Reformer",
					"description": "A large processing drum that allows for the controlled introduction of hydrogen to yield a similar output of Petrol for less raw Oil. ",
					"hitArea": [
						{
							"shape": [ -5.76,-153.28,-41.6,-115.52,-41.6,-153.28 ]
						},
						{
							"shape": [ 26.24,-153.92,-5.76,-153.28,-4.48,-198.72,26.88,-198.72 ]
						},
						{
							"shape": [ -46.72,-130.24,-41.6,-115.52,-64.64,-115.52,-61.44,-129.6,-53.76,-135.36 ]
						},
						{
							"shape": [ 8.96,152,39.68,152,39.04,198.72,9.6,200 ]
						},
						{
							"shape": [ 39.68,152,67.84,101.44,63.36,152.64 ]
						},
						{
							"shape": [ -69.12,150.72,-64.64,-115.52,-41.6,-115.52,67.84,101.44,39.68,152 ]
						},
						{
							"shape": [ 26.24,-153.92,63.36,-153.28,67.84,101.44,-41.6,-115.52,-5.76,-153.28 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/OilRefineryMod3Icon.webp",
					"texture": "game/Textures/Structures/oil_refinery_reformer.webp",
					"positionOffset": {
						"y": 75
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 255,
							"y": 149,
							"rotation": 0
						},
						{
							"id": 1,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 52,
							"y": 1104,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 255,
							"y": 2,
							"rotation": 0
						},
						{
							"id": 3,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 298,
							"y": 1255,
							"rotation": 180
						}
					],
					"cost": {
						"facilitymaterials1": 200
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"oil": 120,
								"water": 30
							},
							"output": {
								"petrol": 150
							},
							"time": 150
						}
					]
				},
				"cracking_unit": {
					"name": "Cracking Unit",
					"codeName": "CrackingUnit",
					"description": "A high-heat furnace that catalyses raw oil into refined Heavy Oil.",
					"hitArea": [
						{
							"shape": [ 64,-129.6,67.84,77.76,-37.76,157.12,-40.96,-129.6 ]
						},
						{
							"shape": [ -37.76,157.12,67.84,77.76,59.52,156.48 ]
						},
						{
							"shape": [ -45.44,-104.64,-46.72,-91.84,-62.08,-104,-53.76,-110.4 ]
						},
						{
							"shape": [ 26.88,-174.4,26.88,-129.6,-3.84,-129.6,-3.84,-175.04 ]
						},
						{
							"shape": [ -69.76,173.76,-46.72,-91.84,-40.96,-91.84,-37.76,157.12,-38.4,172.48 ]
						},
						{
							"shape": [ -46.72,-91.84,-69.76,173.76,-62.08,-104 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/OilRefineryMod2Icon.webp",
					"texture": "game/Textures/Structures/oil_refinery_cracking_unit.webp",
					"positionOffset": {
						"x": -1
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 255,
							"y": 149,
							"rotation": 0
						},
						{
							"id": 1,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 53,
							"y": 1104,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 255,
							"y": 2,
							"rotation": 0
						}
					],
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 20
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"oil": 150
							},
							"output": {
								"facilityoil1": 90
							},
							"time": 160,
							"power": -1.5
						}
					]
				},
				"petro_plant": {
					"name": "Petrochemical Plant",
					"codeName": "PetrochemicalPlant",
					"description": "A blast furnace that further refines Heavy Oil into an Enriched Oil needed for advanced processes.",
					"hitArea": [
						{
							"shape": [ 64,-129.6,68.48,78.4,59.52,155.2,28.660869140625,155.8121728515625,-40.96,-91.84,-40.96,-129.6 ]
						},
						{
							"shape": [ 26.88,-129.6,-3.84,-129.6,-3.84,-174.4,27.52,-174.4 ]
						},
						{
							"shape": [ -69.76,173.76,-62.08,-105.92,-37.12,155.2,-38.4,172.48 ]
						},
						{
							"shape": [ -45.44,-105.92,-46.72,-91.84,-62.08,-105.92,-53.12,-110.4 ]
						},
						{
							"shape": [ -37.12,155.2,-62.08,-105.92,-46.72,-91.84,28.660869140625,155.8121728515625,26.713046875,160.820869140625,-29.44,161.6 ]
						},
						{
							"shape": [ 28.660869140625,155.8121728515625,-46.72,-91.84,-40.96,-91.84 ]
						}
					],
					"icon": "game/Textures/UI/ItemIcons/OilRefineryPetrochemicalPlanetIcon.webp",
					"texture": "game/Textures/Structures/oil_refinery_petro_plant.webp",
					"positionOffset": {
						"x": -1
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 255,
							"y": 149,
							"rotation": 0
						},
						{
							"id": 1,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 53,
							"y": 1104,
							"rotation": 180
						},
						{
							"id": 2,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 255,
							"y": 2,
							"rotation": 0
						}
					],
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 25
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"sulfur": 60,
								"facilityoil1": 30
							},
							"output": {
								"facilityoil2": 30
							},
							"time": 200,
							"power": -6
						}
					]
				}
			}
		},
		"oil_well": {
			"name": "Oil Well",
			"codeName": "FacilityMineOil",
			"description": "Extracts fuel from Crude Oil Fields. Must be constructed nearby.",
			"category": "harvesters",
			"categoryOrder": 1,
			"color": 2368548,
			"icon": "game/Textures/UI/StructureIcons/OilWellMineIcon.webp",
			"texture": "game/Textures/Structures/oil_well.webp",
			"maxHealth": 1850,
			"cost": {
				"facilitymaterials1": 35
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"output": {
						"oilcan": 1
					},
					"time": 50
				}
			],
			"productionScaling": false,
			"upgrades": {
				"electric_oil": {
					"name": "Electric Oil Well",
					"codeName": "Electric",
					"description": "A generator that leverages electricity to pump oil through attached pipes.",
					"hitArea": [
						{
							"shape": [ -53.76,-58.1565234375,-51.84,-49.92,-47.36,60.8,-65.92,-49.92,-65.28,-57.6,-59.52,-62.08 ]
						},
						{
							"shape": [ 31.36,-76.8,0.64,-76.8,0.64,-124.16,32,-124.16 ]
						},
						{
							"shape": [ -47.36,127.36,-47.36,60.8,0.64,-76.8,78.72,-76.8,78.72,127.36 ]
						},
						{
							"shape": [ 0.64,-76.8,-47.36,60.8,-51.84,-49.92,-46.08,-76.8 ]
						},
						{
							"shape": [ -78.08,-49.92,-65.92,-49.92,-47.36,60.8,-78.08,60.8 ]
						}
					],
					"baseIcon": "game/Textures/UI/StructureIcons/FacilityElectricOilWellIcon.webp",
					"icon": "game/Textures/UI/StructureIcons/FacilityElectricOilWellIcon.webp",
					"texture": "game/Textures/Structures/oil_well_electric_oil.webp",
					"positionOffset": {
						"x": -50,
						"y": -79
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 297,
							"y": 218,
							"rotation": 0
						},
						{
							"id": 1,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 297,
							"y": 2,
							"rotation": 0
						}
					],
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 25
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"output": {
								"oilcan": 1
							},
							"time": 26,
							"power": -2
						},
						{
							"id": 1,
							"output": {
								"oil": 75
							},
							"time": 40,
							"power": -2
						}
					]
				},
				"fracking_oil": {
					"name": "Fracker",
					"codeName": "Fracker",
					"description": "A machine that opens up cracks in the earth by injecting water at a high pressure to increase the output of Crude Oil.",
					"hitArea": [
						{
							"shape": [ -62.08,127.36,-62.72,78.08,-14.72,-76.8,16,-76.8,63.36,-7.68,62.72,126.72 ]
						},
						{
							"shape": [ 16,-125.44,16,-76.8,-14.72,-76.8,-15.36,-125.44 ]
						},
						{
							"shape": [ 88.32,-124.8,85.76,-9.6,58.24,-76.8,58.24,-124.16 ]
						},
						{
							"shape": [ 63.36,-7.68,16,-76.8,58.24,-76.8,85.76,-9.6,74.88,-1.92 ]
						},
						{
							"shape": [ -82.1704345703125,74.017392578125,-83.84,62.72,-74.88,50.56,-62.72,78.08,-73.6,80.64 ]
						},
						{
							"shape": [ -63.36,-59.52,-89.4052173614502,28.660869140625,-88.32,-41.6,-76.16,-58.88 ]
						},
						{
							"shape": [ -14.72,-76.8,-63.36,-59.52,-61.44,-75.52 ]
						},
						{
							"shape": [ -89.4052173614502,28.660869140625,-63.36,-59.52,-14.72,-76.8,-74.88,42.24,-83.56173889160156,38.4 ]
						},
						{
							"shape": [ -62.72,78.08,-74.88,50.56,-74.88,42.24,-14.72,-76.8 ]
						}
					],
					"baseIcon": "game/Textures/UI/StructureIcons/FacilityFrackerIcon.webp",
					"icon": "game/Textures/UI/StructureIcons/FacilityFrackerIcon.webp",
					"texture": "game/Textures/Structures/oil_well_fracking_oil.webp",
					"positionOffset": {
						"x": -2,
						"y": -79
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 284,
							"y": 218,
							"rotation": 0
						},
						{
							"id": 1,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 283,
							"y": 2,
							"rotation": 0
						},
						{
							"id": 2,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 512,
							"y": 3,
							"rotation": 0
						}
					],
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 25
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"water": 25
							},
							"output": {
								"oilcan": 2
							},
							"time": 40,
							"power": -3
						},
						{
							"id": 1,
							"input": {
								"water": 25
							},
							"output": {
								"oil": 75
							},
							"time": 30,
							"power": -3
						}
					],
					"productionScaling": true
				}
			}
		},
		"oilfield": {
			"name": "Crude Oil Field",
			"codeName": "OilField",
			"description": "An Oil Field that can produce Oil for further refinement or for power production.",
			"category": "world",
			"categoryOrder": 21,
			"radius": 6,
			"icon": "game/Textures/UI/ItemIcons/Facilities/OilIcon.webp",
			"texture": "game/Textures/Structures/oilfield.webp",
			"maxHealth": 2147483647
		},
		"oiltankerc": {
			"name": "RR-3 “Stolon” Tanker.",
			"codeName": "OilTankerC",
			"description": "The “Stolon” Tanker is a heavier R-series rig designed to transport and distribute large quantities of Fuel.",
			"category": "vehicles",
			"categoryOrder": 3,
			"faction": "c",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/OilTankerIcon.webp",
			"texture": "game/Textures/Vehicles/oiltankerc.webp"
		},
		"oiltankerw": {
			"name": "Dunne Fuelrunner 2d",
			"codeName": "OilTankerW",
			"description": "The Fuelrunner is a heavy Dunne rig designed to transport and distribute large quantities of Fuel.",
			"category": "vehicles",
			"categoryOrder": 4,
			"faction": "w",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/OilTankerWarIcon.webp",
			"texture": "game/Textures/Vehicles/oiltankerw.webp"
		},
		"pipeline": {
			"name": "Pipeline",
			"codeName": "FacilityPipe",
			"description": "Industrial piping that allows for automatic transport of various liquids and fuels into a network of pipes that connect to various facility structures.",
			"category": "factories",
			"categoryOrder": 60,
			"sortLayer": "pipe",
			"hasHandle": true,
			"isBezier": true,
			"simpleBezier": true,
			"lineWidth": 10,
			"minLength": 3,
			"maxLength": 20,
			"icon": "game/Textures/UI/StructureIcons/PipelineSegmentIcon.webp",
			"texture": "game/Textures/Structures/pipeline.webp",
			"textureFrontCap": "game/Textures/Structures/pipeline_front.webp",
			"textureBackCap": "game/Textures/Structures/pipeline_back.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "bi",
					"cap": "left",
					"rotation": 180
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 16779264,
							"category": 16384
						}
					],
					"flow": "bi",
					"cap": "right",
					"rotation": 0
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"liquidCapacity": 100,
			"maxHealth": 350,
			"cost": {
				"pipematerials": 1
			},
			"repairCost": 15,
			"upgrades": {
				"insulation": {
					"name": "Insulated Pipe",
					"codeName": "Insulation",
					"description": "An insulating material to keep the pipe from freezing during harsh weather conditions.",
					"icon": "game/Textures/UI/StructureIcons/PipelineSegmentIcon.webp",
					"texture": "game/Textures/Structures/pipeline_insulated.webp",
					"cost": {
						"pipematerials": 1
					}
				}
			}
		},
		"pipeline_overhead": {
			"name": "Pipeline (Overhead)",
			"codeName": "FacilityPipeOverhead",
			"description": "Industrial piping that allows for automatic transport of various liquids and fuels. These specialized pipes can be built overhead to connect to pipe networks across areas with high traffic.",
			"category": "factories",
			"categoryOrder": 70,
			"sortLayer": "overhead",
			"hasHandle": true,
			"lineWidth": 10,
			"minLength": 8,
			"maxLength": 20,
			"icon": "game/Textures/UI/ItemIcons/OverheadPowelineIcon.webp",
			"texture": "game/Textures/Structures/pipeline_overhead.webp",
			"textureFrontCap": "game/Textures/Structures/pipeline_overhead_front.webp",
			"textureBackCap": "game/Textures/Structures/pipeline_overhead_back.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 268435456,
							"category": 268435456
						},
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 268435456,
							"category": 268435456
						},
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"liquidCapacity": 100,
			"maxHealth": 350,
			"cost": {
				"pipematerials": 2
			},
			"repairCost": 15,
			"upgrades": {
				"insulation": {
					"name": "Insulated Pipe",
					"codeName": "Insulation",
					"description": "An insulating material to keep the pipe from freezing during harsh weather conditions.",
					"icon": "game/Textures/UI/ItemIcons/OverheadPowelineIcon.webp",
					"texture": "game/Textures/Structures/pipeline_overhead_insulated.webp",
					"cost": {
						"pipematerials": 1
					}
				}
			}
		},
		"pipeline_underground": {
			"name": "Pipeline (Underground)",
			"codeName": "FacilityPipeUnderground",
			"description": "Industrial piping that allows for automatic transport of various liquids and fuels. These specialized pipes can be built underground to connect to pipe networks across areas with high traffic.",
			"category": "factories",
			"categoryOrder": 65,
			"sortLayer": "pipe",
			"hasHandle": true,
			"isBezier": true,
			"lineWidth": 10,
			"minLength": 5,
			"maxLength": 20,
			"icon": "game/Textures/UI/StructureIcons/PipeIntersectionIcon.webp",
			"texture": null,
			"textureFrontCap": "game/Textures/Structures/pipeline_underground_front.webp",
			"textureBackCap": "game/Textures/Structures/pipeline_underground_back.webp",
			"garrisonSupplyMultiplier": 4,
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 16795648,
							"category": 2048
						}
					],
					"flow": "bi",
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"liquidCapacity": 100,
			"maxHealth": 350,
			"cost": {
				"pipematerials": 6
			},
			"repairCost": 15,
			"upgrades": {
				"insulation": {
					"name": "Insulated Pipe",
					"codeName": "Insulation",
					"description": "An insulating material to keep the pipe from freezing during harsh weather conditions.",
					"icon": "game/Textures/UI/StructureIcons/PipeIntersectionIcon.webp",
					"texture": null,
					"textureFrontCap": "game/Textures/Structures/pipeline_underground_front_insulated.webp",
					"textureBackCap": "game/Textures/Structures/pipeline_underground_back_insulated.webp",
					"cost": {
						"pipematerials": 1
					}
				}
			}
		},
		"pipeline_valve": {
			"name": "Pipeline Valve",
			"codeName": "FacilityPipeValve",
			"description": "A weighted valve that controls the rate of flow through a pipeline. Requires a Wrench.",
			"category": "factories",
			"categoryOrder": 75,
			"sortLayer": "pipe",
			"icon": "game/Textures/UI/ItemIcons/FacilityPipeValveIcon.webp",
			"texture": "game/Textures/Structures/pipeline_valve.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 18432,
							"category": 16777216
						}
					],
					"flow": "bi",
					"x": 2,
					"y": 51,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 18432,
							"category": 16777216
						}
					],
					"flow": "bi",
					"x": 185,
					"y": 51,
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 350,
			"cost": {
				"pipematerials": 2
			},
			"repairCost": 15
		},
		"playerc": {
			"name": "Player (Colonial)",
			"description": "The Colonials are described as a faction of ingenuity and practicality. They are sometimes referred to as \"The Colonial Legion\" or \"Little Green Men\".",
			"category": "world",
			"categoryOrder": 50,
			"faction": "c",
			"sortLayer": "player",
			"icon": "game/Textures/UI/ItemIcons/Uniforms/SoldierUniformCIcon.webp",
			"texture": "game/Textures/playerc.webp"
		},
		"playerw": {
			"name": "Player (Warden)",
			"description": "The Wardens are described to be a nation of honor and tradition. They are the native inhabitants of the region where the game takes place.",
			"category": "world",
			"categoryOrder": 51,
			"faction": "w",
			"sortLayer": "player",
			"icon": "game/Textures/UI/ItemIcons/Uniforms/SoldierUniformWIcon.webp",
			"texture": "game/Textures/playerw.webp"
		},
		"power_box": {
			"name": "Power Switch",
			"codeName": "PowerBox",
			"description": "A power interface for manually disabling power in a circuit.",
			"category": "power",
			"categoryOrder": 1,
			"sortLayer": "power_pole",
			"icon": "game/Textures/UI/StructureIcons/FacilityPowerBoxIcon.webp",
			"texture": "game/Textures/Structures/power_box.webp",
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 262144
						}
					],
					"x": 223,
					"y": 41,
					"rotation": 90,
					"connectionLimit": 4
				}
			],
			"maxHealth": 500,
			"cost": {
				"facilitymaterials1": 25
			},
			"repairCost": 5
		},
		"power_line": {
			"name": "Power Line",
			"codeName": "PowerLine",
			"description": "Conducts power between two Power Poles.",
			"category": "power",
			"categoryOrder": 2,
			"color": 0,
			"sortLayer": "power_line",
			"hasHandle": true,
			"hasOutline": false,
			"lineWidth": 5,
			"minLength": 0.1,
			"maxLength": 25,
			"icon": "game/Textures/UI/StructureIcons/PowelineIcon.webp",
			"texture": "game/Textures/Structures/power_line.webp",
			"textureIcon": {
				"disabled": true
			},
			"garrisonSupplyMultiplier": 0,
			"canSnap": true,
			"canSnapRotate": true,
			"canSnapStructureType": false,
			"ignoreSnapSettings": true,
			"requireConnection": true,
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 1441792,
							"category": 131072
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"name": "power",
					"type": [
						{
							"mask": 1441792,
							"category": 131072
						}
					],
					"cap": "back",
					"rotation": 270
				}
			],
			"cost": {
				"cloth": 1
			}
		},
		"power_pole": {
			"name": "Power Pole",
			"codeName": "PowerPole",
			"description": "Used to connect Power Lines. Up to 4 Power Lines can be attached to a single pole.",
			"category": "power",
			"sortLayer": "power_pole",
			"icon": "game/Textures/UI/StructureIcons/PowerLineB.webp",
			"texture": "game/Textures/Structures/power_pole.webp",
			"textureIcon": {
				"disabled": true
			},
			"sockets": [
				{
					"id": 0,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 262144
						}
					],
					"x": 14,
					"y": 14,
					"rotation": 270,
					"connectionLimit": 4
				}
			],
			"maxHealth": 250,
			"cost": {
				"cloth": 20
			},
			"repairCost": 5,
			"upgrades": {
				"lamp": {
					"name": "Lamp",
					"codeName": "Light",
					"description": "A light that illuminates the surrounding area. Requires at least a minimum amount of power to function.",
					"icon": "game/Textures/UI/StructureIcons/PowerPoleLightIcon.webp",
					"texture": "game/Textures/Structures/power_pole_lamp.webp",
					"positionOffset": {
						"x": 24
					},
					"sockets": [
						{
							"id": 0,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 14,
							"y": 21,
							"rotation": 270,
							"connectionLimit": 4
						}
					],
					"cost": {
						"facilitymaterials1": 5
					}
				}
			}
		},
		"power_station": {
			"name": "Power Station",
			"codeName": "FacilityPowerOil",
			"description": "A power plant that generates a large amount of electricity using Oil or Coal.",
			"category": "power",
			"categoryOrder": 4,
			"hitArea": [
				{
					"shape": [ 143.36,-97.6,5.76,-96.96,-47.36,-111.68,-47.36,-212.8,4.48,-230.08,144,-230.08,202.88,-212.8,202.88,-111.68 ]
				},
				{
					"shape": [ -81.28,164.8,-16,172.48,-16.64,222.4,-81.92,223.04 ]
				},
				{
					"shape": [ 144.64,223.04,143.36,172.48,209.92,164.8,209.92,222.4 ]
				},
				{
					"shape": [ -237.44,215.36,-238.72,-3.52,-220.8,-3.52,-108.16,10.56,-108.16,215.36 ]
				},
				{
					"shape": [ -108.16,10.56,-220.8,-3.52,-221.44,-48.32,-110.08,-47.68 ]
				},
				{
					"shape": [ -108.16,113.6,-108.16,10.56,-82.56,-40.64,211.2,-39.36,234.88,7.36,143.36,172.48,-16,172.48,-81.28,164.8 ]
				},
				{
					"shape": [ 143.36,172.48,234.88,7.36,235.52,114.24,209.92,164.8 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityPowerOilIcon.webp",
			"texture": "game/Textures/Structures/power_station.webp",
			"textureIcon": {
				"width": 256,
				"height": 224
			},
			"power": 15,
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 933,
					"y": 1309,
					"rotation": 180
				},
				{
					"id": 1,
					"name": "power",
					"type": [
						{
							"mask": 131072,
							"category": 1048576
						}
					],
					"x": 576,
					"y": 78,
					"rotation": 270
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 2400,
			"cost": {
				"facilitymaterials2": 25
			},
			"repairCost": 100,
			"_productionLength": 2,
			"production": [
				{
					"id": 0,
					"input": {
						"oil": 50
					},
					"time": 90,
					"power": 10
				},
				{
					"id": 1,
					"input": {
						"coal": 30,
						"water": 1
					},
					"time": 90,
					"power": 10
				}
			],
			"productionScaling": false,
			"upgrades": {
				"sulfuric_reactor": {
					"name": "Sulfuric Reactor",
					"codeName": "SulfuricReactor",
					"description": "A reactor that combines Water with Heavy Oil or refined Coke, resulting in a more pure natural gas, which in turn is more efficient at generating power. Chunks of raw Sulfur are created as a byproduct.",
					"hitArea": [
						{
							"shape": [ 147.84,-108.16,12.16,-107.52,-40.96,-122.24,-40.96,-224,10.88,-240.64,149.76,-240.64,209.28,-224,208.64,-122.24 ]
						},
						{
							"shape": [ -232.96,-14.08,-215.04,-14.08,-101.76,204.16,-231.04,204.8 ]
						},
						{
							"shape": [ -101.76,204.16,-215.04,-14.08,-216.32,-58.88,-103.04,-58.24 ]
						},
						{
							"shape": [ 49.28,176.64,49.92,154.24,81.28,154.24,81.28,177.28 ]
						},
						{
							"shape": [ -74.24,210.56,-78.08,183.04,-75.52,126.72,10.24,154.24,21.12,173.44,13.44,220.8,-28.16,240.64,-56.32,232.32 ]
						},
						{
							"shape": [ 81.28,154.24,-88.96,113.28,-88.96,-14.08,-72.96,-55.68,193.28,-56.32,221.44,-14.08,222.08,113.28,195.2,154.88 ]
						},
						{
							"shape": [ 13.44,220.8,21.12,173.44,23.04,199.68 ]
						},
						{
							"shape": [ -28.16,240.64,13.44,220.8,-4.48,235.52 ]
						},
						{
							"shape": [ -75.52,126.72,-88.96,113.28,81.28,154.24,10.24,154.24 ]
						}
					],
					"icon": "game/Textures/UI/StructureIcons/FacilityPowerOilReactorIcon.webp",
					"texture": "game/Textures/Structures/power_station_sulfuric_reactor.webp",
					"positionOffset": {
						"x": -20,
						"y": 34
					},
					"sockets": [
						{
							"id": 0,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 936,
							"y": 1313,
							"rotation": 180
						},
						{
							"id": 1,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 576,
							"y": 78,
							"rotation": 270
						}
					],
					"techId": "unlockfacilitytier3",
					"cost": {
						"facilitymaterials3": 25
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"input": {
								"facilityoil1": 50
							},
							"output": {
								"sulfur": 5
							},
							"time": 120,
							"power": 16
						},
						{
							"id": 1,
							"input": {
								"facilitycoal1": 30,
								"water": 1
							},
							"output": {
								"sulfur": 5
							},
							"time": 120,
							"power": 16
						}
					]
				}
			}
		},
		"provisional_road": {
			"name": "Provisional Road",
			"codeName": "FacilityRoad",
			"description": "A temporary road used to enable vehicle access between main roads and remote bases.",
			"category": "foundations",
			"categoryOrder": 6,
			"sortLayer": "road",
			"hasHandle": true,
			"isBezier": true,
			"minLength": 9.01,
			"maxLength": 30,
			"icon": "game/Textures/UI/ItemIcons/FacilityRoadItemIcon.webp",
			"texture": "game/Textures/Structures/facilityroad.webp",
			"textureIcon": {
				"disabled": true
			},
			"garrisonSupplyMultiplier": 3,
			"canSnap": true,
			"canSnapAlongBezier": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 536870912,
							"category": 536870912
						},
						{
							"mask": 1073741824,
							"category": 536870912
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 536870912,
							"category": 536870912
						},
						{
							"mask": 1073741824,
							"category": 536870912
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 750,
			"cost": {
				"groundmaterials": 150
			},
			"repairCost": 50
		},
		"rail_large_crane": {
			"name": "Crane Railway Track",
			"codeName": "CraneRailTrackSpline",
			"description": "A segment of railway for heavy cranes. This type of railway can only be built on Foundations.",
			"category": "foundations",
			"categoryOrder": 11,
			"sortLayer": "rail",
			"hasHandle": true,
			"minLength": 5,
			"maxLength": 30,
			"icon": "game/Textures/UI/StructureIcons/CraneRailTrackIcon.webp",
			"texture": "game/Textures/Structures/rail_large_crane.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 8388608,
							"category": 8388608
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 8388608,
							"category": 8388608
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"techId": "unlockfacilitytier3",
			"maxHealth": 750,
			"cost": {
				"facilitymaterials3": 3
			},
			"repairCost": 50
		},
		"rail_large_gauge": {
			"name": "Railway Track (Biarc)",
			"codeName": "RailTrackSplineBiarc",
			"description": "A segment of railway for train cars. Tracks can attach to or fork from existing railways to form complex networks.",
			"category": "foundations",
			"categoryOrder": 10,
			"sortLayer": "rail",
			"hasHandle": true,
			"isBezier": true,
			"minLength": 5,
			"maxLength": 30,
			"icon": "game/Textures/UI/StructureIcons/BiarcRailTrackIcon.webp",
			"texture": "game/Textures/Structures/rail_large_gauge.webp",
			"textureIcon": {
				"disabled": true
			},
			"canSnap": true,
			"canSnapAlongBezier": true,
			"sockets": [
				{
					"id": 0,
					"name": "front",
					"type": [
						{
							"mask": 32768,
							"category": 32768
						},
						{
							"mask": 524288,
							"category": 32768
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"name": "back",
					"type": [
						{
							"mask": 32768,
							"category": 32768
						},
						{
							"mask": 524288,
							"category": 32768
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 750,
			"cost": {
				"facilitymaterials2": 5
			},
			"repairCost": 50
		},
		"rail_small_gauge": {
			"name": "Small Gauge Railway Track (Biarc)",
			"codeName": "SmallRailTrackSplineBiarc",
			"description": "A segment of railway for small gauge train cars. Tracks can attach to or fork from existing railways to form complex networks.",
			"category": "foundations",
			"categoryOrder": 8,
			"sortLayer": "rail",
			"hasHandle": true,
			"isBezier": true,
			"minLength": 5,
			"maxLength": 30,
			"icon": "game/Textures/UI/StructureIcons/BiarcSmallRailTrackIcon.webp",
			"texture": "game/Textures/Structures/rail_small_gauge.webp",
			"textureIcon": {
				"disabled": true
			},
			"canSnap": true,
			"canSnapAlongBezier": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2097152,
							"category": 2097152
						},
						{
							"mask": 4194304,
							"category": 2097152
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2097152,
							"category": 2097152
						},
						{
							"mask": 4194304,
							"category": 2097152
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 750,
			"cost": {
				"facilitymaterials1": 25
			},
			"repairCost": 50
		},
		"relicbase1": {
			"name": "Relic Base",
			"codeName": "RelicBase1",
			"description": "An old fort. Players can spawn and stockpile items here.",
			"category": "world",
			"categoryOrder": 8,
			"baseGarrisonRadius": 150,
			"hitArea": [
				{
					"shape": [ -146.56,215.04,-103.68,249.6,-144.64,248.32 ]
				},
				{
					"shape": [ -103.68,-249.6,103.68,-250.24,143.36,-248.96,146.56,-218.88,146.56,215.04,-146.56,-215.04,-143.36,-247.68 ]
				},
				{
					"shape": [ 103.04,-314.24,103.68,-250.24,-103.68,-249.6,-103.04,-314.24 ]
				},
				{
					"shape": [ -103.68,249.6,103.68,257.92,103.68,313.6,-103.04,314.24 ]
				},
				{
					"shape": [ 137.6,248.96,115.2,252.8,146.56,215.04,146.56,241.92 ]
				},
				{
					"shape": [ -146.56,215.04,-152.32,-215.04,-146.56,-215.04,146.56,215.04,115.2,252.8,103.68,257.92,-103.68,249.6 ]
				},
				{
					"shape": [ -152.32,-215.04,-146.56,215.04,-152.32,215.04 ]
				},
				{
					"shape": [ 146.56,215.04,146.56,-218.88,152.32,-216.32,152.32,215.04 ]
				}
			],
			"icon": "game/Textures/UI/CustomIcons/RelicBase1Icon.webp",
			"texture": "game/Textures/Structures/relicbase1.webp",
			"cost": false
		},
		"resource_transfer_station": {
			"name": "Resource Transfer Station",
			"codeName": "FacilityResourceTransfer1",
			"description": "An open container marked for storing raw resources that can be transferred into and out of Facilities. Stockpiles may be public or reserved.",
			"category": "factories",
			"categoryOrder": 45,
			"color": 8186514,
			"icon": "game/Textures/UI/ItemIcons/MaterialTransferStationIcon.webp",
			"texture": "game/Textures/Structures/resource_transfer_station.webp",
			"textureIcon": {
				"y": -52
			},
			"maxHealth": 2200,
			"cost": {
				"facilitymaterials1": 35
			},
			"repairCost": 100
		},
		"resourcecontainer": {
			"name": "Resource Container",
			"codeName": "ResourceContainer",
			"description": "A container that can carry large quantities of resources and can be transported by certain vehicles.",
			"category": "shippables",
			"categoryOrder": 2,
			"sortLayer": "container",
			"icon": "game/Textures/UI/StructureIcons/ResourceContainerIcon.webp",
			"texture": "game/Textures/Structures/resourcecontainer.webp",
			"maxHealth": 600,
			"cost": {
				"cloth": 50
			},
			"repairCost": 50
		},
		"resourcefield": {
			"name": "Resource Field",
			"upgradeName": "Scrap Field",
			"description": "This is a resource field. This can be mined by a player or with a stationary harvester.",
			"category": "world",
			"categoryOrder": 20,
			"sortLayer": "resource",
			"radius": 15,
			"range": {
				"type": "resourceField",
				"min": 15,
				"max": 27
			},
			"icon": "game/Textures/UI/ItemIcons/SalvageIcon.webp",
			"texture": "game/Textures/Structures/scrap_field.webp",
			"maxHealth": 2147483647,
			"upgrades": {
				"resourcefield": {
					"name": "Scrap Field",
					"reference": "resourcefield"
				},
				"component": {
					"name": "Component Field",
					"baseIcon": "game/Textures/UI/ItemIcons/ComponentsIcon.webp",
					"icon": "game/Textures/UI/ItemIcons/ComponentsIcon.webp",
					"texture": "game/Textures/Structures/component_field.webp"
				},
				"coal": {
					"name": "Coal Field",
					"baseIcon": "game/Textures/UI/ItemIcons/CoalIcon.webp",
					"icon": "game/Textures/UI/ItemIcons/CoalIcon.webp",
					"texture": "game/Textures/Structures/coal_field.webp"
				},
				"sulfur": {
					"name": "Sulfur Field",
					"baseIcon": "game/Textures/UI/ItemIcons/SulfurIcon.webp",
					"icon": "game/Textures/UI/ItemIcons/SulfurIcon.webp",
					"texture": "game/Textures/Structures/sulfur_field.webp"
				}
			}
		},
		"riflepillbox": {
			"name": "Rifle Pillbox",
			"codeName": "RiflePillbox",
			"description": "A reinforced dugout that gives the garrisoned rifle infantry a fortified defensive position to fire on approaching enemies from relative safety.",
			"category": "defenses",
			"categoryOrder": 6,
			"range": {
				"type": "killbox",
				"lineOfSight": true,
				"min": 3.5,
				"max": 25
			},
			"hitArea": [
				{
					"shape": [ 45.44,-79.68,93.44,-5.44,44.16,79.04,-45.44,80.32,-94.08,6.08,-49.28,-77.76 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/RiflePillboxIcon.webp",
			"texture": "game/Textures/Structures/riflepillbox.webp",
			"maxHealth": 400,
			"cost": {
				"cloth": 60
			},
			"repairCost": 60
		},
		"sandbaghalfspline": {
			"name": "Sandbag Cover",
			"codeName": "SandbagHalfSpline",
			"description": "A defensive wall that hinders enemy movement and provides cover during combat.",
			"category": "defenses",
			"hasHandle": true,
			"isBezier": true,
			"simpleBezier": true,
			"minLength": 4.2,
			"maxLength": 10,
			"icon": "game/Textures/UI/StructureIcons/SandbagsStructureIcon.webp",
			"texture": "game/Textures/Structures/sandbaghalfspline.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 4609,
							"category": 1
						}
					],
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 4609,
							"category": 1
						}
					],
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 700,
			"cost": {
				"sandbagmaterials": 3
			},
			"repairCost": 10,
			"upgrades": {
				"sandbagfullspline": {
					"name": "Sandbag Wall",
					"codeName": "SandbagFullSpline",
					"description": "A defensive wall that hinders enemy movement and provides cover during combat.",
					"minLength": 4.2,
					"maxLength": 10,
					"texture": "game/Textures/Structures/sandbagfullspline.webp",
					"cost": {
						"sandbagmaterials": 3
					},
					"maxHealth": 1600,
					"repairCost": 30
				}
			}
		},
		"shippingcontainer": {
			"name": "Shipping Container",
			"codeName": "ShippingContainer",
			"description": "A container for shipping very large quantities of Crates using Crane loaded vehicles. This type of container can only be unloaded at Storage Depots and Seaports.",
			"category": "shippables",
			"categoryOrder": 3,
			"sortLayer": "container",
			"icon": "game/Textures/UI/StructureIcons/ShippingContainerStructureIcon.webp",
			"texture": "game/Textures/Structures/shippingcontainer.webp",
			"maxHealth": 1000,
			"cost": {
				"cloth": 100
			},
			"repairCost": 100
		},
		"smalltraindump": {
			"name": "BMS Railtruck",
			"codeName": "SmallTrainDump",
			"description": "A small gauge container car for transporting raw materials. ",
			"category": "trains",
			"categoryOrder": 3,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeResourceCarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/smalltraindump.webp",
			"sockets": [
				{
					"id": 0,
					"type": "smalltraincar",
					"x": 446,
					"y": 114,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "smalltraincar",
					"x": 0,
					"y": 114,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "smalltrain",
				"track": "rail_small_gauge",
				"mass": 10
			}
		},
		"smalltrainengine": {
			"name": "BMS Mineseeker",
			"codeName": "SmallTrainEngine",
			"description": "The Mineseeker is the Bassett Motor Society’s mechanized mule. This small 0-4-0 locomotive can haul tonnes of weight over short distances with little overhead. Ideal for a mining operation or short-range supply chains. ",
			"category": "trains",
			"categoryOrder": 1,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeEngineVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/smalltrainengine.webp",
			"sockets": [
				{
					"id": 0,
					"type": "smalltraincar",
					"x": 446,
					"y": 90,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "smalltraincar",
					"x": 0,
					"y": 90,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "smalltrain",
				"track": "rail_small_gauge",
				"engine": true,
				"mass": 500,
				"maxSpeed": 2
			}
		},
		"smalltrainfuelcontainer": {
			"name": "BMS Tinderbox",
			"codeName": "SmallTrainFuelContainer",
			"description": "The Tinderbox is a simple car used for transporting liquids between facilities.",
			"category": "trains",
			"categoryOrder": 4,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/SmallTrainFuelContainerIcon.webp",
			"texture": "game/Textures/Vehicles/smalltrainfuelcontainer.webp",
			"sockets": [
				{
					"id": 0,
					"type": "smalltraincar",
					"x": 468,
					"y": 113,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "smalltraincar",
					"x": 32,
					"y": 113,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "smalltrain",
				"track": "rail_small_gauge",
				"mass": 10
			}
		},
		"smalltrainresourceplatform": {
			"name": "BMS Linerunner",
			"codeName": "SmallTrainResourcePlatform",
			"description": "A low profile flatbed car for transporting large resources and munitions over short distances on small gauge tracks.",
			"category": "trains",
			"categoryOrder": 2,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/SmallGaugeFlatbedCarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/smalltrainresourceplatform.webp",
			"sockets": [
				{
					"id": 0,
					"type": "smalltraincar",
					"x": 430,
					"y": 115,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "smalltraincar",
					"x": 0,
					"y": 115,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "smalltrain",
				"track": "rail_small_gauge",
				"mass": 10
			}
		},
		"sound_test": {
			"name": "Sus",
			"category": "world",
			"hideInList": true,
			"width": 2,
			"length": 2,
			"texture": {
				"sheet": "sus.png",
				"speed": 0.132,
				"width": 220,
				"height": 184,
				"border": false
			}
		},
		"stationary_harvester_coal": {
			"name": "Stationary Harvester (Coal)",
			"codeName": "FacilityMineResource4",
			"description": "A stationary harvester that automatically gathers Coal. Requires Petrol. ",
			"category": "harvesters",
			"categoryOrder": 4,
			"hitArea": [
				{
					"shape": [ 12.16,-131.84,16.64,-98.56,-19.84,-98.56,-15.36,-131.84 ]
				},
				{
					"shape": [ -16.4452197265625,123.01913024902343,-22.4,110.08,18.56,110.08,12.8,122.88,-1.92,131.84 ]
				},
				{
					"shape": [ -81.28,9.6,-51.84,9.6,18.56,110.08,-22.4,110.08,-81.28,106.88 ]
				},
				{
					"shape": [ 48.64,122.88,48,110.08,80,68.48,80,123.52 ]
				},
				{
					"shape": [ 48,-98.56,18.56,110.08,-51.84,9.6,-51.84,-98.56 ]
				},
				{
					"shape": [ 69.12,25.6,74.88,38.4,74.88,67.84,18.56,110.08,47.36,15.36,60.8,17.92 ]
				},
				{
					"shape": [ 18.56,110.08,74.88,67.84,80,68.48,48,110.08 ]
				},
				{
					"shape": [ 18.56,110.08,47.36,-93.44,47.36,15.36 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityMineResource4Icon.webp",
			"texture": "game/Textures/Structures/stationary_harvester.webp",
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 457,
					"y": 805,
					"rotation": 180
				}
			],
			"techId": "unlockfacilitytier2",
			"maxHealth": 1850,
			"cost": {
				"facilitymaterials2": 25
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"petrol": 1
					},
					"output": {
						"coal": 50
					},
					"time": 12
				}
			]
		},
		"stationary_harvester_components": {
			"name": "Stationary Harvester (Components)",
			"codeName": "FacilityMineResource2",
			"description": "A stationary harvester that automatically gathers Components. Requires Petrol.",
			"category": "harvesters",
			"categoryOrder": 3,
			"hitArea": [
				{
					"shape": [ 12.16,-131.84,16.64,-98.56,-19.84,-98.56,-15.36,-131.84 ]
				},
				{
					"shape": [ -16.4452197265625,123.01913024902343,-22.4,110.08,18.56,110.08,12.8,122.88,-1.92,131.84 ]
				},
				{
					"shape": [ -81.28,9.6,-51.84,9.6,18.56,110.08,-22.4,110.08,-81.28,106.88 ]
				},
				{
					"shape": [ 48.64,122.88,48,110.08,80,68.48,80,123.52 ]
				},
				{
					"shape": [ 48,-98.56,18.56,110.08,-51.84,9.6,-51.84,-98.56 ]
				},
				{
					"shape": [ 69.12,25.6,74.88,38.4,74.88,67.84,18.56,110.08,47.36,15.36,60.8,17.92 ]
				},
				{
					"shape": [ 18.56,110.08,74.88,67.84,80,68.48,48,110.08 ]
				},
				{
					"shape": [ 18.56,110.08,47.36,-93.44,47.36,15.36 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityMineResource2Icon.webp",
			"texture": "game/Textures/Structures/stationary_harvester.webp",
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 457,
					"y": 805,
					"rotation": 180
				}
			],
			"maxHealth": 1850,
			"cost": {
				"facilitymaterials1": 175
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"petrol": 4
					},
					"output": {
						"components": 6
					},
					"time": 12
				}
			],
			"upgrades": {
				"excavator": {
					"name": "Excavator",
					"codeName": "Excavator",
					"description": "An excavator that allows for the mining of Damaged Components when a Component Field is depleted",
					"hitArea": [
						{
							"shape": [ 15.36,-131.84,19.84,-98.56,-16.64,-98.56,-12.16,-131.84 ]
						},
						{
							"shape": [ -82.56,5.76,-48.64,5.12,-19.2,110.72,-82.56,110.72 ]
						},
						{
							"shape": [ 51.84,122.88,51.2,110.08,78.08,67.84,83.84,68.48,83.2,123.52 ]
						},
						{
							"shape": [ 1.28,129.92,-11.52,124.8,-19.2,110.72,-48.64,5.12,19.84,-98.56,50.56,15.36,21.76,110.08,15.36,124.16 ]
						},
						{
							"shape": [ 19.84,-98.56,-48.64,5.12,-48.64,-98.56 ]
						},
						{
							"shape": [ 77.189560546875,38.427822265625,78.08,67.84,51.2,110.08,21.76,110.08,50.56,15.36,64,17.92,74.88,27.52 ]
						},
						{
							"shape": [ 50.56,-93.44,19.84,-98.56,51.2,-98.56 ]
						},
						{
							"shape": [ 50.56,15.36,19.84,-98.56,50.56,-93.44 ]
						}
					],
					"baseIcon": "game/Textures/UI/CustomIcons/FacilityMineResource2ExcavatorIcon.webp",
					"icon": "game/Textures/UI/StructureIcons/FacilityExcavatorIcon.webp",
					"texture": "game/Textures/Structures/stationary_harvester_components_excavator.webp",
					"positionOffset": {
						"x": -10
					},
					"sockets": [
						{
							"id": 0,
							"name": "pipein",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "in",
							"x": 476,
							"y": 805,
							"rotation": 180
						}
					],
					"techId": "unlockfacilitytier2",
					"cost": {
						"facilitymaterials2": 75
					},
					"_productionLength": 1,
					"production": [
						{
							"id": 0,
							"input": {
								"petrol": 6
							},
							"output": {
								"facilitycomponents1": 9
							},
							"time": 12
						}
					]
				}
			}
		},
		"stationary_harvester_scrap": {
			"name": "Stationary Harvester (Scrap)",
			"codeName": "FacilityMineResource1",
			"description": "A stationary harvester that automatically gathers Salvage. Requires Petrol. ",
			"category": "harvesters",
			"categoryOrder": 2,
			"hitArea": [
				{
					"shape": [ 12.16,-131.84,16.64,-98.56,-19.84,-98.56,-15.36,-131.84 ]
				},
				{
					"shape": [ -16.4452197265625,123.01913024902343,-22.4,110.08,18.56,110.08,12.8,122.88,-1.92,131.84 ]
				},
				{
					"shape": [ -81.28,9.6,-51.84,9.6,18.56,110.08,-22.4,110.08,-81.28,106.88 ]
				},
				{
					"shape": [ 48.64,122.88,48,110.08,80,68.48,80,123.52 ]
				},
				{
					"shape": [ 48,-98.56,18.56,110.08,-51.84,9.6,-51.84,-98.56 ]
				},
				{
					"shape": [ 69.12,25.6,74.88,38.4,74.88,67.84,18.56,110.08,47.36,15.36,60.8,17.92 ]
				},
				{
					"shape": [ 18.56,110.08,74.88,67.84,80,68.48,48,110.08 ]
				},
				{
					"shape": [ 18.56,110.08,47.36,-93.44,47.36,15.36 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityMineResource1Icon.webp",
			"texture": "game/Textures/Structures/stationary_harvester.webp",
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 457,
					"y": 805,
					"rotation": 180
				}
			],
			"maxHealth": 1850,
			"cost": {
				"facilitymaterials1": 150
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"petrol": 4
					},
					"output": {
						"metal": 50
					},
					"time": 12
				}
			]
		},
		"stationary_harvester_sulfur": {
			"name": "Stationary Harvester (Sulfur)",
			"codeName": "FacilityMineResource3",
			"description": "A stationary harvester that automatically gathers Sulfur using Heavy Oil as fuel.",
			"category": "harvesters",
			"categoryOrder": 5,
			"hitArea": [
				{
					"shape": [ 12.16,-131.84,16.64,-98.56,-19.84,-98.56,-15.36,-131.84 ]
				},
				{
					"shape": [ -16.4452197265625,123.01913024902343,-22.4,110.08,18.56,110.08,12.8,122.88,-1.92,131.84 ]
				},
				{
					"shape": [ -81.28,9.6,-51.84,9.6,18.56,110.08,-22.4,110.08,-81.28,106.88 ]
				},
				{
					"shape": [ 48.64,122.88,48,110.08,80,68.48,80,123.52 ]
				},
				{
					"shape": [ 48,-98.56,18.56,110.08,-51.84,9.6,-51.84,-98.56 ]
				},
				{
					"shape": [ 69.12,25.6,74.88,38.4,74.88,67.84,18.56,110.08,47.36,15.36,60.8,17.92 ]
				},
				{
					"shape": [ 18.56,110.08,74.88,67.84,80,68.48,48,110.08 ]
				},
				{
					"shape": [ 18.56,110.08,47.36,-93.44,47.36,15.36 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityMineResource3Icon.webp",
			"texture": "game/Textures/Structures/stationary_harvester.webp",
			"sockets": [
				{
					"id": 0,
					"name": "pipein",
					"type": [
						{
							"mask": 2048,
							"category": 16384
						}
					],
					"flow": "in",
					"x": 457,
					"y": 805,
					"rotation": 180
				}
			],
			"techId": "unlockfacilitytier3",
			"maxHealth": 1850,
			"cost": {
				"facilitymaterials3": 20
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"input": {
						"facilityoil1": 4
					},
					"output": {
						"sulfur": 6
					},
					"time": 12
				}
			]
		},
		"tankstop": {
			"name": "Tank Trap",
			"codeName": "TankStop",
			"description": "An anti-tank obstacle that prevents vehicle access to an area. Can be dismantled with a Wrench.",
			"category": "defenses",
			"categoryOrder": 9,
			"radius": 1.75,
			"hitArea": [
				{
					"shape": [ 19.2705078125,1.518642578125,12.5450830078125,-9.2203369140625,41.92,-10.88,41.92,-0.64 ]
				},
				{
					"shape": [ 14.4,10.88,-0.7972900390625,7.48474609375,-5.44,5.12,8.64,-15.36,19.2705078125,1.518642578125 ]
				},
				{
					"shape": [ -2.24,-19.84,-9.92,-7.68,-25.28,-37.76,-15.04,-42.88 ]
				},
				{
					"shape": [ -30.4,20.48,-20.16,5.12,-9.92,-7.68,8.64,-15.36,-5.44,5.12,-20.8,24.96,-26.900426025390626,24.64680908203125 ]
				},
				{
					"shape": [ 8.64,-15.36,-9.92,-7.68,-2.24,-19.84,16.32,-44.16,25.92,-39.68 ]
				},
				{
					"shape": [ -40.64,-3.2,-9.92,-7.68,-20.16,5.12,-40,7.04,-42.151489372253415,1.77021484375 ]
				},
				{
					"shape": [ 20.8,44.8,-0.7972900390625,7.48474609375,14.4,10.88,29.76,39.68 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/TankStopIcon.webp",
			"texture": "game/Textures/Structures/tankstop.webp",
			"techId": "unlocktankstop",
			"maxHealth": 2000,
			"cost": {
				"metalbeammaterials": 3
			},
			"repairCost": 25
		},
		"tankstopsplinet3": {
			"name": "Dragon's Teeth",
			"codeName": "TankStopSplineT3",
			"description": "An anti-tank obstacle that prevents vehicle access to an area, and is resistant to most types of damage.",
			"category": "defenses",
			"experimental": true,
			"hasHandle": true,
			"isBezier": true,
			"minLength": 3.75,
			"maxLength": 15.05,
			"icon": "game/Textures/UI/StructureIcons/TankStopT3Icon.webp",
			"texture": "game/Textures/Structures/tankstopsplinet3.webp",
			"techId": "unlocktankstopsplinetier3",
			"maxHealth": 3000,
			"cost": {
				"concrete": 10
			},
			"repairCost": 150
		},
		"townbase3": {
			"name": "Town Base",
			"codeName": "TownBase3",
			"description": "A garrisoned focal building vital for the defence of a town. Players can spawn and stockpile items here.",
			"category": "world",
			"categoryOrder": 9,
			"baseGarrisonRadius": 150,
			"hitArea": [
				{
					"shape": [ -188.8,-207.36,-247.68,-203.52,-248.96,-247.04,-245.12,-259.2,-188.16,-258.56 ]
				},
				{
					"shape": [ 202.24,66.56,263.04,65.28,261.12,117.76,201.6,117.76 ]
				},
				{
					"shape": [ -296.32,-202.88,-309.12,-112.64,-304.64,-215.68,-296.96,-216.32 ]
				},
				{
					"shape": [ -38.4,128.64,-302.08,-35.2,-316.8,-110.08,184.96,64.64,184.96,128 ]
				},
				{
					"shape": [ 202.24,66.56,302.08,-35.2,302.08,64 ]
				},
				{
					"shape": [ -149.76,225.28,-113.92,128,-113.92,225.28 ]
				},
				{
					"shape": [ 302.72,-112,37.12,-202.88,300.8,-206.72 ]
				},
				{
					"shape": [ -253.44,259.84,-273.92,225.28,-302.08,128,-302.08,-35.2,-113.92,128,-149.76,225.28,-167.68,259.84 ]
				},
				{
					"shape": [ -302.08,128,-273.92,225.28,-301.44,225.28 ]
				},
				{
					"shape": [ 37.12,-202.88,-38.4,-202.88,-39.04,-216.96,35.84,-219.52 ]
				},
				{
					"shape": [ 302.08,-35.2,316.8,-111.36,318.08,-37.12 ]
				},
				{
					"shape": [ 202.24,66.56,184.96,64.64,-316.8,-110.08,-309.12,-112.64,302.72,-112,316.8,-111.36,302.08,-35.2 ]
				},
				{
					"shape": [ -37.76,142.72,-38.4,128.64,37.12,128.64,37.12,142.72 ]
				},
				{
					"shape": [ -316.8,-110.08,-302.08,-35.2,-314.88,-34.56 ]
				},
				{
					"shape": [ -302.08,-35.2,-38.4,128.64,-113.92,128 ]
				},
				{
					"shape": [ -247.68,-203.52,-309.12,-112.64,-296.32,-202.88 ]
				},
				{
					"shape": [ -188.8,-207.36,-38.4,-202.88,302.72,-112,-309.12,-112.64,-247.68,-203.52 ]
				},
				{
					"shape": [ 302.72,-112,-38.4,-202.88,37.12,-202.88 ]
				}
			],
			"icon": "game/Textures/UI/CustomIcons/TownBase3Icon.webp",
			"texture": "game/Textures/Structures/townbase3.webp",
			"cost": false
		},
		"townclargegarrisongs1": {
			"name": "Safe House",
			"codeName": "TownCLargeGarrisonGS1",
			"description": "A world base that players can respawn and rearm at. It can be destroyed and rebuilt to be claimed by a faction. It has garrison upgrades to supply local structures with garrison supplies.",
			"category": "world",
			"categoryOrder": 10,
			"baseGarrisonRadius": 150,
			"hitArea": [
				{
					"shape": [ -246.72,14.72,-34.88,-268.16,84.16,115.2,83.52,281.6,-245.44,281.6 ]
				},
				{
					"shape": [ -34.88,-268.16,-246.72,14.72,-260.16,14.72,-259.52,-268.8 ]
				},
				{
					"shape": [ 251.2,115.84,165.44,115.2,84.16,-215.04,250.56,-215.04 ]
				},
				{
					"shape": [ 84.16,-215.04,-18.24,-280.96,57.8036328125,-271.127265625,84.16,-256 ]
				},
				{
					"shape": [ 96.96,130.56,96.96,115.2,165.44,115.2,165.44,130.56 ]
				},
				{
					"shape": [ 84.16,115.2,-34.88,-268.16,-18.24,-280.96,84.16,-215.04,165.44,115.2 ]
				}
			],
			"icon": "game/Textures/UI/CustomIcons/SafeHouseIcon.webp",
			"texture": "game/Textures/Structures/townclargegarrisongs1.webp",
			"cost": false
		},
		"traincaboose": {
			"name": "BMS Roadhouse",
			"codeName": "TrainCaboose",
			"description": "A simple caboose that allows rail crews to maintain tracks more efficiently.",
			"category": "trains",
			"categoryOrder": 11,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TrainCabooseItemIcon.webp",
			"texture": "game/Textures/Vehicles/traincaboose.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 1008,
					"y": 186,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 186,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlockfacilitytier2"
		},
		"traincoal": {
			"name": "BMS Rockhold",
			"codeName": "TrainCoal",
			"description": "A container car for transporting coal to refuel trains over long-distance trips. ",
			"category": "trains",
			"categoryOrder": 5,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TrainCoalCarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/traincoal.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 608,
					"y": 197,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 197,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlockfacilitytier2"
		},
		"traincombatcarc": {
			"name": "Aegis Steelbreaker K5a",
			"codeName": "TrainCombatCarC",
			"description": "Known across the colonies as King of the Rails, this heavily armoured train car is designed to protect and exert dominance over contested rail lines, especially when transporting supplies into contested territory as well as safely transporting infantry. This armoured beast boasts a forward facing cannon, as well as heavy lateral guns.",
			"category": "trains",
			"categoryOrder": 8,
			"faction": "c",
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ 148.48,34.88,115.84,66.88,-113.92,66.88,-147.84,35.52,-148.48,-34.88,-114.56,-66.24,113.92,-66.24,148.48,-35.52 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/CombatCarCVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/traincombatcarc.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 1020,
					"y": 299,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 299,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlockfacilitytier3"
		},
		"traincombatcarw": {
			"name": "O’Brien Warsmith v.215",
			"codeName": "TrainCombatCarW",
			"description": "In his later years, O’Brien nearly died in an attack on a military passenger train while travelling to Whedon’s Row. In response, he put his team to work designing not only an infantry car that offered powerful protection to any locomotive, but one that just the sight of it would run off all but the most committed of attackers—Namely its thick armour plating and powerful twin turrets. ",
			"category": "trains",
			"categoryOrder": 9,
			"faction": "w",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/CombatCarWVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/traincombatcarw.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 1312,
					"y": 208,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 208,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlockfacilitytier3"
		},
		"trainengine": {
			"name": "BMS Black Bolt",
			"codeName": "TrainEngine",
			"description": "One of the most storied mass-market 0-6-2 locomotives engineered by the Bassett Motor Society, this coal-powered industrial train engine is reliable, tested, and incredibly durable. The Black Bolt’s legacy is unmatched having aided the Bassett Motor Society in supplying countries across the globe.",
			"category": "trains",
			"categoryOrder": 4,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TrainEngineVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/trainengine.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 1244,
					"y": 190,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 190,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"engine": true,
				"mass": 1000,
				"maxSpeed": 15
			},
			"techId": "unlockfacilitytier2"
		},
		"trainflatbed": {
			"name": "BMS Longrider",
			"codeName": "TrainFlatbed",
			"description": "A flatbed car for transporting large resources and munitions by train over long-distances. ",
			"category": "trains",
			"categoryOrder": 6,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TrainCarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/trainflatbed.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 900,
					"y": 193,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 193,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlockfacilitytier2"
		},
		"traininfantry": {
			"name": "BMS Holdout",
			"codeName": "TrainInfantry",
			"description": "An armoured train car with a mounted machinegun position for transporting infantry safely over long distances.",
			"category": "trains",
			"categoryOrder": 7,
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/InfantryCarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/traininfantry.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 900,
					"y": 193,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 193,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 25
			},
			"techId": "unlocktrainengine"
		},
		"trainlrartillery": {
			"name": "Tempest Cannon RA-2",
			"className": "locomotive",
			"codeName": "TrainLRArtillery",
			"description": "All the power of a stationary Storm Cannon, but easily relocated via rails. This devastating cannon is capable of leveling enemy fortifications at very large distances.",
			"category": "trains",
			"categoryOrder": 10,
			"length": 3.74,
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ 285.12,26.56,284.48,-26.56,294.08,15.04,294.72,26.56 ]
				},
				{
					"shape": [ 294.08,15.04,284.48,-26.56,294.08,-26.56 ]
				},
				{
					"shape": [ -301.12,-45.76,-251.2,-45.76,-251.2,46.4,-301.12,46.4 ]
				},
				{
					"shape": [ 376.64,13.12,294.08,15.04,294.08,-14.4,376.64,-13.12 ]
				},
				{
					"shape": [ -251.2,-45.76,-75.2,51.52,-75.2,69.44,-251.2,69.44 ]
				},
				{
					"shape": [ 47.68,46.4,-75.2834765625,-50.406953125,47.68,-45.76,284.48,-26.56,285.12,46.4 ]
				},
				{
					"shape": [ 284.48,-26.56,47.68,-45.76,285.12,-45.76 ]
				},
				{
					"shape": [ -251.2,-45.76,-75.2834765625,-50.406953125,47.68,46.4,47.04,50.88,-75.2,51.52 ]
				},
				{
					"shape": [ -75.56173828125,-53.746083984375,-75.2834765625,-50.406953125,-251.2,-45.76,-251.2,-53.44 ]
				},
				{
					"shape": [ 47.68,-45.76,-75.2834765625,-50.406953125,47.04,-50.88 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/TrainLRArtilleryVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/trainlrartillery.webp",
			"textureOffset": {
				"x": 1197,
				"y": 187
			},
			"canSnap": true,
			"canSnapAlongBezier": "rail_large_gauge",
			"techId": "unlockfacilitytier3"
		},
		"trainlrartillery_undercarriage": {
			"className": "locomotive_undercarriage",
			"category": "trains",
			"sortLayer": "vehicle",
			"hideInList": true,
			"texture": "game/Textures/Vehicles/trainlrartillery_undercarriage.webp",
			"sockets": [
				{
					"id": 0,
					"type": "traincar",
					"x": 620,
					"y": 186,
					"rotation": 90
				},
				{
					"id": 1,
					"type": "traincar",
					"x": 0,
					"y": 186,
					"rotation": 270
				}
			],
			"vehicle": {
				"type": "train",
				"track": "rail_large_gauge",
				"mass": 250
			}
		},
		"tree": {
			"name": "Tree",
			"description": "A tree featured throughout the world of Foxhole.",
			"category": "world",
			"categoryOrder": 10,
			"sortLayer": "overhead",
			"radius": 2,
			"icon": "game/Textures/UI/CustomIcons/TreeIcon.webp",
			"texture": "game/Textures/Structures/tree.webp"
		},
		"trenchconnectort1": {
			"name": "Trench Connector (Tier 1)",
			"codeName": "TrenchConnectorT1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers. This is a special Trench variant that can resize dynamically and can be built underneath roads.",
			"category": "entrenchments",
			"categoryOrder": 2,
			"tier": 1,
			"sortLayer": "foundation",
			"hasHandle": true,
			"isBezier": true,
			"trenchConnector": true,
			"minLength": 2.5,
			"maxLength": 8,
			"icon": "game/Textures/UI/StructureIcons/TrenchT1ConnectorIcon.webp",
			"texture": "game/Textures/Structures/trencht1_connector.webp",
			"textureBorder": "game/Textures/Structures/trencht1_connector_side.webp",
			"canSnap": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht1_end.webp",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht1_end.webp",
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 1500,
			"repairCost": 90,
			"upgrades": {
				"trenchconnectort1": {
					"reference": "trenchconnectort1"
				},
				"trenchconnectort2": {
					"reference": "trenchconnectort2"
				},
				"trenchconnectort3": {
					"reference": "trenchconnectort3"
				}
			}
		},
		"trenchconnectort2": {
			"name": "Trench Connector (Tier 2)",
			"codeName": "TrenchConnectorT2",
			"parentKey": "trenchconnectort1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers. This is a special Trench variant that can resize dynamically and can be built underneath roads.",
			"tier": 2,
			"icon": "game/Textures/UI/StructureIcons/TrenchT2ConnectorIcon.webp",
			"texture": "game/Textures/Structures/trencht2_connector.webp",
			"textureBorder": "game/Textures/Structures/trencht2_connector_side.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht2_end.webp",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht2_end.webp",
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 1850,
			"cost": {
				"cloth": 60
			},
			"repairCost": 60
		},
		"trenchconnectort3": {
			"name": "Trench Connector (Tier 3)",
			"codeName": "TrenchConnectorT3",
			"parentKey": "trenchconnectort2",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers. This is a special Trench variant that can resize dynamically and can be built underneath roads.",
			"tier": 3,
			"icon": "game/Textures/UI/StructureIcons/TrenchT3ConnectorIcon.webp",
			"texture": "game/Textures/Structures/trencht3_connector.webp",
			"textureBorder": "game/Textures/Structures/trencht3_connector_side.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht3_end.webp",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 1094,
							"category": 1026
						}
					],
					"texture": "game/Textures/Structures/trencht3_end.webp",
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 3500,
			"cost": {
				"concrete": 15
			},
			"repairCost": 120
		},
		"trenchempt1": {
			"name": "Trench Emplacement (Tier 1)",
			"codeName": "TrenchEmpT1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches. This variant can also serve as an emplacement for mannable defenses.",
			"category": "entrenchments",
			"categoryOrder": 5,
			"tier": 1,
			"width": 10.56,
			"length": 10.56,
			"hitArea": [
				{
					"shape": [ -57.6,-141.44,58.24,-141.44,141.44,-57.6,141.44,58.24,58.24,141.44,-57.6,141.44,-140.8,57.6,-140.8,-58.88 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/TrenchT1EmplacementIcon.webp",
			"texture": "game/Textures/Structures/trenchempt1.webp",
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 901,
					"y": 155,
					"rotation": 45
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 1056,
					"y": 528,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 901,
					"y": 901,
					"rotation": 135
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 528,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 155,
					"y": 901,
					"rotation": 225
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 0,
					"y": 528,
					"rotation": 270
				},
				{
					"id": 7,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt1_side_open.webp",
					"x": 155,
					"y": 155,
					"rotation": 315
				}
			],
			"maxHealth": 1500,
			"repairCost": 75,
			"upgrades": {
				"trenchempt1": {
					"reference": "trenchempt1"
				},
				"trenchempt2": {
					"reference": "trenchempt2"
				},
				"trenchempt3": {
					"reference": "trenchempt3"
				}
			}
		},
		"trenchempt2": {
			"name": "Trench Emplacement (Tier 2)",
			"codeName": "TrenchEmpT2",
			"parentKey": "trenchempt1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches. This variant can also serve as an emplacement for mannable defenses.",
			"tier": 2,
			"icon": "game/Textures/UI/StructureIcons/TrenchT2EmplacementIcon.webp",
			"texture": "game/Textures/Structures/trenchempt2.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 901,
					"y": 155,
					"rotation": 45
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 1056,
					"y": 528,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 901,
					"y": 901,
					"rotation": 135
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 528,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 155,
					"y": 901,
					"rotation": 225
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 0,
					"y": 528,
					"rotation": 270
				},
				{
					"id": 7,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt2_side_open.webp",
					"x": 155,
					"y": 155,
					"rotation": 315
				}
			],
			"maxHealth": 1850,
			"cost": {
				"cloth": 50
			},
			"repairCost": 50
		},
		"trenchempt3": {
			"name": "Trench Emplacement (Tier 3)",
			"codeName": "TrenchEmpT3",
			"parentKey": "trenchempt2",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches. This variant can also serve as an emplacement for mannable defenses.",
			"tier": 3,
			"icon": "game/Textures/UI/StructureIcons/TrenchT3EmplacementIcon.webp",
			"texture": "game/Textures/Structures/trenchempt3.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 901,
					"y": 155,
					"rotation": 45
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 1056,
					"y": 528,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 901,
					"y": 901,
					"rotation": 135
				},
				{
					"id": 4,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 528,
					"y": 1056,
					"rotation": 180
				},
				{
					"id": 5,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 155,
					"y": 901,
					"rotation": 225
				},
				{
					"id": 6,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 0,
					"y": 528,
					"rotation": 270
				},
				{
					"id": 7,
					"type": [
						{
							"mask": 2,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trenchempt3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trenchempt3_side_open.webp",
					"x": 155,
					"y": 155,
					"rotation": 315
				}
			],
			"maxHealth": 3500,
			"cost": {
				"concrete": 10
			},
			"repairCost": 80
		},
		"trencht1": {
			"name": "Trench (Tier 1)",
			"codeName": "TrenchT1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers.",
			"category": "entrenchments",
			"categoryOrder": 1,
			"tier": 1,
			"width": 10.56,
			"length": 3.1,
			"sortLayer": "foundation",
			"icon": "game/Textures/UI/StructureIcons/TrenchT1Icon.webp",
			"texture": "game/Textures/Structures/trencht1.webp",
			"canSnap": true,
			"snapNearest": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht1_end.webp",
					"x": 0,
					"y": 155,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht1_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht1_end.webp",
					"x": 1056,
					"y": 155,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht1_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht1_side_open.webp",
					"x": 528,
					"y": 310,
					"rotation": 180
				}
			],
			"maxHealth": 1500,
			"repairCost": 75,
			"upgrades": {
				"trencht1": {
					"reference": "trencht1"
				},
				"trencht2": {
					"reference": "trencht2"
				},
				"trencht3": {
					"reference": "trencht3"
				}
			}
		},
		"trencht2": {
			"name": "Trench (Tier 2)",
			"codeName": "TrenchT2",
			"parentKey": "trencht1",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers.",
			"tier": 2,
			"icon": "game/Textures/UI/StructureIcons/TrenchT2Icon.webp",
			"texture": "game/Textures/Structures/trencht2.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht2_end.webp",
					"x": 0,
					"y": 155,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht2_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht2_end.webp",
					"x": 1056,
					"y": 155,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht2_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht2_side_open.webp",
					"x": 528,
					"y": 310,
					"rotation": 180
				}
			],
			"maxHealth": 1850,
			"cost": {
				"cloth": 50
			},
			"repairCost": 50,
			"upgrades": {
				"trencht1": {
					"reference": "trencht1"
				},
				"trencht2": {
					"reference": "trencht2"
				},
				"trencht3": {
					"reference": "trencht3"
				}
			}
		},
		"trencht3": {
			"name": "Trench (Tier 3)",
			"codeName": "TrenchT3",
			"parentKey": "trencht2",
			"description": "A dugout that's used for cover and as passageways between Bunkers. Connects to other Trenches and Bunkers.",
			"tier": 3,
			"icon": "game/Textures/UI/StructureIcons/TrenchT3Icon.webp",
			"texture": "game/Textures/Structures/trencht3.webp",
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht3_end.webp",
					"x": 0,
					"y": 155,
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht3_side_open.webp",
					"x": 528,
					"y": 0,
					"rotation": 0
				},
				{
					"id": 2,
					"type": [
						{
							"mask": 70,
							"category": 2
						}
					],
					"texture": "game/Textures/Structures/trencht3_end.webp",
					"x": 1056,
					"y": 155,
					"rotation": 90
				},
				{
					"id": 3,
					"type": [
						{
							"mask": 2,
							"category": 64
						}
					],
					"texture": "game/Textures/Structures/trencht3_side_closed.webp",
					"textureAlt": "game/Textures/Structures/trencht3_side_open.webp",
					"x": 528,
					"y": 310,
					"rotation": 180
				}
			],
			"maxHealth": 3500,
			"cost": {
				"concrete": 10
			},
			"repairCost": 80,
			"upgrades": {
				"trencht1": {
					"reference": "trencht1"
				},
				"trencht2": {
					"reference": "trencht2"
				},
				"trencht3": {
					"reference": "trencht3"
				}
			}
		},
		"troopship": {
			"name": "BMS - White Whale",
			"codeName": "TroopShip",
			"description": "A heavily armoured vessel, the Basset Motor Society’s White Whale-class troop transports can deploy on faraway beaches to function as a permanent forward operating base.",
			"category": "vehicles",
			"categoryOrder": 22,
			"sortLayer": "vehicle",
			"hitArea": [
				{
					"shape": [ 327.36,-61.76,344,-31.68,344,31.04,16.96,92.48,-255.68,-89.92,275.52,-93.12,304.96,-82.88 ]
				},
				{
					"shape": [ 278.08,93.12,16.96,92.48,344,31.04,328.64,60.48,304.96,82.88 ]
				},
				{
					"shape": [ -338.24,64.96,-347.2,50.88,-347.2,-54.72,-256.32,89.92,-280,89.28,-309.44,83.52 ]
				},
				{
					"shape": [ 344,31.04,344,-31.68,349.12,0.32 ]
				},
				{
					"shape": [ -280,-89.28,-255.68,-89.92,16.96,92.48,9.28,118.08,-256.32,89.92,-347.2,-54.72,-334.4,-68.16,-305.6,-83.52 ]
				},
				{
					"shape": [ 8.64,-118.08,16.96,-92.48,-255.68,-89.92,-240.96,-118.08 ]
				},
				{
					"shape": [ -256.32,89.92,9.28,118.08,-241.6,118.08 ]
				}
			],
			"icon": "game/Textures/UI/VehicleIcons/TroopShipVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/troopship.webp",
			"techId": "unlocktroopship"
		},
		"truckc": {
			"name": "R-1 Hauler",
			"codeName": "TruckC",
			"description": "A heavy-duty Colonial truck used to mobilize troops and supplies.",
			"category": "vehicles",
			"categoryOrder": 1,
			"faction": "c",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TruckVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/truckc.webp"
		},
		"truckw": {
			"name": "Dunne Transport",
			"codeName": "TruckW",
			"description": "A heavy-duty Warden truck used to mobilize troops and supplies.",
			"category": "vehicles",
			"categoryOrder": 2,
			"faction": "w",
			"sortLayer": "vehicle",
			"icon": "game/Textures/UI/VehicleIcons/TruckWarVehicleIcon.webp",
			"texture": "game/Textures/Vehicles/truckw.webp"
		},
		"wallsplinet1": {
			"name": "Wall (Tier 1)",
			"codeName": "WallSplineT1",
			"description": "A basic barrier that is used to prevent passage through an area.",
			"category": "defenses",
			"categoryOrder": 3,
			"sortLayer": "wall",
			"hasHandle": true,
			"minLength": 3,
			"maxLength": 10,
			"icon": "game/Textures/UI/ItemIcons/Wall-T1Icon.webp",
			"texture": "game/Textures/Structures/wallsplinet1.webp",
			"canSnap": true,
			"canSnapRotate": true,
			"sockets": [
				{
					"id": 0,
					"type": [
						{
							"mask": 4608,
							"category": 512
						}
					],
					"texture": "game/Textures/Structures/wallsplinet1_post.webp",
					"textureAlt": "game/Textures/Structures/wallsplinet1_post.webp",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": [
						{
							"mask": 4608,
							"category": 512
						}
					],
					"texture": "game/Textures/Structures/wallsplinet1_post.webp",
					"textureAlt": "game/Textures/Structures/wallsplinet1_post.webp",
					"cap": "back",
					"rotation": 90
				}
			],
			"maxHealth": 500,
			"cost": {
				"cloth": 15
			},
			"repairCost": 15,
			"upgrades": {
				"wallsplinet2": {
					"name": "Wall (Tier 2)",
					"codeName": "WallSplineT2",
					"description": "A barrier that is used to prevent passage through an area.",
					"minLength": 3,
					"maxLength": 10,
					"icon": "game/Textures/UI/ItemIcons/Wall-T2Icon.webp",
					"texture": "game/Textures/Structures/wallsplinet2.webp",
					"techId": "unlockwalltier2",
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 4608,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet2_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet2_post.webp",
							"cap": "front",
							"rotation": 270
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 4608,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet2_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet2_post.webp",
							"cap": "back",
							"rotation": 90
						}
					],
					"cost": {
						"cloth": 30
					},
					"maxHealth": 1000,
					"repairCost": 30
				},
				"wallsplinet3": {
					"name": "Wall (Tier 3)",
					"codeName": "WallSplineT3",
					"description": "A barrier that is used to prevent passage through an area.",
					"minLength": 3,
					"maxLength": 10,
					"icon": "game/Textures/UI/ItemIcons/Wall-T3Icon.webp",
					"texture": "game/Textures/Structures/wallsplinet3.webp",
					"techId": "unlockwalltier3",
					"sockets": [
						{
							"id": 0,
							"type": [
								{
									"mask": 4608,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet3_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet3_post.webp",
							"cap": "front",
							"rotation": 270
						},
						{
							"id": 1,
							"type": [
								{
									"mask": 4608,
									"category": 512
								}
							],
							"texture": "game/Textures/Structures/wallsplinet3_post.webp",
							"textureAlt": "game/Textures/Structures/wallsplinet3_post.webp",
							"cap": "back",
							"rotation": 90
						}
					],
					"cost": {
						"concrete": 15
					},
					"maxHealth": 3000,
					"repairCost": 75
				}
			}
		},
		"watchtower": {
			"name": "Watch Tower",
			"codeName": "WatchTower",
			"description": "Reports nearby enemy movements to players with Radios equipped",
			"category": "defenses",
			"categoryOrder": 5,
			"range": {
				"type": "radio",
				"max": 80
			},
			"icon": "game/Textures/UI/StructureIcons/WatchTowerStructureIcon.webp",
			"texture": "game/Textures/Structures/watchtower.webp",
			"maxHealth": 350,
			"cost": {
				"cloth": 60
			},
			"repairCost": 60
		},
		"water_pump": {
			"name": "Water Pump",
			"codeName": "FacilityMineWater",
			"description": "Pumps water through pipes. Must be built on bodies of water.",
			"category": "harvesters",
			"color": 2591968,
			"hitArea": [
				{
					"shape": [ 64.32,18.88,-54.72,68.8,-68.8,73.92,-54.72,-29.76,22.72,-32.96,58.56,-31.04 ]
				},
				{
					"shape": [ -68.8,73.92,-54.72,68.8,-55.36,73.92,-62.4,77.76 ]
				},
				{
					"shape": [ -54.72,-29.76,-68.8,73.92,-68.16,-36.8,-62.76571411132812,-39.542861328125,-56.64,-36.8 ]
				},
				{
					"shape": [ -54.72,68.8,64.32,18.88,58.56,70.08 ]
				},
				{
					"shape": [ 28.845712890625,-53.074287109375,22.72,-32.96,-8.64,-31.68,-13.76,-53.44,-9.28,-69.44,0.8685693359375,-77.21142578125,16.32,-76.48,26.56,-68.16 ]
				}
			],
			"icon": "game/Textures/UI/StructureIcons/FacilityMineWaterIcon.webp",
			"texture": "game/Textures/Structures/water_pump.webp",
			"maxHealth": 850,
			"cost": {
				"facilitymaterials1": 35
			},
			"repairCost": 100,
			"_productionLength": 1,
			"production": [
				{
					"id": 0,
					"output": {
						"watercan": 1
					},
					"time": 50
				}
			],
			"productionScaling": false,
			"upgrades": {
				"electric_water": {
					"name": "Electric Water Pump",
					"codeName": "Electric",
					"description": "A generator that pumps water more efficiently. Requires Power.",
					"hitArea": [
						{
							"shape": [ 36.8,-5.44,1.6,-40,36.8,-40 ]
						},
						{
							"shape": [ 37.44,25.92,36.8,-5.44,90.56,-4.8,90.56,25.92 ]
						},
						{
							"shape": [ -77.12,-38.08,-77.12,58.56,-83.97714294433594,68.70857177734375,-89.92,65.6,-90.56,-45.12,-83.97714294433594,-48.137138671875,-77.76,-45.76 ]
						},
						{
							"shape": [ -83.97714294433594,68.70857177734375,-77.12,58.56,-77.76,66.24 ]
						},
						{
							"shape": [ -59.84,61.12,31.58857421875,61.39428466796875,31.68,74.56,-54.5371435546875,74.56,-59.84,73.92 ]
						},
						{
							"shape": [ 37.44,25.92,36.8,61.12,31.58857421875,61.39428466796875,-77.12,58.56,-77.12,-38.08,-29.12,-41.28,1.6,-40,36.8,-5.44 ]
						},
						{
							"shape": [ -11.2,-86.72,-0.594287109375,-81.96572265625,6.72,-70.72,6.902861328125,-58.742861328125,0.96,-48.32,-35.52,-62.034287109375,-34.24,-73.28,-25.8285693359375,-83.24572265625 ]
						},
						{
							"shape": [ 0.96,-48.32,1.6,-40,-29.12,-48.96,-35.52,-62.034287109375 ]
						},
						{
							"shape": [ 1.6,-40,-29.12,-41.28,-29.12,-48.96 ]
						},
						{
							"shape": [ -54.5371435546875,74.56,26.56,74.56,22.72,86.72,-51.52,86.72 ]
						},
						{
							"shape": [ -77.12,58.56,31.58857421875,61.39428466796875,-59.84,61.12 ]
						}
					],
					"baseIcon": "game/Textures/UI/StructureIcons/FacilityElectricWaterPumpIcon.webp",
					"icon": "game/Textures/UI/StructureIcons/FacilityElectricWaterPumpIcon.webp",
					"texture": "game/Textures/Structures/water_pump_electric_water.webp",
					"positionOffset": {
						"x": 68,
						"y": 28
					},
					"sockets": [
						{
							"id": 0,
							"name": "pipeout",
							"type": [
								{
									"mask": 16779264,
									"category": 16384
								}
							],
							"flow": "out",
							"x": 580,
							"y": 304,
							"rotation": 90
						},
						{
							"id": 1,
							"name": "power",
							"type": [
								{
									"mask": 131072,
									"category": 1048576
								}
							],
							"x": 395,
							"y": 304,
							"rotation": 90
						}
					],
					"cost": {
						"facilitymaterials1": 150
					},
					"_productionLength": 2,
					"production": [
						{
							"id": 0,
							"output": {
								"water": 60
							},
							"time": 50,
							"power": -0.5
						},
						{
							"id": 1,
							"output": {
								"watercan": 1
							},
							"time": 40
						}
					]
				}
			}
		},
		"world_road": {
			"name": "Public Road",
			"description": "A public road featured throughout the world of Foxhole.",
			"category": "world",
			"categoryOrder": 11,
			"sortLayer": "road",
			"hasHandle": true,
			"isBezier": true,
			"minLength": 12,
			"maxLength": 48,
			"icon": "game/Textures/UI/ItemIcons/FacilityRoadItemIcon.webp",
			"texture": "game/Textures/Structures/road_dirt.webp",
			"canSnap": true,
			"canSnapAlongBezier": true,
			"sockets": [
				{
					"id": 0,
					"type": "worldroad",
					"cap": "front",
					"rotation": 270
				},
				{
					"id": 1,
					"type": "worldroad",
					"cap": "back",
					"rotation": 90
				}
			],
			"upgrades": {
				"packed_dirt": {
					"name": "Packed Dirt",
					"icon": "game/Textures/UI/ItemIcons/FacilityRoadItemIcon.webp",
					"texture": "game/Textures/Structures/road_packed_dirt.webp"
				},
				"gravel": {
					"name": "Gravel",
					"icon": "game/Textures/UI/ItemIcons/FacilityRoadItemIcon.webp",
					"texture": "game/Textures/Structures/road_gravel.webp"
				},
				"great_march": {
					"name": "Great March",
					"icon": "game/Textures/UI/ItemIcons/FacilityRoadItemIcon.webp",
					"texture": "game/Textures/Structures/road_great_march.webp"
				}
			}
		}
	}
}