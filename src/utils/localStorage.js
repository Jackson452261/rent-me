export const setToken = (token) => {

    localStorage.setItem("My-Token", token)
}

export const getToken = () => {

     return  localStorage.getItem("My-Token" || "")
      
}

export const removeToken = () => {

     localStorage.removeItem("My-Token")
}
export const setRememberMe = (remember) => {

     localStorage.setItem("My-Remember", remember)
 }
 
 export const getRememberMe = () => {
 
     return  localStorage.getItem("My-Remember" || false)
       
 }
 
 export const removeRememberMe = () => {
 
      localStorage.removeItem("My-Remember")
 }


 export const setUsername = (username) => {

        localStorage.setItem("My-username", username)
 }
 
 export const getUsername = () => {
 
    return  localStorage.getItem("My-username" || "")
       
 }
 
 export const removeUsername = () => {
 
      localStorage.removeItem("My-username")
 }

 export const setProducts = (products) => {

     localStorage.setItem("products", JSON.stringify(products))
}

export const getProducts = () => {

 return  JSON.parse(localStorage.getItem("products")) || []
    
}

 