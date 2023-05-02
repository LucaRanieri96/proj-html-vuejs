<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "MainRequest",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const container = this.$refs.container;

    gsap.from(container, {
      opacity: 0,
      x: -150,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
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
      <h2>Request A Free Quote</h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        consectetur augue. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </p>
      <button type="button" class="btn btn-primary mt-3">
        <strong>CLICK HERE</strong>
      </button>
    </div>
  </div>
  <div id="green"></div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#background {
  background-image: url(../../public/imgs/avada-movers-request-quote-background.jpg);
  background-size: cover;
  padding: 10rem 0;
}
#green{
    height: 1rem;
    background-color: var(--text-lima);
}
.container {
  width: 50%;
  flex-direction: column;
  text-align: center;
  h2{
    font-size: 50px;
  }
  p {
    font-size: 16px;
    width: 700px;
    color: black;
    line-height: 30px;
    font-weight: 200;
  }
}
</style>
