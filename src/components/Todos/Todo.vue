<template>
      <div id="todoMainContainer">
          <q-item
          clickable
          v-ripple
          :class="todo.completed ? 'bg-grey-5' : 'bg-grey-3'"
          >
          <q-item-section color="todo" class="title" @click="toggleDetail = !toggleDetail">
            <q-item-label>{{ todo.title }}</q-item-label>
          </q-item-section>
          <q-item-section side top @click="removeTodo({id: todo.id, updates: {completed: !todo.completed}})">
            <q-checkbox color="secondary" :value="todo.completed" class="no-pointer-events"/>
          </q-item-section>
          </q-item>
          <div class="detail" v-if="toggleDetail" contenteditable id="editable">
                {{ todo.detail }}
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
  data () {
    return {
      toggleDetail: false
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
    border: 1px solid rgb(190, 185, 185);
    padding: 5px;
  }
</style>
