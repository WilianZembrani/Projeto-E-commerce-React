import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// rota de login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ sucess: false, message: 'Usuário não existe' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ sucess: true, token });
    } else {
      res.json({ sucess: false, message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

// rota de registro
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sucess: false, message: 'O usuário já existe' });
    }

    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: 'Por favor adicione um Email válido!' });
    }

    if (password.length < 8) {
      return res.json({ sucess: false, message: 'Por favor adicione uma senha forte!' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ sucess: true, token });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

// rota de admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
