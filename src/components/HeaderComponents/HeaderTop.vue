<script>
import DarkModeToggle from "../DarkModeToggle.vue";

export default {
  name: "HeaderTop",
  components: {
    DarkModeToggle,
  },
  props: {
    message: String,
    icons: Array,
  },
  mounted() {
    console.log(this.message);
    console.log(this.icons);
  },
};
</script>

<template>
  <div id="greenHeader" class="d-flex">
    <div class="container d-flex justify-content-between">
      <div class="left d-flex align-items-center">
        <font-awesome-icon :icon="this.icons[0]" />
        <p class="ms-2">{{ this.message }}</p>
      </div>
      <div class="right d-flex gap-3 align-items-center">
        <font-awesome-icon
          v-for="icon in icons.splice(1)"
          :icon="icon"
          class="icons"
        />
      </div>
    </div>
  </div>
  <DarkModeToggle></DarkModeToggle>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

#greenHeader {
  height: 50px;
  background-color: var(--lima);
  p {
    margin: 0;
    font-size: 13px;
  }
}

.left,
.right {
  color: var(--light);
  .icons:hover {
    cursor: pointer;
  }
}
</style>
