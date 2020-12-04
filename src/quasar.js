import Vue from "vue";

import "./styles/quasar.scss";
import langEn from "quasar/lang/en-us";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, QAvatar, QInput, QBtn } from 'quasar';

Vue.use(Quasar, {
  config: {},
  plugins: {},
  lang: langEn,
  components: {
    QAvatar,
    QInput,
    QBtn
  }
});