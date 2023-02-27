
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = phones => {
    console.log(phones);

    const phonesCotainer = document.getElementById('phones-container');
    phonesCotainer.textContent = '';

    // display 20 phones only
    phones = phones.slice(0, 15);

    // dispaly no phones found
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    } else {
        noPhone.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('col');
        phoneCard.innerHTML = `
            <div class="card py-3">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        phonesCotainer.appendChild(phoneCard);
    });

    // stop spinner / loader
    toggleSpinner(false);
};

// handler search button click
document.getElementById('search-btn').addEventListener('click', () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText) {
        loadPhones(searchText);
    } else {
        alert(`Empty input field!!  Please write phone name`);
        toggleSpinner(false);
    }
    searchField.value = '';
});

const toggleSpinner = (isLoading) => {
    const loaderSection = document.getElementById('loading-spinner');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}


// loadPhones();