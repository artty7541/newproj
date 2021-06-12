<template>

  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <template slot="header">
              <h4 class="card-title">โต๊ะอาหาร</h4>
            
            </template>
            <div class="all-icons">
              <div class="row">
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    
                    <p>โต๊ะ 1</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 2</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 3</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 4</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 5</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 6</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-2 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 7</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 8</p>
                  </div>
                </div>
                <div class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-6">
                  <div class="font-icon-detail">
                    <p>โต๊ะ 9</p>
                  </div>
                </div>
               
               
              </div>
            </div>
          </card>
        </div>  
        <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-header pt-4">
                <h3 class="card-title">
                  <i class="fas fa-cart-arrow-down"></i>
                  รายละเอียด
                </h3>
                <table style="width:130%">
 <br>
  <tr>
    <td>โต๊ะอาหาร</td>
   
    <span class="badge badge-success"> A1 </span>
  </tr>
  <hr>
  <tr>
    <td>จำนวนรายการ</td>
   
    <span class="badge badge-success"> 2 รายการ </span>
  </tr>
   <hr>
  <tr>
    <td>เวลาสั่งอาหาร</td>
    
    <span class="badge badge-success"> 12.30 น. </span>
  </tr>
   <hr>
   <tr>
    <td>เวลารออาหาร</td>
    
    <span class="badge badge-success"> 10 น.</span>
  </tr>
   <hr>
   <tr>
    <td>ราคารวม</td>
    
    <span class="badge badge-success"> 100 </span>
  </tr>
</table>
<br>
              </div>
            </div>
              </div>
            </div>
          </div>
        
<div class="col-md-8">
          <card>
            <template slot="header">
              <h4 class="card-title">รายการอาหารที่สั่งทั้งหมด</h4>
            
            </template>
            <div class="all-icons">
              <div class="row">
               <div class="card-body">
                                <div id="logs_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6">
                                  <div class="dataTables_length" id="logs_length">
                                    <label>แสดงข้อมูล <select name="logs_length" aria-controls="logs" class="custom-select custom-select-sm form-control form-control-sm">
                                      <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>
                                      </select> แถว</label></div></div><div class="col-sm-12 col-md-6"><div id="logs_filter" class="dataTables_filter">
                                        <label>ค้นหา<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="logs"></label></div></div></div>
                                        <div class="row"><div class="col-sm-12">
                                          <table id="logs" class="table table-hover dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="logs_info" style="width: 100%;">
                                            <thead><tr role="row"><th class="align-middle sorting sorting_asc" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 81.6px;" aria-sort="ascending" aria-label="สถานะ: activate to sort column descending">สถานะ</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 102.6px;" aria-label="รหัสสั่งซื้อ: activate to sort column ascending">รหัสสั่งซื้อ</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 161.6px;" aria-label="ผู้สั่งซื้อ: activate to sort column ascending">ผู้สั่งซื้อ</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 145.6px;" aria-label="ราคารวม (บาท): activate to sort column ascending">ราคารวม (บาท)</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 125.6px;" aria-label="วันที่สั่งซื้อ: activate to sort column ascending">วันที่สั่งซื้อ</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 122.6px;" aria-label="หมายเหตุ: activate to sort column ascending">หมายเหตุ</th>
                                            <th class="align-middle sorting" tabindex="0" aria-controls="logs" rowspan="1" colspan="1" style="width: 114.6px;" aria-label="จัดการ: activate to sort column ascending">จัดการ</th></tr></thead>
                                            <tbody><tr class="odd"><td class="align-middle dtr-control sorting_1" tabindex="0"><span class="badge badge-success"> ชำระเงินแล้ว </span>
                                            </td><td class=" align-middle"><a href="info.php?o_id=PO00001" class="btn btn-outline-primary p-1 "> PO00001 </a></td><td class=" align-middle">
                                              <a href="../members/profile.php?id=1">
                       -
                    </a></td><td class=" align-middle">-</td><td class=" align-middle"><span class="text-muted small"> - <br> -</span></td><td class=" align-middle">
                      <span class="text-muted">อื่นๆ.... </span>  </td><td class=" align-middle">
                        <router-link to="icon/Info" class="btn btn-info">
                      <i class="fas fa-search"></i> ดูข้อมูล
                        </router-link></td></tr><tr class="even"><td class="align-middle dtr-control sorting_1" tabindex="0"><span class="badge badge-success"> ชำระเงินแล้ว </span></td><td class=" align-middle">
                      <a href="info.php?o_id=PO00002" class="btn btn-outline-primary p-1 "> PO00002 </a></td><td class=" align-middle"><a href="../members/profile.php?id=2">
                        -
                    </a></td><td class=" align-middle">-</td><td class=" align-middle"><span class="text-muted small"> - <br> -</span></td><td class=" align-middle">
                      <span class="text-muted"> อื่นๆ </span>  </td><td class=" align-middle"><router-link to="icon/Info" class="btn btn-info">
                        <i class="fas fa-search"></i> ดูข้อมูล
                    </router-link></td></tr><tr class="odd"><td class="align-middle dtr-control sorting_1" tabindex="0"><span class="badge badge-success"> ชำระเงินแล้ว </span></td><td class=" align-middle"><a href="info.php?o_id=PO00003" class="btn btn-outline-primary p-1 "> PO00003 </a></td><td class=" align-middle"><a href="../members/profile.php?id=3">
                       -
                    </a></td><td class=" align-middle">-</td><td class=" align-middle"><span class="text-muted small"> - <br> -</span></td><td class=" align-middle">
                      <span class="text-muted">อื่นๆ </span>  </td><td class=" align-middle"><router-link to="icon/Info" class="btn btn-info">
                        <i class="fas fa-search"></i> ดูข้อมูล
                    </router-link></td></tr><tr class="even"><td class="align-middle dtr-control sorting_1" tabindex="0"><span class="badge badge-success"> ชำระเงินแล้ว </span></td><td class=" align-middle"><a href="info.php?o_id=PO00004" class="btn btn-outline-primary p-1 "> PO00004 </a></td><td class=" align-middle"><a href="../members/profile.php?id=4">
                        -
                    </a></td><td class=" align-middle">-</td><td class=" align-middle"><span class="text-muted small"> -<br> -</span></td>
                    <td class=" align-middle"><span class="text-muted"> อื่นๆ </span>  </td><td class=" align-middle">
                     <router-link to="icon/Info" class="btn btn-info">
                        <i class="fas fa-search"></i> ดูข้อมูล
                     </router-link></td></tr></tbody></table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="logs_info" role="status" aria-live="polite">แสดงหน้า 1 จาก 1</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="logs_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="logs_previous"><a href="#" aria-controls="logs" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="logs" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="logs_next"><a href="#" aria-controls="logs" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
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
    }
  }
</script>
<style>

</style>
