//assignment
var phone3=/((^0[1-9]{1,3}\-[0-9]{10})|(^[+][0-9]{1,2}\-[0-9]{11})|(^[+][0-9]{1,2}\-[0-9]{10}))$/
console.log(phone3.test("+95-09429306291"))

//assingment
var visa_card=/^4[0-9]{3}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/
console.log(visa_card.test(4876-8520-0044-1789))//errorမရှာတတ်တော့လို့ပါ

//assignment
var email=/^[a-z]+[_.]*[0-9]+[a-z]*\@$/
console.log(email.test("kyaw_234tun@"));

var emails=/^[a-z]+[0-9]+[_.]*[0-9]*\@$/
console.log(emails.test("ttun234.20@"));

var email1=/^[0-9]+[_.][a-z]*\@$/
console.log(email1.test("34.khaing@"));