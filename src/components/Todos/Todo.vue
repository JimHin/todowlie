<template>
    <q-item
      @click="modifyTodo({id: todo.id, updates: {completed: !todo.completed}})"
      clickable
      v-ripple
      :class="todo.completed ? 'bg-grey-4' : 'bg-grey-2'"
    >
      <q-item-section color="todo">
        <q-item-label>{{ todo.title }}</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-checkbox color="secondary" :value="todo.completed" class="no-pointer-events"/>
      </q-item-section>
    </q-item>
</template>

<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('todos', ['modifyTodo'])
  }
}
</script>

<style>

</style>
