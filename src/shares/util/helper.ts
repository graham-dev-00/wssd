import * as dotenv from 'dotenv';
dotenv.config();

export const buildImageURL = (imageURL) => {
  if (!imageURL) return '';
  let url;

  try {
    url = new URL(imageURL);
    url = imageURL;
  } catch (_) {
    // url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${imageURL}`;

    
    url = `${process.env.AWS_CLOUDFRONT_URL}/${imageURL}`;
    
  }
  return url;
};
