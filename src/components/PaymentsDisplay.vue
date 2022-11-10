
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) of page" :key="idx">
                    <th scope="row">{{ (idx + 1) + (currentPage - 1) * 10 }}</th>
                    <td>{{ item.date }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.value }}</td>
                </tr>
            </tbody>
        </table>
        <Pagination :item-amount="items.length" v-model="currentPage"></Pagination>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
    name: 'PaymentsDisplay',
    components: { Pagination },
    data() {
        return {
            currentPage: 0
        }
    },
    props: {
        items: {
            type: Array,
            default: [],
        }
    },
    computed: {
        page() {
            return this.items.filter((el, idx) => idx >= (this.currentPage - 1) * 10 && idx < this.currentPage * 10)
        }
    }
}
</script>


<style scoped lang="scss">
.table {
    margin: 20px;
    width: 600px;
}
</style>