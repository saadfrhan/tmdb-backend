// express routes for /preferences

import { Router } from "express";
import { clerkClient } from "@clerk/clerk-sdk-node";
import Preferences from "../models/preferences";

const router = Router();

router.post("/:id", async (req, res) => {
  const { id: user_id } = req.params;
  const { genres, rating } = req.body;
  const userExist = await clerkClient.users.getUser(user_id);

  if (!userExist) {
    return res.status(404).json({ message: "User not found" });
  }

  const alreadyExist = await Preferences.findOne({ user_id });

  if (alreadyExist) {
    await Preferences.findOneAndUpdate({ user_id }, { genres, rating });
    return res.status(200).json({ message: "Preferences updated" });
  } else {
    await Preferences.create({ user_id, genres, rating });
    return res.status(201).json({ message: "Preferences created" });
  }
});

export default router;
