// when creating singleton we mostly start the file or class with a capital letter

const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (propety === "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (property === "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxiedStore;
