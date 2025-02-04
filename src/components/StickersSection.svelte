<script>
    import SButton from "./ui/SButton.svelte";
</script>

<div class="landing-container w-full flex justify-center items-center py-5 lg:py-10 px-5 lg:px-20">
    <div class="flex flex-col md:flex-row w-full max-w-screen-xl gap-10">
        <div class="flex-1">
            <img src="/fuckyoumoto/stickers.png" class="auto h-auto object-cover" />
        </div>

        <div class="flex-1 flex flex-col justify-center text-center md:text-left gap-2">
            <h2 class="text-xl md:text-2xl font-semibold text-color9">
                Stickers
            </h2>
            <p class="text-sm md:text-base">Best Telegram stickers based on real events</p>
            <SButton text="Get stickers" variant="accent" to="https://t.me/addstickers/DamnMotorola" />
        </div>
    </div>
</div>