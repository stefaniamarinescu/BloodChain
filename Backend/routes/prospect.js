const express = require("express");
const router = express.Router();

const {
    createProspect,
    getAllProspects,
    updateProspect,
    getOneProspect,
    deleteProspect
} = require("../controllers/prospect");

router.post("/", createProspect);
router.get("/", getAllProspects);
router.put("/:id", updateProspect);
router.get("/find/:id", getOneProspect);
router.delete("/:id", deleteProspect);

module.exports = router;
