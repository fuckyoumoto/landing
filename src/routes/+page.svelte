<script>
    import HeroSection from "../components/HeroSection.svelte";
    import LeftImageTextSelection from "../components/LeftImageTextSelection.svelte";
    import RightImageTextSelection from "../components/RightImageTextSelection.svelte";
    import SupportedDevices from "../components/SupportedDevices.svelte";
    import CommunitySection from "../components/CommunitySection.svelte";
    import StickersSection from "../components/StickersSection.svelte";

    let devices = [
        {
            codename: "penangf",
            model: "Moto G13/G23",
            link: "https://penangf.fuckyoumoto.xyz"
        },
        {
            codename: "cofud",
            model: "Moto G31",
            link: "https://cofud.fuckyoumoto.xyz"
        }
    ];

    let contributors = ["progzone122", "shomykohai", "GitFASTBOOT", "R0rt1z2", "OverWorldD"];
</script>

<HeroSection />
<LeftImageTextSelection
        image="/screenshot1.png"
        header="Free guides"
        text="Unlock bootloader, modding and learn how to repair your device with step-by-step instructions.<br>All resources are open-source and completely free." />
<RightImageTextSelection
        image="/screenshot2.png"
        header="Testpoints"
        text="Explore testpoints for your device completely free of charge" />
<div id="supported-devices">
    <SupportedDevices {devices} />
</div>
<CommunitySection {contributors} />
<StickersSection />