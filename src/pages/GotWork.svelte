<script lang="ts">
    import { nextPage, previousPage } from "../store";

    import Page from "../components/Page.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
</script>

<style>
    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .question-mark {
        align-self: center;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<Page>
    <img class="question-mark" src="assets/question.svg" alt="Question Mark" />
    <div>
        <Text size="large">Got some work to brag about?</Text>
        <Text size="default">
            Any kind of Professional Work, Internships, Freelance or
            Volunteering Experiences?
        </Text>
    </div>

    <div class="bottom-row">
        <div class="button-wrapper">
            <img
                class="question-mark"
                src="assets/sad.svg"
                alt="Question Mark" />
            <Button onclick={previousPage} type="secondary">No i don't</Button>
        </div>

        <div class="button-wrapper">
            <img
                class="question-mark"
                src="assets/happy.svg"
                alt="Question Mark" />
            <Button onclick={nextPage} type="primary">Yes</Button>
        </div>
    </div>
</Page>
