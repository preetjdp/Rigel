<script lang="ts">
    export let type: "start" | "middle" | "end" = "middle";
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
        delay: 300,
    };

    const out_animation: FlyParams = {
        x: type === "start" ? -300 : type === "middle" ? -300 : 600,
        duration: 300,
    };
</script>

<style>
    .parent-container {
        flex-grow: 1;
        width: 80%;
        text-align: center;
        /* REMOVE THIS */
        display: flex;
        flex-direction: column;
        /* justify-content: space-evenly; */

        /* padding: 1.5rem; */
        padding: 0 1.5rem 1.5rem;
        /* justify-content: space-between; */
        justify-content: space-around;
    }

    /* TODO Not super sure about this */
    @media (max-width: 640px) {
        .parent-container {
            width: 100%;
        }
    }
</style>

<div
    in:fly={in_animation}
    out:fly={out_animation}
    class="parent-container"
    {...$$restProps}>
    <slot />
</div>
