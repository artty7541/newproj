<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-grid-45"></i>
        <p>โต๊ะอาหาร</p>
      </sidebar-link>
      <sidebar-link to="/admin/addtable">
        <i class="nc-icon nc-bullet-list-67"></i>
        <p>เพิ่มโต๊ะอาหาร</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>รายการสั่งอาหาร</p>
      </sidebar-link>

      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>ผู้ดูแลระบบ</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-align-left-2"></i>
        <p>รายการสินค้า</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      <template slot="bottom-links">
        
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
