<template>
  <div>
    <div class="ResultSearchProduct">
      <div class="container">
        <div class="row">
          <div class="tittle-page">
            <Breadcrumb :breadcrumb="categorys.breadcamp"></Breadcrumb>
          </div>
          <div class="category-list-product">
            <div class="col-sm-2">
              <MenuCategory :category_menu="categorys"></MenuCategory>
            </div>
            <div class="col-sm-10">
              <div class="list-product" v-for="(product_category_home,index) in categorys.products" :key="index">
                <DetailProduct :product_new="product_category_home"></DetailProduct>
              </div>
            </div>
          </div>
          <div class="pagiantion">
            <div class="list-button">
              <nav>

                <ul class="pagination" >
                  <li class="page-item" v-if="categorys.page_current != 1" >

                    <a  class="page-link " :href="url_no_parameter">
                      ...
                    </a>
                  </li>
                  <li class="page-item" v-for="index in paginate(categorys.page_current,categorys.page_next)" :key="index">

                    <a v-if="index.page == categorys.page_current" class="page-link action" :href="index.url">
                      {{index.page}}
                    </a>
                    <a v-else-if="index.page != categorys.page_current && index.page != null" class="page-link" :href="index.url">
                      {{index.page}}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuCategory from "@/components/MenuCategory";
import Breadcrumb from "@/components/Breadcrumb";
import DetailProduct from "./DetailProduct.vue"
import {axios} from "@/plugins/axios";
export default {

  name: "DetailProduct-View",
  data()
  {
    return {
      categorys:[],
      infor_products:[],
      error:[],
      url:null,
      list_page:[],
      url_no_parameter:null
    }
  },
  created() {
    this.getUrl(),
        axios.get(this.url )
            .then(response => {
              this.categorys = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
  },
  methods: {
    getUrl() {
      this.url_no_parameter = window.location.pathname;
      this.url = `http://localhost:8081/api/v1` + this.$route.fullPath;
    },
    paginate(current_page,  next = true) {
      var start = 1;
      var end = current_page;
      if (current_page >4)
      {
        start = current_page-3;
      }
      if (next) {
        end = current_page + 1;
      }
      var paginate = [];
      for (var i = start; i <= end; i++) {
        if (end == 1)
        {
          paginate.push({
             url: null,
            page: null
          })
        }
        else
        {
          paginate.push({
            url: window.location.pathname+"?page="+i,
            page: i
          })
        }

      }
      return paginate;
    }
  },
  components: {
    DetailProduct,Breadcrumb,MenuCategory
  }
}
</script>
<style lang="scss">
a.page-link.action {
  background: #3ab54a;
  color: white;
}
@import '../assets/scss/category';
@import '../assets/scss/DetailProduct';
@import '../assets/scss/home';
</style>