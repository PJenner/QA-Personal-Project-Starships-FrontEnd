"use strict"


const contextPath = "http://localhost:8080";
const output = document.getElementById("output");

function getStarships() {
    axios.get(contextPath + "/getAll")
        .then(res => {
            output.innerHTML = "";
            const starships = res.data;

            starships.forEach(starship => {
                const newStarship = renderStarship(starship);
                console.log("New Starship: ", newStarship);
                output.appendChild(newStarship);
            });
        }).catch(err => console.error(err))
}

function renderStarship(starship) {

    const newColumn = document.createElement("div");
    newColumn.className = "col";

    const newStarship = document.createElement("div");
    newStarship.className = "card";
    newColumn.appendChild(newStarship);

    const StarshipBody = document.createElement("div");
    StarshipBody.className = "card-body";
    newStarship.appendChild(StarshipBody);

    const StarshipName = document.createElement("h5");
    StarshipName.className = "card-title";
    StarshipName.innerText = starship.name;
    StarshipBody.appendChild(StarshipName);

    const StarshipText = document.createElement("p");
    StarshipText.className = "card-text";
    StarshipText.innerHTML = "Model: " + starship.model;
    StarshipText.innerHTML += "<br>";
    StarshipText.innerHTML += "Age: " + starship.age;
    StarshipBody.appendChild(StarshipText);

    const StarshipFooter = document.createElement("div");
    StarshipFooter.className = "card-footer"
    newStarship.appendChild(StarshipFooter);

    const deleteStarshipButton = document.createElement("a");
    deleteStarshipButton.className = "card btn";
    deleteStarshipButton.innerText = "Delete";
    deleteStarshipButton.addEventListener('click', () => deleteStarship(starship.id));
    StarshipFooter.appendChild(deleteStarshipButton);

    const updateStarshipButton = document.createElement("a");
    updateStarshipButton.className = "card btn";
    updateStarshipButton.innerText = "Update";
    const modalBG = document.querySelector('.modal-bg');
    updateStarshipButton.addEventListener('click', function () {
        modalBG.classList.add('bg-active');
    });
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', function () {
        modalBG.classList.remove('bg-active');
    });
    StarshipFooter.appendChild(updateStarshipButton);

    return newColumn;
}

function deleteStarship(id) {
    axios.delete(contextPath + "/delete/" + id)
        .then(() => getStarships())
        .catch(err => console.error(err))
}


document.getElementById("starshipForm").addEventListener('submit', function (event) {
    event.preventDefault();


    const data = {
        name: this.name.value,
        model: this.model.value,
        age: this.age.value
    };

    axios.post(contextPath + "/create", data, {
        headers: {
            "Content-Type": "application/json", // sending JSON
            "Accept": "application/json" // gimme JSON
        }
    })
        .then(() => {
            this.reset();
            this.name.focus();
            getStarships();
        })
        .catch(err => console.error(err));
});

getStarships();