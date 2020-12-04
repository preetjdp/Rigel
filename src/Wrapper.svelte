<script lang="ts">
    import { Route, useLocation } from "svelte-navigator";

    const location = useLocation();

    import Navbar from "./components/Navbar.svelte";

    import PersonalInfo from "./pages/PersonalInfo.svelte";
    import GotWork from "./pages/GotWork.svelte";
    import WorkInfo from "./pages/WorkInfo.svelte";
    import EducationInfo from "./pages/EducationInfo.svelte";
    import ExtraInfo from "./pages/ExtraInfo.svelte";
    import Viewer from "./pages/Viewer.svelte";
</script>

{#if $location.pathname !== '/viewer'}
    <Navbar />
{/if}
<Route path="" component={PersonalInfo} />
<Route path="personalInfo" component={PersonalInfo} />
<Route path="gotWork" component={GotWork} />
<Route path="workInfo" component={WorkInfo} />
<Route path="educationInfo" component={EducationInfo} />
<Route path="extraInfo" component={ExtraInfo} />
<Route path="viewer" component={Viewer} />
