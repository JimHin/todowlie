<template>
     <div class="q-pa-md">
        <q-icon name="create" class="create_icon" @click="toggleEdition = !toggleEdition" id="penIcon" style="font-size: 1.5em; margin-left: 60%;"/>
        <q-form
        @submit="formSubmit"
        >
            <q-input v-if="toggleEdition" focused label="Ajouter ou modifier les détails" class="newtodo" id="task"></q-input>
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
      // modèle d'une todo
      todo: {
        id: '',
        title: '',
        detail: '',
        completed: false
      },
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
      // Construction du payload
      const payload = {
        detail: this.todo.detail,
        updates: this.todo // Passe toutes les propriétés de la todo actuelle
      }
      // Appel l'action modifyTodo et lui passe le payload
      this.modifyTodo(payload)
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
