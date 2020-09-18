<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="row row-header">
          <div class="col-sm-3">
            <div class="logo-header">
              <a href="/" title="logo-trangchu">
                <img src="http://localhost:8081/image/logo_header.png" alt="Logo-header" title="Logo header">
              </a>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-7">
                <div class="search">
                  <form class="form-search" method="GET" action="/search">
                    <input type="text" name="keyword" placeholder="Nhập từ khóa tìm kiếm" class="input-search test_input">
<!--                    <input type="hidden" name="page"  value="1" placeholder="Nhập từ khóa tìm kiếm" class="input-search test_input">-->
                    <button type="submit" class="button-search"><i class="fa fa-search" aria-hidden="true"></i> </button>
                  </form>
                  <div class="text-search">
                    <p class="title-list-key">
                      Từ khóa phổ biến
                    </p>
                    <p class="list-key">
                      Giảm cân New Perfer, Rich slim, Tăng cường sinh lý Nam Đế Hoàn
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-5 action">
                <div class="action-top">
                  <div class="row">
                    <div class="col-sm-4 notification">
                      <a href="" style="width: 100%">
                        <div class="icon">
                          <i class="fa fa-bell" aria-hidden="true"></i>
                          <p class="number-notification">3</p>
                        </div>
                        <div class="text-icon">
                          <p class="text-notification">Thông báo</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-4 account">
                      <div class="icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>

                      <div  class="text-icon login-account" href="http://localhost:8081/login">
                        <p class="text-account">Tài khoản</p>
                        <p class="text-login">Đăng nhập</p>
                      </div>

                      <div class="login">
                        <div class="icon-text google">
                          <a href="http://localhost:8081/redirect" class="google"><i class="fa fa-google"></i> Google</a>
                        </div>
                        <div class="icon-text facebook">
                          <a href="" class="facebook"> Facebook</a>
                        </div>

                      </div>
                    </div>


                    <a href="http://localhost:8081/cart">
                      <div class="col-sm-4 cart">
                        <div class="icon">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <div class="text-icon">
                          <p class="text-cart">Giỏ hàng</p>
                        </div>
                        <div class="number-product">
                                            <span class="text-number-product">
                                                                                                    0
                                                                                                </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-cuon">
      <div class="container">
        <div class="row row-header">
          <div class="col-sm-3">
            <div class="logo-header">
              <a href="#" title="logo-trangchu">
                <img src="http://localhost:8081/image/logo_header.png" alt="Logo-header" title="Logo header">
              </a>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-7">
                <div class="search">
                  <div class="form-search">
                    <input type="text" name="keyword" placeholder="Nhập từ khóa tìm kiếm" class="input-search">
                    <button type="submit" class="button-search"><i class="fa fa-search" aria-hidden="true"></i> </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-5 action">
                <div class="action-top">
                  <div class="row">
                    <div class="col-sm-4 notification">
                      <a href="" style="width: 100%" title="Thông báo">
                        <div class="icon">
                          <i class="fa fa-bell" aria-hidden="true"></i>
                          <p class="number-notification">3</p>
                        </div>
                        <div class="text-icon">
                          <p class="text-notification">Thông báo</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-sm-4 account account-cuon">
                      <div class="icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>

                      <div  class="text-icon login-account" href="http://localhost:8081/login">
                        <p class="text-account">Tài khoản</p>
                        <p class="text-login">Đăng nhập</p>
                      </div>

                      <div class="login login-cuon">
                        <div class="icon-text google">
                          <a href="http://localhost:8081/redirect" class="google"><i class="fa fa-google"></i> Google</a>
                        </div>
                        <div class="icon-text facebook">
                          <a href="" class="facebook"> Facebook</a>
                        </div>

                      </div>
                    </div>
                    <a href="http://localhost:8081/cart">
                      <div class="col-sm-4 cart">
                        <div class="icon">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <div class="text-icon">
                          <p class="text-cart">Giỏ hàng</p>
                        </div>
                        <div class="number-product">
                                        <span class="text-number-product">
                                                                                        0
                                            </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="tittle-category">
              <div class="icon-category">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div class="text-category">
                <h2>DANH MỤC SẢN PHẨM</h2>
              </div>
              <div class="col-sm-3 menu sub-category-model">
                <Menu></Menu>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="phone">
              <div class="icon-category">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="text-category">
                <p>Hot Line: 08 888 2898</p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="tranpost">
              <div class="icon-category">
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </div>
              <div class="text-category">
                <p>Giao hàng toàn quốc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
// import {axios} from "@/plugins/axios";
export default {
  name: "Header",
  components: {
    Menu
  }
}
</script>
<style scoped lang="scss">
 @import '../assets/scss/header';
</style>