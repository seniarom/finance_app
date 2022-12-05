import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    payments: [
      { id: 1, category: "food", dateCreated: "08.11.2022", amount: 1 },
      { id: 2, category: "food", dateCreated: "10.11.2022", amount: 2 },
      { id: 3, category: "food", dateCreated: "12.11.2022", amount: 3 },
      { id: 4, category: "food", dateCreated: "12.11.2022", amount: 3 },
      { id: 5, category: "food", dateCreated: "12.11.2022", amount: 3 },
    ],
    categoryList: []
  },
  mutations: {
    setPaymentsData(state, payload) {
      state.payments = payload

    },
    setPaymentsCategory(state, payload) {
      state.categoryList = payload
    },
    addDataToPayments(store, data) {
      store.payments.push(data)
    },
    editPaymentList: (state, payload) => (state.payments = state.payments.map((item) => {
      if (item.id === payload.id) {
        console.log(payload)
        return payload;
      } else {
        return item
      }
    })),
    removePaymentList: (state, payload) => state.payments.splice(
      state.payments.indexOf(payload),
      1),
  },


  actions: { // Эмитация загрузки с сервера
    // fetchData({commit}) { // в actions можно вызывать другие actions
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             const items = []
    //             for(let i = 1; i < 21 ; i++){
    //                 items.push({
    //                     id: (items.length + 1),
    //                     dateCreated: '01.01.2023',
    //                     category: 'Food',
    //                     amount: i
    //                 })
    //             }
    //             resolve(items)
    //         }, 800)
    //     }).then(res=> {
    //         // dispatch('fetchCategory')
    //         commit('setPaymentsData', res)
    //     })
    // },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ['Food', 'Transport', 'Internet', 'Sport']
          resolve(items)
        }, 800)
      }).then(res => commit('setPaymentsCategory', res))
    }
  },
  getters: {
    getFullPaymentAmount: state => {
      return state.payments.reduce((res, cur) => res + cur.amount, 0)
    },
    getPayments: state => state.payments,
    getCategory: state => state.categoryList,
    getId: state => {
      return (state.payments.length + 1)
    },
  }
})