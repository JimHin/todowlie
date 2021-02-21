<template>
  <div class="q-pa-md q-gutter-sm" id="mainContent">
    <!-- La liste permettant d'itérer les todos du tableau -->
    <q-list separator >
      <q-item-label v-if="todos.length === 0" name="emptyList">Aucun élément</q-item-label>
      <!-- Appel au composant Todo.vue pour boucler le tableau des todos-->
      <todo v-for="todo in todos"
             :key="todo.id"
             :todo="todo">
      </todo>
    </q-list>
  </div>
</template>

<script>
// on importe mapGetters pour avoir accés aux données dans vuex
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    // On embarque le composant Todo
    Todo: require('components/Todos/Todo').default
    // Register: require('pages/TodoList.vue').default
  },
  computed: {
    // On récupère la donnée de vuex
    ...mapGetters('todos', ['todos'], 'newTodoOPen', ['newTodoOPen'])
  }
}
</script>
<style lang="scss" scoped>
  #mainContent{
    margin-top: 30px;
  }
</style>
