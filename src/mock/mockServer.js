import  Mock  from "mockjs";
import products from "./Home/products.json"
import banner from "./Home/banner.json"


Mock.mock('/mock/products', {
    code: 200,
    data: products
  })

  Mock.mock('/mock/banner', {
    code: 200,
    data: banner,
    test: "test123"
  })