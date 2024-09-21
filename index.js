const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');   


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;   


    // Perform search logic here (e.g., using AJAX to fetch data)

    // Example: Display a simple result
    searchResults.textContent = `Search results for "${searchTerm}":`;
      
    // Add your actual search results to the searchResults div
    searchResults.style.display = 'block'; // Show the search results
});