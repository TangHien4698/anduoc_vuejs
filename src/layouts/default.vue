<template>
    <div>
        <Header></Header>
        <slot></slot>
      <Footer></Footer>
    </div>
</template>

<script>
  // import Header from '../components/Header.vue'
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
    export default {

        name: "default",
      components: {Header,Footer}
    }
</script>
<style>
#app {
  background: #f7f7f7 !important
}
</style>