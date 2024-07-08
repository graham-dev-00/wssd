import { extname } from 'path';

export const generateKeyUploadFiles = (file: Express.Multer.File, id: number): { url: string; key: string } => {
  const { originalname } = file;

  const ext = extname(originalname);

  const timeStamp = new Date().getTime();
  const keyAvatar = `avatar/${id}_${timeStamp}${ext}`;

  return {
    url: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/avatar/${keyAvatar}`,
    key: keyAvatar,
  };
};
