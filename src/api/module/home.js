import server from "../server"
export const homeApi = {
    getProducts: async () => {
        const  { data }  = await server.get("/products")
        return data
    },

    getBanner: async () => {
        const  { data }  = await server.get("/banner")
        return data
    }
}