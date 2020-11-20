const lookups = require('./lookups.js');

let cloudFunctions = {

    SourceUPLOAD : (properties) => {
        let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
        return ouputURL;
    },
    SourceGCS: (properties,url) => {
        let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
        return data + ' It has been transformed by audio module.... \n ';
    },
    'SourceBIG QUERY' : (properties) => {
        let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
        return ouputURL;
    },
    SourceCSV : (properties) => {
        let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
        return ouputURL;
    },
    SourceDATABASE : (properties) => {
        let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
        return ouputURL;
    },
    TransformVIDEO: (url) => {
        let data = lookups.url_data[url];
        return data + ' It has been transformed by VIDEO module...';
    },
    TransformSPEECH: (url) => {
        return 'It has been transformed by SPEECH module...';
    },
    TransformAUDIO: (url) => {
        return 'It has been transformed by AUDIO module...';
    },
    TransformFORM: (url) => {
        return 'It has been transformed by FORM module...';
    },
    TransformDOCUMENT: (url) => {
        return 'It has been transformed by DOCUMENT module...';
    },
    TransformMODEL: (url) => {
        return 'It has been transformed by MODEL module...';
    },
    TargetGCS: (url) => {
        return 'It has been stored into GCS at the following URL;'
    },
    'TargetBIG QUERY': (url) => {
        return 'It has been transformed by video module...';
    },

}



module.exports = cloudFunctions;