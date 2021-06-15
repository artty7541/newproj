<template>
  <div class="col-lg-12">
    <br>
    <div class="card shadow">
      <div class="card-header border-0 pt-4">
        <h4>
          <i class="fas fa-cart-arrow-down"></i>
          ข้อมูลใบสั่งซื้อ Order ID : PO00001
        </h4>
      </div>
      <div class="card-body px-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-header pt-4">
                <h3 class="card-title">
                  <i class="fas fa-cart-arrow-down"></i>
                  ใบสั่งซื้อ
                </h3>
              </div>
              <div class="card-body px-5 ">
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">สถานะ :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <span class="badge badge-success p-2 "> ชำระเงินแล้ว</span>
                  </div>
                </div>
                <div class="row mb-3 ">
                  <p class="col-xl-3 text-muted">Order ID :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p class="btn btn-outline-primary p-1">PO00001</p>
                  </div>
                </div>
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">สั่งซื้อเมื่อ :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <span class="text-muted small">
                      1 ชั่วโมงที่ผ่านมา <br />
                      10 พ.ค. 64 · 16:56 น.</span
                    >
                  </div>
                </div>
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">วันหมดอายุ :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>ไม่มีหมดอายุ</p>
                  </div>
                </div>
                <div class="row mb-3 ">
                  <p class="col-xl-3 text-muted">รายละเอียดเพิ่มเติม :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>-</p>
                  </div>
                </div>
                <div class="row mb-3 ">
                  <p class="col-xl-3 text-muted">
                    บันทึกลับ : <br />
                    (เห็นเฉพาะ Admin)
                  </p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>ไม่มี</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card shadow-sm">
              <div class="card-header pt-4">
                <h3 class="card-title">
                  <i class="fas fa-cart-arrow-down"></i>
                  ผู้สั่งซื้อ
                </h3>
              </div>
              <div class="card-body px-5">
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">ชื่อผู้สั่งซื้อ :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <a href="../members/profile.php?id=1">โต๊ะ 1</a>
                  </div>
                </div>
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">อีเมล :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>-</p>
                  </div>
                </div>
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">เบอร์โทรศัพท์ :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>-</p>
                  </div>
                </div>
                <div class="row mb-3">
                  <p class="col-xl-3 text-muted">IP Address :</p>
                  <div class="col-xl-9 col-xl- text-right">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow">
      <div class="card-header border-0 pt-4">
        <h3 class="card-title">
          <i class="fas fa-cart-arrow-down"></i>
          รายการสินค้า
        </h3>
      </div>
      <div class="card-body">
        <div
          id="logs_wrapper"
          class="dataTables_wrapper dt-bootstrap4 no-footer"
        >
          <div class="row">
            <div class="col-sm-12 col-md-6"></div>
            <div class="col-sm-12 col-md-6"></div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <table
                id="logs"
                class="table table-hover dataTable no-footer dtr-inline"
                width="100%"
                role="grid"
                style="width: 100%"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="sorting_disabled align-middle"
                      rowspan="1"
                      colspan="1"
                      style="width: 100px"
                    >
                      รหัสสินค้า
                    </th>
                    <th
                      class="sorting_disabled align-middle"
                      rowspan="1"
                      colspan="1"
                      style="width: 750.2px"
                    >
                      รายการสินค้า
                    </th>
                    
                    <th
                      class="sorting_disabled align-middle text-md-right"
                      rowspan="1"
                      colspan="1"
                      style="width: 150px"
                    >
                      จำนวน
                    </th>
                    
                    <th
                      class="sorting_disabled align-middle text-md-right"
                      rowspan="1"
                      colspan="1"
                      style="width: 150px"
                    >
                      ราคาชิ้นละ
                    </th>
                     <th
                      class="sorting_disabled align-middle text-md-right"
                      rowspan="1"
                      colspan="1"
                      style="width: 100px"
                    >
                      ราคารวม
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd">
                    <td class="align-middle dtr-control" tabindex="0">
                      <a
                        href="https://appzstory.dev/c/sclass1-full-courses_0-100"
                        target="_blank"
                        class="btn btn-outline-primary p-1"
                      >
                        P001
                      </a>
                    </td>
                    <td class="align-middle">
                      <img
                        src="-"
                        class="img-fluid"
                        width="100px"
                      />
                     -
                    </td>
                    <td >-</td>
                    <td >-</td>
                    <td >-</td>
                  </tr>
                  <tr class="even">
                    <td class="align-middle dtr-control" tabindex="0">
                      <a
                        href="-"
                        target="_blank"
                        class="btn btn-outline-primary p-1"
                      >
                        P002
                      </a>
                    </td>
                    <td class="align-middle">
                      <img
                        src="-"
                        class="img-fluid"
                        width="100px"
                      />
                      -
                    </td>
                    <td >-</td>
                    <td >-</td>
                    <td >-</td>
                  </tr>
                  <tr class="odd">
                    <td class="align-middle dtr-control" tabindex="0">
                      <a
                        href=""
                        target="_blank"
                        class="btn btn-outline-primary p-1"
                      >
                        P003
                      </a>
                    </td>
                    <td class="align-middle">
                      <img
                        src="-"
                        class="img-fluid"
                        width="100px"
                      />
                      -
                    </td>
                    <td >-</td>
                    <td >-</td>
                    <td >-</td>
                  </tr>
                  <tr class="even">
                    <td class="align-middle dtr-control" tabindex="0">
                      <a
                        href=""
                        target="_blank"
                        class="btn btn-outline-primary p-1"
                      >
                        P004
                      </a>
                    </td>
                    <td class="align-middle">
                      <img
                        src="-"
                        class="img-fluid"
                        width="100px"
                      />
                      -
                    </td>
                    <td >-</td>
                    <td>-</td>
                 <td >-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-5"></div>
            <div class="col-sm-12 col-md-7"></div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-md-3 col-lg-2 col-xl- text-right">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  
                  <tr>
                    <th>จำนวนเงินรวมทั้งสิ้น</th>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>