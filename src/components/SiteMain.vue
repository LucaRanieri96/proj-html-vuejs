<script>
import MainHeadache from './MainHeadache.vue';
import MainService from './MainService.vue';
import MainQuote from './MainQuote.vue';
import MainTestimonials from './MainTestimonials.vue';

export default {
  components: {
    MainHeadache,
    MainService,
    MainQuote,
    MainTestimonials,
  },
  name: "SiteMain",
};
</script>

<template>
 <MainHeadache></MainHeadache>
 <MainService></MainService>
 <MainQuote></MainQuote>
 <MainTestimonials></MainTestimonials>
</template>

<style lang="scss" scoped>

</style>
