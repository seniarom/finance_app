import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    payments: [
      { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
      { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
      { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
      { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
      { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
      { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
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