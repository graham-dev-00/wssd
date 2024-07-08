export const getKeyFileFromUrl = (url: string, folder: string): string => {
  const regex = new RegExp(`${folder}\\/.+`);
  console.log('===regex==:', regex);
  
  const key = url.match(regex);
  console.log('===key==:', key);

  return key?.toString();
};
