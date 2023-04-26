<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      callUs: "Call us for a Free Quote: 1.800.5555.6789",
      icons: [
        // icona left
        ["fas", "phone-flip"],
        // icone right
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
  <div id="greenHeader" class="d-flex">
    <div class="container d-flex justify-content-between">
      <div class="left d-flex align-items-center">
        <font-awesome-icon :icon="icons[0]" />
        <div class="ms-2">{{ callUs }}</div>
      </div>
      <div class="right d-flex gap-2 align-items-center">
        <font-awesome-icon v-for="icon in icons.splice(1)" :icon="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#greenHeader {
  height: 50px;
  background-color: $lima;
}

.left,
.right {
  color: white;
}
</style>
