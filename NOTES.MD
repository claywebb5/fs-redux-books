## ============ASYNC REDUX============================

  =======***HOW TO MAKE THE ASYNC REQUEST***=======
 axios.get('/stuff').then((response) => {
 # Then when the response comes back, we update redux
    dispatch({
      type: 'SET_STUFF',
      payload: response.data 
    })
 })


## WHEN TO PROP
- When you are mapping out child components

