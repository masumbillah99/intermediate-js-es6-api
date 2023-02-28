const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
    console.log(phones);

    const phonesCotainer = document.getElementById('phones-container');
    phonesCotainer.textContent = '';

    // display 20 phones only (not a perfect way)
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 11) {
        phones = phones.slice(0, 11);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }

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
                <img src="${phone.image}" class="card-img-top w-50 mx-auto mb-3" alt="">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex consequatur aspernatur voluptatum. Sed, consectetur.
                    </p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                </div>
            </div>
        `;
        phonesCotainer.appendChild(phoneCard);
    });

    // stop spinner / loader
    toggleSpinner(false);
};

// search input field handler
const processSearch = (dataLimit) => {
    // start loader
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText) {
        loadPhones(searchText, dataLimit);
    } else {
        alert(`Empty input field!!  Please write phone name`);
        // stop loader
        toggleSpinner(false);
    }
    // searchField.value = '';
}

// handler search button click
document.getElementById('search-btn').addEventListener('click', () => {
    processSearch(11);
});

// search input field enter key event handler
document.getElementById('search-field').addEventListener('keypress', function (event) {
    // console.log(event.key);
    if (event.key === "Enter") {
        processSearch(11);
    }
});

// load spinner function
const toggleSpinner = (isLoading) => {
    const loaderSection = document.getElementById('loading-spinner');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}

// not the best way to load show all
document.getElementById('show-all-btn').addEventListener('click', () => {
    processSearch();
});


// load phone details
const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
    console.log(data.data);
}

const displayPhoneDetails = (phone) => {
    const phoneOther = phone.others;
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetailsBody = document.getElementById('phone-details-body');
    phoneDetailsBody.innerHTML = `
        <div>
            <p><b>Release Date:</b> ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
            <p><b>WLAN:</b> ${phoneOther.WLAN ? phoneOther.WLAN : 'No WLAN found'}</p>
            <p><b>Bluetooth:</b> ${phoneOther.Bluetooth ? phone.Bluetooth : 'No Bluetooth found'}</p>
            <h5>Main Features</h5>
            <p><b>Chipset:</b> ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'No Chipset found'}</p>
            <p><b>Size:</b> ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : 'No Display size found'}</p>
            <p><b>Memory:</b> ${phone.mainFeatures.memory ? phone.mainFeatures.memory : 'No memory found'}</p>
            <p><b>Storage:</b> ${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'No storage found'}</p>
            <div>
                <span><b>Sensors</b></span> <br>
                <ul id="sensors-list"></ul>
            </div>
            
        </div>
    `;
    const phoneSensors = phone.mainFeatures.sensors;
    const ul = document.getElementById('sensors-list');
    if (phoneSensors) {
        phoneSensors.forEach(sensor => {
            const li = document.createElement('li');
            li.innerHTML = sensor;
            ul.appendChild(li);
        })
    } else {
        ul.innerText = 'No sensor found';
    }


    // <img src="${phone.image}" class="mx-auto w-50" alt="not found">
}


loadPhones('ipad');