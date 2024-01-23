//SELECTORS
const productsContainer= document.querySelector(".flex-container");
const sellerSelection= document.querySelector("#seller");
const inputPrice= document.querySelector("#price");
const searchBtn= document.querySelector(".search");
const clearBtn= document.querySelector(".clear");


//VARIABLES
const products = [
    {
    name: 'HP Essentials 255 G8',
    price: 399,
    stars: 4,
    seller: 'Brian',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
    name: 'APPLE MacBook Air',
    price: 1049,
    stars: 3,
    seller: 'Karien',
    image: 'https://media.currys.biz/i/currysprod/10239792?$g-small$&fmt=auto'
    },
    {
    name: 'ACER Swift Go 14',
    price: 649,
    stars: 3,
    seller: 'Glory',
    image: 'https://media.currys.biz/i/currysprod/10251012?$g-small$&fmt=auto'
    },
    {
    name: 'ACER Aspire 5 14',
    price: 279,
    stars: 3,
    seller: 'Micheal',
    image: 'https://media.currys.biz/i/currysprod/10238885?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Air',
    price: 849,
    stars: 3,
    seller: 'Brian',
    image: 'https://media.currys.biz/i/currysprod/M10216298_grey?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Air',
    price: 1049,
    stars: 3,
    seller: 'Micheal',
    image: 'https://media.currys.biz/i/currysprod/10239790?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Pro 14',
    price: 1950,
    stars: 3,
    seller: 'Brian',
    image: 'https://media.currys.biz/i/currysprod/10257854?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Air',
    price: 1270,
    stars: 3,
    seller: 'Mark',
    image: 'https://media.currys.biz/i/currysprod/10250804?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Air',
    price: 1275,
    stars: 3,
    seller: 'Mark',
    image: 'https://media.currys.biz/i/currysprod/10250802?$g-small$&fmt=auto'
    },
    {
    name: 'APPLE MacBook Pro 14',
    price: 2399,
    stars: 3,
    seller: 'Glory',
    image: 'https://media.currys.biz/i/currysprod/10246970?$g-small$&fmt=auto'
    }
    ];


    
    //EVENT LISTENERS
  document.addEventListener("DOMContentLoaded", ()=> {
    displayProducts(products);
  });

  sellerSelection.addEventListener("change", ()=> {
       filterProducts(sellerSelection.value);
  })

  searchBtn.addEventListener("click", ()=> {
      filterProducts(inputPrice.value);
  })

  clearBtn.addEventListener("click", ()=> {
    displayProducts(products);
    sellerSelection.value= "";
    inputPrice.value= "";
  }) 


//FUNCTIONS 

   function displayProducts(storeProducts){
    productsContainer.innerHTML = "";

    storeProducts.forEach(product=> {
        const productHTML= `
        <div class="location-card">
                        
        <div class="location-card--img_container">
            <h3 class="location-card--title">${product.name}</h3>
            <img src='${product.image}' alt="product" class="location-card--img" />
        </div>
            <div class="location-card--price">Price: <span>${product.price} </span></div>
            <div class="location-card--seller">Seller: <span>${product.seller} </span></div>
            <div class="location-card--rating">Rating: <span>${product.stars} </span></div>
        <div class="location-card--footer"><button>Buy</button></div>
    </div>
        `;

        productsContainer.insertAdjacentHTML("beforeend", productHTML);
    })
    };


    function filterProducts(filter){
         if(filter === sellerSelection.value){
              if(sellerSelection.value === ""){
                window.location.reload();
              }
              else{
                const filteredProducts= products.filter(product=> product.seller === filter);

                displayProducts(filteredProducts);
              }
         }

         if(filter === inputPrice.value){
            const filteredProducts= products.filter(product=> product.price < parseInt(filter));

            displayProducts(filteredProducts);
         } 
    }