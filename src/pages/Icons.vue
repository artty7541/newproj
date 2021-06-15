<template>

  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 ">
          <card class="card shadow">
            <template slot="header">
              <h4 class="card-title ">โต๊ะอาหาร</h4>
            </template>
            <div class="">
              <div class="row ">
                <div>
                  <button class="button row">
                    <div class="">
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A1
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button row">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A2
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A3
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A4
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A5
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A6
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A7
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A8
                    </div>
                  </button>
                </div>
                <div>
                  <button class="button">
                    <div>
                      <img class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A9
                    </div>
                  </button>
                </div>
                <div>
                <li>
                
         <a class="btn btn-lg btn-info " href="#">
         <i class="glyphicon glyphicon-dashboard pull-left " ></i><span>+<br></span></a> 
            
        </li>
                </div>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-4 ">
          <div class="card shadow-sm">
            <div class="card-header pt-4 card shadow">
              <h3 class="card-title">
                <i class="fas fa-cart-arrow-down"></i>
                รายละเอียด
              </h3>
              <table style="width: 130%">
                <br />
                <tr>
                  <td>โต๊ะอาหาร</td>

                  <span class="badge badge-success"> A1 </span>
                </tr>
                <hr />
                <tr>
                  <td>จำนวนรายการ</td>

                  <span class="badge badge-success"> 2 รายการ </span>
                </tr>
                <hr />
                <tr>
                  <td>เวลาสั่งอาหาร</td>

                  <span class="badge badge-success"> 12.30 น. </span>
                </tr>
                <hr />
                <tr>
                  <td>เวลารออาหาร</td>

                  <span class="badge badge-success"> 10 น.</span>
                </tr>
                <hr />
                <tr>
                  <td>ราคารวม</td>

                  <span class="badge badge-success"> 100 </span>
                </tr>
              </table>
              
              <br />
              
            </div>
            
          </div>
          <div class="row">
          <div class="col-md-4 ">
                  <button class="button1">
                    
                    <div>
                      <img class="img2"
                        src="../../documentation/img/qrcode.png"
                        alt="table"
                        style="width: 70px"
                      />
                      QR-Code
                    </div>
                  </button>
                </div>
                <div class="col-md-4">
                  <button class="button1">
                    <div>
                      <img class="img2"
                        src="../../documentation/img/recycle.jpg"
                        alt="table"
                        style="width: 70px"
                      />
                      ประวัติ
                      
                    </div>
                  </button>
                </div>
                <div class="col-md-4">
                  <button class="button1">
                    <div>
                      <img class="img2"
                        src="../../documentation/img/bin.png"
                        alt="table"
                        style="width: 70px"
                      />
                    รายการยกเลิก
                     
                    </div>
                  </button>
                </div>
          </div>
        </div>
      </div>
      
    </div>

    <div class="col-md-8">
      <card class="card shadow">
        <template slot="header">
          <h4 class="card-title">รายการอาหารที่สั่งทั้งหมด</h4>
        </template>
        <div class="all-icons">
          <div class="row">
            <div class="card-body">
              <div
                id="logs_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="logs_length">
                      <label
                        >แสดงข้อมูล
                        <select
                          name="logs_length"
                          aria-controls="logs"
                          class="
                            custom-select custom-select-sm
                            form-control form-control-sm
                          "
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        แถว</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div id="logs_filter" class="dataTables_filter text-right">
                      ค้นหา<label
                        ><input
                          type="search"
                          class="form-control form-control-sm"
                          placeholder=""
                          aria-controls="logs"
                      /></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      id="logs"
                      class="table table-hover dataTable no-footer dtr-inline"
                      width="100%"
                      role="grid"
                      aria-describedby="logs_info"
                      style="width: 100%"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="align-middle sorting sorting_asc"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 81.6px"
                            aria-sort="ascending"
                            aria-label="สถานะ: activate to sort column descending"
                          >
                            สถานะ
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 102.6px"
                            aria-label="รหัสสั่งซื้อ: activate to sort column ascending"
                          >
                            รหัสสั่งซื้อ
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 161.6px"
                            aria-label="ผู้สั่งซื้อ: activate to sort column ascending"
                          >
                            ผู้สั่งซื้อ
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 145.6px"
                            aria-label="ราคารวม (บาท): activate to sort column ascending"
                          >
                            ราคารวม (บาท)
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 125.6px"
                            aria-label="วันที่สั่งซื้อ: activate to sort column ascending"
                          >
                            วันที่สั่งซื้อ
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 122.6px"
                            aria-label="หมายเหตุ: activate to sort column ascending"
                          >
                            หมายเหตุ
                          </th>
                          <th
                            class="align-middle sorting"
                            tabindex="0"
                            aria-controls="logs"
                            rowspan="1"
                            colspan="1"
                            style="width: 114.6px"
                            aria-label="จัดการ: activate to sort column ascending"
                          >
                            จัดการ
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="odd">
                          <td
                            class="align-middle dtr-control sorting_1"
                            tabindex="0"
                          >
                            <span class="badge badge-success">
                              ชำระเงินแล้ว
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="info.php?o_id=PO00001"
                              class="btn btn-outline-primary p-1"
                            >
                              PO00001
                            </a>
                          </td>
                          <td class="align-middle">
                            <a href="../members/profile.php?id=1"> - </a>
                          </td>
                          <td class="align-middle">-</td>
                          <td class="align-middle">
                            <span class="text-muted small">
                              - <br />
                              -</span
                            >
                          </td>
                          <td class="align-middle">
                            <span class="text-muted">อื่นๆ.... </span>
                          </td>
                          <td class="align-middle">
                            <router-link to="icon/Info" class="btn btn-info">
                              <i class="fas fa-search"></i> ดูข้อมูล
                            </router-link>
                          </td>
                        </tr>
                        <tr class="even">
                          <td
                            class="align-middle dtr-control sorting_1"
                            tabindex="0"
                          >
                            <span class="badge badge-success">
                              ชำระเงินแล้ว
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="info.php?o_id=PO00002"
                              class="btn btn-outline-primary p-1"
                            >
                              PO00002
                            </a>
                          </td>
                          <td class="align-middle">
                            <a href="../members/profile.php?id=2"> - </a>
                          </td>
                          <td class="align-middle">-</td>
                          <td class="align-middle">
                            <span class="text-muted small">
                              - <br />
                              -</span
                            >
                          </td>
                          <td class="align-middle">
                            <span class="text-muted"> อื่นๆ </span>
                          </td>
                          <td class="align-middle">
                            <router-link to="icon/Info" class="btn btn-info">
                              <i class="fas fa-search"></i> ดูข้อมูล
                            </router-link>
                          </td>
                        </tr>
                        <tr class="odd">
                          <td
                            class="align-middle dtr-control sorting_1"
                            tabindex="0"
                          >
                            <span class="badge badge-success">
                              ชำระเงินแล้ว
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="info.php?o_id=PO00003"
                              class="btn btn-outline-primary p-1"
                            >
                              PO00003
                            </a>
                          </td>
                          <td class="align-middle">
                            <a href="../members/profile.php?id=3"> - </a>
                          </td>
                          <td class="align-middle">-</td>
                          <td class="align-middle">
                            <span class="text-muted small">
                              - <br />
                              -</span
                            >
                          </td>
                          <td class="align-middle">
                            <span class="text-muted">อื่นๆ </span>
                          </td>
                          <td class="align-middle">
                            <router-link to="icon/Info" class="btn btn-info">
                              <i class="fas fa-search"></i> ดูข้อมูล
                            </router-link>
                          </td>
                        </tr>
                        <tr class="even">
                          <td
                            class="align-middle dtr-control sorting_1"
                            tabindex="0"
                          >
                            <span class="badge badge-success">
                              ชำระเงินแล้ว
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="info.php?o_id=PO00004"
                              class="btn btn-outline-primary p-1"
                            >
                              PO00004
                            </a>
                          </td>
                          <td class="align-middle">
                            <a href="../members/profile.php?id=4"> - </a>
                          </td>
                          <td class="align-middle">-</td>
                          <td class="align-middle">
                            <span class="text-muted small">
                              -<br />
                              -</span
                            >
                          </td>
                          <td class="align-middle">
                            <span class="text-muted"> อื่นๆ </span>
                          </td>
                          <td class="align-middle">
                            <router-link to="icon/Info" class="btn btn-info">
                              <i class="fas fa-search"></i> ดูข้อมูล
                            </router-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-sm-12 col-md-5">
                    <div
                      class="dataTables_info"
                      id="logs_info"
                      role="status"
                      aria-live="polite"
                    >
                      แสดงหน้า 1 จาก 1
                    </div>
                  </div>
               
                  <div class="col-sm-12 col-md-7 ">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="logs_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="logs_previous"
                        >
                          <a
                            href="#"
                            aria-controls="logs"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >Previous</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="logs"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="logs_next"
                        >
                          <a
                            href="#"
                            aria-controls="logs"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >Next</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
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
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>
<style>
.button {
  border-radius: 10px;
  position: relative;
  background-color: #10b478;
  border: none;
  font-size: 15px;
  color: #ffffff;
  padding: 38px;
  width: 180px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 5px 5px  rgb(185, 178, 178);
}

.button:after {
  content: "";
  background: #90d3ee;
  display: block;
  position: absolute;
  padding-top: 200%;
  padding-left: 350%;
  margin-left: -40px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
.img {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  width: 0px;
  margin-left: -20px !important;
}
.button1 {
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
  border: none;
  font-size: 10px;
  color: #000000;
  padding: 7px;
  width: 70%;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: 15px;
   box-shadow: 5px 5px  rgb(185, 178, 178);
  
}

.img1 {
  
  border-radius: 10px;
  padding: 5px;
  width: 5px;
  margin-left: -5px !important;
}
.img2 {
  
  border-radius: 10px;
  padding: px;
  width: 10px;
  margin-left: px !important;
}
a.btn.btn-lg.btn-info {
    line-height: 1.1;
    margin-top:40px;
}
</style>
