import { Controller,Get, Post, Body, UseInterceptors, UploadedFile,ParseFilePipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { FileUploadService } from "./fileupload.service";

@Controller('fileupload')
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) {}

@Get()
getFileUpload(): string {
    return 'File Upload GET';
 }

@Post('file')
@UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
        destination: './files',
        filename: function(req, file, callback) {
            callback(null, file.originalname);
        },    
    })
}))
async upload(
     @Body() body,
     @UploadedFile() file: Express.Multer.File) {
        return {
            body,
            file: file?.buffer,
        }
}
}