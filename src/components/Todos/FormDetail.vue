<template>
     <div class="q-pa-md">
        <q-form
        @submit="formSubmit"
        >
            <q-input focused label="Modifier les détails" id="task"></q-input>
        </q-form>
    </div>
</template>
<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'
export default {
  name: 'FormDetail',
  data () {
    return {
      // booléen permettant de savoir si input est affiché ou non
      toggleEdition: false,
      props: {
        // On passe l'objet à modifier
        todoToUpdate: {
          type: Object
        }
      }
    }
  },
  methods: {
    // Mappage des actions ('nomNamespace', ['nomGetter'])
    ...mapActions('todos', ['modifyTodo']),
    formSubmit () {
      if (this.todo.id) {
      // Construction du payload
        const payload = {
          id: this.todo.id,
          updates: this.todo // Passe toutes les propriétés de la todo actuelle
        }
        // Appel l'action modifyTodo et lui passe le payload
        this.modifyTodo(payload)
      }
      // Demande la fermeture de la dialog au parent
      this.$emit('fermer')
    },
    mounted () {
      if (this.todoToUpdate) {
        // Copie les propriétés de tacheAModifier dans un nouvel objet vide
        this.todo = Object.assign({}, this.todoToUpdate)
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
