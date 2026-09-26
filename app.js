const form = document.querySelector("#briefing-form");
const formError = document.querySelector("#form-error");
const yearEl = document.querySelector("#year");
const nav = document.querySelector("#primary-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav a");

function setNavOpen(open) {
  if (!nav || !navToggle) return;
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle?.addEventListener("click", () => {
  const open = !nav?.classList.contains("is-open");
  setNavOpen(open);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavOpen(false);
});

window.matchMedia("(min-width: 720px)").addEventListener("change", (event) => {
  if (event.matches) setNavOpen(false);
});

const LINKEDIN =
  "https://www.linkedin.com/in/thahasanul-alam-khan-4b2b062b2/";

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const sectionIds = ["top", "core", "ops", "comms"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href")?.slice(1);
          link.classList.toggle("is-active", href === id);
        });
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const message = String(data.get("message") || "").trim();
  const email = String(data.get("email") || "").trim();

  if (!name || !message) {
    formError.hidden = false;
    formError.textContent = "Name and message are required.";
    return;
  }

  formError.hidden = true;
  const lines = [
    `Brief from ${name}`,
    email ? `Reply-to (provided by sender): ${email}` : null,
    "",
    message,
    "",
    "— via Thefool000093 portfolio",
  ].filter((line) => line !== null);

  const brief = lines.join("\n");

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(brief).catch(() => {});
  }

  window.open(LINKEDIN, "_blank", "noopener,noreferrer");

  formError.hidden = false;
  formError.textContent =
    "LinkedIn opened. Your brief was copied to the clipboard when the browser allowed it.";
});
