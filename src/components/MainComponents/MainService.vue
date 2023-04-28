<script>
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
};
</script>

<template>
  <div id="background">
    <div
      class="container d-flex align-items-center justify-content-center flex-column"
    >
    <transition name="slide" appear>
      <p id="title">WE ARE A PROFESSIONAL</p>
    </transition>
    <transition name="slide" appear>
      <h2 class="mb-5">Full-Service Solution</h2>
    </transition>
      <div class="row">
        <div v-for="card in cards" class="col">
          <Transition name="v" appear>
            <div class="card text-center" :key="card.id">
              <img class="card-img-top" :src="card.img" alt="Card image cap" />
              <div class="card-body">
                <h3 class="card-title">{{ card.title }}</h3>
                <p>
                  {{ card.paragraph }}
                </p>
                <button type="button" class="btn btn-primary">READ MORE</button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.slide-enter-active,
.slide-leave-active {
  transition: all 1.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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
