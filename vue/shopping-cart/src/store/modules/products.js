import shop from '../../api/shop'
// vuex 支持modules
const state = () => ({
    all: []
})
const getters = {} 
// 发起API请求的地方 
const actions = {
    getAllProducts({commit}){
        shop.getProducts(
            products => {
            commit('setProducts',products)
        })
    }
}
const mutations = {
    setProducts(state, products){
        state.all = products 
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations 
}