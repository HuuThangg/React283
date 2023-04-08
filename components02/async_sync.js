// Sync Đồng bộ
/*
let a=1,b=2,c=3;
console.log(a)
console.log(b)
console.log(c)
*/
// Async Bất Đồng bộ
/*
let a = 1, b = 2, c = 3;
console.log(a)
setTimeout(() => {
    console.log(b)
}, 3000)
console.log(c)
*/

// Promise: Tổng hai số
const promiseTongHaiso = (a, b) => {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(`Dữ liệu không hợp lệ`)
        } else {
            let kq = a + b;
            resolve(kq);
        }
    })
}
// Gọi
/*
let a=5,b=4,c=5;
promiseTongHaiso(a,b).then(result=>{
    console.log(result)
    promiseTongHaiso(result,c).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
}).catch(err=>{
    console.log(err)
})
*/
// Promise: Diện tích và Chu vi Hình Chữ nhật
const promiseHinhChuNat = (d, r) => {
    return new Promise((resolve, reject) => {
        if (isNaN(d) || isNaN(r)) {
            reject(`Dữ liệu không hợp lệ`)
        } else {
            let dt = d * r;
            let cv = (d + r) * 2;
            resolve({ cv, dt });
        }
    })
}
// Gọi
/*
let d=20,r=4;
promiseHinhChuNat(d,r).then(result=>{
    console.log(`Diện tích ${result.dt} - Chu vi ${result.cv} `);
}).catch(err=>{
    console.log(err);
})
*/
//=========================================================================
/*
    Async - Await
    * từ khóa async biến đổi một hàm thường thành promise
    * Nếu có async thì mới sử dụng await
    * đứng sau await phải là promise  nếu là callback báo lỗi
    * Lưu ý: trình duyệt IE >= 11. nodejs > 8
    const AAAA =async ()=>{
        let kq= await promiseFnc();
        let kq2=await promiseFnc();
    }
*/
// Xây dựng hàm tìm số lớn nhất của hai số - promise

const promiseTimSolonHaiso = (a, b) => {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(`Dữ liệu không hợp lệ`)
        } else {
            let kq = (a > b) ? a : b;
            resolve(kq);
        }
    })
}

const SoLonnhat = async (a, b, c) => {
    try {
        let kq1 = await promiseTimSolonHaiso(a, b);
        //console.log(kq1);
        let kq2= await promiseTimSolonHaiso(kq1,c);
        //console.log(kq2);
        return kq2
    } catch (error) {
        console.log(error)
    }


}
let a = 10, b = 15, c = 20;
SoLonnhat(a, b, c).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(`err`)
}).finally(()=>{
    console.log(`finally`)
})



