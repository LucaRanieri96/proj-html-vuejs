<script>
export default {
  name: "ScrollButton",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }},
};
</script>

<template>
  <a id="button" @click="scrollToTop">
    <font-awesome-icon :icon="['fas', 'chevron-up']" />
  </a>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#button {
  background-color: $oslogray;
  color: $light;
  width: 40px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: -5px;
  right: 40px;
  transition: all 0.3s;
  z-index: 10;
}

#button:hover {
  cursor: pointer;
  background-color: $mantis;
  color: $darker;
}

#button:active {
  background-color: #555;
}

</style>
