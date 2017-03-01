var cartContents = [];

//create an array for food prices, then have the function push the price into the array.
var cartTotals = [];

function addMusubi() {
    localStorage.setItem("musubi", "Triangle Musubi ");
    document.getElementById('musubi').innerHTML = "Ordered";
    document.getElementById("musubi").style.background = "rgb(255, 0, 102)";
    document.getElementById("musubi").style.fontSize = "30";
    cartTotals.push(8.95);
    addTotal();
}

function addSoybeans() {
    localStorage.setItem("soy", "Edamame ");
    document.getElementById('edamame').innerHTML = "Ordered";
    document.getElementById("edamame").style.background = "rgb(255, 0, 102)";
    document.getElementById("edamame").style.fontSize = "30";
    cartTotals.push(4.95);
    addTotal();
}

function addSpicyAhi() {
    localStorage.setItem("spicyAhi", "Spicy Ahi");
    document.getElementById('spicyahi').innerHTML = "Ordered";
    document.getElementById("spicyahi").style.background = "rgb(255, 0, 102)";
    document.getElementById("spicyahi").style.fontSize = "30";
    cartTotals.push(12.95);
    addTotal();
}

function addKatsu() {
    localStorage.setItem("katsuSlider", "Katsu Slider");
    document.getElementById('katsu').innerHTML = "Ordered";
    document.getElementById("katsu").style.background = "rgb(255, 0, 102)";
    document.getElementById("katsu").style.fontSize = "30";
    cartTotals.push(9.95);
    addTotal();
}

function addOxtail() {
    localStorage.setItem("oxtail", "Oxtail soup");
    document.getElementById('oxtail').innerHTML = "Ordered";
    document.getElementById("oxtail").style.background = "rgb(255, 0, 102)";
    document.getElementById("oxtail").style.fontSize = "30";
    cartTotals.push(14.95);
    addTotal();
}

function showAll() {
    for (var i = 0; i < localStorage.length; i++) {
        cartContents.push(localStorage.getItem(localStorage.key(i)));
        document.getElementById('storageArea').innerHTML = "Open Orders:  " + cartContents;
    }
}

/*

Once again, I will load all items into the cartContents array.
We do this because the original cartContents array will unload
everytime an HTML page is loaded. Therefore, we to repopulate
the cartContents array everytime it is called.

*/
function displayCheckout() {
    window.onload = function() {
        for (var i = 0; i < localStorage.length; i++) {
            cartContents.push(localStorage.getItem(localStorage.key(i)));
        }
        //Inside the loop, pull all the cart contents and output to the DOM
        var cLength = cartContents.length;
        var text = "<ul>";
        for (i = 0; i < cLength; i++) {
            text += "<li>" + cartContents[i] + "</li>";
        }
        text += "</ul>";
        document.getElementById("outputList").innerHTML = text;
    }
}

//Add all items from cartTotals//

function addTotal() {
    var total = 0;
    for (var i = 0; i < cartTotals.length; i++) {
        total += cartTotals[i];
    }
    document.getElementById('subTotal').innerHTML = "Sub total:  " + total.toFixed(2) + "<br>";
    document.getElementById('grandTotal').innerHTML = "4.712% tax:  " + ((total * 1.04712).toFixed(2));
}
