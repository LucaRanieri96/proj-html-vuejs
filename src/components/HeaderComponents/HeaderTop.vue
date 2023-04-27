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
        <p class="ms-2">{{ callUs }}</p>
      </div>
      <div class="right d-flex gap-3 align-items-center">
        <font-awesome-icon v-for="icon in icons.splice(1)" :icon="icon" class="icons"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

#greenHeader {
  height: 50px;
  background-color: $lima;
  p{
    margin: 0;
    font-size: 13px;
  }
}

.left,
.right {
  color: white;
  .icons:hover{
    cursor: pointer;
  }
}
</style>
