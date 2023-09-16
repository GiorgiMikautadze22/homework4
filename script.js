// #1
// დაწერეთ ფუნქცია რომელსაც გადასცემთ წინადადებას და ციფრს
// მაგალითად fn("გამარჯობა, როგორ ხარ?", 5)
// ფუნქციამ უნდა შეამოკლოს ხუთი სიმბოლო და დაამატოს ბოლოში "..."
// და დააბრუნოს შედეგი "გამარ..."

// function deductAndAdd(sentance, num) {
//   let newSentance = sentance.split("").splice(0, num).join("");
//   console.log(`${newSentance}...`);
// }

// deductAndAdd("გამარჯობა, როგორ ხარ?", 10);

// #2
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრების მასივს
// ფუნქციამ უნდა დააბრუნოს მასივში მარტივი რიცხვების ჯამი
// მაგალითად fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// მარტივი არის ციფრი რომელიც იყოფა მხოლოდ 1-ზე და თავის თავზე

// let simpleArr = [];

// function simpleNum(numArr) {
//   numArr.forEach((el) => {
//     if (
//       el % 2 !== 0 &&
//       el % 3 !== 0 &&
//       el % 4 !== 0 &&
//       el % 5 !== 0 &&
//       el % 6 !== 0 &&
//       el % 7 !== 0 &&
//       el % 8 !== 0 &&
//       el % 9 !== 0
//     ) {
//       console.log(el);
//     }
//   });
// }
// console.log(simpleArr);
// simpleNum([1, 2, 3, 4, 11, 5, 6, 101, 7, 13, 8, 9, 10, 19]);

// #3
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ტელეფონის ნომერს
// და ქვეყანას
// მაგალითად fn("995599123456", "GE")
// თუ ქვეყანა არის GE დააბრუნოს +995599123456
// თუ ქვეყანა არის US დააბრუნოს +1(995)99123456
// თუ ქვეყანა არის RU დააბრუნოს +7(995)99123456
// თუ ქვეყანა არის სხვა დააბრუნოს შეცდომა "არ ვიცით რა ქვეყანაა ეს"

// function countryNum(phoneNum, country) {
//   if (country === "GE") {
//     console.log(`+995 ${phoneNum}`);
//   } else if (country === "US") {
//     let first3 = phoneNum.split("").slice(0, 3).join("");
//     let remaining = phoneNum.split("").slice(3, phoneNum.length).join("");
//     console.log(`+1(${first3})${remaining}`);
//   } else if (country === "RU") {
//     let first3 = phoneNum.split("").slice(0, 3).join("");
//     let remaining = phoneNum.split("").slice(3, phoneNum.length).join("");
//     console.log(`+7(${first3})${remaining}`);
//   } else {
//     console.log("სხვაგან მოხვდი");
//   }
// }

// countryNum("571058206", "GE");

// #4
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრების მასივს
// მაგალითად fn([1, 2, 3, 3, 5, 2, 7, 8, 7, 10])
// დააბრუნოს მასივის ყველა უნიკალური ელემენტი
// მაგალითად [1, 2, 3, 5, 7, 8, 10]

// function uniqueNum(arr) {
//   uniqueArr = [];
//   arr.forEach((el) => {
//     if (!uniqueArr.includes(el)) {
//       uniqueArr.push(el);
//     }
//   });
//   console.log(uniqueArr);
// }
// uniqueNum([1, 2, 3, 3, 5, 2, 7, 8, 8, 88, 8, 8, 7, 10]);

// #5
// დაწერეთ ბანკომატის ფუნქციონალი რომელსაც გადასცემთ ციფრს
// ბანკომატში გვაქვს 200 , 100 , 50, 20, 10, 5 ლარიანი კუპიურები
// ფუნქციამ უნდა გვითხრას რამდენ ცალს და რამდენ ლარიან კუპიურად
// დაგვიშლის ჩვენს თანხას
// მაგალითად თუ ვეტყვით რომ გვინდა 555 ლარი
// ფუნქციამ უნდა დაგვიბრუნოს
// 2 ცალი 200 ლარიანი
// 1 ცალი 100 ლარიანი
// 1 ცალი 50 ლარიანი
// 1 ცალი 5 ლარიანი

// function atm(sum) {
//   let count = 0;
//   let twoHundred = 0;
//   let oneHundred = 0;
//   let fifty = 0;
//   let five = 0;
//   for (let i = 0; i <= sum; i++) {
//     if (count < sum) {
//       count = count + 200;
//       twoHundred++;
//     } else if (count > sum) {
//       count = count - 200;
//       twoHundred = twoHundred - 1;
//       break;
//     } else {
//       count = count;
//     }
//   }
//   for (let i = 0; i <= sum; i++) {
//     if (count < sum) {
//       count = count + 100;
//       oneHundred++;
//     } else if (count > sum) {
//       count = count - 100;
//       oneHundred = oneHundred - 1;
//       break;
//     } else {
//       count = count;
//     }
//   }
//   for (let i = 0; i <= sum; i++) {
//     if (count < sum) {
//       count = count + 50;
//       fifty++;
//     } else if (count > sum) {
//       count = count - 50;
//       fifty = fifty - 1;
//       break;
//     } else {
//       count = count;
//     }
//   }
//   for (let i = 0; i <= sum; i++) {
//     if (count < sum) {
//       count = count + 5;
//       five++;
//     } else if (count > sum) {
//       count = count - 5;
//       five = five - 1;
//       break;
//     } else {
//       count = count;
//     }
//   }
//   console.log(`${five} ცალი 5 ლარიანი`);
//   console.log(`${fifty} ცალი 50 ლარიანი`);
//   console.log(`${oneHundred} ცალი 100 ლარიანი`);
//   console.log(`${twoHundred} ცალი 200 ლარიანი`);
// }
// atm(755);
