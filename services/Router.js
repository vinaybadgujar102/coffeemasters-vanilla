const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();

        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    // event handler for url changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // check the initial url
    // TODO: understand this later
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          pageElement.textContent = "Product details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
          break;
        }
    }
    //document.querySelector("main").children[0].remove();

    if (pageElement) {
      const cache = document.querySelector("main");
      // we have to clear the main element: dirty way
      cache.innerHTML = "";
      cache.appendChild(pageElement);

      // good idea to scroll to the top
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
