<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <div class="row">
          <div class="col-md-6">
            <h5>รายการสินค้าที่ถูกยกเลิก</h5>
            
          </div>
        </div>
        <br>
      
        <div class="places-buttons">
          <div class="row justify-content-center">
           
               <div class="col-md-12">
              <div class="row col-md-12 col-md-offset-2 custyle">
                
                <div>
                  <b-card  >
                    <b-tabs pills card vertical>
                      <b-tab title="รายการยกเลิกโต๊ะ 1" active
                        ><b-card-text style="width: 60vw">
                          <table class="table table-striped custab">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>ชื่ออาหาร</th>
                                <th>จำนวน</th>
                                <th class="text-center">ราคา</th>
                              </tr>
                            </thead>
                            <tr>
                              <td>1</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                                -
                                
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                                -
                                
                               
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td>
                               
                               -
                              
                              </td>
                            </tr>
                          </table></b-card-text
                        ></b-tab
                      >
                      <b-tab title="รายการยกเลิกโต๊ะ 2"
                        ><b-card-text style="width: 60vw"> <table class="table table-striped custab">
                            <thead>
                              <tr>
                                 <th>ID</th>
                                <th>ชื่ออาหาร</th>
                                <th>จำนวน</th>
                                <th class="text-center">ราคา</th>
                              </tr>
                            </thead>
                            <tr>
                              <td>1</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                               
                                -
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                              -
                                
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                                -
                              </td>
                            </tr>
                          </table></b-card-text></b-tab
                      >
                      <b-tab title="รายการยกเลิกโต๊ะ 3"
                        ><b-card-text style="width: 60vw"> <table class="table table-striped custab">
                            <thead>
                              <tr>
                                 <th>ID</th>
                                <th>ชื่ออาหาร</th>
                                <th>จำนวน</th>
                                <th class="text-center">ราคา</th>
                              </tr>
                            </thead>
                            <tr>
                              <td>1</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                                -
                                
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                               -
                                
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td >
                               -
                                
                              </td>
                            </tr>
                          </table></b-card-text></b-tab
                      >
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </div>
            </div>
          </div>
         
          
      
      </card>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style lang="scss">
.nav .nav-item .nav-link:focus {
     background-color: #007bff
     ; 
}
.nav .nav-item 
.nav-link:hover{
color: #a09f9f;
}
.btn-xs {
  margin: 5px;
}
</style>
