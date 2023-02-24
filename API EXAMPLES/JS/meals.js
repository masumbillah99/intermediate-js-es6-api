const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => diplayMeals(data.meals))
}

// get container element
// create child for each element
// set content of the child element
// append child
const diplayMeals = meals => {
    // console.log(meals);
    const mealsConainer = document.getElementById("meals-container");
    mealsConainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="loading">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This food teste is awesome. This food item load by calling API. And API is awesome for loading data from another source</p>
                    <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                        Details
                    </button>
                </div>
            </div>
        `;
        mealsConainer.appendChild(mealDiv);
    });
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(err => {
            console.log(err);
        })
};

// async await
const loadMealDetail2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    } catch (error) {
        console.log(error);
    }
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    `;
}

loadMeals('fish');