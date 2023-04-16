<template>
  <div class="home">
    <div class="d-flex align-items-baseline justify-content-between border-bottom mb-4">
      <h1 class="mb-4"><i class="fas fa-angle-down me-2" />Liste des clients</h1>
      <BButton size="sm" iconLeft="circle-plus" :to="{ name: 'client', params: { id: -1 } }">
        Ajouter un client
      </BButton>
    </div>

    <p v-if="!clients || !clients.length" class="text-primary my-5">Aucun client pour l'instant.</p>

    <ClientList v-else>
      <ClientListItem
        v-for="client in clients"
        :key="client.id"
        :client="client"
        message="test"
        @delete="deleteClient($event)"
        @edit="editClient($event)"
      />
    </ClientList>


    <p class="text-center text-muted">
      {{ totalClients }} client<span v-if="totalClients > 1">s</span>
    </p>
  </div>
</template>

<script>
import ClientList from '@/components/ClientList.vue'
import ClientListItem from '@/components/ClientListItem.vue'
import { useClientStore } from '@/stores/client.js'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    ClientList,
    ClientListItem
  },
  computed: {
    ...mapState(useClientStore, ['clients', 'totalClients'])
  },
  mounted() {
    this.getAllClients()
  },
  methods: {
    ...mapActions(useClientStore, ['deleteClient', 'getAllClients']),

    editClient(id) {
      console.log('edit client with id : ', id)
      this.$router.push({
        name: 'client',
        params: { id }
      })
    }
  }
}
</script>
