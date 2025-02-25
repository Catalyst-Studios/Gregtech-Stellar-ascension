ServerEvents.recipes(gtsa => {
    gtsa.recipes.gtceu.mixer("mixed_metal_dust")
    .itemInputs(
      "1x gtceu:tin_dust",
      "1x gtceu:iron_dust",
      "1x gtceu:copper_dust"
    )
    .itemOutputs(
      "gtceu:mixed_metal_dust"
    )
    .duration(20*5)
        .EUt(30)
        
        gtsa.recipes.gtceu.chemical_reactor("resource_slurry_sulfuric_acid")
        .itemInputs(
          "gtceu:mixed_metal_dust"
        )
        .inputFluids(
          Fluid.of("gtceu:sulfuric_acid", 1000)
        )
        .outputFluids(
          Fluid.of("gtceu:resource_slurry", 1000)
        )
        .duration(20*10)
        .EUt(30)
        gtsa.recipes.gtceu.chemical_reactor("resource_slurry_nitric_acid")
        .itemInputs(
          "gtceu:mixed_metal_dust"
        )
        .inputFluids(
          Fluid.of("gtceu:nitric_acid", 1000)
        )
        .outputFluids(
          Fluid.of("gtceu:resource_slurry", 2000)
        )
        .duration(20*10)
        .EUt(30)
        gtsa.recipes.gtceu.chemical_reactor("resource_slurry_phosphoric_acid")
        .itemInputs(
          "gtceu:mixed_metal_dust"
        )
        .inputFluids(
          Fluid.of("gtceu:phosphoric_acid", 1000)
        )
        .outputFluids(
          Fluid.of("gtceu:resource_slurry", 4000)
        )
        .duration(20*10)
        .EUt(30)
        
        gtsa.recipes.gtceu.chemical_reactor("pure_metal_solution")
        .inputFluids(
          Fluid.of("gtceu:resource_slurry", 1000),
          Fluid.of("gtceu:carbon_monoxide", 500)
        )
        .outputFluids(
          Fluid.of("gtceu:pure_metal_solution", 1000)
        )
        .duration(20*10)
        .EUt(28)
        
})

