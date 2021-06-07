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
            </div>
            <button class="button">เพิ่มรายการ</button>
            <div>
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
                        style="width: 37.6px"
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
                        style="width: 94.6px"
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
                        style="width: 414.6px"
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
                        style="width: 40.6px"
                        aria-label="ราคา: activate to sort column ascending"
                      >
                        ราคา
                      </th>
                      <th
                        class="align-middle sorting"
                        tabindex="0"
                        aria-controls="logs"
                        rowspan="1"
                        colspan="1"
                        style="width: 66.6px"
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
                        style="width: 77.6px"
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
                      <td class="align-middle">-</td>
                      <td class="align-middle">
                       <label class="switch">
  <input type="checkbox" checked>
  <span></span> 
</label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <a
                            href="form-edit.php?id=P001"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </a>
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
  <input type="checkbox" checked>
  <span></span> 
</label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <a
                            href="form-edit.php?id=P002"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </a>
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
  <input type="checkbox" checked>
  <span></span> 
</label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <a
                            href="form-edit.php?id=P003"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </a>
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
  <input type="checkbox" checked>
  <span></span> 
</label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <a
                            href="form-edit.php?id=P004"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </a>
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
  <input type="checkbox" checked>
  <span></span> 
</label>
                      </td>
                      <td class="align-middle">
                        <div class="btn-group" role="group">
                          <a
                            href="form-edit.php?id=P005"
                            type="button"
                            class="btn btn-warning"
                          >
                            <i class="far fa-edit"></i> แก้ไข
                          </a>
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
  width: 80px;
  height: calc(80px / 2);
  border-radius:60px;    
  background-color:#4ed164;
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

label.switch > span:before, label.switch > span:after {
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
  transition: opacity .2s ease-out .1s, transform .2s ease-out .1s;
  transform: scale(1);
  opacity: 1;
}

label.switch > span:after{
  top: 50%;
  z-index: 3;
  transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);
  width: calc(80px / 2);
  height: calc(80px / 2);
  transform: translate3d(0, -50%, 0);
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .3);  
}
label.switch > input[type="checkbox"]:checked ~ span:before {
  transform: scale(0);
  opacity: .7;
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
