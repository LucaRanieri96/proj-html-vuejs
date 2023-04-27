<script>
export default {
  name: "HeaderBottom",
  props: {
    logo: String,
    links: Array,
  },
  mounted() {
  console.log(this.logo);
  console.log(this.links);
},
};
</script>

<template>
  <nav class="my-2">
    <div class="container d-flex justify-content-between">
      <div id="logo">
        <img class="py-2" :src="this.logo" alt="" />
      </div>
      <div class="navLinks d-flex align-items-center">
        <ul class="d-flex gap-5 align-items-center">
          <li v-for="link in this.links">{{ link }}</li>
        </ul>
        <button type="button" class="btn btn-primary ms-5">
          <strong>FREE QUOTE</strong>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

nav {
  background: linear-gradient(to bottom, $light 0%, transparent 100%);
  position: absolute;
  left: 0;
  right: 0;
}
.container{
  position: relative;
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
