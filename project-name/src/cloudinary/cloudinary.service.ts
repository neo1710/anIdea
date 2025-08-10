// cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({
  cloud_name: "dyyp8ueuf",
  api_key: "843489942393786",
  api_secret: "oIkyVHVnoBv32z5700IkcgtIHaw",
});

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    console.log('Cloudinary service initialized',file);
    return new Promise((resolve, reject) => {
      console.log('Cloudinary service initialized @@2');
      
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'products',
        },
        (error, result) => {
          if (error) {
            console.log('Error uploading to Cloudinary:', error);
            return reject(error);
          }
          if (result){
            console.log('Upload result:', result);
            resolve(result.secure_url);
          }
          else reject(new Error('Upload failed'));
        },
      );
      
      // Create a readable stream from buffer without external dependency
      const bufferStream = new Readable({
        read() {
          this.push(file.buffer);
          this.push(null); // Signal end of stream
        }
      });
      
      bufferStream.pipe(uploadStream);
    });
  }
}
