<script lang="ts">
    import Page from "../components/Page.svelte";
</script>

<style>
    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .viewer {
        height: 100%;
        width: 80%;
        filter: drop-shadow(0 4px 16px #00000008);
        background-color: whitesmoke;
    }
</style>

<Page style="align-items: center;">
    <div class="viewer" />
</Page>
