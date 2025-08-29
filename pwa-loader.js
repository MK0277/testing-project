// pwa-loader.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("pwa.html");
    if (!response.ok) throw new Error("Failed to load PWA component");

    const html = await response.text();
    document.getElementById("pwa-placeholder").innerHTML = html;

    // ✅ Re-execute scripts inside pwa.html
    const scripts = document
      .getElementById("pwa-placeholder")
      .querySelectorAll("script");

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });
  } catch (err) {
    console.error("Error loading PWA widget:", err);
  }
});
