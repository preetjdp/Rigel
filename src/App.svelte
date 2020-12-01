<script lang="ts">
	import { onDestroy } from "svelte";
	import { page } from "./store";

	// import Viewer from "./components/Viewer.svelte"
	// import Text from "./components/Text.svelte"

	import PersonalInfo from "./pages/PersonalInfo.svelte";
	import GotWork from "./pages/GotWork.svelte";
	import Page2 from "./pages/page2.svelte";
	let page_value = 0;

	const unsubscribe = page.subscribe((value) => {
		console.log("WOWZA", page_value);
		page_value = value;
	});

	onDestroy(unsubscribe);
</script>

<style>
	main {
		text-align: center;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;

		/* Disables all overflows, might lead to problems */
		overflow: hidden;
		/* grid-template-columns: 1fr 0.8fr;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px; */
		/**OLD CODE*/
		/* display: flex; */
		/* More OLD CSS */
		/* padding: 1em; */
		/* max-width: 240px; */
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap");
	</style>
</svelte:head>

<main>
	{#if page_value == 0}
		<PersonalInfo />
	{:else if page_value == 1}
		<GotWork />
	{:else}
		<Page2 />
	{/if}
</main>
