<script lang="ts">
    import { information } from "../store";

    import { navigate } from "svelte-navigator";

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
        bind:value={$information.extraInfo.title}
        title="Title"
        required
        size="large" />
    <Textfield
        bind:value={$information.extraInfo.description}
        title="Description"
        required
        size="large" />
    <div class="bottom-row">
        <Button type="secondary" onclick={() => navigate(-1)}>Back</Button>
        <Button onclick={() => navigate('viewer')} type="primary">
            Proceed
        </Button>
    </div>
</Page>
