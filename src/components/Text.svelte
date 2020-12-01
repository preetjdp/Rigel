<script lang="ts">
    export let size: "large" | "default" = "default";

    $: textProps = {
        ...$$restProps,
        class: [
            "txt",
            //   size === "field" && "bx--btn--field",
            //   size === "small" && "bx--btn--sm",
            size && `txt--${size}`,
            $$restProps.class,
        ]
            .filter(Boolean)
            .join(" "),
    };
</script>

<style>
    p {
        margin: 1rem 0;
    }
    
    .txt {
        font-family: Arvo;
    }

    .txt--default {
        font-size: 20px;
        color: #676767;
    }

    .txt--large {
        font-size: 44px;
        font-weight: bold;
        color: #383838;
    }
</style>

<p {...textProps}>
    <slot />
</p>
