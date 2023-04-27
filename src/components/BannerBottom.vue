<script>
export default {
  name: "BannerBottom",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="blueDiv d-flex justify-content-center align-items-center">
    <div>
      <font-awesome-icon :icon="['far', 'paper-plane']" />
    </div>
    <p>GET A FREE QUOTE ONLINE NOW!</p>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;
.blueDiv {
  height: 140px;
  background-color: $denim;
  color: $light;
  transition-duration: 0.2s;
  p{
    margin: 0 0 0 1rem;
  }
}
.blueDiv:hover{
  cursor: pointer;
  background-color: #4f9bd9;
}
</style>
