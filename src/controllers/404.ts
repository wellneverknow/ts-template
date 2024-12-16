import { create404Page } from "../components/404";
export async function load404Page() {
  const contentArea = document.getElementById("content-area");

  if (contentArea) {
    try {
      const content = create404Page();
      contentArea.innerHTML = content;
    } catch (error) {
      console.error("Failed to load 404 page:", error);
    }
  }
}
