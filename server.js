const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 3000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Kết nối MongoDB
mongoose.connect("mongodb+srv://tntthanh32:0511150@user-qiqi-fashion.juuqv.mongodb.net/?retryWrites=true&w=majority&appName=user-qiqi-fashion", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

// Schema và model người dùng
const userSchema = new mongoose.Schema({
  email: String,
  password: String
})
const User = mongoose.model("User", userSchema)

// API đăng ký
app.post("/register-form", async (req, res) => {
  const { email, password } = req.body
  // Kiểm tra xem email đã tồn tại chưa
  const existingUser = await User.findOne({ email })
  if (existingUser) {
      return res.status(400).send("Email đã tồn tại.")
  }
  const newUser = new User({ email, password })
  await newUser.save()
  res.send("Đăng ký thành công!")
})

// API đăng nhập
app.post("/login-form", async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email, password })
  if (user) {
    res.send("Đăng nhập thành công!")
  } else {
    res.send("Thông tin đăng nhập không đúng.")
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
// API quên mật khẩu
app.post("/forgot-password-form", async (req, res) => {
    const { email } = req.body
    // Xử lý khôi phục mật khẩu
    res.send(`Yêu cầu khôi phục mật khẩu đã được gửi tới ${email}`)
})
