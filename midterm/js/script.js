
document.addEventListener("DOMContentLoaded", () => {

    // 1. Select existing HTML elements
    const productsContainer = document.querySelector(".products");
    const searchInput = document.querySelector("#product-search");
    const sortButton = document.querySelector("#sort-price");
    const noProductsMessage = document.querySelector("#no-products");

    const categoryRadios = document.querySelectorAll(
        'input[name="product-category"]'
    );

    if (!productsContainer || !searchInput ||
        !sortButton || !noProductsMessage) {
        console.error("Required product elements are missing.");
        return;
    }

    // Get existing product cards from HTML
    const productCards = Array.from(
        productsContainer.querySelectorAll(".product")
    );

    // Personal exam values
    const N = 27;
    const PREMIUM_LIMIT = N * 100;

    // First sort will be ascending
    let ascending = true;


    // 2. Get product name from HTML
    function getProductName(card) {
        return card.querySelector(".p-info h4")
            .textContent.trim().toLowerCase();
    }


    // 3. Get numeric price from HTML
    function getProductPrice(card) {
        return Number(
            card.querySelector(".price").dataset.price
        );
    }


    // 4. Add Premium labels when page loads
    productCards.forEach((card) => {

        const price = getProductPrice(card);

        if (price > PREMIUM_LIMIT) {

            const label = document.createElement("span");

            label.className = "premium-label";
            label.textContent = "Premium";

            card.querySelector(".p-info").appendChild(label);
        }

    });


    // 5. Get currently selected category
    function getSelectedCategory() {

        const selected = document.querySelector(
            'input[name="product-category"]:checked'
        );

        const categoryMap = {
            "filter-all": "all",
            "filter-desk": "desk",
            "filter-mobile": "mobile",
            "filter-carry": "carry"
        };

        return categoryMap[selected?.id] || "all";
    }


    // 6. Search products and work with category filter
    function updateProducts() {

        const searchText = searchInput.value.trim().toLowerCase();

        const selectedCategory = getSelectedCategory();

        let matchingCount = 0;

        productCards.forEach((card) => {

            const nameMatches = getProductName(card)
                .includes(searchText);

            const categoryMatches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            // Search filtering
            card.style.display = nameMatches ? "" : "none";

            // Count products matching BOTH filters
            if (nameMatches && categoryMatches) {
                matchingCount++;
            }

        });

        // Show message if nothing matches
        const noMatches = matchingCount === 0;

        productsContainer.classList.toggle(
            "is-hidden",
            noMatches
        );

        noProductsMessage.hidden = !noMatches;
    }


    // 7. Live search
    searchInput.addEventListener("input", () => {
        updateProducts();
    });


    // Category change also refreshes the result message
    categoryRadios.forEach((radio) => {

        radio.addEventListener("change", () => {
            updateProducts();
        });

    });


    // 8. Sort products by price
    sortButton.addEventListener("click", () => {

        const sortedProducts = [...productCards].sort(
            (a, b) => {

                const priceA = getProductPrice(a);
                const priceB = getProductPrice(b);

                return ascending
                    ? priceA - priceB
                    : priceB - priceA;

            }
        );

        // Move existing HTML cards, don't recreate them
        sortedProducts.forEach((card) => {
            productsContainer.appendChild(card);
        });

        // Update button text
        sortButton.textContent = ascending
            ? "Sort by price: Low to High"
            : "Sort by price: High to Low";

        // Reverse direction for next click
        ascending = !ascending;

        // Preserve active search and category filtering
        updateProducts();

    });


    // Initial setup
    updateProducts();

});
