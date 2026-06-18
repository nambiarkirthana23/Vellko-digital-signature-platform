import {
  Controller,
  Post,
  Get,
  Param,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Req,
} from "@nestjs/common";

import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DocumentService } from "../service/document.service";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { DocumentStatus } from "../entity/document.entity";

@Controller("documents")
export class DocumentController {
  constructor(private docService: DocumentService) {}


  // 1. UPLOAD PDF

  @UseGuards(AuthGuard)
  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + "-" + file.originalname;
          cb(null, uniqueName);
        },
      }),
    })
  )
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any
  ) {
    return this.docService.upload(file, req.user.id);
  }

  // =========================
  // 2. GET USER DOCUMENTS
  // =========================
  @UseGuards(AuthGuard)
  @Get()
  getDocs(@Req() req: any) {
    return this.docService.getUserDocs(req.user.id);
  }


  // 3. SIGN DOCUMENT (UPLOAD SIGNED PDF)

  @UseGuards(AuthGuard)
  @Post("sign/:id")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./signed",
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + "-signed-" + file.originalname;
          cb(null, uniqueName);
        },
      }),
    })
  )
  signDocument(
    @Param("id") id: number,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.docService.saveSignedDocument(id, file.path);
  }

  // =========================
  // 4. PUBLIC VERIFY API
  // =========================
  @Get("verify/:id")
  async verify(@Param("id") id: number) {
    const doc = await this.docService.getById(id);

    if (!doc) {
      return { valid: false, message: "Document not found" };
    }

    return {
      valid: doc.status === DocumentStatus.SIGNED,
      documentId: doc.id,
      fileName: doc.fileName,
      owner: doc.user.email,
      status: doc.status,
      signed: !!doc.signedFilePath,
      createdAt: doc.createdAt,
    };
  }

  // =========================
  // 5. DOWNLOAD INFO (OPTIONAL BUT USEFUL)
  // =========================
  @UseGuards(AuthGuard)
  @Get("download/:id")
  async download(@Param("id") id: number) {
    const doc = await this.docService.getById(id);

    if (!doc) {
      return { message: "Document not found" };
    }

    return {
      url: doc.signedFilePath
        ? doc.signedFilePath
        : doc.filePath,
    };
  }
}