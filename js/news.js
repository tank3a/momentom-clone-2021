const newsPages = document.querySelector(".news__page"),
 API_KEY = "33c953dd5742447ba1182da8e2e6592b";

 var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=33c953dd5742447ba1182da8e2e6592b';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })