// State : données du magasin
const state = {
  todos: [
    {
      id: 1,
      title: 'Acheter des piles',
      detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae eveniet reprehenderit eos provident voluptatum, deleniti facilis asperiores in. Delectus repellat nulla rerum? Quasi sint facere esse. Asperiores, tenetur corrupti.',
      completed: false
    },
    {
      id: 2,
      title: 'Aller signer le contrat Owlie',
      detail: '',
      completed: false
    },
    {
      id: 3,
      title: 'Connecter l\'appli au firestore',
      detail: '',
      completed: false
    },
    {
      id: 4,
      title: 'conditionné accés à todolist au fait d\'être connecté',
      detail: '',
      completed: false
    }
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  REMOVE_TODO (state, payload) {
    // console.log('Payload mutation:', payload)
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.todos.findIndex(el => el.id === payload.id)
    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.todos[index], payload.updates)
      // Filtre les données du tableau
      // et garde les tâches dont l'id est différent de celui à supprimer
      state.todos = state.todos.filter(el => el.id !== payload.id)
    }
  },
  ADD_TODO (state, todo) {
    // Ajout de la tâche à fin du tableau
    state.todos.push(todo)
  },
  UPDATE_TODO (state, payload) {
    // console.log('Payload mutation:', payload)
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.todos.findIndex(el => el.id === payload.id)
    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.todos[index].detail, payload.updates)
      state.todos = state.todos.filter(el => el.id !== 0)
    }
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  removeTodo ({ commit }, payload) {
    // Valide la mutation et y passe les données
    commit('REMOVE_TODO', payload)
  },
  addTodo ({ commit }, todo) {
    let uId = 1
    // Si le tableau contient des éléments
    if (state.todos.length) {
      // Récupère l'id MAX et lui ajoute 1
      uId = Math.max(...state.todos.map(todo => todo.id)) + 1
    }
    // Ajoute le nouvel id à la tache
    todo.id = uId
    // Commite l'ajout
    commit('ADD_TODO', todo)
  },
  modifyTodo ({ commit }, payload) {
    commit('UPDATE_TODO', payload)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  todos: function (state) {
    return state.todos
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
