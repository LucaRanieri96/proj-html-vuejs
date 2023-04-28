<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "MainService",
  data() {
    return {
      cards: [
        {
          img: "../../public/imgs/avada-movers-serviceonephoto-final.jpg",
          title: "Two Man Teams",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          img: "../../public/imgs/avada-movers-servicetwophoto-final.jpg",
          title: "We Do All The Lifting",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          img: "../../public/imgs/avada-movers-servicethreephoto-final.jpg",
          title: "Coast To Coast",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const slide = this.$refs.slide;

    gsap.from(slide, {
      opacity: 0,
      x: -150,
      scrollTrigger: {
        trigger: slide,
        start: "top 60%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>

<template>
  <div id="background">
    <div
      class="container d-flex align-items-center justify-content-center flex-column"
      ref="slide"
    >
      <p id="title">WE ARE A PROFESSIONAL</p>
      <h2 class="mb-5">Full-Service Solution</h2>

      <div class="row">
        <div v-for="card in cards" class="col">
          <div class="card text-center">
            <img class="card-img-top" :src="card.img" alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title">{{ card.title }}</h3>
              <p>
                {{ card.paragraph }}
              </p>
              <button type="button" class="btn btn-primary">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#title {
  font-weight: 600;
}
#background {
  background-color: $light;
}

.card {
  border: 0;
  border-radius: 0;
  background-color: $mercury;
  padding: 1.5rem;
  img {
    margin-bottom: 1.5rem;
    transition: all 0.3s;
    border-radius: 0;
  }
  img:hover {
    cursor: pointer;
    scale: 105%;
  }
  .card-body {
    padding: 2rem;
    background-color: $light;
  }
}
.container {
  padding: 8rem 0;
  height: 100%;
  h3 {
    font-weight: 700;
    color: $denim;
  }
  p {
    font-weight: 200;
    line-height: 32px;
  }
  button {
    font-weight: 600;
  }
}
</style>
