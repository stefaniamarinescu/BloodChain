const express = require("express");
const router = express.Router();

const {
    verifyTokenAndAuthorization
} = require("../middlewares/verifyToken");

const {
    createDonor,
    getAlldonors,
    updateDonor,
    getOneDonor,
    deleteDonor,
    getDonorsStats
} = require("../controllers/donor");

router.post("/", verifyTokenAndAuthorization, createDonor);
router.get("/", getAlldonors);
router.put("/:id", updateDonor);
router.get("/find/:id", getOneDonor);
router.delete("/:id", deleteDonor);
router.get("/stats", getDonorsStats);

module.exports = router;
