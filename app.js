import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// this allows us to what we want to use as global
window.app = {};
app.store = Store;
app.router = Router;

// its better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
