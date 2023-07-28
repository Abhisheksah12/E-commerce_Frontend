export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch("http://localhost:8080/products");
    const data = await respone.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  //filter ={"category":["smartphone","laptop"]}
  //sort={_sort:"price",_order="desc"}
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
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await respone.json();
    resolve({ data });
  });
}
