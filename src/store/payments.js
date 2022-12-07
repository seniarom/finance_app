const getters = {

    getPaymentsList: state => state.paymentsList,

    getFullPaymentValue: state => {
        return state.paymentsList
            .reduce((res, cur) => res + cur.value, 0)
    },
}