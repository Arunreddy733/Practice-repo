var AWS =require('aws-sdk')
var bucketname='autotec-test-bucket-1234'
AWS.config.update({
    accessKeyId: 'AKIA3WYNPNILV3DTNQMK',
    secretAccessKey: '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',
    region: 'ap-south-1',
});
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var params = {Bucket:bucketname ,Key: 'screenshot.jpg'};
// Body: 'object-content'
 s3.putObject(params, (err, data) => {
    if (err) {
     console.error(err);
    } else {
      console.log('Object uploaded successfully');
    }
  });
  