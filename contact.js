const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//make a folder data 
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// make file json if not have file
const datapath = './data/contacts.json'
if(!fs.existsSync()){
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

const Tulispertanyan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (isi) => {
            resolve(isi)
        })
    })
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file)
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('terimakasih data sudah terkirim');
    rl.close()
}


module.exports = {
    Tulispertanyan,
    simpanContact
}