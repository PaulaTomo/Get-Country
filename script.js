"use strict";

const select = document.querySelector("#get-country");
const card = document.querySelector('.card');
const flag = card.querySelector('.flag');
const country = card.querySelector('.country-name');
const capital = card.querySelector('.capital');
const population = card.querySelector(".population");
const currency = card.querySelector(".currency");
const continent = card.querySelector(".continent")
const language = card.querySelector(".language");


const countryFull = (countryName => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json.map(function (data) {

                flag.src = data.flags.png;
                country.innerText = `Country: ${data.name}`;
                capital.innerText = `Capital: ${data.capital}`;
                population.innerText = `Population: ${data.population}`;
                currency.innerText = `Currency : ${data.currencies[0].code}`;
                continent.innerText = `Continent : ${data.region}`;
                language.innerText = `Language: ${data.languages[0].name}`;


                console.log("success", data)
              })
        })
        .catch((error) => {
            console.log('Whoops something is wrong',error)
            alert('Whoops something is wrong');
    })
})

select.addEventListener("submit", function (event) {
    event.preventDefault();
   const getInfoCountry = this.elements.info_country.value;
countryFull(getInfoCountry)
})

