// khởi tạo biến vòng lặp dùng let k dùng khác

let num = [10, 20, 15];
let sum = 0;
for(let i = 0 ; i < num.length; i++){
    sum += num[i];
}

console.log(sum);



//////////////////////
const bai2 = [
    {
      id: 1,
      name: "A",
      gender: "nam",
    },
    {
      id: 2,
      name: "B",
      gender: "nữ",
    },
    {
      id: 3,
      name: "C",
      gender: "nam",
    },
    {
      id: 4,
      name: "D",
      gender: "nam",
    },
  ];
  const B = [];
  for (const item of bai2) {
    console.log(item);
    if(item.gender !== 'nữ'){
        B[B.length] = {human: item.id + item.name, gender: item.gender}
    }
  }
  console.log(B);
  
  //  tạo ra mảng mới
  //   const b = [
  //       {human:"A1",gender:"nam"},
  //       {human:"C3",gender:"nam"},
  //       {human:"D4",gender:"nam"}
  //   ]
  
  // câu 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
// a: tính trung bình cộng số âm
// b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
// c: tìm số âm lớn nhất trong mảng

const number = [2, -5, 6, -7, -4, 7, -1, -1];
let tongam = 0;
const arrAm = []
for(let i = 0 ; i < number.length ; i++){
    if(number[i] < 0){
      arrAm[arrAm.length] = number[i];
    }
}
console.log(arrAm);

for(let i = 0 ; i < arrAm.length ; i++) {
  tongam +=arrAm[i];
}
let tatol = tongam / (arrAm.length);
console.log(tatol);

// b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a

let arrCaub = [];

for(let i = 0 ; i < arrAm.length ; i++){
    if(arrAm[i] > tatol){
        arrCaub[arrCaub.length] = arrCaub;
    }
}
console.log(arrCaub);

// c: tìm số âm lớn nhất trong mảng

let max = arrAm[0];
for(let i = 0 ; i < arrAm.length ; i++){
    if(arrAm[i] > max){
        max = arrAm[i];
    }
}
console.log(max);































//i++ mỗi lần chạy nó tăng lên 1 đơn vị 
for(let i = 0; i < 10; i++){
    console.log(`${i}: xin lỗi`);
}

//bai1
let numbers = [10,29,15];
let tong = 0;
for(let i = 0 ; i < numbers.length ; i++){
    tong +=numbers[i];
}
console.log(tong);


//bai2
function copy(string){
    let chuoiSo = "";
    for(let i = 0 ; i < 10; i++){
        chuoiSo += `${i === 0 ? "" : ' -'} ${string}`
    }
    return chuoiSo;
}
const kq = copy("dat");
console.log(kq);

//bai3

function giaithua(n){
    let kq = 1;
    for(let i = 1 ; i <= n; i++){
        kq *=i;
    }
    console.log(kq);
}
giaithua(5);


// bai4
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74,22, 23];
let evenNumbers = [];
let oddNumbers = [];

for(let i = 0 ; i < arrNumber.length ; i++ ){
    if(arrNumber[i] % 2 === 0 ){
        console.log(arrNumber[i]);
        evenNumbers[evenNumbers.length] = arrNumber[i];
    }
    else{
        oddNumbers[oddNumbers.length] = arrNumber[i];
    }
}
console.log(evenNumbers);
console.log(oddNumbers);





// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên 
// dương cho trước.
//  Input: 10, 30
//  Output: 14, 21, 28
//  Input: 50, 70
//  Output: 56, 63

function chiaSo(n,m){
    for(let i = n ; i <= m ; i++){
        if(i % 7 === 0 && i % 5 !== 0){
            console.log(i);
        }
    }
}
chiaSo(50,70);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function tongChuoiSo(chuoiSo){
    let kq = 0;
    for (const item of chuoiSo) {
        kq +=+item;
    }
    return kq;
}

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
        return true;
    }
}

function main(chuoiSo) {
    const inra = tongChuoiSo(chuoiSo);
    console.log(`Tổng dãy số: ${inra} , ${isPrime(inra) ? "Số nguyên tố" : "Không là số nguyên tố"}`);
}
main("379");

//Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng

function tinhTongarr(arr){
    let tatol = 0;
    for(let i = 0 ; i < arr.length ; i++){
        tatol +=arr[i];
    }
    return tatol;
}
const ketqua = tinhTongarr([2,3,4]);
console.log(ketqua);

// Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong 
// mảng

function maxNumber(arrMax){
    let max = arrMax[0];
    for(let i = 0 ; i < arrMax.length ; i++){
        if(max < arrMax[i]){
            max = arrMax[i]
        }
    }
    console.log(`max = ${max}`);
}
// const arreven = [2,3,5,7,8,11];
maxNumber([2,3,5,7,8,11]);

// Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000

let tongBoi = 0;
for(let i = 0 ; i <= 1000; i++){
    if(( i % 3 === 0 || i % 5 === 0 ) && i > 0 ){
        tongBoi +=i;
    }
}
console.log(`Tong la: ${tongBoi}`);


// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
// Input: 10
// Output: (3, 7)
// Input: 20
// Output: (3, 17), (7, 13)

// for (let a = 2; a <= n / 2; a++) {
//     let b = n - a;
//     if (isPrime(a) && isPrime(b)) {
//         pairs.push(`(${a}, ${b})`);
//     }
// }

function isPrime(num){
    if(num < 2)
        return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
        return true;
    }
}

console.log(isPrime(3) ? "số nguyên tố" : "không là phải sô nguyên tố");


function soNgto(n) {
    let pairs = [];
    for(let a = 2 ; a <= n/2; a++){
        let b = n - a;
        if(isPrime(a) && isPrime(b)){
            pairs[pairs.length] = (`${a}, ${b}`);
        }
    }
    return pairs;
}
const dapan = soNgto(20);
console.log(dapan);














// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và 
// score (điểm) , hiển thị ra màn hình console tên của học sinh có điểm cao nhất

// let arrproduct = [
//     {
//         name: "quoc dat",
//         score: 8,
//     },
//     {
//         name: "quoc huy",
//         score: 7,
//     },
//     {
//         name: "van nhan",
//         score: 9,
//     },
//     {
//         name: "van phong",
//         score: 10,
//     },
// ]
// let maxScore = arrproduct[0];
// for (const index in arrproduct) {
//     if(arrproduct[index].score > maxScore.score ){
//         maxScore = arrproduct[index];
//     }
// }
// console.log(maxScore.name);

function printName(students) {
    if(!students || students === 0){
        console.log("Mảng học sinh rỗng");
    }
    let maxScore = students[0];
    for (const index in students) {
        if(students[index].score > maxScore.score){
            maxScore = students[index];
        }
    }
    console.log(maxScore.name);
}

let arrproduct = [
    {
        name: "quoc dat",
        score: 8,
    },
    {
        name: "quoc huy",
        score: 7,
    },
    {
        name: "van nhan",
        score: 9,
    },
    {
        name: "van phong",
        score: 10,
    },
]
printName(arrproduct);


// Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông 
// tin sau:
//  name: tên sp
//  code: mã sp,    
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
//  red: 10   (sản phẩm này còn 10 cái màu đỏ)
//  blue: 20 ....
//  Giả sử không biết sản phẩm có những màu nào
//  Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho

const Myobject = {
    tensp: "Iphone 11",
    code: "AB1208",
    bule:20,
    red:20,
}
let tonghang = 0;
for (const key in Myobject) {
    //typeof Myobject[key] === "number" 
    // typeof Myobject[key] để in ra kiểu dữ liệu và so sánh
    if(key !== 'tensp' && key !== 'code' && typeof Myobject[key] === "number"){
        tonghang +=Myobject[key];
    }
}
console.log(tonghang);



//  câu 1:
const a = ["A", "B", "C"];
const b = [1, 2, 3];
// tạo ra mảng mới c
// let c = [
//   { value: "A1", id: 1 },
//   { value: "B2", id: 2 },
//   { value: "C3", id: 3 },
// ];
//

let c = [];
for (const index in a) {
    c[c.length] = {value: a[index] + b[index], id: b[index]}
}
console.log(c);
