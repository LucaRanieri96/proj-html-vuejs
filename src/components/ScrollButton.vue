<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ScrollButton",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }},
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
    
        const button = this.$refs.button;
    
        gsap.from(button, {
          opacity: 0,
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        });
      },
};
</script>

<template>
  <a id="button" @click="scrollToTop" ref="button">
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="pt-2" />
  </a>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#button {
  background-color: $oslogray;
  color: $light;
  width: 46px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: -5px;
  right: 40px;
  transition: all 0.3s;
  z-index: 10;
}

#button:hover {
  cursor: pointer;
  background-color: $mantis;
  color: $darker;
}

#button:active {
  background-color: #555;
}
</style>
