import tokenService from './tokenService';

const BASE_URL = '/api/wishlist/';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(wishlistProd) {
  console.log('wishlist api')
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(wishlistProd)
  };
  return fetch(BASE_URL, options).then(res => res.json());  
}

export function deleteOne(wishlistProdId) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  };
  return fetch(`${BASE_URL}/${wishlistProdId}`, options).then(res => res.json());
}

export function update(wishlistProd) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(wishlistProd)
  };
  return fetch(`${BASE_URL}/${wishlistProd._id}`, options).then(res => res.json());
}