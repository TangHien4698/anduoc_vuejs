<template>
  <div>
    <div class="list-category" v-if="category_menu.parent">
      <h3 class="name_category" >
        {{ category_menu.parent.cat_name }}
      </h3>
      <a :href="category_child.cat_rewrite" class="a-menu-detail" title="tpcn-giam-can" data-id="2" v-for="(category_child,index) in category_menu.parent.childs" :key="index">
        <span>{{ category_child.cat_name }}</span>
      </a>

    </div>
    <div class="list-category" v-else>
      <h3 class="name_category" >
        {{ category_menu.cat_name }}
      </h3>
      <a :href="category_child.cat_rewrite" class="a-menu-detail" :title="category_child.cat_rewrite" data-id="2" v-for="(category_child,index) in category_menu.childs" :key="index">
        <span>{{ category_child.cat_name }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['category_menu']
}
</script>