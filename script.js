document.getElementById('fetchData').addEventListener('click', function() {
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke'; // New API URL

    fetch(apiUrl) // Process to fetch data from API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Retrieve JSON data
        })
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = ''; // Clear existing data

            // Display fetched data in HTML
            const jokeElement = document.createElement('div');
            jokeElement.innerHTML = `
                <h3>Joke:</h3>
                <p>${data.setup}</p>
                <p><strong>Punchline:</strong> ${data.punchline}</p>
            `;
            dataContainer.appendChild(jokeElement);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
