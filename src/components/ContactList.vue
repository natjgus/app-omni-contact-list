<template>
  <v-container>
    <v-card 
      flat
      v-for="(contact, id) in contacts"
      :key="id"
      >
        <v-layout row wrap :class="`pa-3 contact ${contact.type}`">
          <v-flex 
            @click="sendTo(id)"
            xs12 md6>
            <div class="caption grey--text">Name</div>
            <div>{{ contact.name }}</div>
          </v-flex>
          <v-flex xs5 sm4 md2>
            <div class="caption grey--text">Email</div>
            <div>{{ contact.email }}</div>
          </v-flex>
          <v-flex xs2>
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
  computed: mapState([
    'contacts'
  ]),
  methods:{
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
    },
    sendTo(id){
      this.$router.push(`/contact/${id}`)
      // this.$store.dispatch('setSingleContact', id)
    }
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
