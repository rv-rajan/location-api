const data = require("../../data/location.json");

exports.getStates = () => {
    return data.map(state => ({
        name: state.name
    }));
};

exports.getDistricts = (stateName) => {
    const state = data.find(
        state =>
            state.name.toLowerCase() ===
            stateName.toLowerCase()
    );

    if (!state) {
        return null;
    }

    return {
        state: state.name,
        districtCount: state.districtList.length,
        districts: state.districtList.map(district => ({
            name: district.name
        }))
    };
};

exports.getBlocks = (stateName, districtName) => {
    const state = data.find(
        state =>
            state.name.toLowerCase() ===
            stateName.toLowerCase()
    );

    if (!state) {
        return null;
    }

    const district = state.districtList.find(
        district =>
            district.name.toLowerCase() ===
            districtName.toLowerCase()
    );

    if (!district) {
        return null;
    }

    return {
        state: state.name,
        district: district.name,
        blockCount: district.blockList.length,
        blocks: district.blockList
    };
};