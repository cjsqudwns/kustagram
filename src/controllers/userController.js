import User from "../models/User";

export const postSignUp = async (req, res) => {
  const { name, username, email, id, password, password2 } = req.body;
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
    return res.status(400);
  }
};
