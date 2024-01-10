// filter array
let filterarray = [];
// gallery array
let galleryarray = [
    {
        id: 1,
        name: "Lenovo Adapter",
        src:  "./images/adapter.jpg",
        desc: " Procence Laptop Charger Adapter for Lenovo Laptop G560 ₹800"
    },
    {
        id: 2,
        name: "Macbook",
        src: "./images/macbook.jfif",
        desc: "Intel Apple Macbook Laptop, 8 Gb ₹82,500" 

    },
    {
        id: 3,
        name: "Lenova 5i",
        src: "./images/lenovopad1.jpg",
        desc: " IdeaPad Slim 5i 11th Gen, 8 Gb ₹86,500"

    },
    {
        id: 4,
        name: "Dell 5 Gen",
        src: "./images/dell.jpg",
        desc: " Dell Laptop 14 inch, 4Gb  ₹40,500"

    },
    {
        id: 5,
        name: "Earphones",
        src: "./images/earphones.jpeg",
        desc: " Earphone boat ₹3,000 "

    },
    {
        id: 6,
        name: "Asus thinkpad",
        src: "./images/asus.jpg",
        desc: " Asus Laptop 14 inch, 8Gb  ₹80,500 "
    },
    {
        id:7,
        name:"Mobile Charger",
        src: "./images/mobilecharger.jpeg",
        desc:" Mobile Charger boat ₹3,500"
        
    },
    {
        id:8,
        name:"Keyboard wired",
        src: "./images/key.jpg",
        desc: " Keyboard wired ₹700"
    },
    {
        id:9,
        name: "Dell Adapter",
        src:  "./images/adapter1.jpg",
        desc: " Procence Laptop Charger Adapter for Dell Laptop G560 ₹850"
        
    },

]

// create a fumction to show gallery
function showgallery(currarray) {
    document.getElementById("card").innerText="";
    
    for (let i = 0; i < currarray.length; i++) {
        document.getElementById("card").innerHTML += `
        <div class=" col-sm-6 col-md-6 col-lg-3 mt-4 cardbox">
        <div class="card card-box p-4 ">
        <div class=card-image>
          <img src="${currarray[i].src}" class="card-img-top pe-4 ps-4" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title card-head ">${currarray[i].name}</h5>
            <p class="card-text text-muted ">${currarray[i].desc}</p>
            <button class="btn buy-btn align-items-center text-align-center"> <iconify-icon icon="mdi:cart" style="color: white;" width="16" height="16" class="cart-icon"></iconify-icon>Add to Cart</button>
          </div>
        </div>
      </div>`
    }
}
// show the initial gallery
showgallery(galleryarray);

// event listener for the search input
let inputtext= document.getElementById("myinput")
inputtext.addEventListener("keyup",function(){
    let text=inputtext.value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.toLowerCase().includes(text.toLowerCase())){
            return a.name
        }
    })
    if(this.value==""){
        showgallery(galleryarray);
    }
    else{
        if(filterarray==""){
            document.getElementById("para").innerHTML="Search Not found !"
            document.getElementById("card").innerHTML=""
        }
        else{
            showgallery(filterarray)
            document.getElementById("para").innerHTML=""
        }
    }
})








