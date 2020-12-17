<script lang="ts">
    import PdfViewer from "svelte-pdf";

    import { derivedInformation } from "../store";
    import { navigate } from "svelte-navigator";
    import { RegelTheme } from "../utils/pdfTheme";
    import { uploadResume, uuidv4 } from "../utils/deta";

    import Page from "../components/Page.svelte";
    import Button from "../components/Button.svelte";
    import { downloadFile } from "../utils/downloadFile";

    import MarkdownToPdf from "marked-renderer-pdf-browser";

    let pdfBlob: Blob;

    const share = async () => {
        const id = uuidv4();
        await uploadResume(id, $derivedInformation);
        await navigator.clipboard.writeText(location.origin + "/share/" + id);
        alert("Link copied to clipboard");
    };

    const generatePdf = async () => {
        const result = await MarkdownToPdf.convertString($derivedInformation, {
            /**
             * The options are marked options
             *
             * Ref -> https://marked.js.org/using_advanced#options
             */
            smartypants: true,
            pdf: RegelTheme,
        });

        const blob = new Blob([result], {
            type: "application/pdf",
        });

        pdfBlob = blob;

        const link = URL.createObjectURL(
            new Blob([result], {
                type: "application/pdf",
            })
        );

        return link;
    };

    const download = async () => {
        downloadFile(pdfBlob, "resume.pdf");
    };
</script>

<style>
    .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .options-wrapper {
        position: absolute;
        bottom: 0;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-self: center;
        padding: 0.5rem;
    }

    .viewer {
        height: 100%;
        max-width: 600px;
        width: 80%;
        filter: drop-shadow(0 4px 18px #00000008);
        background-color: whitesmoke;
    }

    @media (max-width: 640px) {
        .options-wrapper {
            flex-direction: row;
            gap: 0rem;
            padding: 0rem;
            left: 0;
            justify-content: space-between;
        }

        .viewer {
            width: 100%;
        }
    }
</style>

<Page style="align-items: center; padding: 0px;">
    <div class="viewer" id="test">
        {#await generatePdf()}
            loading
        {:then url}
            <!-- <iframe src="http://docs.google.com/gview?url=http://example.com/mypdf.pdf&embedded=true" style="width:718px; height:700px;" frameborder="0"></iframe> -->
            <!-- <iframe src={url} style="width:718px; height:700px;" frameborder="0"></iframe> -->
            <!-- <PdfPage src={url} /> -->
            <PdfViewer showBorder={false} showButtons={false} scale={1} {url} />
        {/await}
        <!-- {@html compiledResume} -->
    </div>
    <div class="options-wrapper">
        <Button class="back-button" onclick={() => navigate(-1)}>Back</Button>
        <Button onclick={download} type="secondary">Download</Button>
        <Button onclick={share} type="secondary">Share</Button>
        <Button onclick={() => navigate('/')} type="secondary">Edit</Button>
    </div>
</Page>
