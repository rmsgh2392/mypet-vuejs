<template>
<div>
	<Navi></Navi>
	<div id="example" class="container layout1">
    <p><input type="text" v-model="amount" class="form-control" /></p>
    <p>
        <button id="create" @click.once="specialEvent"
           class="btn btn-primary">계좌 개설 10000원 이벤트</button>
        <button id="deposit" @click="deposit($event)"
            class="btn btn-primary">예금</button>
        <button id="withdraw" @click="withdraw"
            class="btn btn-primary">인출</button>
    </p>
    <h3>계좌 잔고 : {{balance}}</h3>
</div>
<Foot></Foot>
</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
import Foot from '@/components/Footer.vue'
export default{
	name :'account',
	components :{Navi,Foot},
	data(){
		return {
			amount : '',
			balance : 0,
		}
	},
	methods : {
		specialEvent(){
			this.balance = 10000
			alert(`꽁돈이다 `)
		},
		deposit(){
			this.balance += Number(this.amount)
			alert(`${this.amount}예금완료`)
		},
		withdraw(){
			this.balance -= Number(this.amount)
			alert(`인출 완료`)
		}
	}
}
</script>
<style scoped>
</style>
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
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
  background-color : black;
}
</style>