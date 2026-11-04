document.addEventListener("DOMContentLoaded", function() {
	const searchButton = document.getElementById("search");

	searchButton.addEventListener("click", function() {

		fetch("superheroes.php")
			.then(function(result) {
				if (!result.ok) {
                    			throw new Error("Could not retrieve superheroes");
                		}
                		return result.text();
			})
			.then(function(result) {
				alert(result);
			})
			.catch(function(result) {
				alert("Error: " + error.message);
			});
	});
});
