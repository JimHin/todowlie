<template>
  <div id="app">
    <form>
      <label>
        <input v-model="newTodo" type="text"/>
        <button type="submit" @click.prevent="addTodo()">Ajouter</button>
      </label>
    </form>
  </div>
</template>

<script>
import { todosCollection } from '../services/firebase/base'
export default {
  name: 'TodoList',
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo () {
      todosCollection.add({
        text: this.newTodo,
        completed: false,
        createdAt: new Date()
      })
        .then(function (docRef) { console.log('Document écrit avec ID: ', docRef.id) })
        .catch(function (error) { console.error('Erreur lors de l\'ajout du document:', error) })
      this.newTodo = ''
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
