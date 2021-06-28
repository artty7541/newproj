<template>
    <div>
        <br>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-header border-0 pt-4">
                                <h4>
                                    <i class="fas fa-user-cog"></i> 
                                    แก้ไขข้อมูลผู้ดูแล
                                </h4>
                                <router-link to="../typography" class="btn btn-info my-3 ">
                                    <i class="fas fa-list"></i>
                                    กลับหน้าหลัก
                                </router-link>
                            </div>
                            <form id="formData">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 px-1 px-md-5">

                                            <div class="form-group">
                                                <label for="first_name">ชื่อจริง</label>
                                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="ชื่อจริง" value="-" required="">
                                            </div>
                                            <div class="form-group">
                                                <label for="last_name">นามสกุล</label>
                                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="นามสกุล" value="-" required="">
                                            </div>
                                            <div class="form-group">
                                                <label for="username">ชื่อผู้ใช้งาน</label>
                                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="นามสกุล" value="-" required="">
                                              
                                            </div>
                                            <div class="form-group">
                                                <label for="password">รหัสผ่าน</label>
                                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="นามสกุล" value="-" required="">
                                            </div>

                                        </div>
                                        <div class="col-md-6 px-1 px-md-5">

                                            <div class="form-group">
                                                <label for="permission">สิทธิ์การใช้งาน</label>
                                                <select class="form-control" name="status" id="permission" required="">
                                                    <option value="" disabled="">กำหนดสิทธิ์</option>
                                                    <option value="superadmin" selected="">Super Admin</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="customFile">รูปโปรไฟล์</label>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="customFile" accept="image/*">
                                                    <label class="custom-file-label" for="customFile">เลือกรูปภาพใหม่</label>
                                                </div>
                                                <img src="../../../documentation/img/tim-logo.png" alt="Image Profile" class="img-fluid p-3" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary btn-block mx-auto w-50" name="submit">บันทึกข้อมูล</button>
                                </div>
                                <br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br><br>
        <br><br><br><br><br><br>
        <br>
    </div>
    
</template>