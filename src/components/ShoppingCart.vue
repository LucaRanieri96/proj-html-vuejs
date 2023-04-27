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
  <div id="button" @mouseenter="toggleShake" @mouseleave="toggleShake">
    <font-awesome-icon :icon="['fas', 'cart-shopping']" v-show="shake === false"/>
    <font-awesome-icon :icon="['fas', 'cart-shopping']" shake v-show="shake === true"/>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/_variables.scss" as *;

#button {
  background-color: $oslogray;
  color: $light;
  box-shadow: 0 0 5px $lima;
  padding: 1rem;
  border-radius: 4px;
  position: fixed;
  top: 200px;
  right: 40px;
  transition: all 0.3s;
  z-index: 10;
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
