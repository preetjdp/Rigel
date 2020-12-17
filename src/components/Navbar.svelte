<script lang="ts">
    import { navigate } from "svelte-navigator";

    type navbarElementType = "end" | "endFinal" | "empty" | "active" | "filled";

    import { fade } from "svelte/transition";
    import { useLocation } from "svelte-navigator";

    import NavbarElement from "./NavbarElement.svelte";

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

    const locationToRouteMapper = (e: string) =>
        Object.keys(routerToNavbarMap).find(
            (key) => routerToNavbarMap[key] === e
        );

    const locationToNavbarElementTypeMapper = (
        location: string,
        index: number
    ): navbarElementType => {
        return "empty";
    };
</script>

<style>
    .navbar {
        height: 80px;
        display: flex;
        gap: 0.8rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }

    .navbar::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    @media (max-width: 640px) {
        .navbar {
            width: Calc(100% - 1rem) !important;
            overflow: scroll;
            justify-content: stretch;
        }
    }
</style>

<!-- TODO Tweak the animation parameters here -->
<nav in:fade out:fade class="navbar">
    {#each navbarElementsUnique as elementName, i}
        <NavbarElement
            onclick={() => navigate(locationToRouteMapper(elementName))}
            number={i + 1}
            type={locationToNavbarElementTypeMapper($location.pathname, i)}
            seperator={i !== navbarElementsUnique.length - 1}>
            {elementName}
        </NavbarElement>
    {/each}
</nav>
