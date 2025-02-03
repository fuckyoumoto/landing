<script>
    export let text = "Click me";
    export let type = "button";
    export let variant = "primary"; // По умолчанию primary
    export let to = "";

    export let onClick = () => {};

    const variants = {
        primary: "text-white border border-blue-700 bg-blue-800 hover:bg-transparent hover:text-blue-700",
        accent: "text-white border border-green-700 bg-green-800 hover:bg-transparent hover:text-green-700",
        danger: "text-white border border-red-700 bg-red-800 hover:bg-transparent hover:text-red-700",
    };
</script>

<a href="{to}" class="block">
    <button
            type={type}
            class={`flex gap=2 font-medium text-xs md:text-sm px-5 py-2.5 text-center me-2 mb-2 transition transform active:scale-95 ${variants[variant]}`}
            on:click={onClick}
    >
        <slot name="icon" />
        {text}
    </button>
</a>