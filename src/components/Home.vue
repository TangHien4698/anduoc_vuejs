<template>
  <div>
    <div class="sectionn">
      <div class="container">
        <div class="slide">
          <div class="row">
            <div class="col-sm-3 menu">
              <Menu></Menu>
            </div>
            <div class="col-sm-9 banner-img">
              <Banner_Home_Primakey></Banner_Home_Primakey>
            </div>
          </div>
        </div>
        <ProductNew></ProductNew>
        <CategoryProductHmoe ></CategoryProductHmoe>
      </div>
    </div>
  </div>
</template>
<script>
import Banner_Home_Primakey from "@/components/Banner_Home_Primakey";
import Menu from "@/components/Menu";
import ProductNew from "@/components/ProductNew";
import CategoryProductHmoe from "@/components/CategoryProductHome"
export default {
  name: "Home",

  components: {
    ProductNew,CategoryProductHmoe,Menu,Banner_Home_Primakey
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