<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="title">
          Owlie Todolist
        </q-toolbar-title>

        <div class="mdi">
          <q-icon name="notifications" class="notification_icon"/>
          <q-icon name="share" class="share_icon"/>
          <q-icon name="search" class="search_icon"/>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    </q-drawer>

    <q-page-container>
      <router-view />
      <div class="authenticate_button">
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
    margin-top: 31%;
  }
  /* authenticate button's container justify */
  .authenticate_button{
    display: flex;
    justify-content: center;
  }
  /* MDI icons container style */
  .mdi{
    display: flex;
    justify-content: space-around;
    max-width: 50%;
    width: 40%;
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
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
