"use strict";
const form = document.getElementById("form");
const input = document.getElementById("qe");
const error = document.getElementById("error");
const errorCode = document.getElementById("error-code");

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  document.write("<center><img src='loading.gif'></center>");
  try {
    await registerSW();
document.write("<center><img src='loading.gif'></center>")
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
};  
let url = input.value.trim();
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
