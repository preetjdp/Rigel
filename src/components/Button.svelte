<script lang="ts">
    export let type: "primary" | "secondary" = "primary";
    export let disabled : boolean = false;
    export let onclick: () => void;

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
        height: 37px;
        width: 136px;
        font-size: 20px;
        border-radius: 2.8px;
        font-family: "Arvo";
        /* Animations */
        transition: filter 0.2s ease, background-color 0.1s ease;
    }

    .btn--diabled {
        pointer-events: none;
        filter: opacity(36%);
    }

    .btn--hover {
        cursor: pointer;
    }

    .btn--hover:hover {
        filter: drop-shadow(0 4px 16px #00000024);
    }

    /* Primary Button */
    .btn--primary {
        background-color: #383838;
        color: #fbefde;
    }

    .btn--primary:active {
        background-color: #505050;
    }

    .btn--primary:focus {
        outline: none;
    }

    /* Secondary Button */
    .btn--secondary {
        background-color: #fbefde;
        color: #383838;
        border: 1px solid #383838;
    }

    .btn--secondary:active {
        background-color: #E4D9CA;
    }

    .btn--secondary:focus {
        outline: none;
    }
</style>

<button on:click={onclick} {...buttonProps}>
    <slot />
</button>
