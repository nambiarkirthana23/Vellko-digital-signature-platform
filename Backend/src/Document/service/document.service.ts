import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Document, DocumentStatus } from "../entity/document.entity";

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private docRepo: Repository<Document>
  ) {}

 
  // 1. UPLOAD DOCUMENT
 
  async upload(file: Express.Multer.File, userId: number) {
    const doc = this.docRepo.create({
      fileName: file.originalname,
      filePath: file.path,
      user: { id: userId } as any,
      status: DocumentStatus.UPLOADED,
    });

    return this.docRepo.save(doc);
  }


  // 2. GET USER DOCUMENTS

  async getUserDocs(userId: number) {
    return this.docRepo.find({
      where: { user: { id: userId } },
      order: { createdAt: "DESC" },
    });
  }


  // 3. SAVE SIGNED DOCUMENT

  async saveSignedDocument(documentId: number, signedPath: string) {
    const doc = await this.docRepo.findOne({
      where: { id: documentId },
    });

    if (!doc) {
      throw new NotFoundException("Document not found");
    }

    doc.signedFilePath = signedPath;
    doc.status = DocumentStatus.SIGNED;

    return this.docRepo.save(doc);
  }


  // 4. GET SINGLE DOCUMENT (VERIFY)

  async getById(id: number) {
   return this.docRepo.findOne({
  where: { id },
  relations: {
    user: true,
  },
});
  }
}
