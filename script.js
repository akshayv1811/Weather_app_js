const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location p:nth-of-type(2)");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener('submit', searchForLocation)

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=20235caeacb746e796b133252233006&q=${targetLocation}&aqi=no`

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

    let temp = data.current.temp_c;
    console.log(temp);

    let locationName = data.location.name;
    console.log(locationName);

    let time = data.location.localtime;
    console.log(time);

    let condition = data.current.condition.text;
    console.log(condition);

    updateDetails(temp, locationName, time, condition)
}

function updateDetails(temp, locationName, time, condition) {

    let splitDate = time.split(' ')[0];
    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay())
    

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault()
    target = searchField.value;
    fetchResults(target)
}


function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday";
            break;

        case 1:
            return "Monday";
            break;

        case 2:
            return "Tuesday";
            break;

        case 3:
            return "Wednesday";
            break;

        case 4:
            return "Thursday";
            break;

        case 5:
            return "Friday";
            break;

        case 6:
            return "Saturday";
            break;
    }
}
