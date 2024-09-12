export default () => {
	const sectionList: NodeListOf<HTMLElement> = document.querySelectorAll("section");

	sectionList.forEach((section) => {
		section.addEventListener("click", (e) => {
			console.log("click", e.target);
		});
		section.addEventListener("touchstart", (e) => {
			console.log("touchstart", e.target);
		});
	});

	// Add event listener to the document that changes the background color successively to another color
	document.addEventListener("scroll", (e) => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		console.log("scroll", e.target, randomColor);
		document.body.style.backgroundColor = `#${randomColor}`;
	});
};
