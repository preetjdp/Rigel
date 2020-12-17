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

        /* TODO Make responsive */
        height: 100%;
        padding: 1rem;
    }

    .got-work-wrapper {
        display: flex;
        flex-direction: column;
    }

    .job-type-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

    @media (max-width: 640px) {
        .main-wrapper {
            width: calc(100% - 1rem);
            align-items: stretch;
            gap: 1rem;
        }

        .job-type-wrapper {
            margin: 0 1rem;
        }

        .upper-middle-row {
            flex-direction: column;
        }

        .middle-row {
            flex-direction: column;
            margin: 0 1rem;
            gap: 1rem;
        }
    }
</style>

<Page style="align-items: center;" type="start">
    <Text size="large">Give us some more info about the job</Text>
    <div class="main-wrapper">
        <div class="job-type-wrapper">
            <Text size="default">What job type was it huh? *</Text>
            <Options
                bind:current={$information.workInfo.job_type}
                options={['Professional', 'Intern', 'Freelance', 'Volunteer']} />
        </div>

        <div class="upper-middle-row">
            <Textfield
                bind:value={$information.workInfo.role}
                title="What was your role ?"
                required
                size="large" />
            <Textfield
                bind:value={$information.workInfo.org}
                title="Name of the Organization ?"
                required
                size="large" />
        </div>

        <div class="middle-row">
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you start working?</Text>
                <div class="dropdown-wrapper">
                    <Dropdown
                        bind:value={$information.workInfo.start_working_month}
                        hint={'Month'}
                        options={months} />
                    <Dropdown
                        bind:value={$information.workInfo.start_working_year}
                        hint={'Year'}
                        options={years} />
                </div>
            </div>
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you bid ‘em Adios?</Text>
                <div class="dropdown-wrapper">
                    <Dropdown
                        bind:value={$information.workInfo.end_working_month}
                        hint={'Month'}
                        options={months}
                        disabled={i_still_work_here} />
                    <Dropdown
                        bind:value={$information.workInfo.end_working_year}
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
