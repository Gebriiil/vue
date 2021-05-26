// Video 7
// Vue.component('list-task',{
// 	template : `<div>
// 					<task v-for="task of tasks">
// 						{{task.description}}
// 					</task>
// 				</div>`,
// 	data () {
// 		return 
// 			{
// 				tasks: [
// 					{description : "desc 1" , completed :true },
// 					{description : "desc 2" , completed :true },
// 					{description : "desc 3" , completed :true },
// 					{description : "desc 4" , completed :true },
// 				]
// 			}
// 	}
// })




// Vue.component('task',{
// 	template : '<li><slot></slot></li>'
// })

// new Vue({
// 	el:"#root"
// })



//Video 9

Vue.component('message',{
	props:['title','body'],
	data() {
		return {
			isVisiable:true
		}
	},
	template : `
			<article class="message" v-show="isVisiable">
		      <div class="message-header">
		        <p>{{title}}</p>
		        <button class="delete" aria-label="delete" @click="hideMessage"></button>
		      </div>
		      <div class="message-body">{{body}}</div>
		    </article>
	`,
	methods :{
		hideMessage(){
			this.isVisiable=false;
		}
	}
})

new Vue({
	el:"#root"
})
