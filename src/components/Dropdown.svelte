<script lang="ts">
    export let size: "large" | "default" = "default";
    export let options: string[] = [];
    export let hint : string = ""

    $: dropdownProps = {
        ...$$restProps,
        class: [
            "txt",
            //   size === "field" && "bx--btn--field",
            //   size === "small" && "bx--btn--sm",
            size && `dropdown--${size}`,
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
    }

    .dropdown--default {
        width: 110.5px;
    }

    .dropdown--large {
        width: 158.5px;
    }
</style>

<select type="drop" {...dropdownProps}>
    <option value="" disabled selected>{hint}</option>
    {#each options as option}
        <option>{option}</option>
    {/each}
</select>
