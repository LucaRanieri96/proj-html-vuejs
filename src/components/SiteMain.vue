<script>
import MainHeadache from './MainComponents/MainHeadache.vue';
import MainService from './MainComponents/MainService.vue';
import MainQuote from './MainComponents/MainQuote.vue';
import MainTestimonials from './MainComponents/MainTestimonials.vue';
import MainRequest from './MainComponents/MainRequest.vue';

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
