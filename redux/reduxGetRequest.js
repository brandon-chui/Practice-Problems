export const fetchUsers = () => {
    return (dispatch) => {
        // dispatch(some action)
        axios.get('someurl')
            .then(response => {
                dispatch(someAction())
            })
            .catch(error => {
                console.log(error.message)
            }) 
    }
}

