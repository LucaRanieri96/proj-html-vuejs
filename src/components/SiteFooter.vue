<script>
import FooterTop from "./FooterComponents/FooterTop.vue";
import FooterBottom from "./FooterComponents/FooterBottom.vue";

export default {
  name: "SiteFooter",
  components: {
    FooterTop,
    FooterBottom,
  },
  data() {
    return {
      leftName: "ABOUT",
      leftDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis ex ut sem accumsan vehicula. Integer elit arcu, hendrerit id sapien ut, facilisis accumsan arcu.",
      logo: "../../../public/imgs/avada-movers-logo.png",
      midName: "AVADA MOVERS",
      midLinks: ["Home", "Rates", "Testimonials", "Blog", "Free Quote"],
      rightName: "RECENT POSTS",
      rightLinks: [
        "> Heading Out To College?",
        "> Moving Your Business?",
        "> Outstanding Quality",
        "> Cost of Moving",
        "> Best Moving Tips",
      ],
      madeBy:
        "© Copyright 2023 | Luca Ranieri by Boolean | No Rights Reserved | Powered by Vite + VueJS",
      icons: [
        ["fab", "telegram"],
        ["fab", "twitter"],
        ["fab", "instagram"],
        ["fab", "youtube"],
      ],
    };
  },
};
</script>

<template>
  <FooterTop
    :leftName="leftName"
    :leftDescription="leftDescription"
    :logo="logo"
    :midName="midName"
    :midLinks="midLinks"
    :rightName="rightName"
    :rightLinks="rightLinks"
  ></FooterTop>
  <FooterBottom
  :madeBy="madeBy"
  :icons="icons"></FooterBottom>
</template>

<style lang="scss" scoped></style>
