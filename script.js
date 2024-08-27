fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then( dt=>{
  const data = dt.products;
  let rows = "";
  data.forEach(product => {
    rows += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.description}</td><td>${product.category}</td><td>${product.price}</td><td>${product.discountPercentage}</td><td>${product.rating}</td><td>${product.stock}</td><td>${product.brand}</td><td><img src="${product.thumbnail}" title= "${product.thumbnail}" alt= "${product.thumbnail}" style= "width: 20%"</td></tr>`
  })
  console.log(rows);
  document.getElementById("tableRows").innerHTML = rows;
})
.catch((error) => console.log(error));