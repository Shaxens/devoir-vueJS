<template>
  <div class="client">
    <header class="d-flex align-items-baseline justify-content-between border-bottom mb-4">
      <h1>
        {{ isNewClient ? 'Créer un nouveau ' : 'Modifier le' }} client
        <span v-if="!isNewClient && client" class="text-primary">{{ client.firstName }} {{ client.lastName }}</span>
      </h1>
      <div class="d-flex gap-2">
        <BButton
          v-if="!isNewClient"
          size="sm"
          variant="outline-danger"
          icon-left="trash"
          @click="onDeleteClient()"
          >Supprimer</BButton
        >
        <BButton to="/clients" size="sm" variant="outline-secondary" icon-left="angle-left"
          >Annuler</BButton
        >
      </div>
    </header>

    <section v-if="client">
      
      <h4 class="mb-4">Contact:</h4>

      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="mb-3 row">
            <label for="firstName" class="col-sm-4 col-form-label">Prénom:</label>
            <div class="col-sm-8">
              <input v-model.number="client.firstName" class="form-control" id="firstName" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="mb-3 row">
            <label for="lastName" class="col-sm-2 col-form-label">Nom:</label>
            <div class="col-sm-8">
              <input v-model="client.lastName" class="form-control" id="lastName" />
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-3">
          <div class="mb-3 row">
            <label for="addedDate" class="col-sm-5 col-form-label">Date d'ajout:</label>
            <div class="col-sm-7">
              <input v-model="client.addedDate" class="form-control" id="addedDate" disabled :arialabel="client.addedDate" type="date"/>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="mb-3 row">
            <label for="office" class="col-sm-4 col-form-label">Fonction:</label>
            <div class="col-sm-8">
              <input v-model.number="client.office" class="form-control" id="office" />
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-6">
          <div class="mb-3 row">
            <label for="phone" class="col-sm-2 col-form-label">Téléphone:</label>
            <div class="col-sm-8">
              <input v-model="client.phone" class="form-control" id="phone" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9 col-lg-8">
          <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-8">
              <input v-model="client.email" class="form-control" id="email" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9 col-lg-8">
          <div class="mb-3 row">
            <label for="company" class="col-sm-2 col-form-label">Entreprise:</label>
            <div class="col-sm-8">
              <input v-model="client.company" class="form-control" id="company" />
            </div>
          </div>
        </div>
      </div>

      <h4 class="mb-4 mt-3">Coordonnées</h4>

      
      <div class="row">
        <div class="col-md-9 col-lg-8">
          <div class="mb-3 row">
            <label for="addressLine1" class="col-sm-2 col-form-label">Adresse 1:</label>
            <div class="col-sm-8">
              <input v-model="client.addressLine1" class="form-control" id="addressLine1" />
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-9 col-lg-8">
          <div class="mb-3 row">
            <label for="addressLine2" class="col-sm-2 col-form-label">Adresse 2:</label>
            <div class="col-sm-8">
              <input v-model="client.addressLine2" class="form-control" id="addressLine2" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="mb-3 row">
            <label for="zipCode" class="col-sm-4 col-form-label">Code postal:</label>
            <div class="col-sm-8">
              <input v-model.number="client.zipCode" class="form-control" id="zipCode" />
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-6">
          <div class="mb-3 row">
            <label for="city" class="col-sm-2 col-form-label">Ville:</label>
            <div class="col-sm-8">
              <input v-model="client.city" class="form-control" id="city" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="mb-3 row">
            <label for="country" class="col-sm-4 col-form-label">Pays :</label>
            <div class="col-sm-8">
              <select
                class="form-select"
                :arialabel="country"
                v-model="client.selectedCountry"
                id="country"
              >
                <option disabled>Choisir</option>
                <option
                  v-for="country in client.country"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" v-model="debug" id="debug" />
            <label class="form-check-label" for="debug"> Debug </label>
          </div>
        </div>
        <div class="col text-end">
          <b-button @click="onSaveClient()" icon-right="fas fa-floppy-disk">
            {{ isNewClient ? 'Enregistrer' : 'Modifier' }}
          </b-button>
        </div>
      </div>
    </section>

    <pre class="card p-2" v-if="debug">
      {{ client }}
    </pre>
  </div>
</template>

<script>

import { mapState, mapActions } from 'pinia'
import { useClientStore } from '../stores/client.js'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      debug: false,
    }
  },
  computed: {
    ...mapState(useClientStore, ['client']),
    isNewClient() {
      return !this.$route.params.id || this.$route.params.id === '-1'
    },
  },
  async mounted() {
    console.log(this.$route.params.id)
    console.log(this.$route.params.id)
    // au chargement du composant, en fonction de l'id passé dans la route, sous forme de props..
    if (this.isNewClient) {
      // soit je crée un nouveau formulaire (venant du store)
      this.createClient()
    } else {
      // soit je remplis le formulaire avec les données d'une facture existante (venant du store)
      await this.getClient(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(useClientStore, ['createClient', 'getClient', 'saveClient', 'deleteClient']),
    onDeleteClient() {
      this.deleteClient(this.$route.params.id)
      this.$router.push('/clients')
    },
    async onSaveClient() {
      await this.saveClient({
        ...this.client,
      })
      this.$router.push('/clients')
    }
  }
}
</script>
