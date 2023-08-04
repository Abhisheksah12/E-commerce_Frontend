export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch("http://localhost:8080/products");
    const data = await respone.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort,pagination) {
  //filter ={"category":["smartphone","laptop"]}
  //sort={_sort:"price",_order="desc"}
  //pagination={_page:1,_limit:10}
  //TODO : on server we will support multiple values
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await respone.json();
    const totalItems = await respone.headers.get('X-Total-count')
    resolve({ data:{products:data,totalItems:+totalItems} });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch("http://localhost:8080/categories");
    const data = await respone.json();
    resolve({ data });
  });
}


export function fetchBrands() {
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch("http://localhost:8080/brands");
    const data = await respone.json();
    resolve({ data });
  });
}
