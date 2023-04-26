<script>
export default {
  name: "HeaderTop",
};
</script>

<template>
  <div id="greenHeader" class="d-flex">
    <div class="container d-flex justify-content-between">
      <div class="left d-flex align-items-center">
        <font-awesome-icon :icon="['fas', 'phone-flip']" />
        <div class="ms-2">Call us for a Free Quote: 1.800.5555.6789</div>
      </div>
      <div class="right d-flex gap-2 align-items-center">
        <font-awesome-icon :icon="['fab', 'telegram']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#greenHeader{
  height: 50px;
  background-color: $lima;
}

.left,.right{
  color: white;
}
</style>
