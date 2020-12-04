const express = require('express');
const router = express();
const DataGathering = require('../services/data-gathering');

router.post('/add/data', (
    async (req, res) => {

        const dataGathering = await DataGathering.AddData(req.body);

        switch (dataGathering) {
            case null :
                return res
                    .status(500)
                    .json({
                        error: 'Une erreur s\'est produite.'
                    });
            default :
                return res
                    .status(200)
                    .json(dataGathering);
        }
    }
));

module.exports = router;
