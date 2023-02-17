import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addReviewToPage(review) {
console.log(review)
  return sendRequest(`${BASE_URL}`,'POST', {review});
}

export function newReview() {
    return sendRequest(`${BASE_URL}/new`)
}

export function createReview(review) {
    return sendRequest(`${BASE_URL}/create`, 'POST', {review});
}

export function deleteReview(reviewId) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'DELETE')
}

export function updateReview(reviewId) {
    return sendRequest(`${BASE_URL}/`, 'PUT', { reviewId });
  }

export function editReview(reviewId) {
    return sendRequest(`${BASE_URL}/${reviewId}/edit`, { reviewId } )
}