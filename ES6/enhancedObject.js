var name = "Javascript";
var price = 1000;
var course = {
    name,
    price,
    getName () {
        return name;
    }
}
// console.log(course.getName())

var fiedName = "name";
var fiedPrice = "price";

var course = {
    // lay ra tu value cua bien 
    [fiedName] : "Javascript",
    [fiedPrice] : "1000"
}

// /* console.log(course)

// rest parametre, neu muon lay nhung bien con lai tu bien b, ou a,...
// muon lay thang ra cac gia tri cua obj: ({name, price})
function logger({name, price, ...rest}) {
    console.log(name)
    console.log(price)
    console.log(rest)

}
// logger(1,2,3)
logger({
    name : "Javascript",
    price: 1000,
    description : "Description content"
})

// tuong tu voi phan mang 
function logger2([a,b, ... rest]) {
    console.log(a)
    console.log(b)
    console.log(rest)

}
// logger(1,2,3)
logger2([2,6,5,10,12,14])

// SPREAD la toan tu ... , giong rest nhung cach dung khac nhau. Doi vois Spread, khi ma minh de toan tu ... truoc array1 va array2 = thi ket qua hien ra chi la phan tu ma thoi khong phai mang : Array(5) [ "Javascript", "Ruby", "PHP", "ReactJS", "Dart" ]
var array1 = ['Javascript', 'Ruby', "PHP"];
var array2 = ['ReactJS', 'Dart'];
// SPREAD dung de noi mang
var array3 = [...array2,...array1]; //Array(5) [ "Javascript", "Ruby", "PHP", "ReactJS", "Dart" ]
console.log(array3)

var objet1 = {
    name : "Javascript"
}

var objet2 = {
    price : 1000
}

var objet3 = {
    ... objet1, 
    ...objet2
}

console.log(objet3)

// minh dung spread trong truong hop nhu sau: vi du nhu la khi minh lam mot trang web, minh co mot objet , ma nhung gia tri trong objet do co trung voi nhieu gia tri trong objet khac, minh luon tao ra mot objet moi thua huong objet cu nhung co the thay doi gia tri cua mot hoac 2 kay thi luc do minh nen dung spred vi du 

var defaultConfig = {
    api: "http://domain-trang-khoa-hoc",
    apiVersion: "V1",
    orther : "orther"
}

// exerciceCOnfig thua huong nhung gia tri va key cua defautConfig, nhung exerciceConfig co api khac
var exerciceConfig = {
    ...defaultConfig,
    api:"http://domain-trang-bai-tap",
}

// console.log(exerciceConfig)

// su dung toan tu spread de truyen tham so cho ham

function imprimer(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}
// imprimer(...array1)

// rest la dung trong parametre cua function // INPUT
// spread la dung trong chuyen doi so, nghia la goi lai ham, va chuyen doi sang gia tri, OUTPUT
//Rest là gôm lại 1 biến như mãng
// Spread rãi/trãi phần tử của mãng ra thành từng element riêng lẻ.


// DESTRUCTURING 
// CACH LAY CAC PHAN TU TRONG MANG MA KHONG CAN THONG QUA MANG
var [a, ,c] = array1; // lay ra a va c, ma khong lay b
// console.log(a,c)
// toan tu reste la su dung voi destructuring, voi array variable minh co the goi gi cung duoc
var [a, ... rest] = array1; // lay ra a va c, ma khong lay b
//console.log(rest)
// nhung voi objet, muon lay name thi phai goi name, phai goi dung tu khoa cua no.
// var lesson = {
//     name: "Javascript",
//     price: 10000,
//     image : "img",
//     chidrent: {
//         name: "ReactJS"
//     }
// }
// // var {name, ...rest} = lesson;
// // console.log(rest)
// // lam sao de lam name trong object chidrent, trong khi do name bi trung voi name ngoai => dat name ngoai banh mot bien moi : name: parentName

// var {name: parentName, chidrent: {name : chidrentName} } = lesson
// console.log(parentName, "NAME OF CHIDREN", chidrentName)

var lesson  = {
    name: "Javascript",
    price: 1000, 
    image: "IMG",
    description: "Description Defautl",
    description2: "Default2"
}
var { name, price, description2 = "Defautl", ...newObjet} = lesson
// lay gia tri rest cua newObjet, o day no se khong lay name va price
console.log(newObjet)
console.log(description2)

var array5 = ["THuy", "Clement", "Catherine", "Charlote"]
var [a,b, ... rest] = array5
console.log("Toan tu Spread :", ...array5)
console.log("Toan tu rest :", rest) // tra ve mot array
