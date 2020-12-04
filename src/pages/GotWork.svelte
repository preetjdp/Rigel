<script lang="ts">
    import { navigate } from "svelte-navigator";

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
        gap: 1.2rem;
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
            <Button
                onclick={() => navigate('educationInfo', {
                        replace: true,
                        state: {},
                    })}
                type="secondary">
                No I don't
            </Button>
        </div>

        <div class="button-wrapper">
            <img
                class="question-mark"
                src="assets/happy.svg"
                alt="Question Mark" />
            <Button
                onclick={() => navigate('workInfo', { state: {} })}
                type="primary">
                Yes I do
            </Button>
        </div>
    </div>
</Page>
