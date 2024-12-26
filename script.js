const slide = document.querySelectorAll(".slider-content-item")
const neXt = document.querySelector(".fa-chevron-right")
const prev = document.querySelector(".fa-chevron-left")
let index = 0
neXt.addEventListener("click", function(){
    slide[index].classList.remove("active")
    index = (index + 1) % slide.length
    slide[index].classList.add("active")
})
prev.addEventListener("click", function(){
    slide[index].classList.remove("active")
    index = (index - 1 + slide.length) % slide.length
    slide[index].classList.add("active")
})
//================Intro==============
const openIntroBtn = document.getElementById('openIntroBtn')
const introSection = document.getElementById('intro')
const closeIntroBtn = document.getElementById('closeIntroBtn')
openIntroBtn.addEventListener('click', function(event) {
    event.preventDefault()
    introSection.style.display = 'block'
})
closeIntroBtn.addEventListener('click', function() {
    introSection.style.display = 'none'
})
//================User===============

const contentSection = document.getElementById("auth-container")
// Hiển thị popup đăng nhập khi nhấn nút Đăng Nhập
const loginBtn = document.getElementById("login-btn")
    loginBtn.addEventListener("click", function() {
    loginBtn.addEventListener("click", showMaintenanceMessage)
})
// chức năng đang bảo trì
function showMaintenanceMessage() {
    alert("Chức năng đang bảo trì. Vui lòng quay lại sau!")
}

/*
document.getElementById("login-submit").addEventListener("click", async function() {
    const email = document.getElementById("login-email").value.trim()
    const password = document.getElementById("login-password").value.trim()

    // Kiểm tra nếu email hoặc mật khẩu chứa khoảng trắng
    if (email === "" || password === "") {
        alert("Email và mật khẩu không được để trống hoặc chỉ có khoảng trắng.")
        return
    }

    // Gửi yêu cầu đăng nhập
    try {
        const response = await fetch("http://localhost:3000/login-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.text()
        alert(data)
    } catch (error) {
        console.error("Đã có lỗi xảy ra", error)
    }
})

document.getElementById("register-submit").addEventListener("click", async function() {
    const email = document.getElementById("register-email").value.trim()
    const password = document.getElementById("register-password").value.trim()

    // Kiểm tra nếu email hoặc mật khẩu chứa khoảng trắng
    if (email === "" || password === "") {
        alert("Email và mật khẩu không được để trống hoặc chỉ có khoảng trắng.")
        return
    }

    // Gửi yêu cầu đăng ký
    try {
        const response = await fetch("http://localhost:3000/register-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.text()
        alert(data)
    } catch (error) {
        console.error("Đã có lỗi xảy ra", error)
    }
})

document.getElementById("forgot-submit").addEventListener("click", async function() {
    const email = document.getElementById("forgot-email").value.trim()

    // Kiểm tra nếu email chứa khoảng trắng
    if (email === "") {
        alert("Email không được để trống hoặc chỉ có khoảng trắng.")
        return
    }

    // Gửi yêu cầu quên mật khẩu
    try {
        const response = await fetch("http://localhost:3000/forgot-password-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        const data = await response.text()
        alert(data)
    } catch (error) {
        console.error("Đã có lỗi xảy ra", error)
    }
})

// Đăng nhập bằng Google
document.getElementById("login-google").addEventListener("click", function() {
    alert("Chức năng đăng nhập với Google chưa được triển khai.")
})

// Chuyển giữa các form đăng nhập, đăng ký và quên mật khẩu
document.getElementById("go-register").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none"
    document.getElementById("register-form").style.display = "block"
})

document.getElementById("go-login").addEventListener("click", function() {
    document.getElementById("register-form").style.display = "none"
    document.getElementById("login-form").style.display = "block"
})

document.getElementById("go-forgot-password").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none"
    document.getElementById("forgot-password-form").style.display = "block"
})

document.getElementById("go-login-from-forgot").addEventListener("click", function() {
    document.getElementById("forgot-password-form").style.display = "none"
    document.getElementById("login-form").style.display = "block"
})
  */

