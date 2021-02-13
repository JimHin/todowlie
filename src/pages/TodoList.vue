<template>
<div class="q-pa-md q-gutter-sm">
    <q-btn round color="secondary" icon="add" class="z-top add_button"/>
    <q-list>
    <q-item
      v-for="todo in todos"
      :key="todo.id"
      @click="todo.completed = !todo.completed"
      clickable
      v-ripple
    >
      <q-item-section side top flex>
        <q-item-label>{{ todo.title }}</q-item-label>
        <q-checkbox v-model="todo.completed" />
        <q-item-label caption lines="2">{{todo.content}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todos: [
        {
          id: 1,
          title: 'Acheter des piles',
          content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae eveniet reprehenderit eos provident voluptatum, deleniti facilis asperiores in. Delectus repellat nulla rerum? Quasi sint facere esse. Asperiores, tenetur corrupti.',
          completed: false,
          createdAt: '06.01.2021',
          completedAt: ''
        },
        {
          id: 2,
          title: 'Aller signer le contrat Owlie',
          content: '',
          completed: false,
          createdAt: '17.01.2021',
          completedAt: ''
        },
        {
          id: 3,
          title: 'Connecter l\'appli au firestore',
          content: '',
          completed: false,
          createdAt: '06.02.2021',
          completedAt: ''
        },
        {
          id: 4,
          title: 'conditionné accés à todolist au fait d\'être connecté',
          content: '',
          completed: false,
          createdAt: '06.02.2021',
          completedAt: ''
        }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
  .add_button{
    margin-top: -2em;
  }
</style>
