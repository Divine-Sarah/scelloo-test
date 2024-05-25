<template>
    <main>
        <div class="w-full max-w-[1100px] rounded-lg bg-appwhite shadow-[#00000033] shadow-xl h-full max-h-[1118px]">
            <section class="flex items-center justify-between  py-[15px]  px-[20px]">
                <div class="flex space-x-[20px] items-center">
                    <div @click="toggleFilter"
                        class="border relative rounded-md w-[88px]  flex gap-[10px] p-[10px] items-center  hover:border-2 hover:border-apppurple-300">
                        <img src="/icons/Filter.svg" alt="">
                        Filter
                    </div>
                    <Filter v-if="isOpen" class="absolute z-20 top-[220px]" />
                    <div
                        class="flex rounded-md bg-apppurple-400 p-[10px] gap-2 hover:border-2 hover:border-apppurple-300">
                        <img src="/icons/Search.svg" alt="">
                        <input type="search" v-model="searchUsers" @change="searchFunc"
                            class="w-[392px] outline-none bg-transparent"
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
            <div v-for="item in tableData" :key="item.id" class="flex flex-col ">
                <!-- Header Row -->
                <div class="flex flex-row py-[15px] px-[20px] gap-x-[30px]">
                    <div class="flex items-center gap-[20px]   min-w-[50px]">
                        <input type="checkbox" name="" id="">
                        <div @click="isCollapsed = !isCollapsed">
                            <img src="/icons/Master2.svg" v-if="!isCollapsed" alt="">
                            <img src="/icons/Master.svg" v-if="isCollapsed" alt="">
                        </div>
                    </div>
                    <div class=" flex flex-col space-y-[5px] items-start min-w-[200px]">
                        <span class="text-sm font-medium text-apppurple-200">{{ item.name }}</span>
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
                        <figure class="text-sm font-medium text-apppurple-200"> ${{ item.amount }}</figure>
                        <span class="text-xs font-normal text-text-purple">{{ item.currency }}</span>
                    </div>

                    <div class="flex flex-row space-x-[20px] items-center relative">
                        <span
                            class="text-xs font-medium text-text-purple hover:text-apppurple-300 hover:bg-[#F2F0F9] hover:w-[71px] hover:p-[5px] hover:rounded-[4px]">View
                            More <i class="hidden">{{ currentTab }}</i></span>
                        <div @click="toogleMore" class="">
                            <img src="/icons/More.svg" alt="">
                        </div>
                    </div>

                    <More v-if="open" class="absolute z-20 top-[86px] left-[1399px]" />
                </div>


                <div :class="{ 'is-hidden': isCollapsed }" v-if="!isCollapsed">
                    <div
                        class="flex flex-row text-xs font-semibold uppercase font-inter text-text-purple py-[15px]  gap-[20px]   bg-apppurple-600 px-[95px]">

                        <!-- Header Row -->
                        <div class="min-w-[120px]">Date</div>
                        <div class="min-w-[280px]">User Activity</div>
                        <div class="min-w-[220px]">
                            Detail
                        </div>
                    </div>
                    <div v-for="detail in item.details" :key="detail.id"
                        class="flex flex-row pl-[95px] font-normal text-sm bg-apppurple-400  pr-[80px] py-[13px] space-x-[30px] items-center">
                        <div class="min-w-[120px] text-text-purple">{{ detail.date }}</div>
                        <div class="min-w-[250px] text-apppurple-200">{{ detail.activity }}</div>
                        <div class="min-w-[525px] text-apppurple-200">
                            {{ detail.text }}
                        </div>
                    </div>
                </div>


            </div>
            <div class="flex justify-end bg-apppurple-400 rounded-lg rounded-t-lg px-[20px] py-[15px]">

            </div>
            <!-- Data  Row -->

        </div>
    </main>
</template>

<script>
import Filter from "@/components/filter.vue";
import More from "@/components/more.vue";
import { displayUsers, searchUsersInput } from "../data/hooks.js";

export default {
    data() {
        return {
            searchUsers: "",
            isOpen: false,
            open: false,
            isCollapsed: true,
            tableData: this.$store.state.tableData,
        };
    },
    computed: {
        id() {
            // Accessing ID from the Vuex store, assuming `currentId` is the state where ID is stored
            return this.$store.state.currentId;
        },
        currentTab() {
            let users = displayUsers(this.$store.state.currentTab, this.$store.state.tableData);
            this.tableData = users;
            return this.$store.state.currentTab;
        },
        totalAmount() {
            return this.tableData.reduce((total, item) => total + item.amount, 0);
        },
    },
    mounted() {
        if (this.id) {
            const state = this.getCollapseState();
            if (state && state.hasOwnProperty(this.id)) {
                this.isCollapsed = state[this.id];
            }
        }
        console.log("Mounted: isCollapsed =", this.isCollapsed);
    },
    methods: {
        toggleFilter() {
            this.isOpen = !this.isOpen;
        },
        getCollapseState() {
            const state = JSON.parse(localStorage.getItem("collapsibles")) || {};
            console.log("Get Collapse State:", state);
            return state;
        },
        saveCollapsedState(value) {
            const state = this.getCollapseState();
            state[this.id] = value;
            localStorage.setItem("collapsibles", JSON.stringify(state));
            console.log("Save Collapse State:", state);
        },
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
            this.saveCollapsedState(this.isCollapsed);
            console.log("Toggle Collapse: isCollapsed =", this.isCollapsed);
        },
        searchFunc() {
            if (this.searchUsers === "") {
                this.tableData = this.$store.state.tableData;
            } else {
                let users = searchUsersInput(this.searchUsers, this.$store.state.tableData);
                this.tableData = users;
            }
            console.log("Search Function: tableData =", this.tableData);
        },
    },
    watch: {
        isCollapsed(newValue) {
            if (this.id) {
                this.saveCollapsedState(newValue);
            }
            this.$emit("collapseChanged", newValue);
            console.log("Watch: isCollapsed =", newValue);
        }
    },
    created() {
        this.$store.dispatch('setTableData').then(() => {
            this.tableData = this.$store.state.tableData;
            console.log("Created: tableData =", this.tableData);
        });
    },
    components: {
        Filter,
        More,
    },
};
</script>
