function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama === "" || email === "" || alamat === "") {
        alert("Gagal! Semua kolom harus diisi.");
        return false; 
    }
    alert("Pendaftaran Berhasil");
    return true;
}


















// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('registration-form');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const nama = form.nama.value;
//         const email = form.email.value;
//         const alamat = form.alamat.value;

//         if (nama.trim() === '' || email.trim() === '' || alamat.trim() === '') {
//             alert('Gagal! Semua kolom harus diisi.');
//         } else {
//             // Di sini Anda dapat menambahkan kode untuk mengirim data ke server atau langkah selanjutnya.
//             alert('Pendaftaran berhasil!');
//             // form.reset();
//         }
//     });
// });


