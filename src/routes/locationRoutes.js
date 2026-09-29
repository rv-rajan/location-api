const express = require("express");

const router = express.Router();

const {
    getStates,
    getDistricts,
    getBlocks
} = require("../controllers/locationController");

router.get("/states", getStates);

router.get(
    "/states/:state/districts",
    getDistricts
);

router.get(
    "/states/:state/districts/:district/blocks",
    getBlocks
);

module.exports = router;