<script lang="ts">
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Dropdown from "../components/Dropdown.svelte";
    import Options from "../components/Options.svelte";

    let jobTypes = ["Professional", "Intern", "Freelance", "Volunteer"]

    let selectedValue;

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

<div class="parent-container">
    <Text size="large">Tell us a bit about yourself</Text>
    <Text>How are you doing today?</Text>
    <Options current={selectedValue} options={jobTypes} onChanged={handleOnChanged}></Options>
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Dropdown hint="Month" options={["Cheese", "Butter"]}></Dropdown>
        <Button type="primary">Proceed</Button>
    </div>
</div>
