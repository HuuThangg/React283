/*
Cú pháp : 
           [Từ khóa] <Tên hàm> = ([Danh sách tham số]) => {
                   // Lệnh xử lý
           }

*/
// Cách 1: Xây dựng Hàm Tổng hai số.
/*
function TongHaiso(a,b) {
    let tong= a+b;
    return tong;
}
*/
// Cách 2: Xây dựng Hàm Tổng hai số. ES6
/*
const TongHaiso=(a,b)=>{
    let tong= a+b;
    return tong;
}

*/
// Cách 3: Xây dựng Hàm Tổng hai số. ES6
const TongHaiso=function(a,b){
    let tong= a+b;
    return tong;
}
// Gọi Hàm
/*
let a=5,b=4,kq;
kq=TongHaiso(a,b);
console.log(`${a}+${b}=${kq}`);
*/

/*
    const Tong(...tong){

    }
*/
const Tong=(...param)=>{
    console.log(param);
}
//Tong(1,5)
///////////////////// Bài tập ///////////////////////////////
// 1 Xây dựng Hàm Tính Chu vi HCN cv=(D+R)*2
// 2 Xây dựng Hàm Tính Diện tích HCN dt=(D*R)
// 3 Kiểm tra số thực, số nguyên => số nguyên -> true không là số nguyên false

const isInteger =(num)=>{
    //return Number.isInteger(num);
    //return (x%1==0)
    return (Math.floor(num)===x)
}

let x=3.5;
//console.log(parseInt(x))
let result=isInteger(x);
console.log(result);