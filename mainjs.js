
window.onload = function() {

    var searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function() {
        var searchQuery = searchInput.value.toLowerCase(); 
        var productBoxes = document.querySelectorAll(".product-box"); 

        // Loop through each product box
        productBoxes.forEach(function(productBox) {
            var productTitle = productBox.querySelector(".product-title").textContent.toLowerCase(); 

            
            if (productTitle.includes(searchQuery)) {
                productBox.style.display = "block"; 
            } else {
                productBox.style.display = "none"; 
            }
        });
    });
};
