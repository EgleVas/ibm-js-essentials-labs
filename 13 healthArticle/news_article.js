// Practice Task
var xhrNews = new XMLHttpRequest();
var url = './news_article.json';

xhrNews.open('GET', url, true);

xhrNews.responseType = 'json';

xhrNews.onload = function() {
    var news = xhrNews.response.news;
    var newsDiv = document.getElementById('news');

    news.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('newsArticle');
  
        var title = document.createElement('h2');
        title.textContent = item.title;
  
        var description = document.createElement('p');
        description.textContent = item.description;
  
        var abstract = document.createElement('h3');
        abstract.textContent = 'Abstract:';
  
        var abstractList = document.createElement('ul');
        item.abstract.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item;
            abstractList.appendChild(listItem);
        });
  
        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(abstract);
        itemDiv.appendChild(abstractList);
        
        newsDiv.appendChild(itemDiv);
    });
}

xhrNews.send();