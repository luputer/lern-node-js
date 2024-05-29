// const { rejects } = require('assert');
// const { json } = require('express');
// const fs = require('fs');
// const { resolve } = require('path');
// // const readline = require('readline')
// const contact = require('./contact')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// //make a folder data 
// const dirPath = './data'
// if(!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath);
// }

// // make file json if not have file
// const datapath = './data/contacts.json'
// if(!fs.existsSync()){
//     fs.writeFileSync(datapath, '[]', 'utf-8');
// }


// const Tulispertanyan = (pertanyaan) => {
//     return new Promise((resolve, rejects) => {
//         rl.question(pertanyaan, (isi) => {
//             resolve(isi)
//         })
//     })
// }

// const pertanyan2 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('masukan email anda : ', (email) => {
//             resolve(email)
//         })
//     })
// }


const {Tulispertanyan, simpanContact} = require('./contact');

const main = async () => {
    const nama  = await Tulispertanyan("masukan nama anda : ");
    const email = await Tulispertanyan("masukan email anda : ");
    const noHP  = await Tulispertanyan("masukan No Hp anda : ");
    // const contact = {nama, noHP, email};
    //         const file = fs.readFileSync('data/contacts.json','utf-8');
    //         const contacts = JSON.parse(file)
    //         contacts.push(contact);
    
    //         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    //         console.log('terimakasih data sudah terkirim');
    //         rl.close()
    
    simpanContact(nama, email, noHP);
    
}


main();

// rl.question('masukana nama anda :', (nama) => {
//     rl.question('Masukan No HP anada :', (noHP) => {
//         const contact = {nama, noHP};
//         const file = fs.readFileSync('data/contacts.json','utf-8');
//         const contacts = JSON.parse(file)
//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//         console.log('terimakasih data sudah terkirim');
        
//         rl.close()
//     })
// })