Vue.component('tabs',{

	template : `
		<div>
			<div class="tabs">
			  <ul>
			    <li v-for="tab of tabs" :class="{'is-active':tab.activated}">
			     	<a :href="tab.href" @click="selectTab(tab)"> {{tab.name}} </a> 
			    </li>
			  </ul>
			</div>
			<div tab-details>
				<slot></slot>
			</div>
		</div>
	`,
	data(){
		return {
			tabs : []
		}
	},
	created(){
		this.tabs=this.$children
	},
	methods : {
		selectTab(selectedTab){
			this.tabs.forEach(tab=>{
				tab.activated= (tab.name==selectedTab.name)
			})	
		}
	}
});

Vue.component('tab',{
	template : `<div v-show="activated"><slot></slot></div>`,
	props : {
		name : {required : true},
		selected : {default : false}
	},
	data(){
		return {
			activated:false
		}
	},
	created(){
		this.activated=this.selected
	},

	computed : {
		href(){
			return '#'+this.name.toLowerCase().replace(/ /g , '-');
		}
	}
})

new Vue({
	el : "#root"
})