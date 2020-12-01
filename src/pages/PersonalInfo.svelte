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
    <Textfield title="What would you like to be called?" required size="large" />
    <!-- <Textfield title="What role do you look yourself into?" required size="large"/> -->
    <Textfield title="What's your mail ID" required size="large"/>
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button onclick={nextPage} type="primary">Proceed</Button>
    </div>
</Page>
