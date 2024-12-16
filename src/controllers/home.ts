import _html from "../../static/home.html";

export async function loadHomePage() {
  const contentArea = document.getElementById("content-area");

  if (contentArea) {
    try {
      const homeContent = decodeURIComponent(_html).replace(/^data:text\/html;charset=utf-8,/, "<!-- Prefix Removed -->");
      contentArea.innerHTML = homeContent;
    } catch (error) {
      console.error("Failed to load home page:", error);
    }
  }
}
