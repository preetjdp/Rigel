<script lang="ts">
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
</script>

<style>
    .parent-container {
        width: 80%;
        text-align: center;
    }

    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>

<div class="parent-container">
    <Text>Tell us a bit about yourself</Text>
    <div class="bottom-row">
        <Button type="secondary" disabled>Back</Button>
        <Button type="primary">Proceed</Button>
    </div>
</div>
