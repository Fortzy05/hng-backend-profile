import express from "express";
import axios from "axios";

const router = express.Router();


const axiosClient = axios.create({
  timeout: 5000, 
});

router.get("/", async (req, res) => {

  const user = {
    email: process.env.EMAIL || "youremail@example.com",
    name: process.env.NAME || "Your Full Name",
    stack: process.env.STACK || "Node.js/Express",
  };

  try {
   
    const response = await axiosClient.get("https://catfact.ninja/fact");
    const catFact = response?.data?.fact || "No fact returned by API.";

    const payload = {
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    
    return res.status(200).json(payload);
  } catch (error) {
   
    console.error("Error fetching cat fact:", error?.message || error);

    
    const fallback = {
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact: "Unable to fetch cat fact at this time.",
    };

    return res.status(200).json(fallback);
  }
});

export default router;
