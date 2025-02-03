<script>
    export let image = "";
    export let header = "";
    export let text = "";
</script>

<div class="landing-container w-full flex justify-center items-center py-5 lg:py-10 px-5 lg:px-20">
    <div class="flex flex-col md:flex-row w-full max-w-screen-xl gap-10">
        <div class="flex-1">
            <img src="{image}" class="w-full h-auto object-cover" />
        </div>

        <div class="flex-1 flex flex-col justify-center text-center md:text-left gap-2">
            <h2 class="text-xl md:text-2xl font-semibold text-color9">
                {header}
            </h2>
            <p class="text-sm md:text-base">{@html text}</p>
        </div>
    </div>
</div>