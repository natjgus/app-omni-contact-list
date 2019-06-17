<template>
  <v-container class="my-5">

    <v-layout row wrap>
      <v-flex xs12 >
        <v-card flat class="text-xs-center ma-3" >
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img src="../assets/pogo-on-dock.jpg">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ singleContact.name }}</div>
            <div class="grey--text">{{ singleContact.type }}</div>
            <div class="body-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span class="">Message</span>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return{
      singleContact: null
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.singleContact = this.$store.state.contacts[id];
  },
  computed: mapState([
    'contacts'
  ]),
  setSingleContact: function() {
    return this.singleContact = contacts
  }
	

}
</script>

<style>

</style>
