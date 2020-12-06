<script lang="ts">
    export let size: "large" | "default" = "default";
    export let options: string[] = [];
    export let hint: string = "";
    export let disabled: boolean = false;
    export let value: string;

    $: dropdownProps = {
        ...$$restProps,
        class: [
            "txt",
            //   size === "field" && "bx--btn--field",
            //   size === "small" && "bx--btn--sm",
            size && `dropdown--${size}`,
            disabled && `dropdown--disabled`,
            $$restProps.class,
        ]
            .filter(Boolean)
            .join(" "),
    };
</script>

<style>
    select {
        font-family: "Arvo";
        background-color: #fbefde;
        height: 28px;

        border: 1px solid #383838;
        padding: 2px 5px;
        border-radius: 4px;
        font-size: 16px;
        color: #383838;

        transition: filter 0.2s ease, background-color 0.1s ease;
    }

    .dropdown--default {
        width: 110.5px;
    }

    .dropdown--large {
        width: 158.5px;
    }

    .dropdown--disabled {
        pointer-events: none;
        filter: opacity(26%);
    }
</style>

<select bind:value type="drop" {...dropdownProps}>
    <option value="" disabled selected>{hint}</option>
    {#each options as option}
        <option>{option}</option>
    {/each}
</select>
