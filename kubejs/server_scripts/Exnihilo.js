ServerEvents.recipes((event) => {
    // Removes every sieve recipe added by default in Ex Deorum
    exdeorum.removeDefaultSieveRecipes(event);
    //Removes every compressed sieve recipe added by default in Ex Deorum
    event.remove([{ type: 'exdeorum:compressed_sieve'}])
    //removes meshes
    event.remove({ output: 'exdeorum:flint_mesh' })
    event.remove({ output: 'exdeorum:iron_mesh' })
    event.remove({ output: 'exdeorum:golden_mesh' })
    event.remove({ output: 'exdeorum:diamond_mesh' })
    event.remove({ output: 'exdeorum:netherite_mesh' })
    event.remove({ output: 'exdeorum:mechanical_hammer' })
    event.remove({ output: 'exdeorum:mechanical_sieve' })

    //sieving
    const gravel = "minecraft:gravel"
    const sand = "minecraft:sand"
    const dust = "exdeorum:dust"
    const dirt = "minecraft:dirt"
    const leaves = "minecraft:oak_leaves"
    function sieves(input, result, n, p) {
        event.custom({
            type:"exdeorum:sieve",
            ingredient: {
                item: input
            },
            mesh:"exdeorum:string_mesh",
            result: result,
            result_amount:{
                type:"minecraft:binomial",
                n: n,
                p: p
            }
    })
    }
    //gravel
    sieves(gravel, "gtceu:crushed_iron_ore", 2.0, 0.2)
    sieves(gravel, "gtceu:crushed_tin_ore", 2.0, 0.2)
    sieves(gravel, "gtceu:crushed_copper_ore", 4.0, 0.25)
    sieves(gravel, "minecraft:diamond", 1.0, 0.02)
    sieves(gravel, "gtceu:raw_coal", 4, 0.35)
    //dust
    sieves(dust, "minecraft:redstone", 3.0, 0.3)
    sieves(dust, "minecraft:quartz", 1, 0.3)
    //dirt
    sieves(dirt, "exdeorum:stone_pebble", 4, 0.7)
    //oak_leaves
    sieves(leaves, "minecraft:oak_sapling", 1, 0.25)
    sieves(leaves, "minecraft:spruce_sapling", 1, 0.25)
    sieves(leaves, "minecraft:birch_sapling", 1, 0.25)
    sieves(leaves, "minecraft:jungle_sapling", 1, 0.25)
    sieves(leaves, "minecraft:dark_oak_sapling", 1, 0.25)
    sieves(leaves, "minecraft:acacia_sapling", 1, 0.25)
    sieves(leaves, "minecraft:cherry_sapling", 1, 0.25)
    sieves(leaves, "gtceu:rubber_sapling", 1, 0.25)

    //barrel composting
    event.custom({
        "type": "exdeorum:barrel_compost",
        "ingredient": {
          "tag": "minecraft:leaves"
        },
        "volume": 1000
      })
})


