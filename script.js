const filter = document.querySelector("#filter");
const result = document.querySelector(".user-list");

const users = [];

getData();
filter.addEventListener('input',(e) => {
    filterData(e.target.value);
});


async function getData() {
    const input = await fetch("https://randomuser.me/api?results=50")

    const data = await input.json();
    // const {results} = await input.json();
    console.log(data);
    //Clear results
    result.innerHTML ='';

    // results is in data objects   check in console.log
    // results.forEach
    data.results.forEach(user => {
        const li = document.createElement("li");
        users.push(li);
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li);
    });
}

function filterData(text) {
    // console.log(text)
    users.forEach(user => {
        if(user.innerText.toLowerCase().includes(text.toLowerCase())) {
            user.classList.remove("hide")
        }else {
            user.classList.add("hide")
        }
    })
    
};





