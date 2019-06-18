<template>
  <v-container class="text-xs-center">
    <v-dialog v-model="dialog" max-width="600px">
      <v-btn flat slot="activator" class="success">Add New Contact</v-btn>
      <v-card>
        <v-card-title>
          <h2>Add a Contact</h2>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-layout column>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="contact.name"
                    :rules="nameRules"
                    :counter="50"
                    label="Contact Name"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field
                    v-model="contact.type"
                    :rules="typeRules"
                    :counter="10"
                    label="Type of Contact"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="contact.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-flex>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  @click="submitContact(contact); dialog = false "

                >
                  Submit
                </v-btn>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'AddContact',
  data: () => ({
      valid: false,
      contact: { name: '', email: '', type: ''},
      nameRules: [
        v => !!v || 'Name is required',
      ],
      typeRules: [
        v => !!v || 'Contact Type is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      dialog: false,
      contactTypes: null
    }),
  methods: {
    submitContact(contact) {
      this.$store.dispatch('addContact', this.contact)
      this.contact = {}
      this.dialog = false
    }
  },
  mounted() {
    this.contactTypes = this.$store.getters.getContactTypes
  }
  

}
</script>

<style>

</style>
