<template>
  <v-container>
    <v-layout row justify-start class="mb-3">
      <v-tooltip top>
        <v-btn 
        small flat color="grey"
        @click="sortBy('name')" 
        slot="activator"
        >
          <v-icon small left>person</v-icon>
          <span class="caption text-lowercase">By contact name</span>
        </v-btn>
        <span>Sort by contact name</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn 
        small flat color="grey"
        @click="sortBy('type')" 
        slot="activator"
        >
          <v-icon small left>favorite</v-icon>
          <span class="caption text-lowercase">By contact type</span>
        </v-btn>
        <span>Sort contact type</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn 
        small flat color="grey"
        @click="sortBy('name')" 
        slot="activator"
        >
          <v-icon small left>email</v-icon>
          <span class="caption text-lowercase">By email</span>
        </v-btn>
        <span>Sort by email</span>
      </v-tooltip>
    </v-layout>
    <v-card 
      flat
      v-for="(contact, id) in contacts"
      :key="id"
      >
        <v-layout row wrap :class="`pa-3 contact ${contact.type}`">
          <v-flex 
            @click="sendTo(id)"
            xs12 >
            <div class="caption grey--text">Name</div>
            <div>{{ contact.name }}</div>
          </v-flex>
          <v-flex xs6 >
            <div class="caption grey--text">Email</div>
            <div>{{ contact.email }}</div>
          </v-flex>
          <v-flex xs4>
            <div class="left">
              <v-chip small :class="`${contact.type} white--text my-2 caption`">{{ contact.type }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs2>
            <v-btn @click.prevent="deleteContact(id)" class="right" flat small>
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ContactList',
  data: () => ({
    contactTypes: null,
    localContacts: null
  }),
  computed: {
    ...mapState([
    'contacts'
  ]),

  },
  methods:{
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
    },
    sendTo(id){
      this.$router.push(`/contact/${id}`)
      // this.$store.dispatch('setSingleContact', id)
    },
    sortBy(prop) {
      this.$store.state.contacts.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  mounted() {
    this.contactTypes = this.$store.getters.getContactTypes
    this.localContacts = this.$store.getters.getContacts
  }
}
</script>

<style>
.contact.friend{
  border-left: 4px solid #3cd1c2;
}
.contact.family{
  border-left: 4px solid #ffaa2c;
}
.contact.enemy{
  border-left: 4px solid #f83e70;
}
.v-chip.friend{
  background: #3cd1c2;
}
.v-chip.family{
  background: #ffaa2c;
}
.v-chip.enemy{
  background: #f83e70;
}
</style>