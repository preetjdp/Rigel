<script lang="ts">
    import { nextPage, previousPage } from "../store";

    import { months, years } from "../utils/constants";

    import Page from "../components/Page.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Textfield from "../components/Textfield.svelte";
    import Options from "../components/Options.svelte";
    import Checkbox from "../components/Checkbox.svelte";
    import Dropdown from "../components/Dropdown.svelte";

    let i_still_study_here: boolean;
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
        gap: 1rem;
        justify-self: center;
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
    <Text size="large">Give us some more info about the edu</Text>
    <div class="main-wrapper">
        <Text size="default">What education type was it huh? *</Text>
        <Options
            onChanged={(a) => {}}
            options={['Training', 'Formal']}
            current={'Formal'} />
        <div class="upper-middle-row">
            <Textfield title="Institute Name" required size="default" />
            <Textfield title="Course Name" required size="default" />
        </div>
        <div class="middle-row">
            <div class="middle-row-child-wrapper">
                <Text size="default">When did you studying here?</Text>
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
                        disabled={i_still_study_here} />
                    <Dropdown
                        hint={'Year'}
                        options={years}
                        disabled={i_still_study_here} />
                </div>
                <Checkbox bind:value={i_still_study_here}>
                    I still study there dudeeeeeeeeeeeeeeeeee
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
        <Button type="secondary" onclick={previousPage}>Go Back</Button>
        <Button onclick={nextPage} type="primary">Proceed</Button>
    </div>
</Page>
