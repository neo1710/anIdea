import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

export interface SpecialOffer {
  desc: string;
  validUntil: Date;
}

export interface Product {
  id?: string;
  name: string;
  image: string[]; // Array of image URLs
  price: number;
  type: string;
  description?: string;
  createdAt?: Date;
  off?: number;
  specialOffer?: SpecialOffer;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly cloudinaryService: CloudinaryService, // Inject Cloudinary service
  ) {}

  async findAll() {
    return this.productModel.find().exec();
  }

  async findOne(id: string) {
    return this.productModel.findById(id).exec();
  }

  async create(createProductDto: CreateProductDto, files: Express.Multer.File[]) {
    // Upload all images to Cloudinary and get their URLs
    const uploadedImages: string[] = await Promise.all(
      files.map((file) => this.cloudinaryService.uploadImage(file)),
    );
    console.log('Uploaded images:', uploadedImages);

    const productData = {
      ...createProductDto,
      image: uploadedImages, // Set uploaded URLs here
    };

    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    await this.productModel.findByIdAndDelete(id).exec();
    return { message: `Product ${id} deleted` };
  }
}
