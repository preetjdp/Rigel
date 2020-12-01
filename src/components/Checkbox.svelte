<script lang="ts">
    export let value: boolean = false;
</script>

<style>
    .checkbox-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
        color: #676767;
        margin-top: 8px;
        gap: 0.2rem;
    }

    .checkbox-wrapper > input {
        margin: 0;
    }
</style>

<div class="checkbox-wrapper">
    <input bind:checked={value} type="checkbox" />
    <slot />
</div>
