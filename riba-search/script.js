async function search() {
    const apiKey = 'AIzaSyCIFvr8VYl9r4lHYkg8LDi3_3htQhjNVuE'; // API-ключ
    const searchEngineId = 'e15fb3d2e0da947bc'; // Search Engine ID
    const query = document.getElementById('query').value;
    const searchType = document.getElementById('searchType').value;

    // Параметры запроса для поиска картинок
    const searchParams = new URLSearchParams({
        q: query,
        key: apiKey,
        cx: searchEngineId,
    });

    if (searchType === 'image') {
        searchParams.set('searchType', 'image'); // параметр для поиска картинок
    }

    const url = `https://www.googleapis.com/customsearch/v1?${searchParams.toString()}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.items, searchType);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function displayResults(items, searchType) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (items && items.length > 0) {
        items.forEach(item => {
            if (searchType === 'image') {
                // Отображение картинок
                const imageItem = document.createElement('div');
                imageItem.className = 'image-item';
                imageItem.innerHTML = `
                    <img src="${item.link}" alt="${item.title}">
                    <a href="${item.image.contextLink}" target="_blank">${item.title}</a>
                `;
                resultsDiv.appendChild(imageItem);
            } else {
                // Отображение результатов
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `
                    <a href="${item.link}" target="_blank">${item.title}</a>
                    <p>${item.snippet}</p>
                `;
                resultsDiv.appendChild(resultItem);
            }
        });
    } else {
        resultsDiv.innerHTML = '<p>Ничего не найдено.</p>';
    }
}