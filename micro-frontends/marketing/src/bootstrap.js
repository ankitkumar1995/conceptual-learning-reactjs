import React from "react";
import ReactDom from "react-dom";

// mount function to start up the app
const mount = (ele) => {
  ReactDom.render(<h3>react mount </h3>, ele);
};

// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// we are running through container
// and we should export the mount function
export { mount };
