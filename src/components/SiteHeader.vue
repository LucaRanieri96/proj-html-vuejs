<script>
import HeaderTop from './HeaderComponents/HeaderTop.vue';
import HeaderBottom from './HeaderComponents/HeaderBottom.vue';
import Banner from './Banner.vue';

export default {
  name: "SiteHeader",
  components: {
    HeaderTop,
    HeaderBottom,
    Banner
  },
};
</script>

<template>
  <HeaderTop></HeaderTop>
  <HeaderBottom></HeaderBottom>
  <Banner/>
</template>

<style scoped lang="scss">

</style>
