<template>
<div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
        <a href="#" class="navbar-brand">비트캠프</a>        
      </div>
       <ul class="nav navbar-nav">
        <li class="active"><router-link to="/Home">HOME</router-link></li>
      <li><router-link to="/cart">장바구니</router-link></li>
        <li><router-link to="/cal">계산기</router-link></li>
        <li><router-link to="/seqsum">Nsum</router-link></li>
        <li><router-link to="/account">계좌개설</router-link></li>
        <li><router-link to="/todo">할일</router-link></li>
		<li><router-link to="/login">로그인</router-link></li>
       </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default{

}
</script>

<style scoped>
/* a{
  float : left;
}
  ul{
  float : left;
  height: 500px;
  background-color : tomato
  
}   */
</style>