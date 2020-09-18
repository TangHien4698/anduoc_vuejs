<template>
  <div>
<!--    <div v-for="product_new in product_news" :key="product_new">-->
      <div class="wrap-product">
        <div class="wrap-item-product">
          <div class="avatar-product" :title="product_new.pro_name">
            <a :href="product_new.pro_link" :title="product_new.pro_name
" class="img-product">
              <img :src="product_new.pro_picture" :alt="product_new.pro_name" :title="product_new.pro_name">
            </a>
          </div>
          <div class="tittle-product">
            <a :href="product_new.pro_link" :title="product_new.pro_name">
              {{product_new.pro_name }}
            </a>
          </div>
          <div class="price-product">
                                        <span class="price-detail">
                                            {{product_new.pro_price }}
                                        </span>
            <div class="shopping shipping-svg-icon icon-free-shipping">
              <i class="fa fa-truck" aria-hidden="true"></i>
            </div>
          </div>
          <div class="rating-product">
            <div class="rating-like-wrap">
              <div class="shopee-svg-icon icon-like-2">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </div>
              <div class="number-like">
                10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--  </div>-->

</template>
<script>

export default {
  props: ['product_new'],
  name: "DetailProduct-View",

}
</script>
<style scoped lang="scss">

@import '../assets/scss/category';
@import '../assets/scss/DetailProduct';
@import '../assets/scss/home';
</style>