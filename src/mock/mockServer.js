import  Mock  from "mockjs";
import products from "@/mock//Home/products.json"
import banner from "@/mock/Home/banner.json"

Mock.mock('/mock/products', {
    code: 200,
    data: products
  })

  Mock.mock('/mock/banner', {
    code: 200,
    data: banner,
    test: "test123"
  })