export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    // todo: we will not hard code server url here
   const respone = await fetch('http://localhost:8080/products')
   const data = await respone.json()
   resolve ({data})
  }
  );
}

export function fetchProductsByFilters(filter) {

let queryString ="";
  for(let key in filter){
      queryString+=`${key}=${filter[key]}&`
  }
  return new Promise(async(resolve) =>{
    // todo: we will not hard code server url here
   const respone = await fetch('http://localhost:8080/products?'+queryString)
   const data = await respone.json()
   resolve ({data})
  }
  );
}
