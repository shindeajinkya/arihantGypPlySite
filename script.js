let products = [
    {
        name: "Plain Sheet (Transparent)",
        category: "acrylicSheets"
    },
    {
        name: "Milky White",
        category: "acrylicSheets"
    },
    {
        name: "Glasswool",
        category: "acoustic"
    },
    {
        name: "Rockwool",
        category: "acoustic"
    },
    {
        name: "Rp Tissues",
        category: "acoustic"
    },
    {
        name: "Groved Acoustical Panels",
        category: "acoustic"
    },
    {
        name: "Gypsum Perforated Acoustical Panels",
        category: "acoustic"
    },
    {
        name: "Mdf Perforated Acoustical Panels",
        category: "acoustic"
    },
    {
        name: "Acoustic Fibre Glass Ceiling Panels",
        category: "acoustic"
    },
    {
        name: "Woodwool Board",
        category: "acoustic"
    },
    {
        name: "Sint",
        category: "acoustic"
    },
    {
        name: "Interior (3mm & 4mm)",
        category: "ACP"
    },
    {
        name: "Exterior (3mm, 4mm & 6mm)",
        category: "ACP"
    },
    {
        name: "Ramco Hilux",
        category: "cementSheet"
    },
    {
        name: "Ramco Hicem",
        category: "cementSheet"
    },
    {
        name: "Bison Board",
        category: "cementSheet"
    },
    {
        name: "V Board",
        category: "cementSheet"
    },
    {
        name: "Everest",
        category: "cementSheet"
    },
    {
        name: "Shera Board",
        category: "cementSheet"
    },
    {
        name: "V Board",
        category: "cementTile"
    },
    {
        name: "Hicem",
        category: "cementTile"
    },
    {
        name: "Everest",
        category: "cementTile"
    },
    {
        name: "Charcoal Sheets",
        category: "others"
    },
    {
        name: "Tristone",
        category: "corianTops"
    },
    {
        name: "LG",
        category: "corianTops"
    },
    {
        name: "China Make",
        category: "corianTops"
    },
    {
        name: "Jali Cutting",
        category: "cncCut"
    },
    {
        name: "Laser Cutting",
        category: "cncCut"
    },
    {
        name: "3d Jobs",
        category: "cncCut"
    },
    {
        name: "PVC Wall Panels",
        category: "decWall"
    },
    {
        name: "PVC 3d Panels",
        category: "decWall"
    },
    {
        name: "PVC Mouldings",
        category: "decWall"
    },
    {
        name: "Pine Wood",
        category: "decWall"
    },
    {
        name: "Louvers",
        category: "decWall"
    },
    {
        name: "Interlocking Panels",
        category: "decWall"
    },
    {
        name: "3d Backlit Panels",
        category: "decWall"
    },
    {
        name: "Albaster Sheet",
        category: "decWall"
    },
    {
        name: "Wall Panels 3d",
        category: "decWall"
    },
    {
        name: "RFID + Key",
        category: "digiLocks"
    },
    {
        name: "RFID + Key + Bluetooth",
        category: "digiLocks"
    },
    {
        name: "RFID + Key + Bluetooth + Touchpad",
        category: "digiLocks"
    },
    {
        name: "Cement Planks(Shera/ Everest/ SmartWood)",
        category: "elevation"
    },
    {
        name: "WBC (5ft + 8ft)",
        category: "elevation"
    },
    {
        name: "Gypsum Board",
        category: "False Ceil"
    },
    {
        name: "Gi Channels",
        category: "False Ceil"
    },
    {
        name: "PLaster Of Paris Bag",
        category: "False Ceil"
    },
    {
        name: "Joining Compound Bag",
        category: "False Ceil"
    },
    {
        name: "Cornice + Corners",
        category: "False Ceil"
    },
    {
        name: "Beading",
        category: "False Ceil"
    },
    {
        name: "POP (Rajasthan) Sheet",
        category: "False Ceil"
    },
    {
        name: "Grid Ceiling(24mm/15mm/Omega/Slhoute)",
        category: "False Ceil"
    },
    {
        name: "MET Tiles",
        category: "False Ceil"
    },
    {
        name: "Gypsum Tiles",
        category: "False Ceil"
    },
    {
        name: "Other Accesories(Screw, Tape, Fastner, Sleeves, GI Wire, L clamp, Nut & Bolt,Clip)",
        category: "False Ceil"
    },
    {
        name: "Vinyl Flooring(Roll & Strip)",
        category: "flooring"
    },
    {
        name: "Wooden Flooring",
        category: "flooring"
    },
    {
        name: "Fevicol & Adhesives",
        category: "others"
    },
    {
        name: "High Pressure Laminates(HPL) 6mm",
        category: "others"
    },
    {
        name: "handles(Brass & StainlessSteel)",
        category: "hardwarefitting"
    },
    {
        name: "Door Knobs",
        category: "hardwarefitting"
    },
    {
        name: "Accessories",
        category: "hardwarefitting"
    },
    {
        name: "Regular",
        category: "laminates"
    },
    {
        name: "Metal Laminate",
        category: "laminates"
    },
    {
        name: "PVC Laminate",
        category: "laminates"
    },
    {
        name: "Designer Laminates",
        category: "laminates"
    },
    {
        name: "Fabric Laminates",
        category: "laminates"
    },
    {
        name: "Woolen Laminates",
        category: "laminates"
    },
    {
        name: "360 Bendable Laminates",
        category: "laminates"
    },
    {
        name: "Plain MDF",
        category: "MDF"
    },
    {
        name: "Prelam MDF",
        category: "MDF"
    },
    {
        name: "Metaphor Siliceous",
        category: "others"
    },
    {
        name: "Modular Kitchen",
        category: "others"
    },
    {
        name: "OST",
        category: "others"
    },
    {
        name: "Plain",
        category: "plywood"
    },
    {
        name: "Waterproof",
        category: "plywood"
    },
    {
        name: "Prelam Plywood",
        category: "plywood"
    },
    {
        name: "Plain",
        category: "particleboard"
    },
    {
        name: "Prelam",
        category: "particleboard"
    },
    {
        name: "Floor Protection",
        category: "protectGuard"
    },
    {
        name: "Anti Skid Protector",
        category: "protectGuard"
    },
    {
        name: "Ghana(I & II)",
        category: "timberBead"
    },
    {
        name: "Burma(I & II)",
        category: "timberBead"
    },
    {
        name: "Pinewood",
        category: "timberBead"
    },
    {
        name: "Beading Imported",
        category: "timberBead"
    },
    {
        name: "Designer Beading",
        category: "timberBead"
    },
    {
        name: "Touch Switches",
        category: "others"
    },
    {
        name: "Veneer",
        category: "others"
    },
    {
        name: "45 Density",
        category: "WPC"
    },
    {
        name: "50 Density",
        category: "WPC"
    },
    {
        name: "60 Density",
        category: "WPC"
    },
    {
        name: "Home Automation",
        category: "others"
    },
    {
        name: "LED Fittings",
        category: "others"
    },
    {
        name: "Bathroom Fittings",
        category: "others"
    },
]

