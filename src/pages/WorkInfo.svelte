<script lang="ts">
    import { information } from "../store";
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

    .upper-middle-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        justify-self: center;
    }

    .middle-row {
        display: flex;
        flex-direction: row;
        gap: 2rem;
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
        <div class="upper-middle-row">
            <Textfield
                bind:value={$information.workInfo.role}
                title="What was your role ?"
                required
                size="default" />
            <Textfield
                bind:value={$information.workInfo.org}
                title="Name of the Organization ?"
                required
                size="default" />
        </div>

        <div class="middle-row">
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you start working?</Text>
                <div class="dropdown-wrapper">
                    <Dropdown hint={'Month'} options={months} />
                    <Dropdown hint={'Year'} options={years} />
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
            bind:value={$information.workInfo.what_did_you_do_there}
            title="What did ya do there?"
            required
            expanding
            size="large" />
    </div>

    <div class="bottom-row">
        <Button type="secondary" onclick={() => navigate(-1)}>Go Back</Button>
        <Button onclick={() => navigate('educationInfo')} type="primary">
            Proceed
        </Button>
    </div>
</Page>
