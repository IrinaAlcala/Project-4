import tokenService from './tokenService';

const BASE_URL = '/api/products/';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(Product) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(Product)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function deleteOne(productId) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  };
  return fetch(`${BASE_URL}/${productId}`, options).then(res => res.json());
}

export function update(Product) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(Product)
  };
  return fetch(`${BASE_URL}/${Product._id}`, options).then(res => res.json());
}