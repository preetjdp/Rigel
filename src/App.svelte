<script lang="ts">
	import { Router } from "svelte-navigator";

	import Wrapper from "./Wrapper.svelte";
</script>

<style>
	main {
		text-align: center;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;

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
	<Router>
		<Wrapper />
	</Router>
</main>

<!-- <main>
	{#if page_value == 0}
		<PersonalInfo />
	{:else if page_value == 1}
		<GotWork />
	{:else if page_value == 2}
		<WorkInfo />
	{:else if page_value == 3}
		<EducationInfo />
	{:else if page_value == 4}
		<ExtraInfo />
	{:else}
		<Viewer />
	{/if}
</main> -->
