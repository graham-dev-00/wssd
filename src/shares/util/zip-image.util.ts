import axios from 'axios';
import * as fs from 'fs';
import * as archiver from 'archiver';

// Function to download an image from a URL
async function downloadImage(url: string, filename: string, tempDir: string): Promise<void> {
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const writer = fs.createWriteStream(`${tempDir}/${filename}`);

  const streamResponse = await axios({
    url,
    method: 'GET',
    headers: {
      'Content-Type': 'image',
      'User-Agent':
        'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405',
      'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
      'upgrade-insecure-requests': '1',
    },
    responseType: 'stream',
  });

  // Write data
  streamResponse.data.pipe(writer);
}

function zipImages(response, imageUrls: string[], tempDir: string, fileNamePrefix: string[]): void {
  const output = fs.createWriteStream(__dirname + '/images.zip');
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Compression level (highest)
  });

  output.on('close', function () {
    console.log('Images zipped successfully.');

    // Set the response headers
    response.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=images.zip',
    });

    // Send the zip file as the response
    response.sendFile('./images.zip', { root: __dirname });
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);

  const listFilePathZipped: string[] = [];

  imageUrls.forEach((url, index) => {
    const filename = `${fileNamePrefix[index]}.webp`;
    archive.file(`${tempDir}/${filename}`, { name: filename });
    listFilePathZipped.push(`${tempDir}/${filename}`);
  });

  output.on('finish', function () {
    listFilePathZipped.map((path: string) => {
      fs.unlinkSync(path);
    });
  });

  archive.finalize();
}
// Download each image and then zip them
export async function downloadAndZipImages(response, imageUrls: string[], fileNamePrefix: string[]): Promise<void> {
  const tempDir = './images';
  try {
    // Download images
    for (let i = 0; i < imageUrls.length; i++) {
      const url = imageUrls[i];
      const filename = `${fileNamePrefix[i]}.webp`;

      await downloadImage(url, filename, tempDir);
    }

    // Zip the downloaded images
    zipImages(response, imageUrls, tempDir, fileNamePrefix);
  } catch (error) {
    console.error('Error occurred while downloading and zipping images:', error);
  }
}
