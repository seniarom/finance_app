<template>
    <div>
        <h1>My personal costs</h1>
        <Button v-if="!openedAdd" @onClick="openedAdd = !openedAdd" :settings='{ text: "ADD NEW COST" }'></Button>
        <NewCost v-if="openedAdd" @onAdd="add"></NewCost>
        <PaymentsDisplay class="payment_list" :items="paymentsList" />
    </div>
</template>
  
<script>
import PaymentsDisplay from "@/components/PaymentsDisplay";
import Button from "@/components/Button";
import NewCost from "@/components/AddPaymentForm";

export default {
    name: 'App',
    data() {
        const state = {
            paymentsList: [],
        }
        return {
            openedAdd: false,
        }
    },
    methods: {
        add(el) {
            this.openedAdd = false
            this.paymentsList.push(el)
        },
        fetchData() {
            function generateItem() {
                return {
                    date: '28.03.2020',
                    category: 'Food',
                    value: Math.floor(Math.random() * 1000),
                }
            }
            const list = []
            for (let i = 0; i < 30; i++) {
                list.push(generateItem())
            }
            return list
        },
    },
    created() {
        this.paymentsList = this.fetchData()
    },
    components: {
        NewCost,
        Button,
        PaymentsDisplay
    }
}
</script>
  
<style lang="scss" scoped>

</style>