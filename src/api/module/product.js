import server from '../server'

export const productApi = {
     getProducts: async () => {

        const data = await server.get('/products')
        console.log(data)
     },

     getCategories: async () => {
         const  data = await server.get('/products/categories')
         console.log(data)

     }
}