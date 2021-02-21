<template>
<div class="q-pa-md" style="max-width: 400px">
    <div class="flex flex-start">
      <h5>Me connecter</h5>
      <p>Entrez vos identifiants pour vous connectez</p>
    </div>
    <q-form
      @submit="submitForm"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="formData.email"
        ref="email"
        label="Votre adresse email *"
        lazy-rules
        :rules="[ val => isValidEmailAddress(val) || 'Veuillez saisir une adresse email valide']"
      />

      <q-input
        filled
        type="string"
        ref="password"
        v-model="formData.password"
        label="Votre mot de passe *"
        lazy-rules
        :rules="[ val => val && val.length > 6 || 'Veuillez saisir un mot de passe d\'au moins 6 caractères']"
      />

      <div>
        <q-btn label="Me Connecter" type="submit" color="secondary" @click="ifLogin = true"/>
        <q-btn label="Créer un compte" type="submit" color="primary" flat class="q-ml-sm" @click="ifRegister = true"/>
      </div>
    </q-form>

  </div>
</template>
<style scoped>

</style>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AuthenticateIndex',
  props: ['tab'],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
      ifLogin: false,
      ifRegister: false
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    // méthode de validation de la saisie de l'email par l'utilisateur
    isValidEmailAddress (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm () {
      // Validation de l'email et du password
      this.$refs.email.validate()
      this.$refs.password.validate()
      // Si les valeurs actuelles de email et password ne lèvent pas d'erreur
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        // si le formulaire est soumis avec le bouton login
        if (this.ifLogin === true) {
          console.log('login user')
          this.loginUser(this.formData)
          this.ifLogin = false
        }
        // si le formulaire est soumis avec le bouton register
        if (this.ifRegister === true) {
          console.log('register user')
          this.registerUser(this.formData)
          this.ifRegister = false
        }
      }
    }
  }
}
</script>
