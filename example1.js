
// Bài 1
// Đầu vào: Số ngày làm việc, lương 1 ngày
// Xử lý: Tổng lương = Số ngày làm việc * lương 1 ngày
// Đầu ra: Tổng lương

const salaryADay = 100000;
let days = 30;

let totalSalary = days * salaryADay;

console.log("Tổng lương của nhân viên: " + totalSalary);

// Bài 2
// Đầu vào: 5 số thực
// Xử lý: Trung bình cộng = (số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5) / 5
// Đầu ra: Trung bình cộng

let num1 = 40;
let num2 = 50;
let num3 = 62.5;
let num4 = 32.5;
let num5 = 90;

let average = (num1 + num2 + num3 + num4 + num5) / 5;

console.log("Trung bình cộng của 5 số thực: " + average);

// Bài 3
// Đầu vào: Số tiền USD, tỉ giá USD sang VND
// Xử lý: Số tiền VND = Số tiền USD * tỉ giá
// Đầu ra: Số tiền VND

const exchangeRate = 23500; 
let usdAmount = 2;

let vndAmount = usdAmount * exchangeRate;

console.log("Số tiền VND: " + vndAmount);

// Bài 4
// Đầu vào: Chiều dài, chiều rộng hình chữ nhật
// Xử lý: Diện tích = chiều dài * chiều rộng
// Chu vi = (chiều dài + chiều rộng) * 2
// Đầu ra: Diện tích, chu vi

let length = 5;
let width = 3;

let area = length * width;

let perimeter = (length + width) * 2;

console.log("Diện tích hình chữ nhật: " + area);
console.log("Chu vi hình chữ nhật: " + perimeter);

// Bài 5
// Đầu vào: Số có 2 chữ số
// Xử lý: Ký số hàng chục = số / 10 (lấy phần nguyên)
// Ký số hàng đơn vị = số % 10 (lấy phần dư)
// Tổng 2 ký số = ký số hàng chục + ký số hàng đơn vị
// Đầu ra: Tổng 2 ký số

let number = 44;

let tensDigit = Math.floor(number/10);
let unitsDigit = number % 10;

let sumOfDigits = tensDigit + unitsDigit;


console.log("Tổng 2 ký số: " + sumOfDigits);
