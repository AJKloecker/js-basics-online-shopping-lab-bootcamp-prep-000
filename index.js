var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(Object.assign({},{[item]: Math.floor(Math.random() * 99 + 1)}))
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var size = cart.length
  var ans  = ""
  var i    = 0
  var temp = 0

  if(size == 0){
    ans = "Your shopping cart is empty."
    return ans
  }else{
    ans = "In your cart, you have "
    for(i; i < size; ++i){
      if(i == size - 1){
        temp = cart[i][Object.keys(cart[i])[0]]
        ans = ans + ` ${Object.keys(cart[i])[0]} at ${temp}.`
      }else{
        ans = ans + ` ${Object.keys(cart[i])[0]} at ${temp}`
      }
    }
  }
  return ans
}

function total() {
  // write your code here
  var ans = 0
  var i   = 0
  var temp= new Object();

  for(i; i < cart.length; ++i){
    temp = cart[i]
    ans += temp[Object.keys(temp)[0]]
  }
  console.log(ans)
  return ans
}

function removeFromCart(item) {
  // write your code here
  var index = 0
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      items.push(item + " at $" + cart[i][item])
    }
}
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  var temp = total()
  if(typeof cardNumber !== 'undefined'){
    console.log(`Your total cost is $${temp}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
