/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    body
    createdAt
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      body
      createdAt
    }
    nextToken
  }
}
`;
export const getUberService = `query GetUberService($id: ID!) {
  getUberService(id: $id) {
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
export const listUberServices = `query ListUberServices(
  $filter: ModelUberServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listUberServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
