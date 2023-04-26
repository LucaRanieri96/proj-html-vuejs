<script>
export default {
  name: "HeaderBottom",
  data() {
    return {
      logo: ``,
      navLinks: ["Home", "Rates", "Testimonials", "FAQ", "Blogs", "Contact"],
    };
  },
};
</script>

<template>
  <nav>
    <div class="container d-flex justify-content-between">
      <div id="logo">
        <img class="py-2" src="../assets/imgs/avada-movers-logo.png" alt="" />
      </div>
      <div class="navLinks d-flex align-items-center">
        <ul class="d-flex gap-5 align-items-center">
          <li v-for="link in navLinks">{{ link }}</li>
        </ul>
        <button type="button" class="btn btn-primary ms-5">
          <strong>FREE QUOTE</strong>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

nav {
  background: linear-gradient(to bottom, $light 0%, transparent 100%);
  position: absolute;
  left: 0;
  right: 0;
}
.container{
  position: relative;
  img{
    width: 80%;
  }
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 700;
  
  li:hover {
    color: $lima;
    cursor: pointer;
    transition-duration: 0.2s;
  }
}
</style>
