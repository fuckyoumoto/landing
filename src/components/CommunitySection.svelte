<script>
    import axios from "axios";
    import { contributorsStore, updateContributorsStore, checkDataValidity } from '../stores/contributors.js';
    import { onMount } from 'svelte';

    export let contributors = [];

    const getGitHubProfile = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            return {
                name: response.data.name,
                avatar: response.data.avatar_url,
                url: response.data.html_url
            };
        } catch (error) {
            console.error('Error when retrieving user data:', error);
        }
    };

    const updateContributors = async () => {
        const updatedContributors = [];
        for (let i = 0; i < contributors.length; i++) {
            const profile = await getGitHubProfile(contributors[i]);
            if (profile) {
                updatedContributors.push({ ...contributors[i], ...profile });
            }
        }
        return updatedContributors;
    };

    onMount(async () => {
        const validData = checkDataValidity();
        if (validData.contributors.length === 0) {
            // If the data is missing or out of date, update it
            const updatedContributors = await updateContributors();
            updateContributorsStore(updatedContributors);
        } else {
            contributors = validData.contributors;
            updateContributorsStore(validData.contributors);
        }
    });
</script>

<div class="w-full px-10 py-10 lg:px-20 flex flex-col gap-2">
    <h4 class="text-xl text-color9 text-center lg:text-left">Community</h4>
    <p class="text-sm mb-4 text-center lg:text-left">Join our community and contribute to the project</p>

    <div class="flex flex-wrap gap-5 justify-center lg:justify-start">
        {#each $contributorsStore.contributors as contributor}
            <a href="{contributor.url}" target="_blank">
                <div class="flex justify-center cursor-pointer select-none transition transform hover:scale-95">
                    <img src={contributor.avatar} alt={contributor.name} class="cursor-pointer w-16 h-16 object-cover border-2 border-white hover:border-color9" />
                </div>
            </a>
        {/each}
    </div>
</div>