const axios = require('axios');

module.exports = async (req, res) => {
    const { region, realm, name } = req.query;

    try {
        const response = await axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=gear,talents`);

        const data = response.data;

        return res.status(200).json({
            ilvl: data.gear.item_level_equipped,
            talents: data.talents
        });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching character data' });
    }
};
