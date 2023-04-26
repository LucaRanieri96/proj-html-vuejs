<script>
import BannerTop from './BannerTop.vue';
import BannerBottom from './BannerBottom.vue';

export default {
  components: {
    BannerTop,
    BannerBottom,
  },
  name: "Banner",
  data(){
    return{

    }
  }
};
</script>

<template>
  <BannerTop/>
  <BannerBottom/>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

</style>
