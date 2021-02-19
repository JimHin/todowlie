<template>
      <div id="todoMainContainer">
          <q-item
          clickable
          v-ripple
          :class="todo.completed ? 'bg-grey-5' : 'bg-grey-3'"
          >
          <!-- Titre de la tâche -->
          <q-item-section color="todo" class="title" @click="toggleDetail = !toggleDetail">
            <q-item-label>{{ todo.title }}</q-item-label>
          </q-item-section>
          <!-- Checkbox permettant la suppression d'une todo-->
          <q-item-section side top @click="removeTodo({id: todo.id, updates: {completed: !todo.completed}})">
            <q-checkbox color="secondary" :value="todo.completed" class="no-pointer-events"/>
          </q-item-section>
          </q-item>
          <div v-if="toggleDetail">
            <q-item class="detail" id="editable" >
              {{ todo.detail }}
            </q-item>
            <q-icon
              name="create"
              class="create_icon"
              @click.stop="displayFormDetail = true"
              icon="edit"
              id="penIcon"
              style="font-size: 1.5em; margin-left: 60%;"
              />
            <!-- Appel au composant FormDetail.vue  charger d'afficher le formulaire permettant la modification des détails d'une todo-->
            <q-dialog
              v-model="displayFormDetail"
              persistent
            >
            <q-card>
               <form-detail
                @fermer="displayFormDetail = false"
                bouton="Ajouter"
              >
              </form-detail>
            </q-card>
            </q-dialog>
          </div>
          <div class="detail" v-if="!toggleDetail">
                {{ todo.detail.substr(0, 30) }} ...
          </div>
        </div>
</template>

<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'
export default {
  name: 'Todo',
  components: {
    'form-detail': require('components/Todos/FormDetail').default
  },
  data () {
    return {
      toggleDetail: false,
      displayFormDetail: false
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('todos', ['removeTodo'])
  }
}
</script>

<style>
  .detail{
    width: 100%;
    background-color: white;
    min-height: 30px;
  }
  #todoMainContainer{
    margin-top: 1em;
  }
  #editable {
    padding: 5px;
  }
  #done {
    margin-left: 15%;
    font-size: 1.5em;
  }
</style>
