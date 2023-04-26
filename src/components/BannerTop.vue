<script>

export default {
  name: "BannerTop",
  data(){
    return{
      
    }
  }
};
</script>

<template>
  <div class="jumbo">
    <div class="container d-flex justify-content-center align-items-center flex-column">
        <p>MOVING WITHOUT THE HASSLE</p>
        <h1>WE MAKE IT SIMPLE</h1>
        <p>PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

.jumbo{
    height: 540px;
    background-image: url(../assets/imgs/avada-movers-homeherobackground-final.jpg);
    background-size: cover,
}

.container {
    height: 100%;
    p{
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