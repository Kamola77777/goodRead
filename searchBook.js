
let container = document.getElementById("list");
const input = (document.getElementById("input").value =
    localStorage.getItem("searchValue"));
container.innerHTML = "";

function addToMyBooks(book) {
    console.log("clicked adddto", book);
    // const all = JSON.parse(localStorage.getItem("mybooks"));
    // localStorage.setItem("mybooks", JSON.stringify([...all, book]));
}

fetch("https://book.alitechbot.uz/api/books/search?title=" + input)
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "data fetching");
        // const filtered = data.payload.filter((item) =>
        //     item.title.toLowerCase().includes(input.toLowerCase()) ? true : false
        // );
        console.log(data, "data");
        if (data.payload.length) {
            container.innerHTML = null;
            data.payload.forEach((item) => {
                let card = `
                    <div class=" books col-3">
                        <img class="imgg" src="./366522._SX120_.jpg" alt="">
                        <div class="main">
                            <h6>${item.title}</h6>
                            <p>by<a href="">${item.author.firstName}  ${item.author.lastName}</a></p>
                            <button onclick="addToMyBooks(${item})" type="button" class="btn btn-outline-info ">Want to read</button>
                        </div>
                    </div>
                    `;

                container.innerHTML += card;
            });
        } else {
            container.innerHTML = `<h2>Not Found</h2>`;
        }
    })
    .catch((err) => console.log(err));

function submitHandler(event) {
    event.preventDefault();

    let input = document.getElementById("input").value;
    container.innerHTML = "";
    fetch("https://book.alitechbot.uz/api/books/search?title=" + input)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "data fetching");
            // const filtered = data.payload.filter((item) =>
            //     item.title.toLowerCase().includes(input.toLowerCase()) ? true : false
            // );
            console.log(data, "data");
            if (data.payload.length) {
                container.innerHTML = null;
                data.payload.forEach((item) => {
                    let card = `
                    <div class=" books col-3">
                        <img class="imgg" src="./366522._SX120_.jpg" alt="">
                        <div class="main">
                            <h6>${item.title}</h6>
                            <p>by<a href="">${item.author.firstName}  ${item.author.lastName}</a></p>
                            <button onclick="addToMyBooks(${item})" type="button" class="btn btn-outline-info ">Want to read</button>
                        </div>
                    </div>
                    `;

                    container.innerHTML += card;
                });
            } else {
                container.innerHTML = `<h2>Not Found</h2>`;
            }
        })
        .catch((err) => console.log(err));
}