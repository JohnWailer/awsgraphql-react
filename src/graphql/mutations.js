/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
    createdAt
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    body
    createdAt
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    body
    createdAt
  }
}
`;
export const createUberService = `mutation CreateUberService($input: CreateUberServiceInput!) {
  createUberService(input: $input) {
    id
    url
    name_driver
    car_model
    start_city
    latitude
    longitude
    currency_code
    rate
  }
}
`;
export const updateUberService = `mutation UpdateUberService($input: UpdateUberServiceInput!) {
  updateUberService(input: $input) {
    id
    url
    name_driver
    car_model
    start_city
    latitude
    longitude
    currency_code
    rate
  }
}
`;
export const deleteUberService = `mutation DeleteUberService($input: DeleteUberServiceInput!) {
  deleteUberService(input: $input) {
    id
    url
    name_driver
    car_model
    start_city
    latitude
    longitude
    currency_code
    rate
  }
}
`;
