export function posts(posts = [], action) {
  switch (action.type) {
    case 'FETCH_ALL':
      console.log(action)
      return action.payload
    case 'CREATE':
      return [...posts, action.payload]

    default:
      return posts
  }
}