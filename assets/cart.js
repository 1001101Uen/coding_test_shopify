var cartContents = fetch('/cart.js')
  .then(response => response.json())
  .then(data => { return data });