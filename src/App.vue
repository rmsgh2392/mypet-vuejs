<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
//<router-view/>내장된 객체 화면은 라우터가 결정한대로 보여준다 
//컴파일이 다된 상태에서 cart라는 화면을 동적으로 보여준다.
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  background-color : black;
}
</style>
