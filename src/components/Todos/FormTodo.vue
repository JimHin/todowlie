<template>
     <div class="q-pa-md">
        <div v-if="this.$route.fullPath === '/todolist'" id="inputNewTodo" class="col">
            <q-form
            @submit="formSubmit"
            >
                <q-input v-if="newTodoOpen" v-model="todo.title" :rules="[val => !!val || 'Le titre est obligatoire']" label-color="teal" dark filled borderless focused label="Ajouter un élément" class="newtodo" id="task">
                    <q-avatar>
                        <q-icon ><q-btn type="submit" round color="secondary" v-if="newTodoOpen" icon="add" class="add_button_input" /></q-icon>
                    </q-avatar>
                </q-input>
            </q-form>
        </div>
        <div class="col" id="title">
            <q-toolbar-title class="title" v-if="!newTodoOpen" >
            Owlie Todolist
            </q-toolbar-title>
        </div>
        <div v-if="this.$route.fullPath === '/todolist'" class="col" id="plus">
            <q-btn round color="secondary" v-if="!newTodoOpen" icon="add" class="add_button" @click="newTodoOpen = !newTodoOpen"/>
        </div>
    </div>
</template>
<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'
export default {
  name: 'FormTodo',
  data () {
    return {
      // booléen permettant de savoir si input est affiché ou non
      newTodoOpen: false,
      // modèle d'une todo
      todo: {
        id: '',
        title: '',
        detail: '',
        completed: false
      }
    }
  },
  methods: {
    // Mappage des actions ('nomNamespace', ['nomGetter'])
    ...mapActions('todos', ['addTodo']),
    formSubmit () {
      // Appel l'action addTodo et lui passe la todo
      this.addTodo(this.todo)
      // Passe le booléen à false pour faire disparaître l'input
      this.newTodoOpen = false
    }
  }
}
</script>

<style lang='scss' scoped>
    #inputNewTodo{
        padding-left: 35%;
        padding-top: 13%;
        width: 160%;
    }
    #title{
        padding-top: 3%;
        padding-left: 25%;
    }
</style>
