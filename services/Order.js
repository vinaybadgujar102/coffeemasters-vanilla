import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const result = app.store.cart.filter((prodInCart) => {
    return prodInCart.product.id === id;
  });

  if (result.length === 1) {
    // the product is already in the cart
    // update the current item
    app.store.cart = app.store.cart.map((p) => {
      return p.product.id === id
        ? {
            ...p,
            quantity: p.quantity + 1,
          }
        : p;
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export async function removeFromCart(id) {
  return (app.store.cart = app.store.cart.filter((p) => p.product.id !== id));
}
