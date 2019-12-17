<template>
	<div>
		<!-- <img src="../assets/img/exercise.jpg"> -->
		<h1>{{msg}}</h1>
		<Navi></Navi>
	</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
export default {
	name : 'Home',
	components : {
		Navi,
	},
	data(){
		return {
			msg : 'Las Vegas'
		}
	}
}
</script>
<style scoped>
div{
	backgroud-color : lavender;
	width : 100%;
	backgroud-image : url('../assets/img/exercise.jpg')
}
</style>