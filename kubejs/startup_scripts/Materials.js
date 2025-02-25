GTCEuStartupEvents.registry('gtceu:material', gtsa => {
    //fluids
    function fluids (fluidname , hex) {
        gtsa.create(fluidname)
        .fluid()
        .color(hex) 
    }
    fluids("resource_slurry", 0xff6600)
    fluids("copper_slurry",0xe68a00)
    fluids("iron_slurry", 0xe6e6e6)
    fluids("tin_slurry", 0xbfbfbf)
    fluids("redstone_slurry", 0xff3300)
    fluids("coal_slurry", 0x0d0d0d)
    fluids("ilmenite_slurry", 0x1a1a1a)
    fluids("diamond_slurry", 0x00e6e6)
    fluids("silver_slurry", 0xd9d9d9)
    fluids("nickel_slurry", 0x6699ff)
    fluids("pure_metal_solution", 0x8c8c8c)
    //dusts 
    function dusts(dustname, hex){
    gtsa.create(dustname)
    .dust()
    .color(hex)
    }
    dusts("mixed_metal",0xffbf80)
})

