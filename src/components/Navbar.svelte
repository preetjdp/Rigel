<script>
    import { fade, } from "svelte/transition";
</script>

<style>
    .navbar {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style>

<!-- TODO Tweak the animation parameters here -->
<nav in:fade out:fade class="navbar">Navbar ....</nav>
