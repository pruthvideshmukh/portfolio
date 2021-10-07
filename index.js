let apiKey = '18a919d3661040bd9e8bcab40476df5c';


let source = ["newsweek","google-news-in","espn-cric-info","entertainment-weekly","national-geographic"]
// let source = 'bbc-news';
let newsAccordion1 = document.getElementById('newsAccordion1');

const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source[0]}&apiKey=${apiKey}`, true);

xhr1.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <span class="badge bg-dark">Breaking News ${index + 1}:</span>${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion1">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion1.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr1.send()




let newsAccordion2 = document.getElementById('newsAccordion2');

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source[1]}&apiKey=${apiKey}`, true);

xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <span class="badge bg-dark">Breaking News ${index + 1}:</span>${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion2">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion2.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr2.send()





let newsAccordion3 = document.getElementById('newsAccordion3');

const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source[2]}&apiKey=${apiKey}`, true);

xhr3.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <span class="badge bg-dark">Breaking News ${index + 1}:</span>${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion3">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion3.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr3.send()



let newsAccordion4 = document.getElementById('newsAccordion4');

const xhr4 = new XMLHttpRequest();
xhr4.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source[3]}&apiKey=${apiKey}`, true);

xhr4.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <span class="badge bg-dark">Breaking News ${index + 1}:</span>${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion4">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion4.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr4.send()




let newsAccordion5 = document.getElementById('newsAccordion5');

const xhr5 = new XMLHttpRequest();
xhr5.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source[4]}&apiKey=${apiKey}`, true);

xhr5.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <span class="badge bg-dark">Breaking News ${index + 1}:</span>${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion5">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion5.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr5.send()

