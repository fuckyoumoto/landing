import { writable } from 'svelte/store';

const isClient = typeof window !== 'undefined';

let storedData = { contributors: [], timestamp: 0 };

// Get data from localStorage, if available
if (isClient) {
    const stored = localStorage.getItem('contributors_data');
    storedData = stored ? JSON.parse(stored) : { contributors: [], timestamp: 0 };
}

export const contributorsStore = writable(storedData);

export const updateContributorsStore = (newContributors) => {
    const currentTime = Date.now();
    const updatedData = {
        contributors: newContributors,
        timestamp: currentTime,
    };
    contributorsStore.set(updatedData);
    if (isClient) {
        localStorage.setItem('contributors_data', JSON.stringify(updatedData));
    }
};

// Function for checking whether the data is up to date (12 hours)
export const checkDataValidity = () => {
    const currentTime = Date.now();
    const timeElapsed = currentTime - storedData.timestamp;
    if (timeElapsed > 12 * 60 * 60 * 1000) {
        return { contributors: [], timestamp: currentTime };
    }
    return storedData;
};