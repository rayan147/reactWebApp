const imageUpload = async (base64) => {
  const AWS = require("aws-sdk");

  const {
    ACCESS_KEY_ID,
    SECRET_ACCESS_KEY,
    AWS_REGION,
    S3_BUCKET,
  } = process.env;

  AWS.config.setPromisesDependency(require("bluebird"));
  AWS.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: AWS_REGION,
  });

  const s3 = new AWS.S3();

  const base64Data = new Buffer.from(
    base64.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const type = base64.split(";")[0].split("/")[1];

  const userId = 1;

  const params = {
    Bucket: S3_BUCKET,
    Key: `${userId}.${type}`, // type is not required
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64", // required
    ContentType: `image/${type}`, // required. Notice the back ticks
  };

  let location = "";
  let key = "";
  try {
    const { Location, Key } = await s3.upload(params).promise();
    location = Location;
    key = Key;
  } catch (error) {}

  console.log(location, key);

  return location;
};

module.exports = imageUpload;
