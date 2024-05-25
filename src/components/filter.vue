<template>
    <main>
        <div
            class="w-[224px] h-full min-h-[307px]  border border-apppurple-100 rounded-md bg-appwhite px-[10px] py-[20px]">
            <div class="space-y-[10px] font-normal">
                <h1 class="text-xs uppercase text-text-purple">Sort by:</h1>
                <section class="space-y-[10px]  text-sm text-apppurple-200">
                    <div class="flex items-center justify-between space-x-[117px]">
                        <p>Default</p>
                        <input type="radio" name="" id="">
                    </div>
                    <div class="flex items-center justify-between">
                        <p>First Name</p>
                        <input type="radio" name="" id="">
                    </div>
                    <div class="flex items-center justify-between">
                        <p>Last Name</p>
                        <input type="radio" name="" id="">
                    </div>
                    <div class="flex items-center justify-between">
                        <p>Due Date</p>
                        <input type="radio" name="" id="">
                    </div>
                    <div class="flex items-center justify-between">
                        <p>Last Login</p>
                        <input type="radio" name="" id="">
                    </div>

                </section>

                <hr>

                <h1 class="text-xs uppercase text-text-purple">Users:</h1>
                <!-- <div>
                
                    <input type="radio" id="all" value="All" v-model="selectedOption" @change="filterUsers">
                    <label for="all">All</label>

                    <input type="radio" id="active" value="Active" v-model="selectedOption" @change="filterUsers">
                    <label for="active">Active</label>

            
                    <div v-for="userStatus in setTableData" :key="userStatus.id">
                        {{ user.userStatus }}
                    </div>
                </div> -->
                <section class="space-y-[10px]  text-sm text-apppurple-200">
                    <div class="flex items-center justify-between space-x-[117px]">
                        <label for="all">All</label>
                        <input type="radio" name="" id="" v-model="selectedOption" @change="filterUsers">
                    </div>
                    <div class="flex items-center justify-between">
                        <label for="active">Active</label>
                        <input type="radio" name="" id="" v-model="selectedOption" @change="filterUsers">
                    </div>
                    <div class="flex items-center justify-between">
                        <label for="active">Inactive</label>
                        <input type="radio" name="" id="" v-model="selectedOption" @change="filterUsers">
                    </div>

                </section>
            </div>
        </div>
    </main>
</template>

<script>
import { displayUsers } from "../data/hooks.js";

export default {
    data() {
        return {
            selectedOption: "All", // Default selected option
            tableData: this.$store.state.tableData,
        };
    },
    computed: {
        // Computed property to filter users based on the selected option
        filteredUsers() {
            return displayUsers(this.selectedOption, this.tableData);
        },
    },
    methods: {
        // Method to filter users when the selected option changes
        filterUsers() {
            this.filteredUsers = displayUsers(this.selectedOption, this.tableData);
        },
    },
};
</script>
