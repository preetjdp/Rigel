<script lang="ts">
    import { onMount } from 'svelte';
    // import * as remark from "remark"
    // import * as remarkHtml from "remark-html"
    let resumeHtml : string | null;
    
    onMount(async () => {
        let markdown = "#Hello World"
        // let processor = remark()
        // let processed = await processor.process(markdown)
        // console.log(processed.contents)
        // resumeHtml = processed.contents as string;
    })
</script>

<div class="resume_viewer">
    {#if !resumeHtml}
        loading
    {:else}
        {@html resumeHtml}
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