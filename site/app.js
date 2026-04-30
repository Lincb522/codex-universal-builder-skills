const buttons = document.querySelectorAll("[data-copy]");

for (const button of buttons) {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") ?? "";
    await navigator.clipboard.writeText(value);
    const original = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
}
