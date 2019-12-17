import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'
import Jumbo from '@/components/JumboTron.vue'
import Foot from '@/components/Footer.vue'
import Cal from '@/components/Calculator.vue'
import Login from '@/components/Login.vue'
import Seqsum from '@/components/Seqsum.vue'
import Account from '@/components/Account.vue'
import Todo from '@/components/Todo.vue'

Vue.use(Router)
export default new Router({//클로저 처리가 자동으로된다 (export default)
	mode : 'history',
	routes : [
		{path : '/',name : 'home',component : Home},
		{path : '/cart',name : 'cart',component : Cart},
		{path : '/jumbo',name : 'jumbo',component : Jumbo},
		{path : '/foot',name : 'foot',component : Foot},
		{path : '/cal',name : 'cal',component : Cal},
		{path :'/login',name:'login',component:Login},
		{path : '/seqsum',name:'seqsum',component:Seqsum},
		{path : '/account',name:'account',component:Account},
		{path : '/todo',name:'todo',component:Todo}
	]

})
//.js파일이 전역인 이유 function키워드로 만든 스코프만 지역이고 나머진 전역 !!
//{path : '/',name : 'home',component : Home} 인스턴스 이름이 home 