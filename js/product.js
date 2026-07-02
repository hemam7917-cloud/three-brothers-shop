const products=[

{

id:1,

name:"Premium Rice",

price:80,

category:"Rice",

image:"images/rice.jpg"

},

{

id:2,

name:"Mustard Oil",

price:250,

category:"Oil",

image:"images/oil.jpg"

},

{

id:3,

name:"Organic Honey",

price:650,

category:"Honey",

image:"images/honey.jpg"

}

];
document

.getElementById("searchBox")

.addEventListener("keyup",function(){

const keyword=

this.value.toLowerCase();

const filtered=

products.filter(product=>

product.name

.toLowerCase()

.includes(keyword)

);

displayProducts(filtered);

});