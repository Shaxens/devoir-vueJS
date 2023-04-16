import { defineStore } from 'pinia'
import clientInterface from '../interfaces/clientInterface.js'
import cloneDeep from 'lodash.clonedeep'
import axios from 'axios'
const useClientStore = defineStore('client', {
  state: () => ({
    client: null,
    clients: []
  }),
  getters: {
    totalClients: (state) => state.clients.length
  },
  actions: {
    async getAllClients() {
      try {
        const response = await axios.get('/clients')
        console.log(response.data)
        this.$patch({ clients: cloneDeep(response.data) })
      } catch (error) {
        console.log(error)
      }
    },

    createClient() {
      console.log("Création d'un nouveau client")
      console.log(clientInterface)
      this.$patch({ client: cloneDeep(clientInterface) })
    },

    async getClient(id) {
      try {
        const response = await axios.get(`/clients/${id}`)
        console.log(response.data)
        this.$patch({ client: cloneDeep(response.data) })
      } catch (error) {
        console.log(error)
      }
    },

    async saveClient(client) {

      if (client._id) {
        try {
          const response = await axios.patch(`/clients/${client._id}`, client)
          console.log('patch response ', response.data)
          this.$reset()
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log("création d'un nouveau client")
        try {
          const response = await axios.post(`/clients`, client)
          console.log('post response ', response.data)
          this.$reset()
        } catch (error) {
          console.log(error)
        }
      }
    },

    async deleteClient(id) {
      try {
        const response = await axios.delete(`/clients/${id}`)
        console.log('delete response ', response.data)
        this.getAllClients()
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export { useClientStore }
