<script>
    export let devices = [];

</script>

<div class="pt-10">
    <h1 class="text-2lg text-color9 text-center">Supported devices</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-10 lg:px-28">
        {#each devices as device}
            <a href="{device.link}">
                <div class="border-solid border-white hover:border-color9 border-2 p-4 bg-transparent hover:bg-color9 transition transform active:scale-95">
                    <h4>{device.codename ?? "error codename"}</h4>
                    <p>{device.model ?? "error model"}</p>
                </div>
            </a>
        {/each}
    </div>
</div>
