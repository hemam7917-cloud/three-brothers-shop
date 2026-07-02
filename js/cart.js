function addToCart(id){

const selected=

products.find(item=>item.id===id);

cart.push(selected);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

updateCartCount();

showToast(selected.name+" Added Successfully");

}
function updateCartCount(){

document.getElementById("cartCount").innerHTML=

cart.length;

}

updateCartCount();
localStorage.setItem("cart", JSON.stringify(cart));

const cart = JSON.parse(localStorage.getItem("cart")) || [];