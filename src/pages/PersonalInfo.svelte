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
    <Text size="large">Tell us a bit about yourself</Text>
    <Textfield
        bind:value={$information.personalInfo.name}
        title="What would you like to be called?"
        required
        size="large" />
    <Textfield
        bind:value={$information.personalInfo.look_your_self_into}
        title="What role do you look yourself into?"
        required
        size="large" />
    <Textfield
        bind:value={$information.personalInfo.email}
        title="What's your mail ID"
        required
        size="large" />
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button
            onclick={() => navigate('gotWork', { state: {} })}
            type="primary">
            Proceed
        </Button>
    </div>
</Page>
