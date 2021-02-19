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
    <AuthenticateIndex />
    </q-drawer>

    <q-page-container >
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
</style>
<script>
import AuthenticateIndex from 'pages/Authenticate'
import FormTodo from 'src/components/Todos/FormTodo.vue'
export default {
  name: 'MainLayout',
  components: {
    AuthenticateIndex,
    FormTodo
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {

  }
}
</script>
