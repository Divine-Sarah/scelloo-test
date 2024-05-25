<template>
    <main class="app-container">
        <div class="space-y-[20px]">
            <h1 class="text-sm font-bold uppercase text-text-purple">
                Table Heading
            </h1>
            <div class="flex items-center justify-between border-b-2 border-apppurple-100">
                <div class="flex space-x-[30px]">
                    <div v-for="(tab, index) in tabs" :key="index" :class="[
                        'text-text-purple font-inter font-medium text-sm py-2',
                        {
                            'text-apppurple-200 border-b-2 border-apppurple-200  px-3':
                                activeTab === index,
                            ' cursor-pointer': activeTab !== index,
                        },
                    ]" @click="changeTab(index)">
                        {{ tab }}
                    </div>
                </div>
                <div class="flex items-center font-inter">
                    <label for="" class="text-sm font-medium text-text-purple">Total payable amount:
                    </label>
                    <figure class="text-lg font-bold text-apppurple-300">
                        ${{ totalPayable }}
                        <span class="text-lg font-normal text-text-purple">USD</span>
                    </figure>
                </div>
            </div>
            <Layout />
        </div>
    </main>
</template>

<script>
import Layout from "@/components/tableLayout.vue";
export default {
    data() {
        return {
            activeTab: 0,
            tabs: ["All", "Paid", " Unpaid", "Overdue"],
            totalPayable: 0,
        };
    },
    mounted() {
        let payable = 0;
        this.$store.state.tableData.forEach((i) => {
            if (i.paymentStatus === "Unpaid" || i.paymentStatus === "Overdue") {
                payable += i.amount;
            }
        });
        this.totalPayable = payable;
    },
    components: {
        Layout,
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
            this.$store.commit("setCurrentTab", index);
        },
    },
};
</script>
