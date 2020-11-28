<script lang="ts">
    import Text from "./Text.svelte";

    export let title: string;
    export let hint: string = "Input";
    export let size: "large" | "default" = "default";
    export let required: boolean = false;

    $: textfieldProps = {
        ...$$restProps,
        class: ["text-field", size && `text-field--${size}`, $$restProps.class]
            .filter(Boolean)
            .join(" "),
    };
</script>

<style>
    .text-field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;

        padding-bottom: 1rem;
        border-bottom: 2px solid #999999;
    }

    .text-field--default {
        width: 300px;
    }

    .text-field--large {
        width: 660px;
    }

    .text-field-input {
        background-color: transparent;
        border: none;
        font-size: 28px;
        width: 100%;
        color: #383838;
    }

    .text-field-input:focus  {
        border: none;
        outline: none;
    }

    .text-field-input:active  {
        border: none;
        outline: none;
    }

    .text-field-input::placeholder {
        color: #999999;
    }
</style>

<div {...textfieldProps}>
    <Text size="default">
        {title}
        {#if required}*{/if}
    </Text>
    <input class="text-field-input" placeholder={hint} type="text" />
</div>
