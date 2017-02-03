var model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: 'Squishy',
      imgSrc: 'img/persian-cat3.jpg'
    },
    {
      clickCount: 0,
      name: 'Pudgy',
      imgSrc: 'img/persian-cats-and-kittens-10.jpg'
    },
    {
      clickCount: 0,
      name: 'Fluffy',
      imgSrc: 'img/persian1.jpg'
    },
    {
      clickCount: 0,
      name: 'Wide-Eyed',
      imgSrc: 'img/persian22.jpg'
    },
    {
      clickCount: 0,
      name: 'Beauty',
      imgSrc: 'img/persian5.jpg'
    }
  ]
};

var octopus = {

  init: function() {
    model.currentCat=model.cats[0];
    catListView.init();
    catView.init();
    adminView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  },

  updateCatName: function(newName) {
    model.currentCat.name = newName;
    catView.render();
    catListView.catListElem.innerHTML = '';
    catListView.render();
  },

  updateCounter: function(newValue) {
    model.currentCat.clickCount = newValue;
    catView.render();
  },

  updateImgSrc: function(newImgSrc) {
    model.currentCat.imgSrc = newImgSrc;
    catView.render();
  }
};

var adminView = {
   init: function() {
     this.adminButton = document.getElementById('adminButton');
     this.adminButton.addEventListener('click', function() {
       adminView.render();
     });

   },
   render: function() {
     document.getElementById('adminForm').classList.remove('hideForm');
     this.cancelButton = document.getElementById('cancelButton');
     this.cancelButton.addEventListener('click', function(e) {
       e.preventDefault();
       document.getElementById('adminForm').classList.add('hideForm');
     });
     document.getElementById('adminForm').addEventListener('submit', function(e) {
       e.preventDefault();
     if (e.target.adminCatName !== '') {
       octopus.updateCatName(e.target.adminCatName.value);
      //  e.target.adminCatName.value = '';
     }
     if (e.target.adminUrl.value !== '') {
       octopus.updateImgSrc(e.target.adminUrl.value);
       e.target.adminUrl.value = '';
     }
     if (e.target.adminCounter.value !== '') {
       octopus.updateCounter(e.target.adminCounter.value);
       e.target.adminCounter.value = '';
     }
     document.getElementById('adminForm').classList.add('hideForm');
     })
    }
   };


//how to setup the input fields to have them render if there is input in
//either of the fields...how to make it set on cat...a second render function?
//and an if/else statement to pick between the two? That won't work becuse it
//needs to update and stay that way as it goes to a different cat...so set up a
//whole new thing? how to do it?!
// Pushes adminButton
// adminForm becomes unhidden
// Enter information into 1,2, or 3 of the fields
// Press Save --> data changes name/url/counter on currently selected cat
// Press Cancel --> disregards changes and hides adminForm


var catView = {

  init: function() {
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
    document.getElementById('adminForm').classList.add('hideForm');
  }
};

var catListView = {

  init: function() {
    this.catListElem = document.getElementById('cat-list');

    this.render();
  },

  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();

    this.catListElem.innerHtml = '';

    for (var i = 0; i < cats.length; i++) {
      cat = cats[i];
      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();

// var counter1 = 0;
// var counter2 = 0;
// var catname1 = document.getElementById("cat-name1").innerHTML='Mary';
// var catname2 = document.getElementById("cat-name2").innerHTML='Joe';
//
// var elem = document.getElementById("cat-picture1");
// elem.addEventListener('click', function(){
//   counter1++;
//   var count = document.getElementById("click-count1");
//   count.innerHTML=counter1;
// }, false);
//
// var elem2 = document.getElementById("cat-picture2");
// elem2.addEventListener('click', function(){
//   counter2++;
//   var count2 = document.getElementById("click-count2");
//   count2.innerHTML=counter2;
// }, false);
// document.body.innerHTML='';
//
// var names = ["Squishy", "Pudgy", "Fluffy", "Wide-Eyed", "Beauty"];
//
// for (var i = 0; i < names.length; i++) {
//   var name = names[i];
//   var elem = document.createElement('li');
//   elem.textContent = name;
//   document.body.appendChild(elem);
//
//   elem.addEventListener('click', function(){
//     var showName = document.createElement('h1');
//     showName.textContent = name;
//     document.body.appendChild(showName);
//     var showImage = document.createElement('img');
//
//     var showCounter = document.createElement('h2');
//
//     console.log(showName);
//   })
// }

// elem.addEventListener('click', function(){
//   var showName = document.createElement('h1');
//   showName.textContent = name;
//   document.body.appendChild(showName);
// })
