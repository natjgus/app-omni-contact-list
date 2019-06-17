<template>  
  <v-content>
      <AddContact></AddContact>
      <ContactList></ContactList>
    </v-content>
</template>

<script>
import ContactList from '.././components/ContactList'
import AddContact from '.././components/AddContact'

export default {
  name: 'App',
  components: {
    ContactList,
    AddContact
  },
  data () {
    return {
      //
    }
  }
}
</script>
