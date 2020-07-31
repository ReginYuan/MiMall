/** 
 *商城 Vuex-actions
 */

export default {
    saveUserName(context, username) {

        // 需要触发的Mutation函数   将username发送到mutations
        context.commit('saveUserName', username);
    },
    cartCount(context, cartCount) {
        // 需要触发的Mutation函数  将cartCount发送到mutations
        context.commit('cartCount', cartCount);
    }
}