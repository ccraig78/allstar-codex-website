const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const estimateForm = document.querySelector("#estimate");

if (estimateForm) {
  estimateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = estimateForm.querySelector('button[type="submit"]');
    const statusMessage = estimateForm.querySelector(".form-status");
    const originalLabel = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    statusMessage.textContent = "Sending your request...";

    try {
      const response = await fetch(estimateForm.action, {
        method: "POST",
        body: new FormData(estimateForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "thanks.html";
    } catch (error) {
      statusMessage.textContent = "We could not send the form. Please call, text, or email us using the options on this page.";
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}
