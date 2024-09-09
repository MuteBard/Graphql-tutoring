const { v4: uuidv4 } = require('uuid');
const { mongoDBClient, mongodb } = require('../client/mongodbClient');

function filterCriteria(filter) {
    if (!filter) return {};
    let regexValues;

    return Object.entries(filter).map(([field, searchObject]) => {
        const { searchType, value } = searchObject;
        switch (searchType) {
            case 'CONTAINS_ANY':
                return { [field]: { $in: value.split(',') } };
            case 'CONTAINS_ALL':
                return { [field]: { $all: value.split(',') } };
            case 'CONTAINS_EXACT':
                return { [field]: value.split(',') };
            case 'CONTAINS_PARTIAL':
                regexValues = value.split(',').map(v => new RegExp(v, 'i'));
                return { [field]: { $in: regexValues } };
            case 'CONTAINS_NONE_PARTIAL':
                regexValues = value.split(',').map(v => new RegExp(v, 'i'));
                return { [field]: { $nin: regexValues } };
            case 'CONTAINS_NONE':
                return { [field]: { $nin: value.split(',') } }
            case 'GREATER_THAN':
                return { [field]: { $gt: value } };
            case 'LESS_THAN':
                return { [field]: { $lt: value } };
            case 'GREATER_THAN_OR_EQUAL':
                return { [field]: { $gte: value } };
            case 'LESS_THAN_OR_EQUAL':
                return { [field]: { $lte: value } };
            case 'IS_NOT':
                return { [field]: { $ne: value } };
            case 'IS':
                return { [field]: value };
            default: 
                return {}
        }

    }).reduce((obj, fc) => {
        const updatedObj = {...obj, ...fc}
        return updatedObj;
    }, {})

}

async function insertOne(collection, _data){
    //get Database
    const db = await getDatabase();

    //create a contentId
    const contentId = uuidv4();
    const data = { ..._data, contentId };

    //get collection and insert data
    const table = db.collection(collection);
    await table.insertOne(data);

    //get inserted data
    const response = await table.findOne({contentId});
    return response;
}

async function findOne(collection, contentId){
    //get Database
    const db = await getDatabase();
    
    //get collection
    const table = db.collection(collection);
    
    //find data based on contentId
    const response = await table.findOne({contentId});
    return response;
}

async function findMany(collection, filter){
    //get Database
    const db = await getDatabase();

    //get collection
    const table = db.collection(collection);

    //find data based on filter
    const response = await table.find(filterCriteria(filter), searchOptions()).toArray();
    return response;
}

function searchOptions() {
    const options = {

        // Sort returned documents in ascending order by title (A->Z)
        sort: { title: 1 },
      };
    return options;
}



async function getDatabase() {
    await mongoDBClient.connect();
    return mongoDBClient.db("Logistics");
}


module.exports = {
    insertOne,
    findOne,
    findMany
}
