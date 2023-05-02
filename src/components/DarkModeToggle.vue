<script>
export default {
  name: "DarkModeToggle",
  data() {
    return {
      isChecked: false,
      label: "Light Theme",
    };
  },
  methods: {
    changeTheme(newTheme) {
      document.documentElement.setAttribute("data-theme", newTheme);
      this.label = newTheme === "light" ? "Dark Theme" : "Light Theme";
    },
  },
};
</script>

<template>
  <div>
    <input
      type="checkbox"
      id="darkmode-toggle"
      v-model="isChecked"
      @change="changeTheme(isChecked ? 'dark' : 'light')"
    />
    <label for="darkmode-toggle"></label>
  </div>
</template>

<style lang="scss" scoped>
label {
  width: 60px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  transition: 0.3s;  
}
label:after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  background: linear-gradient(180deg, #ffcc89, #d8860b);
  border-radius: 180px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;  
}
input {
  display: none;
}
input:checked + label {
  background: #242424;
}
input:checked + label:after {
  left: 55px;
  transform: translateX(-100%);
  background: linear-gradient(180deg, #777, #3a3a3a);
}
label:active:after{
  width: 30px;
}
</style>
