const main = document.querySelector(".main");
const outer = document.querySelector(".outer");
const reset = document.querySelector(".reset");
const change = document.querySelector(".change");



function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
   
}

main.addEventListener("click", ()=>{
  const temp = random_rgba()
  main.style.backgroundColor = temp;
  outer.style.backgroundColor = temp;
  outer.style.filter = "brightness(65%)";
})

reset.addEventListener("click", ()=>{
  main.style.backgroundColor = "#434242";
  outer.style.backgroundColor = "#2B2B2B";
})

change.addEventListener("click", ()=>{
  const r = document.getElementById("r").value;
  const g = document.getElementById("g").value;
  const b = document.getElementById("b").value;
  main.style.backgroundColor = `rgb(${r},${g},${b})`;
  outer.style.backgroundColor = `rgb(${r},${g},${b})`;
  outer.style.filter = "brightness(65%)";
})


// time
const timeText = document.getElementById("time")
function clock(){
let hours = new Date().getHours()
let minutes = new Date().getMinutes()
minutes = ('0'+minutes).slice(-2);
let seconds = new Date().getSeconds()
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
let time = `${hours}:${minutes}`
timeText.textContent = time
setTimeout(clock, 1000)
}

clock()

// date
const dateEL = document.getElementById("date")
let date = new Date().toString()
let day = date.slice(0, 3)
let newDate = date.slice(4, 10)

dateEL.textContent = `${day}, ${newDate}`

// background img
const imgEL = document.querySelector(".main-front");
function imgFun(){
const img = ["https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/scenic-view-of-moraine-lake-on-a-summer-ginevre.jpg",
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg",
            "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
            "https://www.nps.gov/care/planyourvisit/images/DSC_2530-adjusted-sharpened-CMYK.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/32/00/f8.jpg",
            "https://cruising.org/en/cruise-lines/-/media/Images/Scenic-web-compressed",
            "https://www.visitutah.com/azure/cmsroot/visitutah/media/site-assets/articles-photography/slowing%20down%20and%20focusing%20on%20wellness%20in%20mighty%20fi/utah-mighty-five_bryce-canyon_payne-angie_2020.jpg?w=1160&h=754&mode=crop&quality=65",
            "https://www.onlyinyourstate.com/wp-content/uploads/2017/04/17147180095_95aba1b298_k.jpg",
           
            "https://www.travelandleisure.com/thmb/O_l4b5JDWtEWKQ7mE7PoA3rQdVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cascade-mountains-range-USMNTNS0720-db9bdf21ee2e47b1868232c551c01006.jpg",
            "https://cdn.pixabay.com/photo/2016/11/23/13/50/mountains-1852955__340.jpg",
            "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/06/ruta-40-near-el-chelten-argentina.jpg?ssl=1",
            "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1018,q_65,w_600/v1/clients/fingerlakesvc/finger_lakes_canandaigua_fall_scenic_drive_a3bc55ff-d636-4c9f-b08d-f04d9ad898b8.jpg"];
  const randomImg = Math.floor(Math.random() * img.length);
  imgEL.style.background = `url(${img[randomImg]})`;
}

imgEL.addEventListener("click", imgFun);

// flip
const flip = document.querySelector(".flip");
const frontTitle = document.querySelector(".title-front");
const backTitle = document.querySelector(".title-back")
const mainFront = document.querySelector(".main-front")
const mainInput = document.querySelector(".main-input")
function flipTitle(){
  frontTitle.classList.toggle("show");
  frontTitle.classList.toggle("none");
  backTitle.classList.toggle("show");
  main.classList.toggle("show");
  
  mainFront.classList.toggle("show");
  mainFront.classList.toggle("none");
  reset.classList.toggle("none");
  mainInput.classList.toggle("none");
}

flip.addEventListener("click", flipTitle)