<script lang="ts">
    import { nextPage } from "../store";

    import { fly, fade, slide } from "svelte/transition";

    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Dropdown from "../components/Dropdown.svelte";
    import Options from "../components/Options.svelte";
    import Checkbox from "../components/Checkbox.svelte";
    import Textfield from "../components/Textfield.svelte";

    let jobTypes = ["Professional", "Intern", "Freelance", "Volunteer"];

    let selectedValue: string;

    function handleOnChanged(newValue: string) {
        // alert(newValue)
        selectedValue = newValue;
    }
</script>

<style>
    .parent-container {
        width: 80%;
        text-align: center;
        /* REMOVE THIS */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>

<div
    in:fly={{ x: -300, duration: 500, delay: 300 }}
    out:fly={{ x: -300, duration: 300 }}
    class="parent-container">
    <Text size="large">Tell us a bit about yourself</Text>
    <Textfield title="What's your Name" required size="large" />
    <Textfield title="Tell us about yourself" required size="large" expanding />
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button onclick={nextPage} type="primary">Proceed</Button>
    </div>
</div>
