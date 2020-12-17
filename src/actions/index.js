const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_ADDED = 'CAR_ADDED';
export const CAR_REMOVED = 'CAR_REMOVED';

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}:${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}/cars/:${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function addCar(garage, body) {
  const request = fetch(`${BASE_URL}:${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringfy(body)
  }).then(response => response.json());

  return {
    type: CAR_ADDED,
    payload: request
  };
}

export function removeCar(id) {
  const request = fetch(`${BASE_URL}/cars/:${id}`, {
    method: 'DELETE',
  }).then(response => response.json());

  return {
    type: CAR_REMOVED,
    payload: request
  };
}
