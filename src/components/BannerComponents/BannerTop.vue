<script>
export default {
  name: "BannerTop",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="jumbo">
    <transition appear>
      <div class="container d-flex justify-content-center align-items-center flex-column">
        <p>MOVING WITHOUT THE HASSLE</p>
        <h1>WE MAKE IT SIMPLE</h1>
        <p>PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</p>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.jumbo {
  height: 800px;
  background-image: url(../../public/imgs/avada-movers-homeherobackground-final.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.container {
  height: 100%;
  p {
    color: $darkgrey;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 76.8px;
    color: black;
  }
}
</style>
