document.addEventListener("DOMContentLoaded", function() {
	const searchButton = document.getElementById("search");
	const searchInput = document.getElementById("search-input");
	const result = document.getElementById("result");


	searchButton.addEventListener("click", function() {

		const query = searchInput.value.trim();

		fetch("superheroes.php?query=" + query)
			.then(response => response.text())
			.then(data => {
				result.innerHTML = data;
			})
			.catch(error => {
				result.innerHTML = "An error occured while searching";
			});
	});
});
