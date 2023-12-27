var quantityInput = document.getElementById('quantityInput');
var itemsList = document.querySelector(".itemsList");
let cartData = JSON.parse(localStorage.getItem('data')) || [];
var shippingContainer = document.querySelector(".shippingContainer");
var option = 0.00;
var bookTotal = document.querySelector("#bookTotal");
var totalCost = document.querySelector("#sum");
var Shipping = document.querySelector('.shipping');
var deliveryCharge = document.getElementById('deliveryCharge');

const addItem = (arrayName, idx, quantity, objIdx) => {
    // Create a div element
    const cartItem = document.createElement('div');
    cartItem.setAttribute('data-idx', `${objIdx}`);

    cartItem.className = 'cartItem';
    const array = window[arrayName];
    // Generate a unique ID for the quantity input field
    const quantityInputId = `quantityInput_${objIdx}`;
    // Set inner HTML for the cart item
    cartItem.innerHTML = `
      <span class="cartBook">
        <div class="img-block">
          <img src="${array[idx].pic}" alt="">
        </div>
        <div>
          <h3 class="dark-gray">${array[idx].name}</h3>
        </div>
      </span>
      <span class="flex bookPrice">
        <h3 class="dark-gray">$${array[idx].price}</h3>
      </span>
      <span class="flex Quantity">
        <span class="quantity">
          <input class="decrement dark-gray" type="button" value="-" onclick="decrementQuantity(${objIdx})">
          <input type="text" name="quantity" value="${quantity}" maxlength="2" size="1" class="number" id="${quantityInputId}">
          <input class="increment dark-gray" type="button" value="+" onclick="incrementQuantity(${objIdx})">
        </span>
      </span>
      <span class="flex Total">
        <h3 class="total" id="total_${objIdx}">$${array[idx].price * quantity}</h3>
      </span>
      <span class="flex close">
      <i class='bx bx-x' onclick="removeCartItem(${objIdx})"></i>
      </span>
    `;

    // Append the created cart item to your container
    itemsList.appendChild(cartItem);

};

cartData.forEach((obj, objIdx) => {
    addItem(obj.product_Arr, obj.product_id, obj.quantity, objIdx);
});

const incrementQuantity = (objIdx) => {
    cartData[objIdx].quantity++;
    updateCart(cartData);
    updateDisplay(objIdx);
};

const decrementQuantity = (objIdx) => {
    if (cartData[objIdx].quantity > 1) {
        cartData[objIdx].quantity--;
        updateCart(cartData);
        updateDisplay(objIdx);
    }
};

const updateDisplay = (objIdx) => {
    const quantityInput = document.getElementById(`quantityInput_${objIdx}`);
    const total = document.getElementById(`total_${objIdx}`);
    const array = window[cartData[objIdx].product_Arr];
    const idx = cartData[objIdx].product_id;
    const newQuantity = cartData[objIdx].quantity;

    // Update the quantity input value
    if (quantityInput) {
        quantityInput.value = newQuantity;
    }

    // Update the total price
    if (total) {
        total.textContent = `$${array[idx].price * newQuantity}`;
    }
};

if(cartData.length == 0){
    itemsList.innerHTML = "Cart is empty, add some books";
}

function removeCartItem(objIdx) {
    const cartItemToRemove = itemsList.children[objIdx];
    
    if (cartItemToRemove) {
        itemsList.removeChild(cartItemToRemove);
        cartData.splice(objIdx, 1);
        updateCart(cartData);
    }
    if(cartData.length == 0){
        itemsList.innerHTML = "Cart is empty, add some books";
    }
}

function updateCart(newCart) {
    cartData = newCart;
    localStorage.setItem('data', JSON.stringify(cartData));
    totalMoney();
}

// <-------------Shipping-----------------> //

function displaySelectedValue() {
  var selectedValue = document.querySelector('input[name="deliveryMode"]:checked').value;
  deliveryCharge.innerText ="$" + selectedValue;
  option = parseFloat(selectedValue);
  totalMoney();
} 

const totalMoney = ()=>{
  let subtotal=0;
  cartData.forEach((obj)=>{
    let arr = window[obj.product_Arr];
    let arrId = obj.product_id;
    let qty = obj.quantity;
    subtotal += arr[arrId].price*qty;
  })

  bookTotal.innerText = '$' + subtotal;

  let grandtotal = option + subtotal;
  totalCost.innerText = '$' + grandtotal;

  if(cartData.length <= 0){
    Shipping.style.display = "none";
  }
}

totalMoney();

