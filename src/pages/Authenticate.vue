<template>
<div class="q-pa-md" style="max-width: 400px">
    <div class="flex flex-start">
      <h5>Me connecter</h5>
      <p>Entrez vos identifiants pour vous connectez</p>
    </div>
    <q-form
      @submit="onSubmit"
      @register="onRegister"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Votre adresse email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Veuillez saisir votre email']"
      />

      <q-input
        filled
        type="string"
        v-model="key"
        label="Votre mot de passe *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Veuillez saisir votre mot de passe']"
      />

      <div>
        <q-btn label="Me Connecter" type="submit" color="secondary" to="/todolist"
          exact
          clickable/>
        <q-btn label="Créer un compte" type="reset" color="primary" flat class="q-ml-sm" to="/todolist"
          exact
          clickable/>
      </div>
    </q-form>

  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'AuthenticateIndex',
  data () {
    return {
      key: '',
      email: ''
    }
  }
}
</script>
