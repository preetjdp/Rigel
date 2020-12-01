<script lang="ts">
    export let type: "start" | "middle" = "middle";
    import { fly, fade, slide } from "svelte/transition";

    interface FlyParams {
        delay?: number;
        duration?: number;
        x?: number;
        y?: number;
        opacity?: number;
    }
    const in_animation: FlyParams = {
        x: type === "start" ? -300 : 300,
        duration: 500,
        // delay: type === "start" ? 300 : 300,
        delay: 300
    };

    const out_animation: FlyParams = {
        x: type === "start" ? -300 : 600,
        duration: 300,
    };
</script>

<style>
    .parent-container {
        width: 80%;
        text-align: center;
        /* REMOVE THIS */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>

<div in:fly={in_animation} out:fly={out_animation} class="parent-container" {...$$restProps}>
    <slot />
</div>
