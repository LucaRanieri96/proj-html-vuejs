<script>
import MainHeadache from './MainHeadache.vue';
import MainService from './MainService.vue';
import MainQuote from './MainQuote.vue';
import MainTestimonials from './MainTestimonials.vue';
import MainRequest from './MainRequest.vue';

export default {
  components: {
    MainHeadache,
    MainService,
    MainQuote,
    MainTestimonials,
    MainRequest,
  },
  name: "SiteMain",
};
</script>

<template>
 <MainHeadache></MainHeadache>
 <MainService></MainService>
 <MainQuote></MainQuote>
 <MainTestimonials></MainTestimonials>
 <MainRequest></MainRequest>
</template>

<style lang="scss" scoped>

</style>
