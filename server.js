const express = require('express')
const cors = require('cors')

const mockToken = '90cb12490b1da28a840b4d1a8cb334c351b9e65e815c2a18'
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@doe.com'
}
const app = express()
app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/me', (req, res) => {
  const headers = req.headers.authorization;
  const token = headers && headers.split(' ')[1]

  if (token === mockToken) {
    return res.json({
      user: mockUser
    })
  } else {
    return res.status(401).json({ message: 'Invalid Token' })
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if ( email === 'admin@admin.com' && password === '123456' ){
    return res.json({
      user: mockUser,
      token: mockToken,
    })
  }else{
    return res.status(401).json({ message: 'Invalid Password' })
  }
})

app.use('/api', router)
app.listen(12345, () => {
  console.log('Running ato port 12345');
 })


