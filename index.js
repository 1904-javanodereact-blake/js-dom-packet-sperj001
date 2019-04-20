// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA(){
    let usa = document.getElementsByTagName("*");
    for(let i = 1; i<usa.length; i++){
      if(usa[i].textContent == "USA"){
        console.log(usa[i]);
      }
    }
  }
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
    let myrows = document.getElementsByTagName("table")[0].getElementsByTagName("tr");
    for(let i = 1; i< myrows.length; i++){
      console.log(myrows[i].cells[0].textContent);
    }
  }
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let anchors = document.getElementsByTagName('a');
    for(let i = 0; i< anchors.length; i++){
    if(anchors[i].firstElementChild)
    if(anchors[i].firstElementChild.tagName = "SPAN")
    console.log(anchors[i]);
    }
}
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies(){
  let slct = document.getElementsByName("hobbies");
  for(let i = 0; i < slct[0].options.length; i++){
    if(slct[0].options[i].defaultSelected == true){
      console.log(slct[0].options[i].textContent);
    }
  }
}
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute(){
  let slct = document.querySelectorAll('[data-customAttr]');
  console.log(slct);
  slct.forEach(element =>{
    console.log(element.textContent + " is on " + element.tagName);
  })
}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sumEvent(){
  let nm1 = document.getElementById("num1").value;
  let nm2 = document.getElementById("num2").value;
  
  n1 = parseFloat(nm1);
  n2 = parseFloat(nm2);
  console.log("Nm1: " +nm1);
  console.log("Nm2: " +nm2);
  let setter = document.getElementById("sum");

  setter.textContent = n1 + n2;
  if(setter.textContent == "NaN"){
    setter.textContent = "Cannot Add";
  }
}
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function skillsEvent(){
  let question = document.getElementsByName("skills");
  window.alert(`Are you sure ${question[0].value} is one of your skills?`);
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function colorsEvent(){
  let question = document.getElementsByName("colors");
  let previousColor = document.getElementsByName("colors")[0].getAttribute(`style`);
  if(previousColor != null){
    let pColor = previousColor.split(":");
    let pastColor = pColor[1].replace(" ", "");
    let final = pastColor.replace(";", "");
    window.alert(`So you like ${question[0].value} more than ${final} now?`);
  }
  else{
    window.alert(`So you like ${question[0].value} now?`);
  }
  document.getElementsByName("colors")[0].setAttribute("style", `background-color: ${question[0].value};`);
}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function peekAboo(event){
  let caller = event.target;
  
  if(caller.classList.contains("empName")){
    if(caller.style.opacity != 1){
      caller.style.opacity = 1;
    }
    else{
      caller.style.opacity = 0;
    }
  }
}
// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function showTime(){
  let set = document.getElementById("currentTime");
  let date = new Date();
  let hours = date.getHours();
  let part = "AM"
  if(hours > 12){
    hours = hours-12;
    part = "PM";
  }
  let minutes = date.getMinutes();
  if(minutes < 10)minutes = `0${minutes}`;
  let seconds = date.getSeconds();
  if(seconds < 10)seconds = `0${seconds}`;
  let timeOnly = (`${hours}:${minutes}:${seconds} ${part}`);
  set.textContent = timeOnly;
  setTimeout(function(){
    showTime();
  }, 1000);
}
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function randomColor(event){
  let toApply = event.target;
  setTimeout(function(){
      let options = '0123456789ABCDEF';
      let color = '#';
      for( let i = 0; i < 6; i++){
        color += options[Math.floor(Math.random() * 16)];
      }
      toApply.style.color = color;
  }, 3000);
}
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func){
  func(node)
  node = node.firstChild;
  while(node){
    walkTheDOM(node, func);
    node = node.nextSibling;
  }
}
function readNode(node){
  console.log(node);
}
