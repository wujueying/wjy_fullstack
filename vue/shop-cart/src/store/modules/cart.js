import shop from "../../api/shop";


// 状态分支
const state = () => ({
    items: [],
    checkoutStatus: null
});
// 基于状态 ，返回对状态的新需求的getter属性
// 丰富了状态 的读操作
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(
                product=> product.id == id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

// commit 到mutation
const actions = {
    addProductToCart({ commit, state }, product) {
        commit('setCheckoutStatus', null); 
        // commit('pushProductToCart', { id: product.id })
        // 如果有库存
        if(product.inventory > 0){
            // items 
            // 之前 买过吗？
            const cartItem = state.items.find(
                item => item.id == product.id , 
            )
            if(!cartItem){
                commit('pushProductToCart', { id: product.id })
            }else{
                commit('incrementItemQuantity', cartItem)
            }
            // 
            commit('products/decrementProductInventory', {id: product.id}, {root: true})
            // product.products.all  inventory 
        }
      
    },
    checkout({commit,state}, products ){
        const savedCartItems = [...state.items];
        commit('setCheckoutStatus',null)
        // 清空购物车
        commit('setCartItem',{items: []});
        shop
            .buyProducts(
                products, 
                () => commit('setCheckoutStatus','successful'),
                () => commit('setCartItem',{items: savedCartItems})
            )
    }
    
}
// 只有mutation对状态进行写操作
const mutations = { 
    setCartItem(state, {items}){
        state.items = items 
    }, 
    setCheckoutStatus(state, status){
        state.checkoutStatus = status 
    },
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, {id}){
        const cartItem = state.items.find(item => item.id == id)
        cartItem.quantity++
    }
}

export default {
    namespaced: true,
    state, 
    getters,
    actions,
    mutations
}
