<template>
  <div>
     <h2>Your Cart</h2>
     <p v-show="!products.length">
         <i>Please add some products to cart.</i>
     </p>
     <ul>
         <li
           v-for="product in products"
           :key="product.id"
         >
            {{product.title}} = {{product.price}} x {{product.quantity}}
         </li>
     </ul>
     <p>Total: {{total}}</p>
     <p>
       <button 
        :disabled="!products.length"
        @click="checkout(products)"
        Checkout
       >Checkout</button>
     </p>
     <p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex'; 
export default { 
  computed: { 
      ...mapState({
        checkoutStatus: state => state.cart.checkoutStatus
      }),
      ...mapGetters('cart', { 
          products: 'cartProducts',
          total: 'cartTotalPrice'
      }) 
  } ,
  methods:{
    checkout (products){
      this.$store.dispatch('cart/checkout', products)
    }
  }
 
} 
</script>

<style scoped>

</style>
