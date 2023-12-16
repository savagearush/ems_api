import { User } from "../model/User.js";

export const getList = async (req, res) => {
  const { category } = req.params;

  const allVendors = await User.find({ category });
  console.log(allVendors);

  res.send("Working");
};
