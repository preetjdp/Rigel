<script lang="ts">
    import { nextPage, information } from "../store";

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
    <div>
        <Text size="large">Got any extra information to share?</Text>
        <Text size="default">
            Add whatever you want to !. This is your blank canvas
        </Text>
    </div>
    <Textfield
        bind:value={$information.personalInfo.name}
        title="Title"
        required
        size="large" />
    <Textfield
        bind:value={$information.personalInfo.email}
        title="Description"
        required
        size="large" />
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button onclick={nextPage} type="primary">Proceed</Button>
    </div>
</Page>
