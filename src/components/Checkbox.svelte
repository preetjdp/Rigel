<script lang="ts">
    export let checked: boolean = false;
</script>

<style>
 div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    color: #676767;
    gap: 2px;
 }
</style>

<div>
    <input checked={checked} type="checkbox">
    <slot></slot>
</div>