<template>
  <v-content>
    <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Contactsby</span>
          <span class>Nat</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn router to="/" flat color="grey">
          <span>Home</span>
          <v-icon right>home</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
  </v-content>
</template>

<script>
export default {
  name: 'NavBar'

}
</script>

<style>

</style>
