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

    .custom-image {
        align-self: center;
    }

    .question-mark {
        height: 120px;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        gap: 1.2rem;
    }
</style>

<Page>
    <img
        class="custom-image question-mark"
        src="assets/question.svg"
        alt="Question Mark" />
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
                class="custom-image"
                src="assets/sad.svg"
                alt="Question Mark" />
            <Button onclick={() => navigate('educationInfo')} type="secondary">
                No I don't
            </Button>
            <Button onclick={() => navigate(-1)} type="secondary">Back</Button>
        </div>

        <div class="button-wrapper">
            <img
                class="custom-image"
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
