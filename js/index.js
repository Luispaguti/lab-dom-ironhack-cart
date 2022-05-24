
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText)

  const quantity = parseInt(product.querySelector('.quantity input').value)

  const subtotal = (price * quantity)

  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);

  return subtotal
  //... your code goes here
}

function calculateAll() {
  const products = Array.from(document.querySelectorAll('.product'));

  // for(let singleProduct of products) {
  //   updateSubtotal(singleProduct)
  // };

  const total = products.reduce((subtotal,  product) => {

    return total + updateSubtotal(product);


  }, 0)

  document.querySelector('#total-value span').innerText = total.toFixed(2)
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 



  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelector('btn btn-remove');
  removeBtn.addEventListener('click',(event) => removeProduct(event) )

});


