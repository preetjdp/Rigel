<script lang="ts">
    export let type: "end" | "endFinal" | "empty" | "active" | "filled" =
        "empty";
    export let number: number;
    export let seperator: boolean;
</script>

<style>
    .navbar-element {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;
        font-weight: bold;
    }

    .navbar-element--circle {
        display: flex;
        border-radius: 100%;
        height: 24px;
        width: 24px;
        align-items: center;
        justify-content: center;

        border: 1.6px solid #383838;
    }

    .navbar-element--seperator {
        background-color: #383838;
        height: 1.6px;
        width: 28px;
    }
</style>

<div class="navbar-element">
    <div class="navbar-element--circle">{number}</div>
    <slot />
    {#if seperator}
        <div class="navbar-element--seperator" />
    {/if}
</div>
