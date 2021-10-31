
const state={
  name:'user模块',
  num:1
}

const mutations={
  addNum(state,data){
     state.num += data
  }

}

const actions={
    addAction(context,data){
      const {commit} = context;
      return new Promise(()=>{
        setTimeout(()=>{
          commit('addNum',data)
        },300)
      })
      
    }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
