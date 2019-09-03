<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>


<script>


</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing:border-box;
}
#app,html,body{
  width: 100%;
  height: 100%;
}
</style>


