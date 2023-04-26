<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
  data() {
    return{}
  },
  methods: {},
};
</script>

<template>
 <SiteHeader></SiteHeader>
 <SiteMain></SiteMain>
 <SiteFooter></SiteFooter>
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";

</style>
