<script>
export default {
  name: "MainTestimonials",
};
</script>

<template>
  <div id="background">
    <div class="container d-flex justify-content-center align-items-center">
      <p id="title">HEADACHE FREE</p>
      <h2>Award Winning Moving Company</h2>
      <p class="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        augue. Orci varius natoque penatibus et magnis dis parturient montes,
        ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus
        arcu. Aliquam enim leo.
      </p>
      <button type="button" class="btn btn-primary mt-3">
        <strong>READ OUR TESTIMONIALS</strong>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

#background {
  height: 540px;
  background-color: $mercury;
}
.container {
  height: 100%;
  width: 50%;
  flex-direction: column;
  text-align: center;
  #title{
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: $darkgrey;
    padding: 0 3vw;
    line-height: 30px;
  }
}
</style>
