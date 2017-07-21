let posts =[
  {
    postId:'1',
    likes:1,
    title:"git 1",
  },
  {
    postId:'2',
    likes:2,
    title:"git 2",
  }
]


export default function postReducer(state = posts, action) {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      let stateCopy = state.slice()
      stateCopy.map(item => {
        if(item.postId === action.postId){
          item.likes++
          return item
        }
        return item
      })
      return stateCopy
    default:
      return state
  }
}
