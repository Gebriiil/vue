Vue.component('coupon',{

	template:`
		<input placeholder="enter your coupon code" @blur="onCouponApplied" />

	`,
	methods : {
		onCouponApplied()
		{
			this.$emit('applied')
		}
	}

})

new Vue ({
	el:"#root",
	data :{
		couponIsApplied : false
	},
	methods :{
		onCouponApplied(){
			this.couponIsApplied=true
		}
	}
})
