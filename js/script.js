let cart=

JSON.parse(

localStorage.getItem("cart")

)||[];
const productContainer=

document.getElementById("productContainer");

function displayProducts(list){

productContainer.innerHTML="";

list.forEach(product=>{

productContainer.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Category : ${product.category}</p>

<p>Price : ৳${product.price}</p>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}

displayProducts(products);
document

.getElementById("categoryFilter")

.addEventListener("change",function(){

if(this.value==="all"){

displayProducts(products);

return;

}

const filtered=

products.filter(product=>

product.category===this.value

);

displayProducts(filtered);

});
function showToast(message){

const toast=

document.getElementById("toast");

toast.innerHTML=message;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2000);

}