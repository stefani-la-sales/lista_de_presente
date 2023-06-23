const firebaseConfig = {
  apiKey: "AIzaSyCDGx_69jlGzyhMOUB0ypnBTqYN9FwHFDM",
  databaseURL: "https://lista-de-presente-default-rtdb.firebaseio.com/",
  authDomain: "items-de-presente.firebaseapp.com",
  projectId: "items-de-presente",
  storageBucket: "items-de-presente.appspot.com",
  messagingSenderId: "80295140724",
  appId: "1:80295140724:web:96506ace4537f8338ca021"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// let items = [
//   { name: 'Boleira', price: 120, id: 1, active: true, img: './images/1.jpg' },
//   { name: 'Pisos 1 unidade', price: 30, id: 2, active: true, img: './images/2.jpg' },
//   { name: 'Garrafa de café', price: 160, id: 3, active: true, img: './images/3.jpg' },
//   { name: 'Garrafa de café', price: 152, id: 4, active: true, img: './images/4.jpg' },
//   { name: 'Kit talheres 24 peças', price: 140, id: 5, active: true, img: './images/5.jpg' },
//   { name: 'Kit Jarra e taça (1)', price: 200, id: 6, active: true, img: './images/6.jpg' },
//   { name: 'Kit Taças 6 unidades (1)', price: '', id: 29, active: true, img: './images/29.jpg' },
//   { name: 'Jarra (1)', price: '', id: 30, active: true, img: './images/6.jpg' },
//   { name: 'Kit Jarra e taça (2)', price: 150, id: 7, active: true, img: './images/7.jpg' },
//   { name: 'Aparelho de jantar (1)', price: 420, id: 8, active: true, img: './images/8.jpg' },
//   { name: 'Aparelho de jantar (2)', price: 380, id: 9, active: true, img: './images/9.jpg' },
//   { name: 'Aparelho de jantar 20 peças', price: 380, id: 10, active: true, img: './images/10.jpg' },
//   { name: 'Tapete (1)', price: 70, id: 11, active: true, img: './images/11.jpg' },
//   { name: 'Tapete (2)', price: 70, id: 12, active: true, img: './images/12.jpg' },
//   { name: 'Tapete (3)', price: 50, id: 13, active: true, img: './images/13.jpg' },
//   { name: 'Tapete (4)', price: 50, id: 14, active: true, img: './images/14.jpg' },
//   { name: 'Tapete (5)', price: 170, id: 15, active: true, img: './images/15.jpg' },
//   { name: 'Tapete (6)', price: 170, id: 16, active: true, img: './images/16.jpg' },
//   { name: 'Roupão 1 unidade', price: 230, id: 17, active: true, img: './images/17.jpg' },
//   { name: 'Kit talheres 18 peças', price: 110, id: 18, active: true, img: './images/18.jpg' },
//   { name: 'Kit(1) xícara e pires 6 unidades', price: 90, id: 19, active: true, img: './images/19.jpg' },
//   { name: 'Kit(2) xícara e pires 6 unidades', price: 80, id: 20, active: true, img: './images/20.jpg' },
//   { name: 'Kit panelas', price: 260, id: 21, active: true, img: './images/21.jpg' },
//   { name: 'Kit para banheiro', price: 110, id: 22, active: true, img: './images/22.jpg' },
//   { name: 'Kit taças(3) 6 unidades', price: 160, id: 23, active: true, img: './images/23.jpg' },
//   { name: 'Kit copos 6 unidades', price: 60, id: 24, active: true, img: './images/24.jpg' },
//   { name: 'Porta travesseiros 2 unidades', price: 76, id: 25, active: true, img: './images/25.jpg' },
//   { name: 'Lençol elástico', price: 170, id: 26, active: true, img: './images/26.jpg' },
//   { name: 'Manta 1 unidade', price: 80, id: 27, active: true, img: './images/27.jpg' },
//   { name: 'Kit toalha', price: 120, id: 28, active: true, img: './images/28.jpg' },
//   { name: 'Manta para sofá', price: 150, id: 29, active: true, img: './images/30.jpg' },
//   { name: 'Almofadas(1) com enchimento 1 unidade', price: 50, id: 30, active: true, img: './images/33.jpg' },
//   { name: 'Almofadas(1) sem enchimento 1 unidade', price: 30, id: 31, active: true, img: './images/33.jpg' },
//   { name: 'Almofadas(2) com enchimento 1 unidade', price: 50, id: 32, active: true, img: './images/31.jpg' },
//   { name: 'Almofadas(2) sem enchimento 1 unidade', price: 30, id: 33, active: true, img: './images/31.jpg' },
//   { name: 'Almofadas(3) com enchimento 1 unidade', price: 50, id: 34, active: true, img: './images/32.jpg' },
//   { name: 'Almofadas(3) sem enchimento 1 unidade', price: 30, id: 35, active: true, img: './images/32.jpg' },
//   { name: 'Jogo americano(1) 4 unidades', price: 60, id: 36, active: true, img: './images/34.jpg' },
//   { name: 'Jogo americano(2) 4 unidades', price: 84, id: 37, active: true, img: './images/35.jpg' },
//   { name: 'Suplar 4 unidades', price: 80, id: 38, active: true, img: './images/36.jpg' },

// ];

items = [];


function onInit() {
  getItems();
  // newItem();
}

function fillCard(price, title, card, imgCard, item) {
  title.textContent = item.name;
  price.textContent = item.price;
  imgCard.src = item.img;

  toggleActive(price, title, card, item);
}

function toggleActive(price, title, card, item) {
  if (item.active) {
    card.classList.remove('disabled');
    title.textContent = item.name;
    price.textContent = "R$" + item.price + ",00";
  } else {
    card.classList.add('disabled');
    title.textContent = "INDISPONÍVEL";
    price.textContent = "-";
  }
}

function initialize() {
  let numberOfList = items.length;
  
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('admin');
  const isAdmin = param == 'AnaClaudia';

  let container = document.getElementById('container');

  for (let i = 0; i < numberOfList; ++i) {
    let $col = document.createElement('div');
    $col.classList.add('col');

    let $card = document.createElement('div');
    $card.classList.add('card');

    let $imgCard = document.createElement('img');
    $imgCard.classList.add('card-img-top');

    let $cardBody = document.createElement('div');
    $cardBody.classList.add('card-body');

    let $title = document.createElement('h5');
    $title.classList.add('card-title');

    let $price = document.createElement('small');
    $price.classList.add('text-body-secondary');

    container.appendChild($col);

    $col.appendChild($card);
    $card.appendChild($imgCard)
    $card.appendChild($cardBody);
    $cardBody.appendChild($title);
    $cardBody.appendChild($price);

    fillCard($price, $title, $card, $imgCard, items[i]);

    if (isAdmin) {
      let $btnVendido = document.createElement('button');
      $card.appendChild($btnVendido);
      $btnVendido.classList.add('btn')
      $btnVendido.textContent = "MUDAR STATUS";
      $btnVendido.addEventListener('click', () => {
        items[i].active = !items[i].active;
        fillCard($price, $title, $card, $imgCard, items[i]);
        updateItem(items[i]);
      })
    }
  }
}

function updateItem(item) {
  var itemRef = database.ref("items/" + item.id);
  itemRef.set(item);
}

function newItem() {
  let numberOfList = items.length;

  for (let i=0; i < numberOfList; i++) {
    var itemRef = database.ref("items/" + items[i].id);
    itemRef.set(items[i]);
  }
}

function getItems() {
  var itemRef = database.ref("items");
  itemRef.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      items.push(childSnapshot.val());
    });
    items = items.sort(function(a,b) {
      return a.price < b.price ? -1 : a.price < b.price ? 1 : 0;
    });
    initialize();
  });
}