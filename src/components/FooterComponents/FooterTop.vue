<script>
export default {
  name: "FooterTop",
  props: {
    leftName: String,
    leftDescription: String,
    logo: String,
    midName: String,
    midLinks: Array,
    rightName: String,
    rightLinks: Array,
  },
};
</script>

<template>
  <div id="wallpaper">
    <div class="container">
      
        <div class="row">
          <div class="col-4">
            <h5>{{ leftName }}</h5>
            <p>
              {{ leftDescription }}
            </p>
            <img :src="logo" alt="" />
          </div>
          <div class="col-4">
            <h5>{{ midName }}</h5>
            <ul>
              <li v-for="link in midLinks">{{ link }}</li>
            </ul>
          </div>
          <div class="col-4">
            <h5>{{ rightName }}</h5>
            <ul>
              <li v-for="link in rightLinks">{{ link }}</li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

#wallpaper {
  background-color: var(--light);
}
.container {
  padding: 5rem 0;
}
h5 {
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-black);
}
p {
  line-height: 36px;
  font-weight: 200;
  margin-bottom: 3rem;
  color: var(--text-black);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 45px;
  font-weight: 200;
  color: var(--text-black);

  li:hover {
    cursor: pointer;
    color: var(--lima);
    transition: all 0.2s;
  }
}
</style>
