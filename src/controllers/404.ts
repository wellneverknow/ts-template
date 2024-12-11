export async function load404Page() {
  const contentArea = document.getElementById("content-area");

  if (contentArea) {
    try {
      const response = await fetch("./404.html");
      const html = await response.text();
      contentArea.innerHTML = html;
    } catch (error) {
      console.error("Failed to load 404 page:", error);
    }
  }
}
