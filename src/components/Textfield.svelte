<script lang="ts">
    import Text from "./Text.svelte";

    import { text_area_resize } from "../utils/autoResizeTextArea";

    export let title: string;
    export let hint: string = "Input";
    export let size: "large" | "default" = "default";
    export let required: boolean = false;

    export let expanding: boolean = false;

    export let value: string;

    $: textfieldProps = {
        ...$$restProps,
        class: [
            "text-field",
            size && `text-field--${size}`,
            value && `text-field--active`,
            $$restProps.class,
        ]
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

        padding-bottom: 0.5rem;
        border-bottom: 2px solid #999999;

        transition: border-bottom 0.2s ease;
    }

    .text-field--default {
        width: 300px;
    }

    .text-field--large {
        width: 660px;
    }

    .text-field--active {
        border-bottom: 2px solid #383838;
    }

    .text-field-input {
        background-color: transparent;
        border: none;
        font-size: 28px;
        width: 100%;
        color: #383838;
    }

    .text-field-input:focus {
        border: none;
        outline: none;
    }

    .text-field-input:active {
        border: none;
        outline: none;
    }

    .text-field-input::placeholder {
        color: #999999;
    }

    textarea {
        max-height: 80px;
    }
</style>

<div {...textfieldProps}>
    <Text size="default">
        {title}
        {#if required}*{/if}
    </Text>
    {#if !expanding}
        <input
            bind:value={value}
            class="text-field-input"
            placeholder={hint}
            type="text" />
    {:else}
        <textarea
            bind:value={value}
            class="text-field-input"
            placeholder={hint}
            type="text"
            use:text_area_resize />
    {/if}
</div>
