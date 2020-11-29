<script lang="ts">
    import { navigate } from "svelte-navigator";

    import { months, years } from "../utils/constants";

    import Page from "../components/Page.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Textfield from "../components/Textfield.svelte";
    import Options from "../components/Options.svelte";
    import Checkbox from "../components/Checkbox.svelte";
    import Dropdown from "../components/Dropdown.svelte";

    let i_still_work_here: boolean;
</script>

<style>
    .bottom-row {
        display: flex;
        /* align-items: center; */
        align-self: normal;
        justify-content: space-around;
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        align-items: flex-start;
    }

    .got-work-wrapper {
        display: flex;
        flex-direction: column;
    }

    .middle-row {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 0.2rem;
    }

    .middle-row-child-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .dropdown-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>

<Page style="align-items: center;" type="start">
    <Text size="large">Give us some more info about the job</Text>
    <div class="main-wrapper">
        <Text size="default">What job type was it huh? *</Text>
        <Options
            onChanged={(a) => {}}
            options={['Professional', 'Intern', 'Freelance', 'Volunteer']}
            current={'Professional'} />
        <Textfield
            title="What was the name of that super fortunate organization?"
            required
            size="large" />
        <div class="middle-row">
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you start working?</Text>
                <div class="dropdown-wrapper">
                    <Dropdown hint={'Month'} />
                    <Dropdown hint={'Year'} />
                </div>
            </div>
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you bid ‘em Adios?</Text>
                <div class="dropdown-wrapper">
                    <Dropdown
                        hint={'Month'}
                        options={months}
                        disabled={i_still_work_here} />
                    <Dropdown
                        hint={'Year'}
                        options={years}
                        disabled={i_still_work_here} />
                </div>
                <Checkbox bind:value={i_still_work_here}>
                    I still work there
                </Checkbox>
            </div>
        </div>
        <Textfield
            title="What did ya do there?"
            required
            expanding
            size="large" />
    </div>

    <div class="bottom-row">
        <Button
            type="secondary"
            onclick={() => navigate('gotWork', { replace: true, state: {} })}>
            Go Back
        </Button>
        <Button
            onclick={() => navigate('educationInfo', { // replace: true,
                    state: {} })}
            type="primary">
            Proceed
        </Button>
    </div>
</Page>
