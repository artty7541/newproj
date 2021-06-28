<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">รายการสินค้า</h4>
            </template>
            <div class="col-md-12">
              <div class="row col-md-12 col-md-offset-2 custyle"></div>
              <router-link to="maps/Addproduct" class="btn btn-primary mt-3">
                <i class="fas fa-plus"></i>
                เพิ่มข้อมูล
              </router-link>
            </div>
            <br />
            <div>
              <div class="col-sm-12">
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
                      <div class="col-sm-6 col-md-6 col-xl- text-right">
                        <div id="logs_filter" class="dataTables_filter">
                         ค้นหา <label
                            ><input
                              type="search"
                              class="form-control form-control-sm"
                              placeholder=""
                              aria-controls="logs"
                          /></label>
                        </div>
                      </div>
                    </div>
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
                        style="width: 150.6px"
                        aria-sort="ascending"
                        aria-label="รหัสสินค้า: activate to sort column descending"
                      >
                        รหัสสินค้า
                      </th>
                      <th
                        class="align-middle sorting"
                        tabindex="0"
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 200.6px"
                        aria-label="รูปภาพ: activate to sort column ascending"
                      >
                        รูปภาพ
                      </th>
                      <th
                      
                        class="align-middle sorting"
                        tabindex="0"
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 450.6px"
                        aria-label="รายละเอียด: activate to sort column ascending"
                      >
                        รายละเอียด
                      </th>
                      <th
                        class="align-middle sorting"
                        tabindex="0"
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 150.6px"
                        aria-label="ราคา: activate to sort column ascending"
                      >
                        ราคา
                      </th>
                      <th
                        class="align-middle sorting"
                        tabindex=""
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 110.6px"
                        aria-label="สถานะ: activate to sort column ascending"
                      >
                        สถานะ
                      </th>
                      <th
                        class="align-middle sorting"
                        tabindex="0"
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 100.6px"
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
                        <a
                          href=""
                          target="_blank"
                          class="btn btn-outline-primary p-1"
                        >
                          001
                        </a>
                      </td>
                      <td class="align-middle">
                        <img src="photo" class="img-fluid" width="150px" />
                      </td>
                      <td class="align-middle">-</td>
                      <td class="align-middle"></td>
                      <td class="align-middle">
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <router-link
                            to="maps/form-edit"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            id="delete"
                            data-id="P001"
                          >
                            <i class="far fa-trash-alt"></i> ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="even">
                      <td
                        class="align-middle dtr-control sorting_1"
                        tabindex="0"
                      >
                        <a
                          href=""
                          target="_blank"
                          class="btn btn-outline-primary p-1"
                        >
                          002
                        </a>
                      </td>
                      <td class="align-middle">
                        <img src="photo" class="img-fluid" width="150px" />
                      </td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <router-link
                            to="maps/form-edit"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            id="delete"
                            data-id="P002"
                          >
                            <i class="far fa-trash-alt"></i> ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td
                        class="align-middle dtr-control sorting_1"
                        tabindex="0"
                      >
                        <a
                          href=""
                          target="_blank"
                          class="btn btn-outline-primary p-1"
                        >
                          003
                        </a>
                      </td>
                      <td class="align-middle">
                        <img src="photo" class="img-fluid" width="150px" />
                      </td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <router-link
                            to="maps/form-edit"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            id="delete"
                            data-id="P003"
                          >
                            <i class="far fa-trash-alt"></i> ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="even">
                      <td
                        class="align-middle dtr-control sorting_1"
                        tabindex="0"
                      >
                        <a
                          href=""
                          target="_blank"
                          class="btn btn-outline-primary p-1"
                        >
                          004
                        </a>
                      </td>
                      <td class="align-middle">
                        <img src="photo" class="img-fluid" width="150px" />
                      </td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <router-link
                            to="maps/form-edit"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            id="delete"
                            data-id="P004"
                          >
                            <i class="far fa-trash-alt"></i> ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td
                        class="align-middle dtr-control sorting_1"
                        tabindex="0"
                      >
                        <a
                          href=""
                          target="_blank"
                          class="btn btn-outline-primary p-1"
                        >
                          005
                        </a>
                      </td>
                      <td class="align-middle">
                        <img src="-" class="img-fluid" width="150px" />
                      </td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">-</td>
                      <td class="align-middle">
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span></span>
                        </label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <router-link
                            to="maps/form-edit"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </router-link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            id="delete"
                            data-id="P005"
                          >
                            <i class="far fa-trash-alt"></i> ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br/>
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
                      <div class="col-sm-12 col-md-7 ">
                        <div
                          class="dataTables_paginate paging_simple_numbers"
                          id="logs_paginate"
                        >
                          <ul class="pagination" style="margin-left : 700px">
                            <li
                              class="
                                paginate_button
                                page-item
                                previous
                                disabled
                              "
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
                              class="paginate_button page-item next disabled "
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
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style>
label.switch {
  text-align: left;
  width: 60px;
  height: calc(50px / 2);
  border-radius: 50px;
  background-color: #4ed164;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

label.switch > span {
  display: block;
  width: 100%;
  height: 100%;
}

label.switch > input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

label.switch > span:before,
label.switch > span:after {
  content: "";
  cursor: pointer;
  position: absolute;
}

label.switch > input[type="checkbox"]:focus ~ span {
  box-shadow: 0 0 0 4px #43b556;
}

label.switch > input[type="checkbox"]:checked:focus ~ span {
  box-shadow: 0 0 0 4px #fff;
}

label.switch > span {
  border-radius: 60px;
}

label.switch > span:before {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border-radius: 60px;
  transition: opacity 0.2s ease-out 0.1s, transform 0.2s ease-out 0.1s;
  transform: scale(1);
  opacity: 1;
}

label.switch > span:after {
  top: 50%;
  z-index: 3;
  transition: transform 0.4s cubic-bezier(0.44, -0.12, 0.07, 1.15);
  width: calc(60px / 2);
  height: calc(60px / 2);
  transform: translate3d(0, -50%, 0);
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
label.switch > input[type="checkbox"]:checked ~ span:before {
  transform: scale(0);
  opacity: 0.7;
}

label.switch > input[type="checkbox"]:checked ~ span:after {
  transform: translate3d(100%, -50%, 0);
}
.button {
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 10px 32px;
  padding-left: px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 20px;
  cursor: pointer;
}
.button2 {
  background-color: #008cba;
}
.button3 {
  background-color: #f44336;
} /* Red */
.button4 {
  background-color: #e7e7e7;
  color: black;
} /* Gray */
.button5 {
  background-color: #555555;
} /* Black */
.custab {
  border: 1px solid #ccc;

  box-shadow: 3px 3px 2px #ccc;
}
.btn-xs {
  margin: 5px;
}
</style>
