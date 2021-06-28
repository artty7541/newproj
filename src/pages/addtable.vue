<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <div class="row">
          <div class="col-md-6">
            <h5>เพิ่มโต๊ะอาหาร</h5>
            
          </div>
        </div>
        <br>
      <div class="panel panel-info">
                        <div class="panel-heading ng-binding" style="border-bottom: none;">
                            โต๊ะอาหาร
                            <!--ng-if="config.count_table === '-1'"-->
                            <!-- ngIf: config.p_type=='month' --><div class="pull-right ng-scope" ng-if="config.p_type=='month'">
                                <small class="text-danger"></small> <button style="margin-top: 5px; margin-bottom: 20px;" class="btn btn-success m-b-lg btn-sm ng-binding" ng-click="addTable()">เพิ่ม</button>
                            </div><!-- end ngIf: config.p_type=='month' -->
                        </div>                                    
                        <div class="panel-body" style="padding: 0px;">
                            <table class="table  table-hover table-condensed bg-white-only">
                                <tbody><tr class="">
                                    <td style="" class="ng-binding">ชื่อ</td>
                                    <td style="width: 200px;" class="text-center ng-binding">ราคาเริ่มต้น</td>
                                    <td style="width: 300px;" class="text-center ng-binding">บาท/ชม.</td>
                                    <td style="width: 200px;" class="ng-binding">สถานะ</td>
                                    <td style="width: 200px;" class="ng-binding">โซน</td>
                                    <td style=" width: 118px;" class="text-center ng-binding">แก้ไข</td>
                                </tr>
                                <tr ng-repeat="t in table_new" class="ng-scope" style="">
                                    <td>
                                        <input type="text" class="form-control ng-pristine ng-valid ng-touched" ng-model="t.name" aria-invalid="false" style=""> 
                                    </td>
                                    <td>
                                        <input type="number" class="form-control ng-pristine ng-valid ng-touched" ng-model="t.price_start" aria-invalid="false" style="">
                                    </td>
                                    <td>

                                        <input type="number" class="form-control ng-pristine ng-valid ng-touched" ng-model="t.price_per_hour" aria-invalid="false" style="">
                                    </td>
                                    <td>
                                        <select class="form-control ng-pristine ng-valid ng-touched" ng-model="t.status" ng-options="s.value as s.text for s in statuses" aria-invalid="false" style=""><option label="show" value="number:2" selected="selected">show</option><option label="hide" value="number:1">hide</option></select>
                                    </td>
                                    <td>
                                        <select class="form-control ng-pristine ng-valid ng-touched" ng-model="t.group" ng-options="g.id as g.text for g in groups" aria-invalid="false" style=""><option label="ในร้าน" value="string:1144" selected="selected">ในร้าน</option></select>

                                    </td>
                                    <td class="text-center" style="padding: 9px 0px;">
                                        <div class="btn-group">
                                            <button type="button" ng-click="add_table(t, $index);" class="btn btn-sm btn-success ng-binding">
                                                บันทึก
                                            </button>
                                            <button type="button" ng-click="remove_add_table($index)" class="btn btn-sm btn-default ng-binding">
                                                ยกเลิก
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- ngRepeat: t in table_new -->
                                <!-- ngIf: table_new.length > 1 -->
                                <!-- ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope" style="">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ1
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ2
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                         <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ3
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        
                                         <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ4
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ6
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        
                                         <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ7
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        
                                         <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <!-- editable zonename (text with validation) -->
                                        <span editable-text="table.name" e-name="name" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            โต๊ะ8
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_start" e-name="price_start" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle text-center" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-text="table.price_per_hour" e-name="price_per_hour" e-form="rowform" onbeforesave="checkTableName($data, table.id)" e-required="" class="ng-scope ng-binding editable">
                                            0
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses" class="ng-scope ng-binding editable">
                                            show
                                        </span>
                                    </td>
                                    <td class="v-middle" ng-dblclick="add_edit_table(!rowform.$visible);
                                                rowform.$show()" tabindex="0">
                                        <span editable-select="table.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups" class="ng-scope ng-binding editable">
                                            ไม่ระบุ
                                        </span>
                                    </td>
                                    <td style=" width: 118px; padding: 5px" class="text-center">
                                        
                                        <div class="buttons" ng-show="!rowform.$visible" aria-hidden="false">
                                                  <div class="dropdown">
  <button type="button" ng-click="rowform.$show();
                                                        add_edit_table(true)" class="btn btn-info ng-binding">แก้ไข</button>
  <div class="dropdown-content">
  <a href="#">แก้ไข</a>
  <a href="#">ลบ</a>
  
  </div>
</div>
                                        </div>  
                                    </td>
                                </tr><!-- end ngRepeat: table in tables --><tr ng-repeat="table in tables" class="ng-scope">
                          
                             
                                    
                                </tr><!-- end ngRepeat: table in tables -->
                            </tbody></table>

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
<style >
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
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
.panel {
    border-radius: 2px;
}
.panel {
    border-radius: 2px;
}
.panel-info {
    border-color: #bce8f1;
}

.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
* {
    font-family: 'Kanit', sans-serif;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
body {
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
    background-color: transparent;
}
body {
    font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif!important;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
    background-color: transparent;
    overflow-x: hidden;
}
body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
}
html {
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0,200,0,0.8);
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0,200,0,.8);
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
</style>
