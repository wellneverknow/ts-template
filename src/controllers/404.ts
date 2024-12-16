import _html from "../../static/404.html";

export async function load404Page() {
  const contentArea = document.getElementById("content-area");

  if (contentArea) {
    try {
      const errContent = decodeURIComponent(_html).replace(/^data:text\/html;charset=utf-8,/, "<!-- Prefix Removed -->");
      contentArea.innerHTML = errContent;
    } catch (error) {
      console.error("Failed to load 404 page:", error);
    }
  }
}
