
// document.querySelector("ELEMENT").addEventListener("EVENT",function(){
//      //YOUR CODE
//  })




// Problem 1
window.addEventListener("load", function(){
    console.log("Kelston")
})


// document.querySelector("#myButton").addEventListener("click", function(){
//     this.innerHTML = "<em>" + this.innerHTML + "</em>"
// })



// Problem 2
document.querySelector("h1").addEventListener("click", function(){
    this.remove()
})

figures = document.querySelectorAll("figure")
fifth = figures[4]

// Problem 3
document.querySelector("figure:nth-of-type(5)").addEventListener("dblclick", function(){
    console.log("Removing the 5th image")
    this.style.visibility = "hidden"
})

// Problem 4
// Part 1
document.querySelector("figure:nth-of-type(5) figcaption").addEventListener("dblclick", function(){
    console.log("Removing the 5th caption")
    this.style.visibility = "hidden"
})


// Problem 4
// Part 2
document.querySelector("#first").addEventListener("mouseover", function(){
    this.style.color = "blue";
    this.style.border = "5px solid red";
})

document.querySelector("#first").addEventListener("mouseout", function(){
    this.style.color = "black";
    this.style.border = "";
})



// Problem 5
document.querySelector("#first").addEventListener("focus", function(){
    this.style.color = "blue";
    this.style.border = "5px solid red";
})

document.querySelector("#first").addEventListener("blur", function(){
    this.style.color = "black";
    this.style.border = "";
})  

// Problem 6

document.querySelectorAll("figcaption")[1].addEventListener("focus", function(){
    this.style.fontFamily = "Cursive";
})

document.querySelectorAll("figcaption")[1].addEventListener("blur", function(){
    this.style.fontFamily = "Times";
})

// Problem 7
document.querySelector("button").addEventListener("click", function(){
    document.querySelector("figure").parentElement.classList.add("one-third");
    document.querySelector("figure").parentElement.style.backgroundImage = "url('images/Purple-Haze.jpg')";
})



// Problem 8
document.querySelectorAll("img").forEach(function(img){
    img.addEventListener("click", function(){
        console.log(this.src);
        this.classList.toggle("pizazz");
    })
})
// Problem 9 