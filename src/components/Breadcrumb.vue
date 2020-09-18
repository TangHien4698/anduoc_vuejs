<template>
  <div>
    <ul>
      <li>
        <a href="/" title="Trang chủ">
          <span>Trang chủ</span>
        </a>
      </li>

      <li>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <a :href="breadcrumb.parent.cat_rewrite" :title="breadcrumb.parent.cat_name">
          <h3>{{breadcrumb.parent.cat_name }}</h3>
        </a>
      </li>

      <li v-if="breadcrumb.child">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <a :href="breadcrumb.child.cat_rewrite" :title="breadcrumb.child.cat_name">
          <h3>{{ breadcrumb.child.cat_name }}</h3>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['breadcrumb']
}
</script>