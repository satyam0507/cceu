// console.log('page included');
var item1=document.getElementById("workarea");
var item= document.getElementsByClassName("box");
//  var itemHeading= document.getElementById("heading");
var button_copy=document.getElementById("copy");
eventadder();
 
//  item.addEventListener("blur",hide,false);

function show(ev)
{   ev.preventDefault();
    item1.setAttribute("style","display:block;");
}
function hide(ev)
{
    ev.preventDefault();
    item1.setAttribute("style","display:none;")
}

function generate_html() {
    var newDiv = document.createElement("div");
    var copyElem = item[0].cloneNode(true);
    newDiv.appendChild(copyElem);
    var currentDiv = document.getElementById("display"); 
    document.body.insertBefore(newDiv, currentDiv);
    eventadder();
}

function eventadder() {
    
            for (var i = 0; i < item.length; i++) {
            item[i].addEventListener("contextmenu",show,false);
            item[i].addEventListener("click",hide,false);
            }
    
}

button_copy.addEventListener("click",generate_html,false);