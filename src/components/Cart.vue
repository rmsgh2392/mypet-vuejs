<template>
<div>
	<Navi></Navi>
  <img alt="Vue logo" src="../assets/mini.jpg">
    <h1>미니언즈 문방구</h1>
		<ul>
			<li v-for="item of items" :key="item.name">
				<img style="width:100px;height:100px;" :src="item.img"/>
					{{item.name}} : {{item.price}}원  
				<input type="text" v-model="item.qty"> 개 구입
			</li>
		</ul>
		<button v-on:click="perchase">구매</button>
		<p>합계 : {{totalPrice}} </p>
		<Foot></Foot>
</div>
</template>
<script>
// const items = [
//   {name : '연필',price:300, qty:0},
// 	{name : '노트',price:500, qty:0},
//   {name : '지우개',price:1000, qty:0}]
import Navi from '@/components/Navi.vue'
import Foot from '@/components/Footer.vue'

export default {
	name : 'Cart',
	components : {Navi, Foot},
	data() {return {items : [
  {name : '연필',price:300, qty:0,img :require('@/assets/img/pencil.jpg')},
  {name : '노트',price:500, qty:0,img:require('@/assets/img/note.jpg')},
  {name : '지우개',price:1000, qty:0,img:require('@/assets/img/eraser.jpg')}]}},
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
<style>
div{
	background-color : lavender;
}
ul{
	list-style-type : none;
}
</style>