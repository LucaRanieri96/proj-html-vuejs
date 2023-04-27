<script>
export default {
  name: "FooterTop",
};
</script>

<template>
  <div id="wallpaper">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h5>ABOUT</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            convallis ex ut sem accumsan vehicula. Integer elit arcu, hendrerit
            id sapien ut, facilisis accumsan arcu.
          </p>
          <img src="../../../public/imgs/avada-movers-logo.png" alt="" />
        </div>
        <div class="col-4">
          <h5>AVADA MOVERS</h5>
          <ul>
            <li>Home</li>
            <li>Rates</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Free Quote</li>
          </ul>
        </div>
        <div class="col-4">
          <h5>RECENT POSTS</h5>
          <ul>
            <li>> Heading Out To College?</li>
            <li>> Moving Your Business?</li>
            <li>> Outstanding Quality</li>
            <li>> Cost of Moving</li>
            <li>> Best Moving Tips</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
#wallpaper {
  background-color: $light;
}
.container{
  padding: 5rem 0;
}
h5{
  font-weight: 600;
  margin-bottom: 2rem;
}
p{
  line-height: 36px;
  font-weight: 200;
  margin-bottom: 3rem;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 45px;
  font-weight: 200;
  
  li:hover{
    cursor: pointer;
    color: $lima;
    transition: all 0.2s;
  }
}
</style>
