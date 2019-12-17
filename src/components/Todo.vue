<template>
<div>
	<Navi></Navi>
	<div id="todolistapp">
    <div id="header" class="header">
        <h2>Todo List App</h2>
        <input class="input" type="text" v-model="task" placeholder="입력 후 엔터!">
        <span @click="addTodo" class="addbutton">추 가</span>
    </div>
    <ul id="todolist">
        <li @click="doneTodo(v.id)" v-for="(v, i) of todos" :key="v.id" :class="v.clazz">
            <span>No.{{i+1}}</span>
            <span>{{v.todo}}</span>
            <span v-if="v.done">(완료)</span>
            <span class="close">&#x00D7;</span>
        </li>
    </ul>
	</div>
	<Foot></Foot>
</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
import Foot from '@/components/Footer.vue'
export default{
	name : 'todo',
	components : {Navi, Foot},
	data(){
		return {
			todos : [{id:1, todo:'영화보기', done:false, clazz:''},
					{id:2, todo:'주말산책', done:true, clazz:'checked'},
					{id:3, todo:'코딩공부', done:false, clazz:''},
                    {id:4, todo:'야구봄', done:false, clazz:''}],
            task : ''
		}
	},
	methods : {
		addTodo(){
			this.todos.push({id :this.todos.length+1, todo:this.task, done:false, clazz:''})
        },
        doneTodo(index){
            alert(`클릭한아이디${index}`)
            // const index = this.todos.findIndex(function(item) {
            //     return item.id === id
            // })
            const target =  this.todos[index-1]
            target.done = !target.done
            target.clazz = (target.done) ? 'checked': ''
        },
        deleteTodo(){

        }
	}
}
</script>
<style scoped>
  * {  box-sizing: border-box;  }
    ul {  margin: 0; padding: 0; }
    ul li {
        cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
        background: #eee; font-size: 14px;  transition: 0.2s;
        -webkit-user-select: none; -moz-user-select: none;
        -ms-user-select: none; user-select: none;  
    }
    ul li:hover {  background: #ddd;  }
    ul li.checked {
        background: #BBB;  color: #fff; text-decoration: line-through;
    }
    ul li.checked::before {
        content: ''; position: absolute; border-color: #fff;
        border-style: solid; border-width: 0px 1px 1px 0px;
        top: 10px; left: 16px;  transform: rotate(45deg);
        height: 8px; width: 8px;
    }
    .close {
        position: absolute; right: 0; top: 0;
        padding: 12px 16px 12px 16px
    }
    .close:hover {
        background-color: #f44336;  color: white;
    }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
    .input {
        border: none; width: 75%; height:35px; padding: 10px;
        float: left; font-size: 16px;
    }
    .addbutton {
        padding: 10px; width: 25%; height:35px; background: #d9d9d9;
        color: #555; float: left; text-align: center;
        font-size: 13px; cursor: pointer; transition: 0.3s;
    }
    .addbutton:hover { background-color: #bbb; }
    .completed { text-decoration:none; }
</style>