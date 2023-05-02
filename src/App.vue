<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ScrollButton from "./components/ScrollButton.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    ScrollButton,
    ShoppingCart,
  },
  data() {
    return {};
  },
  methods: {
  changeTheme(newTheme) {
     document.documentElement.setAttribute('data-theme', newTheme)
  }
}
};
</script>

<template>
  <button @click="changeTheme('light')">light theme</button>
  <button @click="changeTheme('dark')">dark theme</button>
  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
  <SiteFooter></SiteFooter>
  <ScrollButton></ScrollButton>
  <ShoppingCart></ShoppingCart>
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "./styles/style.scss";
</style>
