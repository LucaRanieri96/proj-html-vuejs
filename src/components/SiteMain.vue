<script>
import MainHeadache from './MainHeadache.vue';
import MainService from './MainService.vue';
import MainQuote from './MainQuote.vue';

export default {
  components: {
    MainHeadache,
    MainService,
    MainQuote,
  },
  name: "SiteMain",
};
</script>

<template>
 <MainHeadache></MainHeadache>
 <MainService></MainService>
 <MainQuote></MainQuote>
</template>

<style lang="scss" scoped>

</style>
