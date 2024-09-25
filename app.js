

let books = [
    {
        'cover': 'assets/crack the coding interview.png',
        'name' : 'Crack the Coding Interview',
        'rating' : 5,
        'price' : '14.95',
        'oldPrice' : '49.95'
    },
    {
        'cover': 'assets/atomic habits.jpg',
        'name' : 'Atomic Habits',
        'rating' : 5,
        'price' : '39.00',
        'oldPrice' : null
    },
    {
        'cover': 'assets/david goggins.jpeg',
        'name' : "Can't Hurt Me",
        'rating' : 5,
        'price' : '14.00',
        'oldPrice' : '59.95'
    }, 
    {
        'cover': 'assets/deep work.jpeg',
        'name' : "Deep Work",
        'rating' : 4,
        'price' : '12.00',
        'oldPrice' : '29.00'
    },
    {
        'cover': 'assets/book1.png',
        'name' : "The 10X Rule",
        'rating' : 4,
        'price' : '19.00',
        'oldPrice' : '44.00'
    }, 
    {
        'cover': 'assets/book2.png',
        'name' : "Be Obsessed Or Be Average",
        'rating' : 4,
        'price' : '17.00',
        'oldPrice' : '32.00'
    },
    {
        'cover': 'assets/book3.png',
        'name' : "Rich Dad Poor Dad",
        'rating' : 5,
        'price' : '12.50',
        'oldPrice' : '70.00'
    },
    {
        'cover': 'assets/book4.png',
        'name' : "Cashflow Quadrant",
        'rating' : 4,
        'price' : '10.00',
        'oldPrice' : '11.00'
    },
    {
        'cover': 'assets/book5.png',
        'name' : "48 Laws of Power",
        'rating' : 3,
        'price' : '17.95',
        'oldPrice' : '38.00'
    },
    {
        'cover': 'assets/book6.png',
        'name' : "The 5 Second Rule",
        'rating' : 2,
        'price' : '35.00',
        'oldPrice' : null
    },
    {
        'cover': 'assets/book7.png',
        'name' : "Your Next Five Moves",
        'rating' : 4,
        'price' : '40.00',
        'oldPrice' : null
    },
    {
        'cover': 'assets/book8.png',
        'name' : "Mastery",
        'rating' : 4,
        'price' : '30.00',
        'oldPrice' : null
    }
]



let bookContainer = document.querySelector('#book-container');
let lowToHighButton = document.querySelector('#low-to-high');
let highToLowButton = document.querySelector('#high-to-low');
let rating = document.querySelector('#rating');

let loadingScreen = document.querySelector('#loading-screen');

// Show all books on page (Default Page)
function bookList(){
    bookContainer.innerHTML = ""
    for(let book of books){
        console.log(book.cover)
        let bookDiv = document.createElement('div');
        let ratingDiv = document.createElement('div');

        bookDiv.classList.add('col-md-3', 'col-6', 'mb-2');

        bookDiv.innerHTML = `<img class="img-fluid" src="${book.cover}" height="2px"></img> <p class="my-2" style="font-size: 15px;">${book.name}</p>`

        ratingDiv.style.marginTop = '-10px';

        for(let i = 0; i < book.rating; i++){
            let star = document.createElement('i');
            star.classList.add('fa-solid', 'fa-star');
            star.style.color = '#fabf2a';
            ratingDiv.append(star)
        }


        let price = document.createElement('p');
        price.style.fontSize = '14px';
        if(book.oldPrice){
            let span = document.createElement('span');
            span.style.textDecoration = 'line-through';
            span.style.color = 'rgb(198, 198, 198)';
            price.innerHTML = `<span style="text-decoration: line-through; color: rgb(198, 198, 198);">$${book.oldPrice}</span> $${book.price}`;    
        }
        else{
            price.innerHTML = `$${book.price}`; 
        }

        bookContainer.append(bookDiv)
        bookDiv.append(ratingDiv)
        bookDiv.append(price)
    }
}

// Sort Books Price Low to High Functionality
document.addEventListener('DOMContentLoaded', function() {
    lowToHighButton.addEventListener('click', function(e){
        e.preventDefault();
        function compareByPrice(a, b) {
            return a.price - b.price;
          }
        books.sort(compareByPrice);
        bookList();
    })
});

// Sort Books Price High to Low Functionality
document.addEventListener('DOMContentLoaded', function() {
    highToLowButton.addEventListener('click', function(e){
        e.preventDefault();
        function compareByPrice(a, b) {
            return a.price - b.price;
          }
        books.sort(compareByPrice).reverse();
        bookList();
    })
});

// Sort Books By Rating Functionality
document.addEventListener('DOMContentLoaded', function() {
    rating.addEventListener('click', function(e){
        e.preventDefault();
        function compareByRating(a, b) {
            return a.rating - b.rating;
          }
        books.sort(compareByRating).reverse();
        bookList();
    })
});


function main(){
    let timer = setTimeout(() => {
        bookList();
    }, 300)
    let loading = setTimeout(() => {
        loadingScreen.remove()
    }, 320)
}

main();
