// Khai báo biến
/*
    Cú pháp: [Từ khóa] <tên biến> [= giá trị mặc định]
    ví dụ: lưu trữ thông tin họ tên.
    hoten;
    hoten="React Native";
    let hoten="";
    var hoten="";
*/

// var hoten="React Native"; // SET
// console.log(hoten) // GET
/*
    Kiểu dữ liệu cơ sở: string, number, date, bool, array, object
    typeof(giá trị| biến)
*/
/*
var hoten="React Native", tuoi=50, gioitinh=true, lstHocsinh=[], objNhanvien={};
var s1;
console.log("Họ tên:" + hoten + " Kiểu " + typeof(hoten));
console.log(`-------------------------------------------`);
console.log(`Tuổi: ${tuoi} - Kiểu: ${typeof(tuoi)}`);
console.log(`-------------------------------------------`);
console.log(`Giới tính: ${gioitinh} - Kiểu: ${typeof(gioitinh)}`);
console.log(`-------------------------------------------`);
console.log(`Giá trị của S: ${s1} - Kiểu: ${typeof(s1)}`);
*/
/*
    Từ khóa let , var
*/
/*
let x=10;
x=x+5;
//let x=20; // 'x' has already been declared
console.log(x);
*/
/*
    Phạm vi hoạt động của biến
    - Toàn cục: Khai báo Ngoài Hàm
    - Cục bộ: Khai báo trong Hàm
*/

let x=10; // Biến Toàn cục
// Hàm
const Test=()=>{
    let y=5 // Biến Cục bộ
    x+=y;
    //console.log(`Biến x trong hàm ${x}`)
    console.log(`Biến y trong hàm ${y}`)
}

//console.log(`Biến y trước khi gọi hàm ${y}`); //ReferenceError: y is not defined
//Test(); //5
//console.log(`Biến y sau khi gọi hàm ${y}`); //ReferenceError: y is not defined
/*
    Hằng
    Cú pháp
    const <TÊN HẰNG> = giá trị mặc định 
*/
const PI =3.14;
//PI=3.1416; // TypeError: Assignment to constant variable
//console.log(`Giá trị của Hằng PI: ${PI} - Kiểu: ${typeof(PI)}`);

let bt1=(5<3);
let bt2=(4<3);
console.log(bt1 && bt2 );