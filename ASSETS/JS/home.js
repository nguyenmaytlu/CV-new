
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NAVBAR

// var navbar_menu_mobile = document.querySelector(".navbar_menu_mobile")
var click_display_menu = document.querySelectorAll(".navbar_menu_mobile a")
var navbar_list = document.querySelector(".navbar_list")
var mobile_link_bars = document.querySelector(".mobile_link_bars")
var mobile_link_xmark = document.querySelector(".mobile_link_xmark")
var navbar_item_link = document.querySelectorAll(".navbar_item_link")

// bắt sự kiện click vào nút bars hiện ra navbar
click_display_menu[0].addEventListener("click",function(){
    navbar_list.classList.toggle("display_block")
    mobile_link_bars.style.display = "none"
    mobile_link_xmark.style.display = "block"
})

// bắt sự kiện click vào nút xmark hiện ra navbar
click_display_menu[1].addEventListener("click",function(){
    navbar_list.classList.toggle("display_block")
    mobile_link_bars.style.display = "block"
    mobile_link_xmark.style.display = "none"
})

// bắt sự kiện click vào ... ẩn navbar và đi đến nội dung của từng phần
for(let i=1; i<navbar_item_link.length; i++){
    navbar_item_link[i].addEventListener("click",function(){
        navbar_list.classList.toggle("display_block")
        mobile_link_xmark.style.display = "none"
        mobile_link_bars.style.display = "block"
    })
}






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ slider

// experience

var experience_back = document.querySelector(".experience_back")
var experience_next = document.querySelector(".experience_next")

var experience_content_slider = document.querySelector(".content_experience .content_slider")
var experience_sliders = document.querySelectorAll(".content_experience .slider")

var experience_spaceX_dt = 0
var experience_spaceX_mt = 0
var experience_index = 0


// hàm xác định độ lớn chuyển của Element 'content_slider' theo trục X 1 khoảng spaceX
function handleChangeSlide(a){
    if(a===1){
        if(experience_index >= experience_sliders.length -1) return

        experience_spaceX_dt =  experience_spaceX_dt - 100
        experience_spaceX_mt =  experience_spaceX_mt - 54
        experience_index++
    }
    if(a===-1){
        if(experience_index <= 0) return

        experience_spaceX_dt =  experience_spaceX_dt + 100
        experience_spaceX_mt =  experience_spaceX_mt + 54
        experience_index--
    }
}

// bắt sự kiện khi click vào nut chuyển tiếp
experience_next.addEventListener("click", function () {
    handleChangeSlide(1)
})

// bắt sự kiện khi click vào nut quay lại
experience_back.addEventListener("click", function () {
    handleChangeSlide(-1)
})

// hàm dịch chuyển phần tử content_slider 1 khoảng spaceX
setInterval(function(){
    if(window.matchMedia("(max-width: 740px)").matches){
        experience_content_slider.style.transform = `translateX(${experience_spaceX_dt}%)`
    }
    else{
        experience_content_slider.style.transform = `translateX(${experience_spaceX_mt}%)` 
    }
},1)


// Education
// var education_back = document.querySelector(".education_back")
// var education_next = document.querySelector(".education_next")

// var education_content_slider = document.querySelector(".content_education .content_slider")
// var education_sliders = document.querySelectorAll(".content_education .slider")







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONTACT

var input_Contact = document.querySelectorAll(".content_Contact .input_Contact")
var input_email_Contact = document.querySelector(".input_email_Contact ")
var empty_error = document.querySelectorAll(".content_Contact .empty_error")
var invalid_email_error = document.querySelector(".invalid_email_error")
var submit = document.querySelector(".content_Contact button")
var form = document.querySelector(".content_Contact form")

// hàm kiểm tra xem value = "" không
function checkForEmptyValue(element,emptyError1) {
    if (element.value.trim() == "") {
        element.style.borderBottomColor = "red"
        emptyError1.textContent = "Please fill out this field"
        element.classList.add("error")
    }
    else {
        element.style.borderBottomColor = "#68e0cf"
        emptyError1.textContent = ""
        element.classList.remove("error")
    }
}


// hàm kiểm tra xem email có hợp lệ hay không
function checkEmail(element,invalidError){
    var reg = /^\w+@[a-zA-Z]+\.com$/i
    if (element.value.trim() == "") {
        element.style.borderBottomColor = "red"
        invalidError.textContent = "Please fill out this field"
        element.classList.add("error")
    }
    else if (reg.test(element.value)) {
        element.style.borderBottomColor = "#68e0cf"
        invalidError.textContent = ""
        element.classList.remove("error")
    }
    else{
        element.style.borderBottomColor = "red"
        invalidError.textContent = "Invalid email"
        element.classList.add("error")
    }
}


// bắt sự kiện "blur" vào ô input
for (let i = 0; i < input_Contact.length; i++){
    input_Contact[i].addEventListener("blur", function(){
        checkForEmptyValue(input_Contact[i],empty_error[i])
    })
}


// bắt sự kiện "blur" vào email kiểm tra tính hợp lệ của email
input_email_Contact.addEventListener("blur", function () {
    checkEmail(input_email_Contact, invalid_email_error)
})


// bắt sự kiện "submit" cho form, khi ấn vào button báo lỗi khi chưa thỏ mãn đk và đưa ra thông báo hợp lệ khi thỏa mãn đk
submit.addEventListener("click", function (e){
    e.preventDefault()          //ngăn chặn hành động mặc định của submit mặc định
    
    for (let i = 0; i < input_Contact.length; i++){
        checkForEmptyValue(input_Contact[i],empty_error[i])
    }
    checkEmail(input_email_Contact, invalid_email_error)

    var error = document.querySelectorAll(".content_Contact .error")
    if(error.length == 0){
        form.innerHTML = "<div>Thanks, your message is sent successfully.</div>"
        var feedback = document.querySelector(".content_Contact form div")
        console.log(feedback)
        feedback.style.marginTop = "60px"
        feedback.style.color = "white"
        feedback.style.fontSize = "13px"
        feedback.style.fontWeight = "400"
        feedback.style.lineHeight = "25px"
    }
})




