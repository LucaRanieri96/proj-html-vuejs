<script>
export default {
  name: "MainTestimonials",
  data() {
    return {
      Testimonials: [
        {
          img: "../../public/imgs/avada-movers-johndoe-final.jpg",
          name: "John Doe",
          quote:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
        },
        {
          img: "../../public/imgs/avada-movers-janedoe-final.jpg",
          name: "Jane Doe",
          quote:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
        },
        {
          img: "../../public/imgs/avada-movers-johnsmith-final.jpg",
          name: "John Smith",
          quote:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum.”",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="background">
    <div
      class="container d-flex align-items-center justify-content-center flex-column"
    >
      <p id="title">HAPPY CUSTOMERS</p>
      <h2 class="mb-5">Testimonials</h2>
      <div class="row row-cols-3">
        <div class="col text-center" v-for="witness in Testimonials">
          <img :src="witness.img" alt="" />
          <h3>{{ witness.name }}</h3>
          <p>
            {{ witness.quote }}
          </p>
        </div>
      </div>
      <button type="button" class="btn btn-primary">READ MORE TESTIMONIALS</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#title {
  font-weight: 600;
}
#background {
  background-image: url(../../public/imgs/avada-movers-testimonial-background.jpg);
  background-size: cover;
}

.container {
  padding: 6rem 0;
  height: 100%;
  h3 {
    font-weight: 700;
    color: $denim;
    margin: 2rem 0;
  }
  p {
    font-weight: 200;
    line-height: 32px;
  }
  button {
    margin-top: 5rem;
    font-weight: 600;
  }
}
img{
    width: 40%;
    border-radius: 50%;
}
</style>
