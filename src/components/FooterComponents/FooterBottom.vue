<script>

export default {
  name: "FooterBottom",
  props: {
    madeBy: String,
    icons: Array,
  },
};
</script>

<template>
  <div id="wallpaper">
    <div class="container text-center">
      <p>{{ madeBy }}</p>
      <div class="icons d-flex gap-3 justify-content-center">
        <font-awesome-icon v-for="icon in icons" :icon="icon" class="icons"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#wallpaper {
  background-color: var(--lima);
  color: var(--light);
}
.container {
  padding: 2rem 0;
  p {
    margin-bottom: 1.2rem;
  }
  .icons{
    font-size: 25px;
    :hover{
      cursor: pointer;
      color: rgb(207, 207, 207);
      transition: all 0.2s;
    }
  }
}
</style>
