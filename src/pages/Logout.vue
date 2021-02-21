<template>
<div class="q-pa-md" style="max-width: 400px">
  <div v-if="!this.$store.state.loggedIn">
    <div class="flex flex-start">
    </div>
      <div>
        <q-btn label="Me Déconnecter" type="submit" color="secondary" @click="logoutUser"/>
      </div>
  </div>
  </div>
</template>
>
<script>
import { mapActions } from 'vuex'

export default {
// composant exprimant le message bonjour à l'utilisateur et du bouton de déconnexion
  name: 'AuthenticateIndex',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
<style scoped>

</style>
