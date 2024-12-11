export async function loadHomePage() {
  const contentArea = document.getElementById("content-area");

  if (contentArea) {
    try {
      const response = await fetch("./home.html");
      const html = await response.text();
      contentArea.innerHTML = html;
    } catch (error) {
      console.error("Failed to load home page:", error);
    }
  }
}
