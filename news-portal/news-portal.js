const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data));
}

const showCategories = (news) => {
    console.log(news);

    const categoriesContainer = document.getElementById('categories-container');
    news.news_category.forEach((element) => {
        const linkContainer = document.createElement('p');
        linkContainer.innerHTML = `
            <a class="nav-link" href="#" onclick="fetchCategoriesNews(${element.category_id}, '${element.category_name}')">
            ${element.category_name}</a>
        `;
        categoriesContainer.appendChild(linkContainer);
    })
}

const fetchCategoriesNews = (category_id, category_name) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => showAllNews(data.data, category_name))
}

const showAllNews = (data, category_name) => {
    console.log(data.data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('news-count').innerText = category_name;

    data.forEach((singleNews) => {
        console.log(singleNews);
    })
}



fetchCategories();