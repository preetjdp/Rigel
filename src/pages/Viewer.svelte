<script lang="ts">
    import { navigate } from "svelte-navigator";

    import Page from "../components/Page.svelte";
    import Button from "../components/Button.svelte";

    const share = () => {
        alert("Link copied to clipboard");
    };

    const download = () => {
        window.print();
    };
</script>

<style>
    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .options-wrapper {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-self: center;
        padding: 0.5rem;
    }

    .viewer {
        height: 100%;
        max-width: 600px;
        width: 80%;
        filter: drop-shadow(0 4px 18px #00000008);
        background-color: whitesmoke;
    }

    @media (max-width: 640px) {
        .options-wrapper {
            flex-direction: row;
            gap: 0rem;
            padding: 0rem;
            left: 0;
            justify-content: space-between;
        }

        .viewer {
            width: 100%;
        }
    }
</style>

<Page style="align-items: center; padding: 0px;">
    <div class="viewer" />
    <div class="options-wrapper">
        <Button onclick={() => navigate(-1)} type="secondary">Back</Button>
        <Button onclick={download} type="secondary">Download</Button>
        <Button onclick={share} type="secondary">Share</Button>
        <Button onclick={() => navigate('/')} type="secondary">Edit</Button>
    </div>
</Page>
