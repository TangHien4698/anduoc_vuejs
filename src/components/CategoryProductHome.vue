<template>
  <div>
    <div class="category-1" v-for="(category_product_home,index) in category_product_homes" :key="index">
      <div class="row">
        <div class="col-sm-6 col-list-banner">
          <div class="row">
            <div class="col-sm-4">
              <CategoryChild :category_product_home="category_product_home"></CategoryChild>
            </div>
            <div class="col-sm-8">
              <BannerCategoryProduct></BannerCategoryProduct>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-list-product">
          <div class="row row-product">
            <div class="product-line" id="product-line">
              <div class="col-sm-4 element-product" v-for="(product_category_home,index) in category_product_home.list_product" :key="index">
                <DetailProduct :product_new="product_category_home"></DetailProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerCategoryProduct from "./BannerCategoryProduct";
import CategoryChild from "@/components/CategoryChild";
import DetailProduct from "./DetailProduct.vue"
import {axios} from "@/plugins/axios";
export default {
  name: "DetailProduct-View",
  data()
  {
    return {
      category_product_homes:[],
      error:[]
    }
  },
  created() {
    axios.get(`http://localhost:8081/api/v1/product/category`)
        .then(response => {
          this.category_product_homes = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  components: {
    DetailProduct,CategoryChild,BannerCategoryProduct
  }
}
</script>
<style lang="scss">

@import '../assets/scss/category';
@import '../assets/scss/DetailProduct';
@import '../assets/scss/home';
.wrap-product{
  width: 100% !important;
}
</style>