// Hàm lấy mảng từ input
function layChuoi() {
    var input = document.getElementById("inputChuoi").value;
    var chuoiSo = input.split(",");
    for (var i = 0; i < chuoiSo.length; i++) {
        chuoiSo[i] = parseInt(chuoiSo[i], 10);
    }
    return chuoiSo;
}

// Hàm tính tổng các số dương
function tongSoDuong() {
    var chuoiSo = layChuoi();
    var tong = 0;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (chuoiSo[i] > 0) {
            tong += chuoiSo[i];
        }
    }
    document.getElementById("result").innerText = "Tổng các số dương: " + tong;
}

// Hàm đếm số dương
function demSoDuong() {
    var chuoiSo = layChuoi();
    var count = 0;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (chuoiSo[i] > 0) {
            count++;
        }
    }
    document.getElementById("result").innerText = "Số lượng số dương: " + count;
}

// Hàm tìm số lớn nhất
function timSoLonNhat() {
    var chuoiSo = layChuoi();
    var max = chuoiSo[0];
    for (var i = 1; i < chuoiSo.length; i++) {
        if (chuoiSo[i] > max) {
            max = chuoiSo[i];
        }
    }
    document.getElementById("result").innerText = "Số lớn nhất: " + max;
}

// Hàm tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    var chuoiSo = layChuoi();
    var min = null;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (chuoiSo[i] > 0 && (min === null || chuoiSo[i] < min)) {
            min = chuoiSo[i];
        }
    }
    document.getElementById("result").innerText = "Số dương nhỏ nhất: " + (min === null ? "-1" : min);
}

// Hàm tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    var chuoiSo = layChuoi();
    var soChanCuoiCung = -1;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (chuoiSo[i] % 2 === 0) {
            soChanCuoiCung = chuoiSo[i];
        }
    }
    document.getElementById("result").innerText = "Số chẵn cuối cùng: " + soChanCuoiCung;
}

// Hàm đổi chỗ hai vị trí
function doiChoHaiViTri() {
    var chuoiSo = layChuoi();
    var so1 = parseInt(prompt("Nhập vị trí thứ nhất (bắt đầu từ 0):"), 10);
    var so2 = parseInt(prompt("Nhập vị trí thứ hai (bắt đầu từ 0):"), 10);
    var temp = chuoiSo[so1];
    chuoiSo[so1] = chuoiSo[so2];
    chuoiSo[so2] = temp;
    document.getElementById("result").innerText = "Mảng sau khi đổi chỗ: " + chuoiSo.join(", ");
}

// Hàm sắp xếp mảng theo thứ tự tăng dần
function sapXepTangDan() {
    var chuoiSo = layChuoi();
    for (var i = 0; i < chuoiSo.length - 1; i++) {
        for (var j = i + 1; j < chuoiSo.length; j++) {
            if (chuoiSo[i] > chuoiSo[j]) {
                var temp = chuoiSo[i];
                chuoiSo[i] = chuoiSo[j];
                chuoiSo[j] = temp;
            }
        }
    }
    document.getElementById("result").innerText = "Mảng sau khi sắp xếp: " + chuoiSo.join(", ");
}

// Hàm tìm số nguyên tố đầu tiên
function timSoNguyenTo() {
    var chuoiSo = layChuoi();
    var soNguyen = function (num) {
        if (num < 2) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    var soNguyenToDauTien = -1;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (soNguyen(chuoiSo[i])) {
            soNguyenToDauTien = chuoiSo[i];
            break; // Dừng vòng lặp ngay khi tìm thấy số nguyên tố đầu tiên
        }
    }
    document.getElementById("result").innerText = "Số nguyên tố đầu tiên: " + soNguyenToDauTien;
}

// Hàm thêm mảng số thực và đếm số nguyên
function themMangSoThuc() {
    var chuoiSo = layChuoi();
    var themSo = prompt("Nhập thêm mảng số thực (cách nhau bằng dấu phẩy):").split(",");
    var soNguyenTrongMangMoi = 0;
    for (var i = 0; i < themSo.length; i++) {
        var num = parseFloat(themSo[i]);
        if (Number.isInteger(num)) {
            soNguyenTrongMangMoi++;
        }
    }
    document.getElementById("result").innerText = "Số lượng số nguyên trong mảng mới: " + soNguyenTrongMangMoi;
}

// Hàm so sánh số dương và số âm
function soSanhSoDuongVaAm() {
    var chuoiSo = layChuoi();
    var demSoDuong = 0;
    var demSoAm = 0;
    for (var i = 0; i < chuoiSo.length; i++) {
        if (chuoiSo[i] > 0) {
            demSoDuong++;
        } else if (chuoiSo[i] < 0) {
            demSoAm++;
        }
    }
    var soSanh = "Số dương và số âm bằng nhau";
    if (demSoDuong > demSoAm) {
        soSanh = "Số lượng số dương nhiều hơn";
    } else if (demSoAm > demSoDuong) {
        soSanh = "Số lượng số âm nhiều hơn";
    }
    document.getElementById("result").innerText = soSanh;
}