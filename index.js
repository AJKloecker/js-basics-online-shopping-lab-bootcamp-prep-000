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
  var items = []
  var i = 0

  if(size == 0){
    console.log("Your shopping cart is empty")
  }else{
    for(i; i < size; ++i){
      for(var item in cart[i]){
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
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
  var i = 0
  var size = cart.length
  for(i = 0; i < size; ++i){
    if (cart[i].hasOwnProperty(item)){
      return cart.splice(i,1)
    }
  }
  return.log("That item is not in your cart.")
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
