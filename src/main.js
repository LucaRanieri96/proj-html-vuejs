import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPhoneFlip, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhoneFlip,
  faTwitter,
  faTelegram,
  faInstagram,
  faYoutube,
  faPaperPlane,
  faChevronUp,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
