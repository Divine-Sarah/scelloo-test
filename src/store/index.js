import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        tableData: [
            {}
        ]
    },
    mutations: {
        setTableData(state, payload) {
            state.tableData = payload;
        }
    },
    actions: {
        setTableData({ commit }) {
            const setTableData = [
                { id: 1, name: 'Justin Septimus', userStatus: 'Active', paymentStatus: 'Paid', amount: '$200', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 2, name: 'Anika Rhiel Madsen', userStatus: 'Active', paymentStatus: 'Overdue', amount: '$300', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 3, name: 'Miracle Vaccaro', userStatus: 'Active', paymentStatus: 'Paid', amount: '$250', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 4, name: 'Erin Levin', userStatus: 'Active', paymentStatus: 'Unpaid', amount: '$200', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 5, name: 'Mira Herwitz', userStatus: 'Inactive', paymentStatus: 'Paid', amount: '$200', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 6, name: 'Jaxson Siphron ', userStatus: 'Inactive', paymentStatus: 'Paid', amount: '$750', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 7, name: 'Mira Levin', userStatus: 'Active', paymentStatus: 'Unpaid', amount: '$200', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 8, name: 'Lincoln Levin', userStatus: 'Active', paymentStatus: 'Paid', amount: '$370', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 9, name: 'Phillip Saris', userStatus: 'Inactive', paymentStatus: 'Unpaid', amount: '$200', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                { id: 10, name: 'Cheyenne Ekstrom Bothman', userStatus: 'Inactive', paymentStatus: 'Paid', amount: '$150', email: 'example@email.com', loginDate: 'Last login: 14/APR/2020', datePaid: 'Paid on 15/APR/2020', currency: 'USD' },
                // Add more fake data as needed
            ]
            commit('setTableData', setTableData);
        },
    },
    getters: {

    },

    plugins: [createPersistedState()]
})