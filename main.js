const menuButton = document.querySelector("#menu-button");
const menuLinks = document.querySelector("#menu-links");

menuButton.addEventListener("click", () => {
	const isOpen = menuButton.getAttribute("aria-expanded") === "true";

	menuButton.setAttribute("aria-expanded", String(!isOpen));
	menuLinks.hidden = isOpen;
});
