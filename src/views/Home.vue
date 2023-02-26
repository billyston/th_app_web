<template>
    <div class="flex">

        <!-- Begin side navigation -->
        <side-nav></side-nav>
        <!-- End side navigation -->

        <!-- Begin main contents -->
        <main-contents></main-contents>
        <!-- End main contents -->

    </div>
</template>

<script>
    import SideNav from "@/components/shared/SideNav";
    import MainContents from "@/components/home/MainContents";

    export default
    {
        name: "HomeView",
        components: {SideNav, MainContents}
    }
</script>

<style scoped>

</style>
