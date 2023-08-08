export function createOrder(order) {
  return new Promise(async(resolve) =>{
   const respone = await fetch('http://localhost:8080/orders',{
    method:'POST',
    body: JSON.stringify(order),
    headers:{'content-type':'application/json'}
   })
   const data = await respone.json()
  //  TODO: on server it will only return some info of user(not password)
   resolve ({data})
  }
  );
}