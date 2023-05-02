<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "MainHeadache",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const container = this.$refs.container;

    gsap.from(container, {
      opacity: 0,
      x: -150,
      scrollTrigger: {
        trigger: container,
        start: "top 79%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>

<template>
  <div id="background">
    <div class="container d-flex justify-content-center align-items-center" ref="container">
      <p id="title">HEADACHE FREE</p>
      <h2>Award Winning Moving Company</h2>
      <p class="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        augue. Orci varius natoque penatibus et magnis dis parturient montes,
        ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus
        arcu. Aliquam enim leo.
      </p>
      <button
        type="button"
        class="btn btn-primary mt-3"
        style="transition-delay: 1.2s">
        <strong>READ OUR TESTIMONIALS</strong>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#background {
  background-color: var(--bg-mercury);
  padding: 4rem 0;
}
.container {
  padding: 8rem;
  width: 50%;
  flex-direction: column;
  text-align: center;
  #title {
    font-weight: 600;
    color: var(--main-title);
  }
  h2 {
    width: 500px;
    color: var(--main-h2);
  }
  p {
    font-size: 16px;
    width: 700px;
    color: var(--main-p);
    line-height: 30px;
    font-weight: 200;
  }
}
</style>
