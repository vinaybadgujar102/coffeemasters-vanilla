import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// importing components
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { ProductItem } from "./components/ProductItem.js";

// this allows us to what we want to use as global
window.app = {};
app.store = Store;
app.router = Router;

// its better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((total, item) => total + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty === 0;
});
