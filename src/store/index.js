import { createStore } from "vuex";
import station from "./station";
import auth from "./auth";

export default createStore({
  modules: { station, auth },
});
