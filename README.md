Project Overview

The Digital Signature & Document Management Platform is a web-based application that allows users to securely upload PDF documents, electronically sign them, manage document records, and download signed documents. It provides a simple and efficient way to handle digital document 
workflows through an intuitive user interface.

This project demonstrates modern full-stack development practices, including user authentication, file handling, PDF processing, 
database management, and RESTful API integration. Developed as a functional MVP, it focuses on delivering core document management 
and digital signing capabilities.

Features Implemented


Authentication
User Registration (Signup)
User Login (JWT Authentication)
Password Hashing using bcrypt
Protected APIs using Auth Guards


Document Management
Upload PDF Documents
Store Document Metadata in PostgreSQL
Associate Documents with Users
Retrieve User Documents


PDF Preview & Signing
Preview Uploaded PDF Documents
Draw Electronic Signatures
Resize Signature
Place Signature on PDF
Embed Signature into PDF using pdf-lib
Download Signed PDF


Document Status Tracking
UPLOADED
SIGNED



Technology Stack
Frontend
React.js
React Router DOM
Axios
React PDF
React Signature Canvas
PDF-Lib
File Saver
CSS


Backend
NestJS(Nodejs framework)
TypeScript
JWT Authentication
bcrypt
Multer
TypeORM

Database
PostgreSQL

Frontend: Vercel
Database: PostgreSQL

Deployment

Architecture Overview
Frontend

React-based Single Page Application

Pages:

Landing Page
Signup Page
Login Page
Document Upload Page
PDF Preview Page

Responsibilities:

User Authentication
File Upload
PDF Preview
Signature Drawing
Signed PDF Download

Backend

NestJS REST API

Modules:

Authentication Module
User Module
Document Module

Responsibilities:

Authentication & Authorization
User Management
Document Management
Verification API
Database Operations
Database

PostgreSQL stores:

User Information
Document Metadata
Document Status


Database Design
User Table


| Column    | Type      |
| --------- | --------- |
| id        | Integer   |
| fullName  | String    |
| email     | String    |
| password  | String    |
| role      | String    |
| createdAt | Timestamp |



Document Table

| Column         | Type        |
| -------------- | ----------- |
| id             | Integer     |
| fileName       | String      |
| filePath       | String      |
| signedFilePath | String      |
| status         | Enum        |
| createdAt      | Timestamp   |
| userId         | Foreign Key |


Relationship

User (1) -------- (Many) Documents
One User can upload multiple Documents.


Assumptions Made
Users upload only PDF files.
One document belongs to one user.
Signed documents are generated client-side.
PostgreSQL is used as the primary database.
Users sign documents individually.

Known Limitations
Password recovery flow is not implemented.
Audit logging system is not implemented.
Administrative dashboard is not implemented.
Public verification page UI is pending.
Signed PDFs are downloaded locally and are not permanently stored on the server.
Multi-user signing workflow is not implemented.
Signature drag-and-drop positioning requires further refinement.
After uploading pdf,pdf preview page title and context needs to be changed.

Future Improvements
Password Reset & Recovery Flow
Complete Public Verification Portal
QR Code Based Verification
Audit Logging System
Admin Dashboard
Cloud Storage Integration
Email Notifications
Reusable Saved Signatures
Multi-user Signing Workflow
Enhanced Signature Placement Experience









