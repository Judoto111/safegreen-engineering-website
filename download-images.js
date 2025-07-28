const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of project images to download
const projectImages = [
  {
    filename: 'ghana-high-commission.jpg',
    url: 'https://www.sge.co.ke/images/projects/ghana-high-commission.jpg'
  },
  {
    filename: 'amani-beachfront.jpg',
    url: 'https://www.sge.co.ke/images/projects/amani-beachfront.jpg'
  },
  {
    filename: 'nauras-towers.jpg',
    url: 'https://www.sge.co.ke/images/projects/nauras-towers.jpg'
  },
  {
    filename: 'safaricom-data-center.jpg',
    url: 'https://www.sge.co.ke/images/projects/safaricom-data-center.jpg'
  },
  {
    filename: 'uon-science-complex.jpg',
    url: 'https://www.sge.co.ke/images/projects/uon-science-complex.jpg'
  },
  {
    filename: 'sarova-hotel.jpg',
    url: 'https://www.sge.co.ke/images/projects/sarova-hotel.jpg'
  },
  {
    filename: 'tatu-city.jpg',
    url: 'https://www.sge.co.ke/images/projects/tatu-city.jpg'
  },
  {
    filename: 'safaricom-plumbing.jpg',
    url: 'https://www.sge.co.ke/images/projects/safaricom-plumbing.jpg'
  },
  {
    filename: 'hvac-installations.jpg',
    url: 'https://www.sge.co.ke/images/projects/hvac-installations.jpg'
  },
  {
    filename: 'borehole-drilling.jpg',
    url: 'https://www.sge.co.ke/images/projects/borehole-drilling.jpg'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {}); // Delete the file if there was an error
          reject(err);
        });
      } else {
        console.log(`❌ Failed to download ${filename}: ${response.statusCode}`);
        resolve(); // Continue with other downloads
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}: ${err.message}`);
      resolve(); // Continue with other downloads
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image downloads...');
  console.log('📁 Saving to:', imagesDir);
  
  for (const image of projectImages) {
    await downloadImage(image.url, image.filename);
  }
  
  console.log('✅ Download process completed!');
  console.log('💡 If some images failed, you may need to download them manually from the SGE website.');
}

downloadAllImages().catch(console.error); 