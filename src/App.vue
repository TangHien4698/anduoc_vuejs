<template>
  <div id="app">
    <component :is="typeof $route.meta.layout != 'undefined'?$route.meta.layout:'div'">
      <router-view />
    </component>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
