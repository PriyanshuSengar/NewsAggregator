const apiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY';
const container = document.getElementById('newscontainer');
const searchInput = document.getElementById('search');
let allArticles = [];

async function fetchNews() {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    allArticles = data.articles;
    displayNews(allArticles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

function displayNews(articles) {
  container.innerHTML = '';
  if (articles.length === 0) {
    container.innerHTML = '<p>No articles found.</p>';
    return;
  }

  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card';

    card.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image" />
      <h3>${article.title}</h3>
      <p>${article.description || 'No description available.'}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    container.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = allArticles.filter(article =>
    article.title.toLowerCase().includes(keyword) ||
    (article.description && article.description.toLowerCase().includes(keyword))
  );
  displayNews(filtered);
});

// Initial call
fetchNews();
