<script>
    import { onMount } from "svelte";

    export let words = [];

    let displayWords = [...words];
    let screenWidth = 0;

    const updateScreenWidth = () => {
        if (typeof window !== "undefined") {
            screenWidth = window.innerWidth;
        }
    };

    // random size generation
    const getSize = () => ["text-xs", "text-sm", "text-lg"][Math.floor(Math.random() * 4)];

    // random color generation
    const getColor = () => ["text-blue-400", "text-red-400", "text-green-400", "text-yellow-400", "text-purple-400"][Math.floor(Math.random() * 5)];

    const updateWords = () => {
        if (screenWidth < 1024) { // If the screen is smaller than 'lg'
            displayWords = words.slice(0, Math.floor(words.length / 2.2)); // Crop the array by 2.2 times
        } else {
            displayWords = [...words]; // Restore the initial array
        }
    };

    onMount(() => {
        updateScreenWidth();
        updateWords();
        window.addEventListener("resize", updateScreenWidth);
        return () => window.removeEventListener("resize", updateScreenWidth);
    });

    $: updateWords(); // Reactively update the array when screenWidth changes
</script>

<div class="flex flex-wrap gap-3 p-6 justify-center">
    {#each displayWords as word}
        <span class="font-bold {getSize()} {getColor()}">{word}</span>
    {/each}
</div>
