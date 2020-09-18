<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="tittle-page">
            <Breadcrumb :breadcrumb="infor_products.breadcamp"></Breadcrumb>
          </div>
          <div class="detail-product">
            <div class="col-sm-5">
              <div class="images-product">
                <div class="slider-for" >
                  <VueSlickCarousel :slidesToShow=1 :slidesToScroll=1 :arrows=false :fade=true :autoplay=true :autoplaySpeed=3000 >
                    <img class="img-responsive" v-for="(img,index) in infor_products.product.pro_picture" :key="index" :src="img" :title="infor_products.product.pro_name" :alt="infor_products.product.pro_name">
                  </VueSlickCarousel>
                </div>
                <div class="pro-slide-nav" >
                  <div class="pro-thumb-slide" >
                    <VueSlickCarousel :slidesToShow=3 :slidesToScroll=1 :arrows =false :dots=false :centerMode=true :focusOnSelect=true >
                      <img class="img-responsive" v-for="(img,index) in infor_products.product.pro_picture" :key="index" :src="img" :title="infor_products.product.pro_name" :alt="infor_products.product.pro_name">
                    </VueSlickCarousel>

                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-7 product-infor">
              <div class="infor-product">
                <div class="name-product col-sm-12">
                  <h1>
                    {{ infor_products.product.pro_name }}
                  </h1>
                </div>
                <div class="price-product col-sm-12">
                  <p>
                    {{ infor_products.product.pro_price }}
                  </p>
                </div>
                <div class="vote-view col-sm-12">
                  <ul>
                    <li class="rating">
                                <span class="number-rating">
                                    4
                                </span>
                      <span class="text-rating">
                                    Đánh giá
                                </span>
                    </li>
                    <li class="view">
                      <span class="number-view">
                        9876
                      </span>
                      <span class="text-view">
                                    Lượt đã xem
                                </span>
                    </li>
                    <li class="buy">
                                <span class="number-nuy">
                                    70
                                </span>
                      <span class="text-buy">
                                    Lượt đã mua thành công
                                </span>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-12">
                  <div class="inforProduct">
                    <table>
                      <tbody>
                      <tr>
                        <td class="bold">ID Sản phẩm</td>
                        <td>{{ infor_products.product.pro_id }}</td>
                      </tr>
                      <tr>
                        <td class="bold">Tên sản phẩm</td>
                        <td>{{ infor_products.product.pro_name }}</td>
                      </tr>
                      <tr>
                        <td class="bold">Thương hiệu</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="bold">Xuất xứ</td>
                        <td></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-sm-12 amount">
                  <span class="text-amount">Số lượng</span>
                  <div class="input">
                    <button class="decrease">-</button>
                    <input type="number" value="1" class="number-input" min="1">
                    <button class="increase">+</button>
                  </div>
                  <div class="button_order">
                    <button class="oder">Đặt hàng</button>
                  </div>
                </div>
                <div class="col-sm-12 tittle-regis">
                  <span> Đăng ký nhận tư vấn về sản phẩm</span>
                  <form action="#">
                    <div class="line-1">
                      <input type="text" name="name" value="" placeholder="Họ tên">
                      <input type="text" name="phone" value="" placeholder="Số điện thoại">
                    </div>
                    <div class="line-2">
                      <input type="email" name="email" value="" placeholder="Email">
                      <button type="submit"> Đăng ký tư vấn</button>
                    </div>
                  </form>
                </div>
                <div class="support col-sm-12">
                  <div class="tittle-support">
                    Hỗ trợ trực tuyến
                  </div>
                  <div class="tel-support">
                    <div class="support1">
                      <i class="fa fa-skype" aria-hidden="true"></i>
                      <p class="tel">Hỗ trợ 1 - <span class="">18008183</span></p>
                    </div>
                    <div class="support2">
                      <i class="fa fa-smile-o" aria-hidden="true"></i>
                      <p class="tel">Hỗ trợ 2 - <span class="">0123456789</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="detailInfor">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 detail-infor">
                  <p class="tittle"> <span class="detail-tittle">Thông tin chi tiết</span></p>
                </div>
                <div class="content" v-html="infor_products.product.pro_description">
                </div>
              </div>
            </div>
          </div>
          <div class="ratingStar">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Breadcrumb from "@/components/Breadcrumb";
import {axios} from "@/plugins/axios";
// require('../assets/js/slick.min.js')
// import slick from "@/assetss/js/slick";
export default {
  name: "Detail",
  data()
  {
    return {
      category_product_homes:[],
      infor_products:[],
      error:[],
      url:null
    }
  },
  created() {
    this.getUrl(),
    axios.get(this.url )
        .then(response => {
          this.infor_products = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  methods: {
    getUrl() {
      this.url = `http://localhost:8081/api/v1/product/detail`+this.$route.path;
    }
  },
  mounted()
  {
    // document.querySelector('.pro-thumb-slide').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   arrows: false,
    //   dots: false,
    //   centerMode: true,
    //   focusOnSelect: true
    // });

  },
  components: {
    Breadcrumb,VueSlickCarousel
  }
}
</script>
<style lang="scss">
@import '../assets/scss/category';
@import '../assets/scss/DetailProduct';
@import '../assets/scss/home';
@import '../assets/scss/slick';
</style>