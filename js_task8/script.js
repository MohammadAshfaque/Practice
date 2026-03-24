var input  = document.querySelector("input");

var data = [
    {name: "poppin" , src: "https://i.pinimg.com/736x/de/ef/bc/deefbcd5874ada354ad22c600d1a032b.jpg"},
    {name: "mocky" , src: "https://i.pinimg.com/736x/09/0b/bc/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg"},
    {name: "dunny" , src: "https://i.pinimg.com/736x/c2/f0/83/c2f08354474ccc7ba3cfabc07d8feb49.jpg"},
    {name: "goldy" , src:  "https://i.pinimg.com/736x/25/71/8e/25718eb490b2eb301a2854c5dc74e75b.jpg"},

]

var pers= "";
data.forEach(function (elem) {
    pers += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
})
document.querySelector(".people").innerHTML = pers;
input.addEventListener("input" , function(){
    var matching  = data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    var newusers = "";
    matching.forEach(function (elem) {
    newusers += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
})
document.querySelector(".people").innerHTML = newusers;
} )