<script lang="ts">
	let resumeHtml : HTMLDocument | null;
</script>

<div class="resume_viewer">
    {#if !resumeHtml}
        loading
    {/if}
</div>

<style>
	.resume_viewer {
        background-color: #FFF2F1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>