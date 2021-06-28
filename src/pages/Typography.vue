<template>
  <div class="content">
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <div class="card shadow">
                <div class="card-header border-0 pt-4">
                  <h4>
                    <i class="fas fa-user-cog"></i>
                    ผู้ดูแลระบบ
                  </h4>
                  <router-link to="typography/form-create" class="btn btn-primary mt-3">
                    <i class="fas fa-plus"></i>
                    เพิ่มข้อมูล
                  </router-link>
                </div>
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
                    <div class="row ">
                      <div class="col-sm-12">
                        <table
                          id="logs"
                          class="
                            table table-hover
                            dataTable
                            no-footer
                            dtr-inline
                          "
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
                                style="width: 100.6px"
                                aria-sort="ascending"
                                aria-label="ลำดับ: activate to sort column descending"
                              >
                                ลำดับ
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200.6px"
                                aria-label="ชื่อผู้ใช้งาน: activate to sort column ascending"
                              >
                                ชื่อผู้ใช้งาน
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200.6px"
                                aria-label="ชื่อจริง: activate to sort column ascending"
                              >
                                ชื่อจริง
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200px"
                                aria-label="นามสกุล: activate to sort column ascending"
                              >
                                นามสกุล
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200px"
                                aria-label="อีเมล: activate to sort column ascending"
                              >
                                อีเมล
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200px"
                                aria-label="ใช้งานล่าสุด: activate to sort column ascending"
                              >
                                ใช้งานล่าสุด
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200px"
                                aria-label="สิทธิ์เข้าใช้งาน: activate to sort column ascending"
                              >
                                สิทธิ์เข้าใช้งาน
                              </th>
                              <th
                                class="align-middle sorting"
                                tabindex="0"
                                aria-controls="logs"
                                rowspan="1"
                                colspan="1"
                                style="width: 200px"
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
                                1
                              </td>
                              <td class="align-middle">admin</td>
                              <td class="align-middle">-</td>
                              <td class="align-middle" style="">-</td>
                              <td class="align-middle" style="">
                                -
                              </td>
                              <td class="align-middle" style="">
                  -
                              </td>
                              <td class="align-middle" style="">
                                <span class="badge badge-info">superadmin</span>
                              </td>
                              <td class="align-middle" style="">
                                <div class="btn-group" role="group">
                                  <router-link
                                    to="typography/editadmin"
                                    type="button"
                                    class="btn btn-warning text-orange"
                                  >
                                    <i class="far fa-edit"></i> แก้ไข
                                  </router-link>
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    id="delete"
                                    data-id="1"
                                    data-index="1"
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
                                2
                              </td>
                              <td class="align-middle">admin2</td>
                              <td class="align-middle">-</td>
                              <td class="align-middle" style="">-</td>
                              <td class="align-middle" style="">
                                -
                              </td>
                              <td class="align-middle" style="">
                                -
                              </td>
                              <td class="align-middle" style="">
                                <span class="badge badge-info">admin</span>
                              </td>
                              <td class="align-middle" style="">
                                <div class="btn-group" role="group">
                                  <router-link
                                    to="typography/editadmin"
                                    type="button"
                                    class="btn btn-warning text-orange"
                                  >
                                    <i class="far fa-edit"></i> แก้ไข
                                  </router-link>
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    id="delete"
                                    data-id="2"
                                    data-index="2"
                                  >
                                    <i class="far fa-trash-alt"></i> ลบ
                                  </button>
                                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
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
</style>
