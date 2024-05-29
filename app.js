//file system
//core module
const { error } = require('console');
const e = require('express');
const fs = require('fs');

// menulisakan string ke file (synhronus)
// fs.mkdirSync('data/','')

// try {
//     fs.writeFileSync('data/test.txt', 'lorem ipsum del ');
//     console.log('berhasil')
// } catch(err){
//     console.log(err)
// }

//menuliskan sytring ke file asyngcornous  

// fs.writeFile('data/test.txt',"hello word", (err) => {
//     console.log(err)
// });

// fs.writeFile('data/coba.txt','hello word', (e) => {
//     console.log(e)
// })

//membaca isi file(sycronous)

// const baca = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(baca)


// const coba = fs.readFileSync('data/coba.txt','utf-8');
// console.log(coba)


//read file Asycronous 
//  fs.readFile('data/coba.txt','utf-8', (e, data) => {
//     if(e) throw e
//     console.log(data)
//  })
//  console.log(data)
// fs.readFile('data/coba.txt', 'utf-8', (e,data) => {
//     if(e) throw e
//     console.log(data)
// })


// fs.readFile('data/test.txt', 'utf-8', (err,data) => {
// if(err) throw err
// console.log(data)
// });

// fs.readFile('data/coba.txt', 'utf-8', (e, data) => {
//     if(e) throw e
//     console.log(data)
// })

//readline 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan no hp anda : ', (nomor) => {
        const contact  = {nama, nomor};
        const  file = fs.readFileSync('data/contacts.json','utf-8', );
        const contacts = JSON.parse(file)
        contacts.push(contact)
        // console.log(contacts)
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
        console.log('terima kasih data terkirim')
        
        // fs.writeFileSync = ('data/contacts.json',JSON.stringify[contact])
        // console.log(`makasih ${nama}, dan nomor anda ${nomor}`)
        rl.close();
    })
})


// rl.question('masukan nama anda : ', (nama) => {
//     rl.question('masukan nomor hp anda: ', (NoHP) => {
//         const contact = {nama, NoHP};
//         const file = fs.readFileSync('data/contacts.json', 'utf8',);
//         const contacts = JSON.parse(file);
//         contacts.push(contact)
//         // console.log(contacts)
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contact))
//         console.log('data berhasil di simpan')


//         rl.close()
//     })
// })



// fs.writeFileSync('data/contacts.json',`${nama}, ${nomor}`,);
// console.log('data terkirim')
