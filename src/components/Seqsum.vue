<template>
<div>
	<Navi></Navi>
	<input v-model="first" type="text" placeholder="첫번째 수 "/><br/>
	<br/>
	<input v-model="second" type="text" placeholder="두번째  수 "/><br/>
	<input @click="sum" type="button" value="result"/>
	합계 {{totalNum}}
</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
export default{
	name : 'seqsum',
	components : {Navi},
	data(){
		return{
			totalNum : 0,
			result : '결과값',
			first : '',
			second : ''
		}
	},
	methods : {
		sum(){
	/* 		const result = []
			let number = this.num
			let number1 = this.num1
			for(let i=number;i<=number1;i++){
				result.push(i)
			}
			alert(result.reduce(a, b) => a + b) */
			// const first = parseInt(document.getElementById('first').value)
			// const second = parseInt(document.getElementById('second').value)
			// let start =0, end =0
			let _first = parseInt(this.first)
			let _second = parseInt(this.second)
			let arr = [_first,_second]
			// if(first < second){
			// 	start = _first
			// 	end = _second
			// }else{
			// 	start = _second
			// 	end = _first
			// }
			arr.sort()
			let sum = 0
			for(let i=arr[0]; i <arr[1]+1;i++){
				sum += i
			}
			this.totalNum = sum
		}
	}
}
</script>
<style scoped>
.seqsum{
	margin : 0 auto;
	width : 400px;
	font-size : 40px;
	display : grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: minmax(50px, auto)
}
.display{
	grid-column : 1 / 5;
	background-color : #333;
	color : white;
}
.zero{
	grid-column : 1 / 3;
}
.btn{
	background-color : #F2F2F2;
	border : 1px solid #999;
}
.operator{
	background-color:orange;
	color : white;
}
</style>