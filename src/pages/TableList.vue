<template>

  <div class="content">

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ">
          <card
            class="strpied-tabled-with-hover card shadow"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">รายการอาหารที่สั่ง</h4>
             
            </template>
            <div class="col-md-12">
              <div class="row col-md-12 col-md-offset-2 custyle">
                
                <div>
                  <b-card  >
                    <b-tabs pills card vertical>
                      <b-tab title="รายการอาหารโต๊ะ 1" active
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
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ</a
                                >
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                          </table></b-card-text
                        ></b-tab
                      >
                      <b-tab title="รายการอาหารโต๊ะ 2"
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
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ</a
                                >
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                          </table></b-card-text></b-tab
                      >
                      <b-tab title="รายการอาหารโต๊ะ 3"
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
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ
                                </a>
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>-</td>
                              <td>-</td>
                              <td class="text-center">
                                <a class="btn btn-info btn-xs" href="#"
                                  ><span
                                    class="glyphicon glyphicon-edit"
                                  ></span>
                                  สั่งทำ</a
                                >
                                <a href="#" class="btn btn-danger btn-xs"
                                  ><span
                                    class="glyphicon glyphicon-remove"
                                  ></span>
                                  ยกเลิก</a
                                >
                              </td>
                            </tr>
                          </table></b-card-text></b-tab
                      >
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </div>
          </card>

        </div>

      </div>




    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout",
  },

  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park",
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten",
  },
];
export default {
  components: {
    LTable,
    Card,
  },
  data() {
    return {
      table1: {
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>

<style>

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
