<script>
import HeaderTop from "./HeaderComponents/HeaderTop.vue";
import HeaderBottom from "./HeaderComponents/HeaderBottom.vue";
import Banner from "./Banner.vue";

export default {
  name: "SiteHeader",
  components: {
    HeaderTop,
    HeaderBottom,
    Banner,
  },
  data() {
    return {
      callUs: "Call us for a Free Quote: 1.800.5555.6789",
      icons: [
        // icona left
        ["fas", "phone-flip"],
        // icone right
        ["fab", "telegram"],
        ["fab", "twitter"],
        ["fab", "instagram"],
        ["fab", "youtube"],
      ],
      logo: "../../../public/imgs/avada-movers-logo.png",
      navLinks: ["Home", "Rates", "Testimonials", "FAQ", "Blogs", "Contact"],
    };
  },
};
</script>

<template>
  <div>
    <HeaderTop :message="callUs" :icons="icons"></HeaderTop>
    <HeaderBottom :logo="logo" :links="navLinks"></HeaderBottom>
    <Banner/>
  </div>
</template>

<style scoped lang="scss"></style>
