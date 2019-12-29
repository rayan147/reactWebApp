const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const handler = async event => {
  const allKeys = await getAllKeys({ Bucket: "adrianaimages" });
  return allKeys;
};

async function getAllKeys(params, allKeys = []) {
  const response = await s3.listObjectsV2(params).promise();
  response.Contents.forEach(obj => allKeys.push(obj.Key));

  if (response.NextContinuationToken) {
    params.ContinuationToken = response.NextContinuationToken;
    await getAllKeys(params, allKeys); // RECURSIVE CALL
  }
  return allKeys;
}

module.exports = {
  getIMages: handler().then(function(result) {
    for (let k in result) {
      let keys = result[k].toLocaleString();
      s3.getObject(
        {
          Bucket: "adrianaimages",
          Key: keys
        },
        function(err, data) {
          if (err) console.log(err, err.stack);
          // an error occurred
          //.toString("base64")
          else {
            for (let i in data.Body) {
              let base64Array = [];
              let buffer = data.Body;
              console.log(base64Array.push(buffer));
            }
          } // successful response
        }
      );
    }
  })
};
