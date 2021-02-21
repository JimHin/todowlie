<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
         <div class="q-pa-md">
            <div class="row">
                <div class="col">
                    <q-btn
                        flat
                        dense
                        round
                        icon="menu"
                        aria-label="Menu"
                        @click="leftDrawerOpen = !leftDrawerOpen"
                    />
                </div>
                <div class="col fit row wrap justify-around items-center content-around" >
                        <q-icon name="notifications" class="notification_icon"/>
                        <q-icon name="share" class="share_icon"/>
                        <q-icon name="search" class="search_icon"/>
                </div>
            </div>
            <div class="row">
                <div class="col" id="addButton">
                    <form-todo />
                </div>
                <div class="col-3">
                </div>
            </div>

        </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <div>
      <!-- Appel de la page Authenticate.vue : formulaire login register -->
      <authenticate v-if="!loggedIn" :tab="tab"/>
      <!-- Sinon appel de la page Logout.vue : bouton de déconnexion -->
      <div v-else>
        <p>Bonjour {{ /* l'email de l'utilisateur */}}</p>
       <logout />
      </div>
    </div>
    </q-drawer>

    <q-page-container >
      <router-view />
      <div class="authenticate_button" v-if="this.$route.fullPath === '/'">
        <q-btn color="secondary" label="M'Authentifier" @click="leftDrawerOpen = !leftDrawerOpen" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import FormTodo from 'src/components/Todos/FormTodo.vue'
export default {
  name: 'MainLayout',
  components: {
    // Les trois composants utilisés dans la SPA
    authenticate: require('pages/Authenticate').default,
    logout: require('pages/Logout').default,
    FormTodo
  },
  data () {
    return {
      // Booléen exprimant l'ouverture du menu side ou non
      leftDrawerOpen: false,
      tab: 'authenticate'
    }
  },
  computed: {
    // Spread du state vuex pour avoir accés au booléen loggedIn correspondant à utilisateur connecté ou non
    ...mapState('auth', ['loggedIn'])
  },
  methods: {

  }
}
</script>

<style scoped>
  /* hauteur du header*/
  .header{
    height: 11em;
  }
  /* marge haute du titre */
  .title{
    margin-top: 25%;
  }
  /* justification du container de bouton */
  .authenticate_button{
    display: flex;
    justify-content: center;
  }
  /* style des icônes MDI  */
  .notification_icon{
    font-size: 2em;
  }
  .share_icon{
    font-size: 2em;
  }
  .search_icon{
    font-size: 2em;
  }
</style>
