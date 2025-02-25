ServerEvents.recipes((event) => {
    //smelting recipes
    event.smelting('minecraft:glass' , 'gtceu:glass_dust')
    //shaped crafting recipes
    event.shaped('gtceu:wrought_iron_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'gtceu:wrought_iron_nugget'
    }
    )
})