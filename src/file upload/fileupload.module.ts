import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose/dist";
import { FileUploadController } from "./fileupload.controller";
import { FileUploadService } from "./fileupload.service";


@Module({
imports: [],
controllers:[FileUploadController],
providers:[FileUploadService]
})
export class FileUploadModule {};
