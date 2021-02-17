<template>
  <div class="q-pa-md q-gutter-sm">
    <q-list separator >
      <todo v-for="todo in todos"
             :key="todo.id"
             :todo="todo">
      </todo>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  components: {
    Todo: require('components/Todos/Todo').default
  },
  computed: {
    ...mapGetters('todos', ['todos'])
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
