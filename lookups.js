
let lookups = {
    chain_url : {

    },
    url_data : {
        
    },
    flow_func : {
        'SourceUPLOAD' : () => {
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = 'This is the data within Source UPLOAD... ';
            return outputURL;
        },
        'SourceGCS': () => {
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = 'This is the data within Source GCS... ';
            return outputURL;
        },
        'SourceBIG QUERY' : () => {
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = 'This is the data within Source BIG QUERY... ';
            return outputURL;
        },
        'SourceCSV' : () => {
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = 'This is the data within Source CSV... ';
            return outputURL;
        },
        'SourceDATABASE' : () => {
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = 'This is the data within Source DATABASE... ';
            return outputURL;
        },
        'TransformVIDEO' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformVIDEO has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TransformSPEECH' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformSPEECH has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TransformAUDIO' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformAUDIO has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TransformFORM': (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformFORM has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TransformDOCUMENT' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformDOCUMENT has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TransformMODEL' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' TransformMODEL has processed this... ';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TargetGCS' : (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' and finally, it has been stored into TargetGCS.';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
        'TargetBIG QUERY': (url) => {
            let inputData = lookups.url_data[url];
            let outputData = inputData + ' and finally, it has been stored into TargetBig Query.';
            let outputURL = 'gs://url_' + Math.random().toString(35).substring(7);
            lookups.url_data[outputURL] = outputData;
            return outputURL;
        },
    
    }
}

module.exports = lookups;