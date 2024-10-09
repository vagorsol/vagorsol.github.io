/**
 * code from w3schools (https://www.w3schools.com/howto/howto_js_filter_elements.asp)
 * because what even is a javascript
 */

filterSelection('all')

function filterSelection(cn) {
    var x, i;
    x = document.getElementsByClassName("filter-elem");
    if (cn == "all") cn = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(cn) > -1) addClass(x[i], "show");
    }
  }
  
  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("filters");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }