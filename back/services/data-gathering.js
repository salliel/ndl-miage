const DataGathering = require('../models').DataGathering;

const AddData = async (data) => {

    const dataGathering = await DataGathering.create(data)
        .catch(e => console.log(e));

    if (dataGathering){
        return dataGathering.id
    }

    return null;
};

module.exports = {
    AddData,
};


