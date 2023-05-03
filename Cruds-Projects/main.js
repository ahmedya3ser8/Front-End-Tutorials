let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "create";
let tmp;

// get all inputs in price

let priceInputs = document.querySelectorAll(".price input");

priceInputs.forEach((input) => {
  input.addEventListener("keyup", getPrice);
});

// function get price

function getPrice() {
  if (price.value != "") {
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "#1f801f";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "#a00d02";
  }
};

// Save Data In Array And LocalStorage

let dataProduct;
if (localStorage.product != null) {
  dataProduct = JSON.parse(localStorage.product);
} else {
  dataProduct = [];
}

submit.onclick = function() {
  let newProduct = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  }
  if (mood === "create") {
    if (newProduct.count > 1) {
      for (let i = 0; i < newProduct.count; i++) {
        dataProduct.push(newProduct);
      }
    } else {
      dataProduct.push(newProduct);
    }
  } else {
    dataProduct[tmp] = newProduct;
    mood = "create";
    count.style.display = "block";
    submit.innerHTML = "create";
  }

  localStorage.setItem("product", JSON.stringify(dataProduct));
  ClearData();
  showData();
}

// Clear Data Function

function ClearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

// Show Data Function

function showData() {
  let table = "";
  for (let i = 0; i < dataProduct.length; i++) {
    table += `
      <tr>
        <td>${i + 1}</td>
        <td>${dataProduct[i].title}</td>
        <td>${dataProduct[i].price}</td>
        <td>${dataProduct[i].taxes}</td>
        <td>${dataProduct[i].ads}</td>
        <td>${dataProduct[i].discount}</td>
        <td>${dataProduct[i].total}</td>
        <td>${dataProduct[i].category}</td>
        <td><button id="update" onclick = "updateData(${i})">Update</button></td>
        <td><button id="delete" onclick = "deleteData(${i})">Delete</button></td>
      </tr>
    `
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDeleteAll = document.getElementById("delete-all");
  if (dataProduct.length > 0) {
    btnDeleteAll.innerHTML = `<button onclick = "deleteAll()">Delete All (${dataProduct.length})</button>`
  } else {
    btnDeleteAll.innerHTML = "";
  }
  getPrice();
}

showData();

// Delete Data Function

function deleteData(i) {
  dataProduct.splice(i, 1);
  localStorage.product = JSON.stringify(dataProduct);
  showData();
}

// Delete All Function

function deleteAll() {
  localStorage.clear();
  dataProduct.splice(0);
  showData();
}

// Update Data Function

function updateData(i) {
  title.value = dataProduct[i].title;
  price.value = dataProduct[i].price;
  taxes.value = dataProduct[i].taxes;
  ads.value = dataProduct[i].ads;
  discount.value = dataProduct[i].discount;
  getPrice();
  count.style.display = "none";
  category.value = dataProduct[i].category;
  submit.innerHTML = "Update";
  mood = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth"
  })
}

// Search Mood Function

let searchMood = "title";

function getSearchMood(id) {
  let search = document.getElementById("search");
  if (id == "search-title") {
    searchMood = "title";
    search.placeholder = "Search By Title";
  } else {
    searchMood = "category";
    search.placeholder = "Search By Category";
  }
  search.focus();
  search.value = "";
  showData();
}

// Search Data Function

function searchData(value) {
  let table = "";
  for (let i = 0; i < dataProduct.length; i++) {
    if (searchMood == "title") {
      if (dataProduct[i].title.includes(value.toLowerCase())) {
        table += `
        <tr>
          <td>${i + 1}</td>
          <td>${dataProduct[i].title}</td>
          <td>${dataProduct[i].price}</td>
          <td>${dataProduct[i].taxes}</td>
          <td>${dataProduct[i].ads}</td>
          <td>${dataProduct[i].discount}</td>
          <td>${dataProduct[i].total}</td>
          <td>${dataProduct[i].category}</td>
          <td><button id="update" onclick = "updateData(${i})">Update</button></td>
          <td><button id="delete" onclick = "deleteData(${i})">Delete</button></td>
        </tr>
      `
      }
    } else {
      if (dataProduct[i].category.includes(value.toLowerCase())) {
        table += `
        <tr>
          <td>${i + 1}</td>
          <td>${dataProduct[i].title}</td>
          <td>${dataProduct[i].price}</td>
          <td>${dataProduct[i].taxes}</td>
          <td>${dataProduct[i].ads}</td>
          <td>${dataProduct[i].discount}</td>
          <td>${dataProduct[i].total}</td>
          <td>${dataProduct[i].category}</td>
          <td><button id="update" onclick = "updateData(${i})">Update</button></td>
          <td><button id="delete" onclick = "deleteData(${i})">Delete</button></td>
        </tr>
      `
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}