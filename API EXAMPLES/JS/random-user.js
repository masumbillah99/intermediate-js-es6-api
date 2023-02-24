const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=male')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    // console.log(user);
    // console.log(user.results);
    // console.log(user.results[0]);
    console.log(user.results[0]);
    const mainArray = user.results[0];

    genderTag.innerHTML = mainArray.gender;

    const name = mainArray.name.title + ' ' + mainArray.name.first + ' ' + mainArray.name.last;
    document.getElementById('name').innerHTML = name;

    const location = mainArray.location.street.name + ', ' + mainArray.location.city + ', ' + mainArray.location.country;
    document.getElementById('location').innerHTML = location;

    const img = mainArray.picture.large;
    document.getElementById('load-img').src = img;
}

loadUser();

// location and profile picture