<script lang="ts">
    export let type: "primary" | "secondary" = "primary";
    export let disabled: boolean;

    // let color =
    $: buttonProps = {
        // type: href && !disabled ? undefined : type,
        // tabindex,
        // disabled,
        // href,
        ...$$restProps,
        class: [
            "bx--btn",
            //   size === "field" && "bx--btn--field",
            //   size === "small" && "bx--btn--sm",
            type && `btn--${type}`,
            disabled && `btn--diabled`,
            !disabled && `btn--hover`,
            //   disabled && "bx--btn--disabled",
            //   hasIconOnly && "bx--btn--icon-only",
            //   hasIconOnly && "bx--tooltip__trigger",
            //   hasIconOnly && "bx--tooltip--a11y",
            //   hasIconOnly && tooltipPosition && `bx--tooltip--${tooltipPosition}`,
            //   hasIconOnly &&
            //     tooltipAlignment &&
            //     `bx--tooltip--align-${tooltipAlignment}`,
            $$restProps.class,
        ]
            .filter(Boolean)
            .join(" "),
    };
</script>

<style>
    button {
        height: 56px;
        width: 193px;
        font-size: 32px;
        border-radius: 4px;
        font-family: "Arvo";
        transition: filter 0.5s ease;
    }

    .btn--hover {
        cursor: pointer;
    }

    .btn--hover:hover {
        filter: drop-shadow(0 4px 16px #00000024);
    }

    .btn--secondary {
        background-color: #fbefde;
        color: #383838;
        border: 1px solid #383838;
    }

    .btn--primary {
        background-color: #383838;
        color: #fbefde;
    }

    .btn--diabled {
        filter: opacity(48%);
    }
</style>

<button {...buttonProps}>
    <slot />
</button>
