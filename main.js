var data = [
    {"nim": "0000000001", "nama": "admin", "alamat": "system"},
];

$(document).ready(function(){
    var tbody = $('#bodytable');
    
    data.forEach(item => {
        var row = `<tr>
                       <td>${item.nim}</td>
                       <td>${item.nama}</td>
                       <td>${item.alamat}</td>
                       <td><button type="button" class="btn btn-primary">Ubah</button>  <button type="button" class="btn btn-danger">Hapus</button></td>
                   </tr>`;
        tbody.append(row);
    });
})
