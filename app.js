import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";

// this allows us to what we want to use as global
window.app = {};
app.store = Store;

// its better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
