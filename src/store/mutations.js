/** 
 *商城 Vuex-mutations
 */

export default {
    // 将数据保存到state数据源
    saveUserName(state, username) {
        state.username = username;

    },
    // 将数据保存到state数据源
    cartCount(state, cartCount) {
        state.cartCount = cartCount;
    }

}