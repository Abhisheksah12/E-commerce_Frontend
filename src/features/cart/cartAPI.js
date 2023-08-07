export function addToCart(item) {
  return new Promise(async(resolve) =>{
   const respone = await fetch('http://localhost:8080/cart',{
    method:'POST',
    body: JSON.stringify(item),
    headers:{'content-type':'application/json'}
   })
   const data = await respone.json()
  //  TODO: on server it will only return some info of user(not password)
   resolve ({data})
  }
  );
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // todo: we will not hard code server url here
    const respone = await fetch("http://localhost:8080/cart?user="+userId);
    const data = await respone.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
export function deletItemsFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart/'+itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data:{id:itemId} });
  });
}