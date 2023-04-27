<script>

export default {
  name: "FooterBottom",
  data() {
    return {
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
  background-color: $lima;
  color: $light;
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
