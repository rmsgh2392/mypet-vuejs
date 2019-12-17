<template>
<div id="app">
  <img alt="Vue logo" src="../assets/mini.jpg">
    <h1>미니언즈 문방구</h1>
		<ul>
			<li v-for="item of items" :key="item.name">
				{{item.name}} : {{item.price}}원  
				<input type="text" v-model="item.qty"> 개 구입
			</li>
		</ul>
		<button v-on:click="perchase">구매</button>
		<p>합계 : {{totalPrice}} </p>
</div>
<!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
</div> -->
</template>

<script>
const items = [
  {name : '연필',price:300, qty:0},
	{name : '노트',price:500, qty:0},
  {name : '지우개',price:1000, qty:0}]

export default {
  name : 'app',
	data() {return {items}},
	methods : {
		perchase(){
			alert(`${this.totalPrice} 원 구매했습니다!! `)
		}
	},
	computed : {
		totalPrice(){
			return this.items.reduce((sum, item)=>{
				return sum + (item.price * item.qty)
			}, 0)//hook!! 어떤 시간이 되면 자동실행하는것 (이벤트가 아니다 !!)
		}
	},
	created(){//프로퍼티지만 메서드 !!
		// alert("객체 생성 완료 ")
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
