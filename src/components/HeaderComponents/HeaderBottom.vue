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
      <Transition appear name="v">
        <div id="logo">
          <img class="py-2" :src="this.logo" alt="" />
        </div>
      </Transition>

      <div class="navLinks d-flex align-items-center">
        <transition-group
          appear
          name="v"
          tag="ul"
          class="d-flex gap-5 align-items-center"
        >
          <li v-for="(link, index) in this.links" :key="index">
            {{ link }}
          </li>
        </transition-group>
        <button type="button" class="btn btn-primary ms-5">
          <strong>FREE QUOTE</strong>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.link {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.link-enter-active,
.link-enter-to {
  opacity: 1;
}

.link-enter-from {
  opacity: 0;
}
nav {
  background: linear-gradient(to bottom, $light 0%, transparent 100%);
  position: absolute;
  left: 0;
  right: 0;
}
.container {
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
    transition-delay: 0s !important;
    transition: ease-out 0s !important;
    transition-duration: 0.2s;
  }
}
</style>
