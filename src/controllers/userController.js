import User from "../models/User";
import CryptoJS from "crypto-js";

export const postSignUp = async (req, res) => {
  const { name, username, email, id, password, password2 } = req.body;
  const exist = await User.exists({ $or: [{ username }, { email }, { id }] });

  if (exist) {
    return res.sendStatus(400);
  }
  if (password !== password2) {
    return res.sendStatus(400);
  }
  try {
    await User.create({
      name,
      username,
      email,
      id,
      password,
    });
    return res.redirect("/");
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const postSignIn = async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
  if (!user) {
    return res.sendStatus(400);
  }
  const encrypted = user.password;
  const bytes = CryptoJS.AES.decrypt(encrypted, "kustagram");
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  if (password !== decrypted) {
    return res.sendStatus(400);
  }
  req.session.user = user;
  req.session.signIn = true;
  return res.redirect("/");
};
