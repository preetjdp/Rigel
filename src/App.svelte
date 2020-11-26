<script lang="ts">
	export let name: string;

	// import Viewer from "./components/Viewer.svelte"
	// import Text from "./components/Text.svelte"

	import Page1 from "./pages/page1.svelte";
</script>

<style>
	main {
		text-align: center;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
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

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
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
	<Page1 />
	<!-- <h1>Hello {name}!</h1> -->
	<!-- <Text>Hello test</Text> -->
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<!-- <Viewer/> -->
</main>
