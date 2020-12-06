<script lang="ts">
    export let options: string[] = [];
    export let current: string;
    // export let onChanged: (current: string) => void;

    function handleOnClick(value: string) {
        current = value;
        // onChanged(value);
    }
</script>

<style>
    .options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-family: "Arvo";
    }

    .option {
        min-width: 106px;
        height: 28px;
        border: 1px solid #383838;
        /* margin: 1rem; */
        /* margin: 1rem 1rem 0 0; */
        margin: 0.2rem 1rem 0.5rem 0;
        padding: 0 1.2rem;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        outline: none;

        transition: filter 0.2s ease,
            background-color 0.2s cubic-bezier(0.165, 0.84, 0.94, 1),
            color 0.1s cubic-bezier(0.165, 0.84, 0.94, 1);
    }

    .option:hover {
        filter: drop-shadow(0 4px 16px #00000012);
    }

    .option--default {
        background-color: #fbefde;
        color: #383838;
    }

    .option--selected {
        background-color: #383838;
        color: #fbefde;
        filter: drop-shadow(0 4px 12px #00000008);
    }
</style>

<div class="options">
    {#each options as option}
        <button
            on:click={() => handleOnClick(option)}
            class={option === current ? 'option--selected option' : 'option--default option'}>
            {option}
        </button>
    {/each}
</div>
