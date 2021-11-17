let innerBook = document.getElementById('inner-section');
console.log(innerBook)

fetch('http://book.alitechbot.uz/api/books')

    .then(res => res.json())
    .then(data => {
        data.payload.docs.forEach(item => {
            let imageFinalLink = `https://book.alitechbot.uz/${item.imageLink}`;
            if (item.imageLink.startsWith('https')) {
                imageFinalLink = item.imageLink
            }
            console.log(item)
            innerBook.innerHTML += `
                <div class="card" id="${item._id}" style="width: 200px; margin-left: 15px">
                    <img style="height: 300px; weight: 300px" src=${item.imageLink} class="card__img"/>
                    <h1>${item.title}</h1>
                    <button style="width: 100px; background-color: green; margin: auto">View more</button>
                <div>
            `
        });
    })
      window.addEventListener('scroll', ()=> {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY;

            if(Math.ceil(scrolled) === scrollable) {
                alert('you have reached the bottom')
            }

            // console.log(scrollable);
        })
        ///______________Loader__________
        
        var loader = document.querySelector(".loader")
        
        window.addEventListener("load", vanish);
        function vanish() {
            loader.classList.add("disappear");
            
        }

       


