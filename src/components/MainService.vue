<script>
export default {
  name: "MainService",
  data(){
    return{
      cards: [
        {
          img: "../assets/imgs/avada-movers-serviceonephoto-final.jpg",
          title: "Two Man Teams",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          img: "../assets/imgs/avada-movers-servicetwophoto-final.jpg",
          title: "We Do All The Lifting",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          img: "../assets/imgs/avada-movers-servicethreephoto-final.jpg",
          title: "Coast To Coast",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ],

    }
  }
};
</script>

<template>
  <div id="background">
    <div
      class="container d-flex align-items-center justify-content-center flex-column">
      <p id="title">WE ARE A PROFESSIONAL</p>
      <h2>Full-Service Solution</h2>
      <div class="row">
        <div v-for="card in cards" class="col">
          <div class="card text-center">
            <img class="card-img-top" :src="card.img" alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title">{{card.title}}</h3>
              <p>
                {{card.paragraph}}
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
@use "../styles/partials/_variables.scss" as *;

#background {
  height: 700px;
  background-color: $light;
}

.card {
  background-color: $mercury;
  padding: 2rem;
  .card-body{
    padding: 2rem;
    background-color: $light;
  }

}
.container {
  height: 100%;
  h3{
    font-weight: 700;
    color: $denim;
  }
  p{
    font-weight: 200;
    line-height: 30px;
  }
  button{
    font-weight: 600;
  }
}
</style>
