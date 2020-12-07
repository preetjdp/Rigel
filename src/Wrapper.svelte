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
    import Share from "./pages/Share.svelte";
</script>

{#if $location.pathname !== '/viewer'}
    <Navbar />
{/if}
<Route path="" component={PersonalInfo} />
<Route path="personalInfo" meta={{ name: 'About' }} component={PersonalInfo} />
<Route path="gotWork" component={GotWork} />
<Route path="workInfo" meta={{ name: 'Work' }} component={WorkInfo} />
<Route
    path="educationInfo"
    meta={{ name: 'Education' }}
    component={EducationInfo} />
<Route path="extraInfo" meta={{ name: 'Extras' }} component={ExtraInfo} />
<Route path="viewer" meta={{ name: 'Work' }} component={Viewer} />
<Route path="share/:id" meta={{ name: 'Work' }} component={Share} />
