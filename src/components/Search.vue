<template>
  <div>

    <div class="ResultSearchProduct">
      <div class="container">
        <div class="row">
          <div class="banner-section1">
            <div class="content-banner1">
              <h1 class="hd-banner1">Kết quả tìm kiếm :</h1>
            </div>
          </div>
          <div v-if='infor_search.status == 200 && infor_search.empty == 0'>
            <div class="list-product" >
              <DetailProduct v-for="(infpr_search,index) in infor_search.detail" :key="index" :product_new="infpr_search"></DetailProduct>
            </div>
            <div class="pagiantion">
              <div class="list-button" >
                <nav>

                  <ul class="pagination" >
                    <li class="page-item" v-if="infor_search.per_page != 1" >

                      <a  class="page-link " :href="url_parameter">
                        ...
                      </a>
                    </li>
                    <li class="page-item" v-for="index in paginate(infor_search.per_page,infor_search.next_page)" :key="index">

                      <a v-if="index.page == infor_search.per_page" class="page-link action" :href="index.url">
                        {{index.page}}
                      </a>
                      <a v-else-if="index.page != infor_search.per_page && index.page != null" class="page-link" :href="index.url">
                        {{index.page}}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
<!--              <div class="list-button" >-->
<!--                <a href=""  v-if="infor_search.per_page > 1" v-bind:key="index"  class="first action">...</a>-->
<!--                <a href=""  v-for="index in (infor_search.per_page+1)" v-bind:key="index"  class="first action">{{index}}</a>-->
<!--              </div>-->
            </div>
          </div>
          <div v-else-if='infor_search.status == 200 && infor_search.empty == 1'>
            <div class="list-product" >
              <p class="notification">{{infor_search.detail}}</p>
            </div>
          </div>
          <div v-else-if='infor_search.status == 404'>
            <div class="list-product" >
              <p class="notification">{{infor_search.detail}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailProduct from "./DetailProduct.vue"
import {axios} from "@/plugins/axios";
export default {

  name: "DetailProduct-View",
  data()
  {
    return {
      categorys:[],
      infor_search:[],
      error:[],
      url:null,
      url_parameter:null
    }
  },
  created() {
    this.getUrl(),
        axios.get(this.url )
            .then(response => {
              this.infor_search = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
  },
  methods: {
    getUrl() {
      this.url_parameter = window.location.pathname+"?keyword="+this.$route.query.keyword;
      this.url = `http://localhost:8081/api/v1`+this.$route.fullPath;
    }
  ,
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
          url: window.location.pathname+"?keyword="+this.$route.query.keyword+"&page="+i,
          page: i
        })
      }

    }
    return paginate;
  }
},
  components: {
    DetailProduct
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
@import '../assets/scss/search';
.notification
{
  font-size: 20px;
  text-align:center;
}
</style>