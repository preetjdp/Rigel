<script lang="ts">
    import { fade } from "svelte/transition";
    import { useLocation } from "svelte-navigator";

    import NavbarElement from "./NavbarElement.svelte";
    import type { element } from "svelte/internal";

    const location = useLocation();

    const routerToNavbarMap: Record<string, string> = {
        "/": "About",
        "/personalInfo": "About",
        "/gotWork": "Work",
        "/workInfo": "Work",
        "/educationInfo": "Education",
        "/extraInfo": "Extras",
        "/viewer": "Drumroll",
    };

    const navbarElements = Object.values(routerToNavbarMap);
    const navbarElementsUnique = [...new Set(navbarElements)];

    console.log($location);
</script>

<style>
    .navbar {
        height: 80px;
        display: flex;
        gap: 0.8rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style>

<!-- TODO Tweak the animation parameters here -->
<nav in:fade out:fade class="navbar">
    {#each navbarElementsUnique as elementName, i}
        <NavbarElement
            number={i + 1}
            seperator={i !== navbarElementsUnique.length - 1}>
            {elementName}
        </NavbarElement>
    {/each}
</nav>
