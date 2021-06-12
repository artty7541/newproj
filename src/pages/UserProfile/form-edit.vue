<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header border-0 pt-4">
              <h4>
                <i class="fas fa-shopping-cart"></i>
                รายการสินค้า
              </h4>
              <router-link to="../maps" class="btn btn-info mt-3">
                <i class="fas fa-list"></i>
                กลับหน้าหลัก
              </router-link>
            </div>
            <form id="formData">
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="cat_name">ประเภทสินค้า</label>
                    <select class="custom-select mb-3" name="cat_name">
                      <option disabled="">Select Course Types</option>
                      <option selected="" value="sClass">-</option>
                      <option value="mClass">-</option>
                      <option value="fClass">-</option>
                    </select>
                  </div>
                  <div class="form-group col-md-9">
                    <label for="p_name">ชื่อสินค้า</label>
                    <input
                      type="text"
                      class="form-control"
                      name="p_name"
                      id="p_name"
                      placeholder="ชื่อสินค้า"
                      value=""
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="price">ราคา / บาท</label>
                    <input
                      type="text"
                      class="form-control"
                      name="price"
                      id="price"
                      placeholder="ราคา"
                      value=""
                    />
                  </div>
                  <div class="form-group col-md-9">
                    <label for="url">Url สินค้า</label>
                    <input
                      type="text"
                      class="form-control"
                      name="url"
                      id="url"
                      placeholder="Url สินค้า"
                      value=""
                    />
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="customFile">รูปปก</label>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile"
                        >เลือกรูปภาพ</label
                      >
                    </div>
                    <img src="" alt="Image Profile" class="img-fluid p-3" />
                  </div>
                </div>
              </div>
              <div class="container-fluid">
                <a for="detail">รายละเอียด</a>

                <br />
                <form action="/action_page.php">
                  <textarea id="w3review" name="w3review" rows="10" cols="100">
                  </textarea>
                  <br />
                  <br />
                </form>
              </div>

              <div class="">
                <button
                  type="submit"
                  class="btn btn-primary btn-block mx-auto w-75"
                  name="submit"
                >
                  บันทึกข้อมูล
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "form-edit",
  component: {},
};
</script>

<style>
</style>