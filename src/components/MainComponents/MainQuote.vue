<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "MainQuote",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const card = this.$refs.card;

    gsap.from(card, {
      opacity: 0,
      x: 150,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  },
};
</script>

<template>
  <div id="wallpaper">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col"></div>
        <div class="col">
          <div class="card text-center" ref="card">
            <div class="card-body">
              <span>WE REMOVE THE HEADACHE FROM MOVING</span>
              <h3 class="card-title">Move With Ease</h3>
              <p class="card-text">
                With our super simple service we can take you from getting a
                quote, right through to being in your new home with all of your
                belongings securely packed and safely delivered, even in the
                rooms of your choice.
              </p>
              <button type="button" class="btn btn-primary">
                GET A FREE QUOTE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#wallpaper {
  background-image: url(../../public/imgs/avada-movers-movewithease-background-new.jpg);
  background-size: cover;
  background-attachment: fixed;
}
.container {
  padding: 10rem 0;
}
.card {
  border: none;
  border-radius: 0;
  background-color: var(--bg-hippiegreen);
  padding: 1rem;
  .card-body {
    padding: 40px;
    background-color: var(--lima);
    color: var(--light);
    span {
      font-weight: 700;
    }
    h3 {
      margin: 1rem 0;
      padding-bottom: 1.5rem;
      font-size: 50px;
      font-weight: 700;
      border-bottom: 1px solid var(--bg-mantis);
    }
    p {
      font-size: 17px;
      line-height: 36px;
    }
    button {
      margin-top: 2rem;
      font-weight: 800;
      padding: 1rem 2.2rem !important;
    }
  }
}
</style>
