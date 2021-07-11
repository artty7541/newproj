<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card class="card shadow">
            <template slot="header">
              <h4 class="card-title">โต๊ะอาหาร</h4>
            </template>
            <div class="">
              <div class="row">
                <div>
                  <button class="button row">
                    <div class="">
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
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
                      <img
                        class="img"
                        src="../../documentation/img/table.jpg"
                        alt="table"
                        style="width: 80px"
                      />

                      โต๊ะ A9
                    </div>
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            <br />
          </card>
        </div>
        <div class="col-md-4">
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
            <div class="col-md-3">
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="stylesheet" />
              <div class="w3-container">
                <button
                  style="border-radius: 10px"
                  onclick="document.getElementById('id01').style.display='block'"
                  class="button1"
                >
                  <div>
                    <img
                      class="img2"
                      src="../../documentation/img/qrcode.png"
                      alt="table"
                      style="width: 50px"
                    />
                  </div>
                  QR-Code
                </button>

                <div id="id01" class="w3-modal">
                  <div class="w3-modal-content">
                    <div class="w3-container">
                      <span
                        onclick="document.getElementById('id01').style.display='none'"
                        class="w3-button w3-display-topright"
                        >&times;</span
                      >
                      <div class="modal-content" modal-transclude="">
                        <div class="modal-header ng-scope">
                          <h3
                            class="modal-title font-bold text-center ng-binding"
                          >
                            โต๊ะอาหาร โต๊ะ 1
                          </h3>
                        </div>
                        <div
                          class="modal-body ng-scope"
                          stop-event="touchend"
                          id="inventory_add"
                          style="padding: 15px 15px; padding-buttom: 15px"
                        >
                          <form
                            name="admin_form"
                            class="
                              bs-example
                              form-horizontal form-validation
                              ng-pristine ng-valid
                            "
                          >
                            <div class="row">
                              <div class="col-sm-12" style="text-align: center">
                                <img
                                  src="https://app.deltafood.co/qr/?data=https://app.deltafood.co/ci/t/35EfHfW65w"
                                />
                              </div>
                            </div>
                            <div class="modal-footer">
                              <div class="pull-contain">
                                <a
                                  href=""
                                  class="btn btn-info ng-binding"
                                  ng-click="print(p)"
                                >
                                  พิมพ์</a
                                >
                                <a
                                  href=""
                                  class="
                                    btn btn-primary
                                    ng-binding ng-isolate-scope
                                  "
                                  confirm="QRcode นี้จะไม่สามารถใช้ได้อีกต่อไป"
                                  ng-disabled="!admin_form.$valid"
                                  ng-click="change(p)"
                                  aria-disabled="false"
                                >
                                  เปลี่ยน QRcode</a
                                >
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <meta name="" content="width=device-width, initial-scale=1" />
              <link
                rel="stylesheet"
                href="https://www.w3schools.com/w3css/4/w3.css"
              />

              <button style="border-radius: 10px" class="button2 w3-white">
                <div>
                  <img
                    class="img2"
                    src="../../documentation/img/recycle.jpg"
                    alt="table"
                    style="width: 50px"
                  />
                </div>
                ประวัติ
              </button>
              
            </div>

            <div class="col-md-3">
              <button style="border-radius: 10px" class="button3 w3-white">
                <div>
                  <img
                    class="img2"
                    src="../../documentation/img/bin.png"
                    alt="table"
                    style="width: 50px"
                  />
                </div>
                รายการยกเลิก
              </button>
            </div>
            <div class="col-md-3">
              <button style="border-radius: 10px" class="button4 w3-white">
                <div>
                  <img
                    class="img2"
                    src="../../documentation/img/x.png"
                    alt="table"
                    style="width: 50px"
                  />
                </div>
                เคลียร์โต๊ะอาหาร
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
                            style="width: 120.6px"
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
                            style="width: 132.6px"
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
                            style="width: 131.6px"
                            aria-label="ผู้สั่งซื้อ: activate to sort column ascending"
                          >
                            โต๊ะ
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
                            style="width: 135.6px"
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
                            style="width: 132.6px"
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
                            <a> - </a>
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
                            <a> - </a>
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
                            <a> - </a>
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
                            <a> - </a>
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
                <div class="row">
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

                  <div class="col-sm-12 col-md-7">
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
    <div class="col-md-8">
      <card class="card shadow">
        <div class="table-list">
          <div id="item-list" class="p-xxs">
            <table
              class="table table-striped b-t b-light"
              style="margin-bottom: 0px"
            >
              <thead>
                <tr>
                  <th style="width: 20px">
                    <label
                      class="i-checks m-b-none"
                      ng-init="check_all = false"
                    >
                      <input
                        type="checkbox"
                        ng-model="check_all"
                        ng-click="check_(check_all)"
                        class="ng-pristine ng-untouched ng-valid"
                        tabindex="0"
                        aria-checked="false"
                        aria-invalid="false"
                      /><i></i>
                    </label>
                  </th>
                  <th class="ng-binding" >รายการ</th>
                  <th class="text-right ng-binding">ราคา</th>
                  <th class="text-center ng-binding">จำนวน</th>
                  <!--<th class="text-left">{{'pos.unit'|translate}}</th>-->
                  <th class="text-right ng-binding">รวม</th>
                  <!-- ngIf: config.use_status -->
                  <th
                    style="width: 80px"
                    ng-if="config.use_status"
                    class="ng-binding ng-scope"
                  >
                    สถานะ
                  </th>
                  <!-- end ngIf: config.use_status -->
                  <th
                    class="
                      text-center
                      hidden-sm hidden-xs hidden-md hidden-sm
                      ng-binding
                    "
                  >
                    โดย
                  </th>
                  <th class="text-center" style="width: 60px">#</th>
                </tr>
              </thead>
              <!-- ngRepeat: item in data_pay_select.items| orderBy:'-od_id' -->
              <tbody
                ng-repeat="item in data_pay_select.items| orderBy:'-od_id'"
                ng-init="item.show = true"
                ng-dblclick="change_items(item, $index)"
                class="ng-scope"
                tabindex="0"
                style=""
              >
                <tr>
                  <td>
                    <label
                      class="i-checks m-b-none"
                      ng-show="item.status - 0 != 5"
                      aria-hidden="false"
                    >
                      <input
                        ng-init="item.selected = false"
                        ng-click="check_list(item.selected)"
                        type="checkbox"
                        ng-model="item.selected"
                        class="ng-pristine ng-untouched ng-valid"
                        tabindex="0"
                        aria-checked="false"
                        aria-invalid="false"
                      />
                      <i></i>
                    </label>
                  </td>
                  <td
                    ng-click="item.show = !item.show"
                    class="ng-binding"
                    role="button"
                    tabindex="0"
                  >
                    ข้าวซอย
                  </td>
                  <td class="">
                    <!-- ngIf: item.is_buffet === 0 && item.price - 0 != 0 --><span
                      ng-if="item.is_buffet === 0 &amp;&amp; item.price - 0 != 0"
                      class="ng-binding ng-scope"
                    >
                      30</span
                    ><!-- end ngIf: item.is_buffet === 0 && item.price - 0 != 0 -->
                    <!-- ngIf: item.is_buffet === 1 -->
                    <!-- ngIf: item.is_buffet === 0 && item.price - 0 === 0 -->
                    <!--<a editable-number="item.detail.price"  onbeforesave="change_price(item.od_id,$data)">{{ item.detail.price}}</a>-->
                  </td>
                  <td class="">
                    <a
                      editable-number="item.detail.count"
                      onbeforesave="change_count(item.od_id,$data)"
                      class="ng-scope ng-binding editable editable-click"
                      >1</a
                    >
                  </td>
                  <!--<td   class="text-left"> {{ item.unit}}</td>-->
                  <td
                    ng-click="item.show = !item.show"
                    class=""
                    role="button"
                    tabindex="0"
                  >
                    <!-- ngIf: item.is_buffet === 0 --><span
                      ng-if="item.is_buffet === 0"
                      class="ng-binding ng-scope"
                    >
                      71.00 </span
                    ><!-- end ngIf: item.is_buffet === 0 -->
                    <!-- ngIf: item.is_buffet === 1 -->
                  </td>
                  <td
                    class=" ng-binding"
                    ng-click="change_status_food([item.od_id], item.status - 0 != 5)"
                    ng-bind-html="get_status_food(item.status)"
                    role="button"
                    tabindex="0"
                  >
                    <span class="label bg-warning">กำลังทำ</span>
                  </td>
                  <td
                    class="
                      text-center
                      hidden-sm hidden-xs hidden-md hidden-sm
                      ng-binding
                    "
                  >
                    ทดสอบ 2
                  </td>
                   <div class="row ">
                     
                       <div>
  <b-button v-b-modal.modal-no-backdrop>แก้ไขสถานะ</b-button>

  <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="แก้ไขสถานะ">
    <div class="modal-body ng-scope" stop-event="touchend">
    
        <div class="col-sm-12">
            <div class="list-group " style="margin-bottom: 0px;">
                <!-- ngRepeat: a in status --><a href="" ng-repeat="a in status" class="list-group-item bg-light dk" style="font-size: 25px;" ng-click="select(a.id)">
                    ส่งครัว
                </a><!-- end ngRepeat: a in status --><a href="" ng-repeat="a in status" class="list-group-item bg-warning" style="font-size: 25px;" ng-click="select(a.id)">
                    กำลังทำ
                </a><!-- end ngRepeat: a in status --><a href="" ng-repeat="a in status" class="list-group-item bg-info" style="font-size: 25px;" ng-click="select(a.id)">
                    เสร็จแล้ว
                </a><!-- end ngRepeat: a in status --><a href="" ng-repeat="a in status" class="list-group-item bg-success" style="font-size: 25px;" ng-click="select(a.id)">
                    ได้รับแล้ว
                </a><!-- end ngRepeat: a in status --><a href="" ng-repeat="a in status" class="list-group-item bg-danger" style="font-size: 25px;" ng-click="select(a.id)">
                    หมด
                </a><!-- end ngRepeat: a in status -->
            </div>
        </div>
    
