let phones=[

{
name:"iPhone 15",
price:"₹79999",
img:"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
},

{
name:"Samsung S23",
price:"₹69999",
img:"https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"
},

{
name:"Vivo X100",
price:"₹59999",
img:"https://m.media-amazon.com/images/I/61kReoQYJ-L._SX679_.jpg"
},

{
name:"POCO F5",
price:"₹29999",
img:"https://m.media-amazon.com/images/I/71x5wYJ9wFL._SX679_.jpg"
}

]

let cart=0

let container=document.getElementById("phones")

phones.forEach((p)=>{

container.innerHTML+=`

<div class="phone">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>${p.price}</p>

<button onclick="addCart()">Add Cart</button>

</div>

`

})

function addCart(){

cart++

document.getElementById("cart-count").innerText=cart

}