let productUIEl = document.querySelector('#product-list');

let filterByCategories = (categorie, array) => {
    let filteredArray = array.filter(product => {
        return product.category == categorie
    })
    return filteredArray;
}

let createList = (categoryArray) => {
    let renderUI = categoryArray.map(product => {
        return `<li>${product.name}</li>`
    })
    let listToRender = `<ul class="list-unstyled">${renderUI.join('')}</ul>`
    return listToRender
}

let acrylicSheetsList = createList(filterByCategories('acrylicSheets', products))

let acousticList = createList(filterByCategories('acoustic', products))

let ACPList = createList(filterByCategories('ACP', products))

let cementSheetsList = createList(filterByCategories('cementSheet', products))

let cementTileList = createList(filterByCategories('cementTile', products))

let corianTopsList = createList(filterByCategories('corianTops', products))

let cncCutList = createList(filterByCategories('cncCut', products))

let decWallList = createList(filterByCategories('decWall', products))

let digiLocksList = createList(filterByCategories('digiLocks', products))

let elevationList = createList(filterByCategories('elevation', products))

let falseCeilList = createList(filterByCategories('False Ceil', products))

let flooringList = createList(filterByCategories('flooring', products))

let hardwarefittingList = createList(filterByCategories('hardwarefitting', products))

let laminatesList = createList(filterByCategories('laminates', products))

let MDFList = createList(filterByCategories('MDF', products))

let plywoodList = createList(filterByCategories('plywood', products))

let particleboardList = createList(filterByCategories('particleboard', products))

let protectGuardList = createList(filterByCategories('protectGuard', products))

let timberBeadList = createList(filterByCategories('timberBead', products))

let WPCList = createList(filterByCategories('WPC', products))


renderUI = `
    <h1>Acrylic Sheets</h1>
    ${acrylicSheetsList}
    <hr>
    <h1>Acoustic</h1>
    ${acousticList}
    <hr>
    <h1>ACP</h1>
    ${ACPList}
    <hr>
    <h1>Cement Sheets</h1>
    ${cementSheetsList}
    <hr>
    <h1>Cement Tile</h1>
    ${cementTileList}
    <hr>
    <h1>Charcoal Sheets</h1>
    <hr>
    <h1>Corian Tops</h1>
    ${corianTopsList}
    <hr>
    <h1>CNC Cut</h1>
    ${cncCutList}
    <hr>
    <h1>Decorative Walls</h1>
    ${decWallList}
    <hr>
    <h1>Digital Locks</h1>
    ${digiLocksList}
    <hr>
    <h1>Elevation</h1>
    ${elevationList}
    <hr>
    <h1>False Ceiling</h1>
    ${falseCeilList}
    <hr>
    <h1>Flooring</h1>
    ${flooringList}
    <hr>
    <h1>Fevicol & Adhesives</h1>
    <hr>
    <h1>High Pressure Laminates(HPL) 6mm</h1>
    <hr>
    <h1>Hardware Fitting</h1>
    ${hardwarefittingList}
    <hr>
    <h1>Laminates</h1>
    ${laminatesList}
    <hr>
    <h1>MDF</h1>
    ${MDFList}
    <hr>
    <h1>Metaphor Siliceous</h1>
    <hr>
    <h1>Modular Kitchen</h1>
    <hr>
    <h1>OST</h1>
    <hr>
    <h1>Plywood</h1>
    ${plywoodList}
    <hr>
    <h1>Particle Boards</h1>
    ${particleboardList}
    <hr>
    <h1>Protect Guards</h1>
    ${protectGuardList}
    <hr>
    <h1>Timber Bead</h1>
    ${timberBeadList}
    <hr>
    <h1>Touch Switches</h1>
    <hr>
    <h1>Veneer</h1>
    <hr>
    <h1>WPC</h1>
    ${WPCList}
    <hr>
    <h1>Home Automation</h1>
    <hr>
    <h1>LED Fittings</h1>
    <hr>
    <h1>Bathroom Fittings</h1>
    <hr>
`

productUIEl.innerHTML = renderUI