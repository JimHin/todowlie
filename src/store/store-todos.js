// State : données du magasin
const state = {
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

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  MODIFY_TODO (state, payload) {
    console.log('Payload mutation:', payload)
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.todos.findIndex(el => el.id === payload.id)

    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.todos[index], payload.updates)
    }
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  modifyTodo ({ commit }, payload) {
    // Valide la mutation et y passe les données
    commit('MODIFY_TODO', payload)
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
