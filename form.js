//variabel
//var
//let
//const

//sync

// var name = "farhan"
// var name = "afif"
// console.log(name)

// let name2 = "Fendi"
// name2 = "Fikri"
// console.log(name2);

// const name3 = "Justian"
// name3 = "teuku"
// console.log(name3);

//-----------------------------

//type data

// let name = "Farhan"
// let age = 22
// console.log(name, "umur", age, "tahun");

// // bilangan1 dan bilangan2
// let bil1 = 5
// let bil2 = 5

// let hasil = bil1 + bil2

// console.log(hasil);

//-----------------------------

//function

// function bilanganBulat() {
//     let bil1 = 20
//     let bil2 = 30

//     let hasil = bil1 +bil2
//     console.log(hasil);
// }
// bilanganBulat()


//------------------------------------------------------------

function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name ==''){
       return alert("Nama Wajib Diisi")
    } else if (email == ''){
        return alert("email Wajib Diisi")
    } else if (phone == ''){
        return alert("Phone Number Wajib Diisi")
    } else if (subject == ''){
        return alert("Subject Wajib Diisi")
    } else if (message == ''){
        return alert("Message Wajib Diisi")
    }


    let emailReceiver = 'farhanafiffendi19@gmail.com'

    let a = document.createElement('a') //pembuatan tag a

    a.href = `mailto:${emailReceiver}?subject=${subject}&body= hallo my name ${name} please call me ${phone} my message ${message}`

    a.click() //menjalankan tag a

}