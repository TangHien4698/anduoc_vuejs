<template>
  <div>
    <ul class="list-submenu" >

      <li v-for="(menu,index) in categorys.group" :key="index">
        <div class="menusub">
          <a :href="menu.cat_rewrite " :title="menu.cat_name "  class="tittle-menu">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="">{{ menu.cat_name }}</span>
          </a>
          <ul class="submenu" role="menuitem" id="submenu-home">
            <p class="title-submenu">
              <a :href="menu.cat_rewrite" :title="menu.cat_name">
                <span> {{ menu.cat_name }}</span>
              </a>
            </p>
            <li role="menuitem" v-for="(menu_child,index) in menu.childs" :key="index">
              <a :href="menu_child.cat_rewrite" :title="menu_child.cat_name">
                <span> {{ menu_child.cat_name }}</span>
              </a>
            </li>
<!--            <li role="menuitem">-->
<!--              <a href="tpcn-no-nguc" title="TPCN - Nở Ngực">-->
<!--                <span> TPCN - Nở Ngực</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li role="menuitem">-->
<!--              <a href="tpcn-collagen" title="TPCN - Collagen">-->
<!--                <span> TPCN - Collagen</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li role="menuitem">-->
<!--              <a href="tpcn-glucosamine-canxi" title="TPCN - Glucosamine, Canxi">-->
<!--                <span> TPCN - Glucosamine, Canxi</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li role="menuitem">-->
<!--              <a href="tpcn-linh-chi" title="TPCN - Linh Chi">-->
<!--                <span> TPCN - Linh Chi</span>-->
<!--              </a>-->
<!--            </li>-->
          </ul>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
import {axios} from "@/plugins/axios";

export default {
  data()
  {
    return {
      categorys:[],
      error:[]
    }
  },
  created() {
    axios.get(`http://localhost:8081/api/v1/getCategory`)
        .then(response => {
          this.categorys = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
}
</script>