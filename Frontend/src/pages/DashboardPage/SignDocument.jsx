// import { useState } from "react";
// import "./SignDocument.css";
// import { FaCloudUploadAlt, FaLock, FaFilePdf } from "react-icons/fa";

// function SignDocument() {
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file && file.type === "application/pdf") {
//       const url = URL.createObjectURL(file);
//       setPdfUrl(url);
//     } else {
//       alert("Please upload a PDF file");
//     }
//   };

//   return (
//     <div className="sign-container">
//       <div className="sign-card">
//         <h1>Sign Documents Online</h1>

//         <p className="subtitle">
//           Upload your PDF and sign it digitally in seconds
//         </p>

//         <div className="upload-box">
//           <FaCloudUploadAlt className="upload-icon" />

//           <h3>Drop your PDF here</h3>

//           <p>or click to browse files</p>

//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleFileChange}
//           />
//         </div>

//         <div className="features">
//           <div className="feature">
//             <FaLock />
//             <span>100% Free & Secure</span>
//           </div>

//           <div className="feature">
//             <FaFilePdf />
//             <span>Unlimited Documents</span>
//           </div>
//         </div>

//         {pdfUrl && (
//           <div className="pdf-preview">
//             <h2>PDF Preview</h2>

//             <iframe
//               src={pdfUrl}
//               title="PDF Preview"
//               width="100%"
//               height="600px"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SignDocument;


import { useNavigate } from "react-router-dom";
import "./SignDocument.css";

function SignDocument() {
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      const pdfUrl = URL.createObjectURL(file);

      navigate("/PdfPreview", {
        state: { pdfUrl },
      });
    }
  };

  return (
    <div className="sign-container">
      <div className="sign-card">
        <h1>Sign Documents Online</h1>

        <div className="upload-box">
          <h3>Drop your PDF here</h3>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SignDocument;