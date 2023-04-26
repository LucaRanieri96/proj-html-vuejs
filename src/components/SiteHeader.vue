<script>
import HeaderTop from './HeaderTop.vue';
import HeaderBottom from './HeaderBottom.vue';

export default {
  name: "SiteHeader",
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>

<template>
  <HeaderTop></HeaderTop>
  <HeaderBottom></HeaderBottom>
</template>

<style scoped lang="scss">

</style>
