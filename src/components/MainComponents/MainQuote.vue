<script>
export default {
  name: "MainQuote",
};
</script>

<template>
  <div id="wallpaper">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card text-center">
            <div class="card-body">
              <span>WE REMOVE THE HEADACHE FROM MOVING</span>
              <h3 class="card-title">Move With Ease</h3>
              <p class="card-text">
                With our super simple service we can take you from getting a quote, right through to being in your new home with all of your belongings securely packed and safely delivered, even in the rooms of your choice.
              </p>
              <button type="button" class="btn btn-primary">GET A FREE QUOTE NOW</button>
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
.container{
  padding: 10rem 0;
  
}
.card{
  border: none;
  border-radius: 0;
  background-color: $hippiegreen;
  padding: 1rem;
  .card-body{
    padding: 40px;
    background-color: $lima;
    color: white;
    span{
      font-weight: 700;
    }
    h3{
      margin: 1rem 0;
      padding-bottom: 1.5rem;
      font-size: 50px;
      font-weight: 700;
      border-bottom: 1px solid $mantis;
    }
    p{
      font-size: 17px;
      line-height: 36px;
    }
    button{
      margin-top: 2rem;
      font-weight: 800;
      padding: 1rem 2.2rem !important;
    }
  }
}
</style>
