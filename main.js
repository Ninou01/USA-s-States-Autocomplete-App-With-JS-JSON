let searchBar = document.querySelector('[type=search]')
let cards = document.querySelector(".cards-section")
let cardsArray = []

fetch("./state_capitals.json")
.then(result => result.json())
.then(data => {
        searchBar.addEventListener("input", (e) => {
            // cards.innerHTML = ''
            let searchValue = e.currentTarget.value.toLowerCase()
            if (searchValue !== '') {
                cardsArray = data.filter(element => {
                    let includeSearchValue = (
                        element.name.toLowerCase().startsWith(searchValue) 
                        || element.abbr.toLowerCase().startsWith(searchValue) 
                        || element.capital.toLowerCase().startsWith(searchValue)
                        )
                        return includeSearchValue
                    })
                } else {
                    cardsArray = []
                    cards.innerHTML = ''
                }

            // **** Brad Traversy Mehtod ****
            const html = cardsArray.map(element => {
                return `
                <div class="card">
                    <h3>${element.name} (${element.abbr}) <span>${element.capital}</span></h3>
                    <h6>lat: ${element.lat} / long: ${element.long}</h6>
                </div>
                `
            }).join('')
            cards.innerHTML = html

            // the problem with my method is that it only add more stuff to cards.innerHTML
            // and it doesn't delete the old ones unless I empty the innerHTML in the begining
            // of th function using cards.innerHTML = ''

            // const html = cardsArray.forEach(element => {
            //     let card = document.createElement("div")
            //     card.classList.add("card") 
            //     card.innerHTML = `
            //         <h3>${element.name} (${element.abbr}) <span>${element.capital}</span></h3>
            //         <h6>lat: ${element.lat} / long: ${element.long}</h6>
            //     `
            //     cards.innerHTML += card.outerHTML
            // })
        })
})
