var counter1 = 0;
var counter2 = 0;
var catname1 = document.getElementById("cat-name1").innerHTML='Mary';
var catname2 = document.getElementById("cat-name2").innerHTML='Joe';

var elem = document.getElementById("cat-picture1");
elem.addEventListener('click', function(){
  counter1++;
  var count = document.getElementById("click-count1");
  count.innerHTML=counter1;
}, false);

var elem2 = document.getElementById("cat-picture2");
elem2.addEventListener('click', function(){
  counter2++;
  var count2 = document.getElementById("click-count2");
  count2.innerHTML=counter2;
}, false);
