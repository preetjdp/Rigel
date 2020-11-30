<script lang="ts">
    import { nextPage, previousPage } from "../store";

    import Page from "../components/Page.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Textfield from "../components/Textfield.svelte";
</script>

<style>
    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>

<Page>
    <Text size="large">Page 2</Text>
    <div class="bottom-row">
        <Button onclick={previousPage} type="secondary">Back</Button>
        <Button onclick={nextPage} type="primary" disabled>Proceed</Button>
    </div>
</Page>
