// câu 1: Dùng toán tử chia lấy dư để kiểm tra số nguyên dương javascript
/*function laSoNguyenDuong(n) {
    return n>0 && n%1===0;
}
console.log(laSoNguyenDuong(3));
*/

//câu 2: Kiểm tra số nguyên âm trong javascript
/*function laSoNguyenAm(a) {
    return a<0 && a%1===0;
}

console.log(laSoNguyenAm(9));
*/

//câu 3: Tính tổng hai số bằng Javascript (cộng hai số)
/*
let num1 = Number(prompt("Nhập số thứ nhất:"));
let num2 = Number(prompt("Nhập số thứ hai:"));
let sum = num1 + num2;
console.log(`Tổng hai số là: ${sum}`);
*/

//câu 4: Giải phương trình bậc 1 bằng Javascript
/*
function giaiPtBacMot(a,b) {
    if (a===0){
        if (b===0){
            return 'PT có vô số nghiệm';
        } else {
            return 'PT vô nghiệm';
        }
    }
    var x= -b/a;
    return `Nghiệm của PT là x = ${x}`;
}
 console.log(giaiPtBacMot(6,3));
 */

 //câu 5: Kiểm tra số nguyên tố bằng Javascript
 /*
function laSoNguyenTo(n){
    if ( n<2 || n%1!==0){
        return `${n} không phải số nguyên tố`;
    }
    for (var i=2; i<n; i++) {
        if (n%i===0){
            return `${n} không phải số nguyên tố`;
        }
    return `${n} là số nguyên tố`   ; 
    }
}
console.log(laSoNguyenTo(4))
*/

//câu 6:Kiểm tra số chính phương
/*
function laSoChinhPhuong(n){
    if (n<0 || n%1!==0){
        return `${n} không phải số chính phương`;
    }
    var canBacHai= Math.sqrt(n);
    if (canBacHai%1===0){
        return `${n} là số chính phương`;
    }
}
console.log(laSoChinhPhuong(25))
*/
