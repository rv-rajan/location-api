const locationService = require("../services/locationService");

exports.getStates = (req, res) => {
    const states = locationService.getStates();

    res.json({
        success: true,
        data: states
    });
};

exports.getDistricts = (req, res) => {
    const result = locationService.getDistricts(
        req.params.state
    );

    if (!result) {
        return res.status(404).json({
            success: false,
            message: "State not found"
        });
    }

    res.json({
        success: true,
        ...result
    });
};

exports.getBlocks = (req, res) => {
    const result = locationService.getBlocks(
        req.params.state,
        req.params.district
    );

    if (!result) {
        return res.status(404).json({
            success: false,
            message: "State or District not found"
        });
    }

    res.json({
        success: true,
        ...result
    });
};