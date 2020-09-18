<template>
  <div>
    <div class="menu-category">
      <a class="title-menu-category" :href="category_product_home.cat_rewrite" :title="category_product_home.cat_name">
        <p class="STT">
          1
        </p>
        <h3>
          {{category_product_home.cat_name }}
        </h3>
      </a>
      <div class="buy-category">
        <div class="icon-cart mcon-shopping-cart-2">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </div>
        <span></span>
        <div class="icon-buy mcon-eye">
          <i class="fa fa-eye" aria-hidden="true"></i>
        </div>
      </div>
      <div class="menu-datail-category" v-for="(category_detail,index) in category_product_home.childs" :key="index">
        <a :href="category_detail.cat_rewrite" :title="category_detail.cat_name" class="a-menu-detail" data-id="2">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
          {{ category_detail.cat_name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['category_product_home'],
  name: "Category-View",
}
</script>
