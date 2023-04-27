<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ScrollButton from "./components/ScrollButton.vue";

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    ScrollButton,
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
 <ScrollButton></ScrollButton>
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";

</style>
