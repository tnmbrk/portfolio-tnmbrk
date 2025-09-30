// if (window.parent) {
//   console.log("Imported from:", window.parent.location.href);
// } else {
//   console.log("Run directly:", __filename);
// }

const html = document.querySelector("html");
const isLightOrAuto =
  localStorage.getItem("hs_theme") === "light" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches);
const isDarkOrAuto =
  localStorage.getItem("hs_theme") === "dark" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isLightOrAuto && html.classList.contains("dark"))
  html.classList.remove("dark");
else if (isDarkOrAuto && html.classList.contains("light"))
  html.classList.remove("light");
else if (isDarkOrAuto && !html.classList.contains("dark"))
  html.classList.add("dark");
else if (isLightOrAuto && !html.classList.contains("light"))
  html.classList.add("light");
