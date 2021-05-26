Vue.component('modal',{
	template:`
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		    	<slot name="header">
		    		<p class="modal-card-title">Default title</p>
		    	</slot>
		    </header>
		    <section class="modal-card-body">
		      <slot name="content"></slot>
		    </section>
		    <footer class="modal-card-foot">
		    	<slot name="footer">
			      
			      <button class="button">Default</button>
		    	</slot>
		    </footer>
		  </div>
		</div>
	`
})

new Vue({
	el:"#root"
})