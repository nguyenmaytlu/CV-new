
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ navbar trang giới thiệu
var mobile_link_bars = document.querySelector(".mobile_link_bars")
var mobile_link_xmark = document.querySelector(".mobile_link_xmark")
var menu = document.querySelector(".menu")
var menu_item = document.querySelectorAll(".menu_item")

// bắt sự kiện khi click vào nút bars thì chiều cao của menu là 100%
mobile_link_bars.addEventListener("click", function () {
    menu.style.height = "100%"
    mobile_link_xmark.style.display = "inline-block"
    mobile_link_bars.style.display = "none"
})

// bắt sự kiện khi click vào nút xmark thì chiều cao của menu là 0%
mobile_link_xmark.addEventListener("click", function () {
    menu.style.height = "0"
    mobile_link_bars.style.display = "inline-block"
    mobile_link_xmark.style.display = "none"
})


for(var i = 0; i<menu_item.length; i++){
    menu_item[i].addEventListener("click",function(){
        menu.style.height = "0"
        mobile_link_bars.style.display = "inline-block"
        mobile_link_xmark.style.display = "none"
    })
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Contact

var input_contact = document.querySelectorAll(".input_contact")
var input_email_contact = document.querySelector(".input_email_contact")
var empty_error = document.querySelectorAll(".empty_error")
var invalid_email_error = document.querySelector(".invalid_email_error")

var form = document.querySelector("form")
var submit = document.querySelector("button")


// hàm kiểm tra giá trị rỗng
function checkForEmptyValue(element, empty_error){
    if(element.value.trim() == ""){
        element.style.borderBottomColor = "red"
        empty_error.textContent = "Please fill out this field"
        element.classList.add("error")
    }
    else{
        element.style.borderBottomColor = "#53b3a6"
        empty_error.textContent = ""
        element.classList.remove("error")
    }
}


// hàm kiểm tra email
function checkEmail(element, invalid_email_error){
    var reg = /^\w+@[a-zA-Z]+\.com$/i

    if(element.value.trim() == ""){
        element.style.borderBottomColor = "red"
        invalid_email_error.textContent = "Please fill out this field"
        element.classList.add("error")
    }
    else if(reg.test(element.value)){
        element.style.borderBottomColor = "#53b3a6"
        invalid_email_error.textContent = ""
        element.classList.remove("error")
    }
    else{
        element.style.borderBottomColor = "red"
        invalid_email_error.textContent = "Invalid email"
        element.classList.add("error")
    }
}

// hành động khi blur ra khỏi ô input
for(let i=0; i<input_contact.length; i++){
    input_contact[i].addEventListener("blur",function(){
        checkForEmptyValue(input_contact[i],empty_error[i])
    })
}

input_email_contact.addEventListener("blur",function(){
    checkEmail(input_email_contact, invalid_email_error)
})


// hành động nhấn click vào ô button
submit.addEventListener("click", function(e){

    e.preventDefault()

    for(let i=0; i<input_contact.length; i++){
        checkForEmptyValue(input_contact[i],empty_error[i])
    }
    checkEmail(input_email_contact,invalid_email_error)
       
    var error = document.querySelectorAll(".error")

    if(error.length == 0){
        form.innerHTML = "<div>Thanks, your message is sent successfully.</div>"
        var feedback = document.querySelector("form div")
        feedback.style.marginTop = "60px"
        feedback.style.color = "#575757"
        feedback.style.fontSize = "16px"
        feedback.style.fontWeight = "400"
        feedback.style.lineHeight = "25px"
    }
})

