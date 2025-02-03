<script>
    import { onMount } from "svelte";
    import SButton from "./ui/SButton.svelte";
    import CloudWords from "./CloudWords.svelte";

    let title1 = "FUCKYOUMOTO";
    let underscope = "_";
    const symbols = ["_", "-", "~", "*", "/", "\\", "="];
    let currentIndex = 0;

    onMount(() => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % symbols.length;
            underscope = symbols[currentIndex];
        }, 100);
    });
</script>

<div class="w-full bg-hero-gradient">
    <div class="px-[2em] md:px-[4em] lg:px-[15em] flex flex-col gap-4 py-10 lg:py-20">
        <h1 class="text-2xl md:text-4xl text-color9 text-center">
            <span class="px-0 inline-block">{title1}</span><span class="px-0 inline-block">{underscope}</span>
        </h1>
        <p class="text-sm lg:text-lg text-center">Open-source project for Motorola device enthusiasts, focusing on bootloader unlocking, modding, and more</p>
        <div class="w-full flex gap-2 justify-center mt-4">
            <SButton text="Supported devices" variant="accent" to="#supported-devices" />
        </div>
    </div>

    <div class="w-full flex justify-center mt-4 bg-color2">
        <CloudWords words="{[
            'Bootloader', 'Testpoints', 'Schematics', 'GSI', 'UART', 'Decompilation', 'Root', 'MtkClient', 'Modding', 'Preloader', 'BROM', 'SoftBricks', 'Firmware',
            'Recovery', 'FlashTool', 'Updates'
        ]}" />
    </div>
</div>