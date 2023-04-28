<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      shake: false,
    };
  },
  methods: {
  toggleShake() {
    this.shake = !this.shake;
  }
}
};
</script>

<template>
  <div id="button" @mouseenter="toggleShake" @mouseleave="toggleShake" class="text-center">
    <font-awesome-icon :icon="['fas', 'cart-shopping']" v-show="shake === false"/>
    <font-awesome-icon :icon="['fas', 'cart-shopping']" shake v-show="shake === true"/>
    <p>Buy Now</p>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#button {
  background-color: $oslogray;
  color: $light;
  box-shadow: 0 0 5px $lima;
  padding: 0.5rem;
  border-radius: 4px;
  position: fixed;
  top: 150px;
  right: 20px;
  transition: all 0.3s;
  z-index: 10;
  p{
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }
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
