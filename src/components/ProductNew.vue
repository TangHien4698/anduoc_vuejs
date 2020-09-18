<template>
  <div>
    <div class="new-product">
      <div class="title-new-product">
        <p></p>
        <p></p>
        <h1>SẢN PHẨM MỚI</h1>
      </div>
      <div class="slick-product">
        <div class="detail-product" v-for="(product_new,index) in product_news" :key="index">
          <DetailProduct :product_new="product_new"></DetailProduct>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailProduct from "@/components/DetailProduct";
import {axios} from "@/plugins/axios";
export default {
  name: "ProductNew",
  data()
  {
    return {
      product_news:[],
      error:[]
    }
  },
  created() {
    axios.get(`http://localhost:8081/api/v1/product/new`)
        .then(response => {
          this.product_news = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  components: {
    DetailProduct
  }
}
</script>