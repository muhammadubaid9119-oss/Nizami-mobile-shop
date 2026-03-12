let cart=0
let wish=0

const phones=[

{
name:"Samsung S23",
price:"62000",
img:"https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg"
},

{
name:"iPhone 14",
price:"65000",
img:"https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
},

{
name:"OnePlus 11",
price:"56000",
img:"https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
},

{
name:"Realme Narzo",
price:"15000",
img:"https://m.media-amazon.com/images/I/71DSxfKzkJL._SL1500_.jpg"
},

{
name:"Redmi Note 13",
price:"18000",
img:"https://m.media-amazon.com/images/I/71VW8LmqqPL._SL1500_.jpg"
}

]


let container=document.getElementById("products")

phones.forEach(p=>{

container.innerHTML+=`

<div class="product">

<a href="product.html?name=${p.name}&price=${p.price}&img=${p.img}">

<img src="${p.img}">

<h4>${p.name}</h4>

</a>

<p>₹${p.price}</p>

<button onclick="addCart()">Add Cart</button>

<button onclick="addWish()">Wishlist</button>

<button onclick="order('${p.name}')">Order</button>

</div>

`

})


function addCart(){

cart++

document.getElementById("cart").innerText=cart

}


function addWish(){

wish++

document.getElementById("wish").innerText=wish

}


function order(name){

let phone="9119606562"

let msg="I want to buy "+name

window.open("https://wa.me/"+phone+"?text="+msg)

  }
