<template>
    <main>
        <div class="w-full max-w-[1100px] rounded-lg bg-appwhite shadow-[#00000033] shadow-xl h-full max-h-[1118px]">
            <section class="flex items-center justify-between  py-[15px]  px-[20px]">
                <div class="flex space-x-[20px] items-center">
                    <div @click="toogleFilter"
                        class="border relative rounded-md w-[88px]  flex gap-[10px] p-[10px] items-center  hover:border-2 hover:border-apppurple-300">
                        <img src="/icons/Filter.svg" alt="">
                        Filter
                    </div>
                    <Filter v-if="isOpen" class="absolute" />
                    <div
                        class="flex rounded-md bg-apppurple-400 p-[10px] gap-2 hover:border-2 hover:border-apppurple-300">
                        <img src="/icons/Search.svg" alt="">
                        <input type="search" name="" id="" class="w-[392px] outline-none bg-transparent"
                            placeholder="Search Users by Name, Email or Date">
                    </div>
                </div>
                <button
                    class="w-full max-w-[99px] rounded-md bg-apppurple-300 py-[10px] text-appwhite text-base font-inter font-semibold">Pay
                    Dues</button>
            </section>
            <div
                class="flex flex-row text-xs font-semibold uppercase font-inter text-text-purple py-[15px] bg-apppurple-400  px-[20px] gap-x-[30px]">

                <!-- Header Row -->
                <div class="flex items-center gap-[20px]  min-w-[50px]">
                    <input type="checkbox" name="" id="">
                </div>
                <div class="min-w-[200px]">Name</div>
                <div class="min-w-[287px]">uSER Status</div>
                <div class="min-w-[220px]">
                    pAYMENT Status
                </div>
                <div class=" min-w-[50px]">Amount</div>
                <div class="grid w-full place-content-end">
                    <img src="/icons/More.svg" alt="">
                </div>
            </div>
            <div v-for="item in tableData" :key="item.id" class="flex flex-row py-[15px] px-[20px] gap-x-[30px]">

                <!-- Header Row -->
                <div class="flex items-center gap-[20px]   min-w-[50px]">
                    <input type="checkbox" name="" id="">
                    <img src="/icons/Master.svg" alt="">
                </div>
                <div class="flex flex-col space-y-[5px] items-start min-w-[200px]">
                    <span class="text-sm font-medium text-apppurple-200">{{ item.name }} </span>
                    <span class="text-sm font-normal text-text-purple">{{ item.email }}</span>
                </div>
                <div class="flex flex-col  space-y-[5px] min-w-[287px]">
                    <div :class="['flex items-center gap-[5px] bg-[#E6E6F2]  px-[5px] py-[5px] rounded-[10px] ',
                        {
                            ' w-[58px] text-appblue': item.userStatus === 'Active', 'text-text-purple w-[67px]': item.userStatus === 'Inactive',
                        }
                    ]">
                        <div :class="['w-[6px] h-[6px] rounded-full ',
                        {
                            '  bg-appblue': item.userStatus === 'Active', 'bg-text-purple': item.userStatus === 'Inactive',
                        }
                    ]"></div>
                        <span class="text-xs font-medium ">{{ item.userStatus }}</span>
                    </div>
                    <span class="text-xs font-medium text-text-purple">{{ item.loginDate }}</span>
                </div>
                <div class="flex flex-col  space-y-[5px] min-w-[220px]">
                    <div :class="['flex items-center gap-[5px] px-[5px] py-[5px] rounded-[10px] bg-appgreen-100',
                        {
                            'bg-appgreen  w-[58px]': item.paymentStatus === 'Paid', 'bg-appred-100 w-[70px]': item.paymentStatus === 'Overdue', 'bg-appyellow-100  w-[62px]': item.paymentStatus === 'Unpaid'
                        }
                    ]">
                        <div :class="['w-[6px] h-[6px] rounded-full gap-[5px]',
                        {
                            'bg-appgreen': item.paymentStatus === 'Paid', 'bg-appred': item.paymentStatus === 'Overdue', 'bg-appyellow': item.paymentStatus === 'Unpaid'
                        }
                    ]
                        "></div>
                        <span :class="['text-xs font-medium ',
                        {
                            'text-appgreen': item.paymentStatus === 'Paid', 'text-appred': item.paymentStatus === 'Overdue', 'text-appyellow': item.paymentStatus === 'Unpaid'
                        }
                    ]">{{ item.paymentStatus }}</span>
                    </div>
                    <span class="text-xs font-medium text-apppurple-200">{{ item.datePaid }}</span>
                </div>
                <div class="grid  grid-row-2 min-w-[50px]">
                    <figure class="text-sm font-medium text-apppurple-200">{{ item.amount }}</figure>
                    <span class="text-xs font-normal text-text-purple">{{ item.currency }}</span>
                </div>

                <div class="flex flex-row space-x-[20px] items-center">
                    <span
                        class="text-xs font-medium text-text-purple hover:text-apppurple-300 hover:bg-[#F2F0F9] hover:w-[71px] hover:p-[5px] hover:rounded-[4px]">View
                        More</span>
                    <div>
                        <img src="/icons/More.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="flex justify-end bg-apppurple-400 px-[20px] py-[15px]">
                hello
            </div>
            <!-- Data  Row -->

        </div>
    </main>
</template>

<script>
import Filter from "@/components/filter.vue"
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toogleFilter() {
            this.isOpen = !this.isOpen;
        },
    },
    components: {
        Filter
    },
    computed: {
        tableData() {
            return this.$store.state.tableData
        },
        totalAmount() {
            return this.tableData.reduce((total, item) => total + item.amount, 0)
        },
    },
    created() {
        // Fetch fake data when the component is created
        this.$store.dispatch('setTableData')
    },
}
</script>
