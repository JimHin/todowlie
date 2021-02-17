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
                <div class="col">
                    <div v-if="this.$route.fullPath === '/todolist'">
                        <q-btn round color="secondary" v-if="!newTodoOpen" icon="add" class="add_button" @click="newTodoOpen = !newTodoOpen"/>
                    </div>
                </div>
                <div class="col-6">
                     <q-toolbar-title class="title" v-if="!newTodoOpen">
                        Owlie Todolist
                    </q-toolbar-title>
                </div>
                <div class="col-3">
                    <div v-if="this.$route.fullPath === '/todolist'">
                        <q-input v-if="newTodoOpen" label-color="teal" dark filled borderless focused label="Ajouter un élément" class="newtodo" id="task">
                                <q-avatar>
                                    <q-icon ><q-btn round color="secondary" v-if="newTodoOpen" icon="add" class="add_button_input" @click="newTodoOpen = !newTodoOpen"/></q-icon>
                                </q-avatar>
                        </q-input>
                    </div>
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
    <AuthenticateIndex />
    </q-drawer>

    <q-page-container>
      <router-view />
      <div class="authenticate_button" v-if="this.$route.fullPath === '/'">
        <q-btn color="secondary" label="M'Authentifier" @click="leftDrawerOpen = !leftDrawerOpen" />
      </div>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
  /* header's height definition*/
  .header{
    height: 11em;
  }
  /* title's margin top increase */
  .title{
    margin-top: 25%;
  }
  /* authenticate button's container justify */
  .authenticate_button{
    display: flex;
    justify-content: center;
  }
  /* MDI icons style */
  .notification_icon{
    font-size: 2em;
  }
  .share_icon{
    font-size: 2em;
  }
  .search_icon{
    font-size: 2em;
  }
  .add_button{
    margin-top: 5em;
  }
  /* input newtodo style */
  .newtodo{
      margin-top: 3em;
      margin-left: -10em;
  }

</style>
<script>
import AuthenticateIndex from 'pages/Authenticate'

export default {
  name: 'MainLayout',
  components: {
    AuthenticateIndex
  },
  data () {
    return {
      leftDrawerOpen: false,
      newTodoOpen: false
    }
  },
  methods: {

  }
}
</script>
