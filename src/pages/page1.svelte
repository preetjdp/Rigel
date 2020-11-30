<script lang="ts">
    import { nextPage } from "../store";

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

<Page type="start">
    <Text size="large">Tell us a bit about yourself</Text>
    <Textfield title="What's your Name" required size="large" />
    <Textfield title="Tell us about yourself" required size="large" expanding />
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button onclick={nextPage} type="primary">Proceed</Button>
    </div>
</Page>
