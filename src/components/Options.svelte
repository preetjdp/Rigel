<script lang="ts">
    export let options: string[] = [];
    export let current: string;
    export let onChanged: (current: string) => void;

    function handleOnClick(value: string) {
        onChanged(value);
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
        margin: 1rem;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        transition: filter 0.2s ease,
            background-color 0.2s cubic-bezier(0.165, 0.84, 0.94, 1),
            color 0.1s cubic-bezier(0.165, 0.84, 0.94, 1);
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
