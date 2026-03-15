let phones=[

{
name:"iPhone 15",
price:"₹79,999",
img:"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
},

{
name:"Samsung S23",
price:"₹69,999",
img:"https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"
},

{
name:"Vivo X100",
price:"₹59,999",
img:"https://m.media-amazon.com/images/I/61kReoQYJ-L._SX679_.jpg"
},

{
name:"POCO F5",
price:"₹29,999",
img:"https://m.media-amazon.com/images/I/71x5wYJ9wFL._SX679_.jpg"
},

{
name:"Realme GT",
price:"₹34,999",
img:"https://m.media-amazon.com/images/I/71H9V6l2ZUL._SX679_.jpg"
},

{
name:"OnePlus 11",
price:"₹56,999",
img:"https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg"
}

]

let cart=0
let phoneContainer=document.getElementById("phones")

phones.forEach(p=>{

phoneContainer.innerHTML+=`

<div class="phone">

<img src="${p.img}"
onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'">

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

/* SEARCH */

let search=document.getElementById("search")

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase()

document.querySelectorAll(".phone").forEach(card=>{

let name=card.innerText.toLowerCase()

card.style.display=name.includes(value)?"block":"none"

})

})

/* BANNER SLIDER */

let banners=[
"https://images.unsplash.com/photo-1598327105666-5b89351aff97",
"https://images.unsplash.com/photo-1510557880182-3c1b02c44a7b",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
]

let index=0

setInterval(()=>{

index++

if(index>=banners.length) index=0

document.getElementById("banner").src=banners[index]

},3000)