</div>
  </b-modal>
</div>
                      </div>
                </tr>
                
                <!-- ngIf: item.detail.comment !== '' || item.toppings.length !== 0 || item.details.length - 0 !== 0 -->
                <tr
                  ng-show="item.show"
                  ng-if="item.detail.comment !== '' || item.toppings.length !== 0 || item.details.length - 0 !== 0"
                  class="ng-scope"
                  aria-hidden="false"
                >
                  <td></td>
                  <td colspan="7">
                    <ul>
                      <!-- ngIf: item.detail.comment !== '' -->
                      <!-- ngRepeat: d in item.details -->
                      <li
                        ng-repeat="d in item.details"
                        class="ng-binding ng-scope"
                      >
                        วัตถุดิบ :
                        <!-- ngRepeat: sub in d.sub| filter:{ selected: true } --><span
                          ng-repeat="sub in d.sub| filter:{ selected: true }"
                          class="ng-binding ng-scope"
                          ><!-- ngIf: $index !== 0 -->ไก่</span
                        ><!-- end ngRepeat: sub in d.sub| filter:{ selected: true } -->
                        <!-- ngIf: get_price_sub(d) !== 0 --><span
                          ng-if="get_price_sub(d) !== 0"
                          class="ng-binding ng-scope"
                          >(<!-- ngIf: get_price_sub(d) > 0 --><span
                            ng-if="get_price_sub(d) > 0"
                            class="ng-scope"
                            >+</span
                          ><!-- end ngIf: get_price_sub(d) > 0 -->1 บาท)</span
                        ><!-- end ngIf: get_price_sub(d) !== 0 -->
                      </li>
                      <!-- end ngRepeat: d in item.details -->
                      <li
                        ng-repeat="d in item.details"
                        class="ng-binding ng-scope"
                      >
                        ราคา :
                        <!-- ngRepeat: sub in d.sub| filter:{ selected: true } --><span
                          ng-repeat="sub in d.sub| filter:{ selected: true }"
                          class="ng-binding ng-scope"
                          ><!-- ngIf: $index !== 0 -->พิเศษ</span
                        ><!-- end ngRepeat: sub in d.sub| filter:{ selected: true } -->
                        <!-- ngIf: get_price_sub(d) !== 0 --><span
                          ng-if="get_price_sub(d) !== 0"
                          class="ng-binding ng-scope"
                          >(<!-- ngIf: get_price_sub(d) > 0 --><span
                            ng-if="get_price_sub(d) > 0"
                            class="ng-scope"
                            >+</span
                          ><!-- end ngIf: get_price_sub(d) > 0 -->40 บาท)</span
                        ><!-- end ngIf: get_price_sub(d) !== 0 -->
                      </li>
                      <!-- end ngRepeat: d in item.details -->
                      <!-- ngRepeat: tp in item.toppings -->
                    </ul>
                  </td>
                </tr>
                <!-- end ngIf: item.detail.comment !== '' || item.toppings.length !== 0 || item.details.length - 0 !== 0 -->
              </tbody>
              <!-- end ngRepeat: item in data_pay_select.items| orderBy:'-od_id' -->
            </table>
          </div>
        </div>
        <div
          class="panel-footer font-bold text-right bg-info dk"
          style="font-size: 20px; color: #fff"
        >
          ราคาอาหารรวม 71 บาท
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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
body {
  font-family: "Nanum Gothic", sans-serif;
  font-size: 14px;
  color: #777;
  height: 600px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

a {
  color: #777;
}
a:hover {
  color: #f39305;
  text-decoration: none;
}
.text-center {
  text-align: center;
}
.banner-heading {
  font-family: "Nanum Gothic", sans-serif;
  font-size: 75px;
  font-weight: 700;
  line-height: 100px;
  margin-bottom: 30px;
  color: #fff;
}
.banner-sub-heading {
  font-family: "Nanum Gothic", sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 50px;
  color: #fff;
}
.btn-warning {
  background-color: #eca439;
}
.btn-warning:hover {
  background-color: #f39305;
}
.mybtn {
  border-radius: 0;
  height: 30px;
  margin: 10px auto;
  line-height: 10px;
}
.form-control {
  color: #d1d1d1;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 2px solid #05a8f3;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 30px;
}
.form-check-input {
  background-color: #fff !important;
  border-radius: 50% !important;
  border: 2px solid #f39305 !important;
}
.modal-content {
  width: 400px;
  margin: auto;
}

.modal-header {
  padding: 0.7rem 1rem;
  border-bottom: 1px solid #e9ecef;
  border-radius: 0;
  background-color: #ffffff;
}
.modal-title {
  font-size: 20px;
  font-family: "Nanum Gothic", sans-serif;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  text-align: center;
}
.modal-body {
  background-image: url("http://snippetimg.meditialabs.com/bgs/bg1.jpg");
  background-position: top left;
  background-size: cover;
  width: 100%;
  padding: 1.5rem 3rem 3rem 3rem;
}
body.modal-open .supreme-container {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
}
.text-intro {
  font-size: 0.8em;
  color: #777;
  text-align: center;
}
.form-div {
  background-color: #fff;
  padding: 2em 1.5em;
  box-shadow: 2px 2px 2px 2px rgba(215, 215, 215, 0.5);
}
form {
  border: 0 !important;
}
@media (max-width: 500px) {
  .modal-content {
    width: 330px;
    margin: auto;
  }
  .banner-heading {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .banner-sub-heading {
    font-size: 10px;
    font-weight: 200;
    line-height: 10px;
    margin-bottom: 40px;
  }
}
@media (max-width: 768px) {
  .banner-text {
    padding: 150px 0 150px 0;
  }
  .banner-sub-heading {
    font-size: 23px;
    font-weight: 200;
    line-height: 23px;
    margin-bottom: 40px;
  }
}
.button {
  border-radius: 10px;
  position: relative;
  background-color: #10b478;
  border: none;
  font-size: 15px;
  color: #ffffff;
  padding: 15px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 5px 5px rgb(185, 178, 178);
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
  width: 75px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  margin-left: -10px;
  box-shadow: 5px 5px rgb(185, 178, 178);
}
.button2 {
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
  border: none;
  font-size: 10px;
  color: #000000;
  padding: 7px;
  width: 75px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 5px 5px rgb(185, 178, 178);
}

.button3 {
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
  border: none;
  font-size: 10px;
  color: #000000;
  padding: 7px;
  width: 75px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 5px 5px rgb(185, 178, 178);
}
.button4 {
  border-radius: 10px;
  position: relative;
  background-color: #ffffff;
  border: none;
  font-size: 10px;
  color: #000000;
  padding: 7px;
  width: 75px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 5px 5px rgb(185, 178, 178);
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
  margin-top: 40px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
  box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
}
</style>
