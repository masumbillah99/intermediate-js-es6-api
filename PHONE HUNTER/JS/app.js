
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = phones => {
    const phonesCotainer = document.getElementById('phones-container');
    phonesCotainer.innerHTML = '';
    console.log(phones);
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
};

document.getElementById('search-btn').addEventListener('click', () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText) {
        loadPhones(searchText);
    } else {
        alert("Empty input field");
    }
});



loadPhones();