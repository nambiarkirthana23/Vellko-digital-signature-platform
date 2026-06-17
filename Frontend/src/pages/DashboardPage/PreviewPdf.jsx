// import { useLocation } from "react-router-dom";
// import { useState, useRef } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import SignatureCanvas from "react-signature-canvas";
// import "./PreviewPdf.css";

// import "react-pdf/dist/Page/TextLayer.css";
// import "react-pdf/dist/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// function PreviewPdf() {
//   const location = useLocation();

//   const file = location.state?.file;

//   const [numPages, setNumPages] = useState(0);

//   const sigRef = useRef();

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const saveSignature = () => {
//     if (sigRef.current.isEmpty()) {
//       alert("Please draw a signature");
//       return;
//     }

//     const signature =
//       sigRef.current
//         .getTrimmedCanvas()
//         .toDataURL("image/png");

//     localStorage.setItem(
//       "savedSignature",
//       signature
//     );

//     alert("Signature Saved");
//   };

//   const clearSignature = () => {
//     sigRef.current.clear();
//   };

//   return (
//     <div className="pdf-preview-container">

//       <div className="pdf-preview-card">

//         <h1 className="pdf-preview-title">
//           PDF Preview
//         </h1>

//         <p className="pdf-preview-subtitle">
//           Review and Sign Document
//         </p>

//         {file ? (
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             loading={<p>Loading PDF...</p>}
//           >
//             {Array.from(
//               { length: numPages },
//               (_, index) => (
//                 <Page
//                   key={index}
//                   pageNumber={index + 1}
//                   width={
//                     window.innerWidth < 768
//                       ? 320
//                       : 850
//                   }
//                 />
//               )
//             )}
//           </Document>
//         ) : (
//           <p>No PDF Selected</p>
//         )}

//         <div className="signature-section">

//           <h2>Draw Your Signature</h2>

//           <SignatureCanvas
//             ref={sigRef}
//             penColor="black"
//             canvasProps={{
//               className: "signature-pad",
//             }}
//           />

//           <div className="signature-buttons">

//             <button onClick={clearSignature}>
//               Clear
//             </button>

//             <button onClick={saveSignature}>
//               Save Signature
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default PreviewPdf;


// import { useLocation } from "react-router-dom";
// import { useState, useRef } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import SignatureCanvas from "react-signature-canvas";
// import "./PreviewPdf.css";
// import "react-pdf/dist/Page/TextLayer.css";
// import "react-pdf/dist/Page/AnnotationLayer.css";


// pdfjs.GlobalWorkerOptions.workerSrc =
//   `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// function PreviewPdf() {
//   const location = useLocation();

//   const file = location.state?.pdfUrl;

//   const [numPages, setNumPages] = useState(0);

//   const sigRef = useRef();

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const saveSignature = () => {
//     if (sigRef.current.isEmpty()) {
//       alert("Please draw a signature");
//       return;
//     }

//     const signature =
//       sigRef.current
//         .getTrimmedCanvas()
//         .toDataURL("image/png");

//     localStorage.setItem(
//       "savedSignature",
//       signature
//     );

//     alert("Signature Saved");
//   };

//   const clearSignature = () => {
//     sigRef.current.clear();
//   };

//   return (
//     <div className="pdf-preview-container">

//       <div className="pdf-preview-card">

//         <h1 className="pdf-preview-title">
//           PDF Preview
//         </h1>

//         <p className="pdf-preview-subtitle">
//           Review and Sign Document
//         </p>

//         {file ? (
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             loading={<p>Loading PDF...</p>}
//           >
//             {Array.from(
//               { length: numPages },
//               (_, index) => (
//                 <Page
//                   key={index}
//                   pageNumber={index + 1}
//                   width={
//                     window.innerWidth < 768
//                       ? 320
//                       : 850
//                   }
//                 />
//               )
//             )}
//           </Document>
//         ) : (
//           <p>No PDF Selected</p>
//         )}

//         <div className="signature-section">

//           <h2>Draw Your Signature</h2>

//           <SignatureCanvas
//             ref={sigRef}
//             penColor="black"
//             canvasProps={{
//               className: "signature-pad",
//             }}
//           />

//           <div className="signature-buttons">

//             <button onClick={clearSignature}>
//               Clear
//             </button>

//             <button onClick={saveSignature}>
//               Save Signature
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default PreviewPdf;


// import "./PreviewPdf.css";
// import { useLocation } from "react-router-dom";
// import { useRef } from "react";
// import SignatureCanvas from "react-signature-canvas";
// import { PDFDocument } from "pdf-lib";
// import { saveAs } from "file-saver";

// function PreviewPdf() {
//   const location = useLocation();

//   const file = location.state?.file;

//   const sigRef = useRef();

//   const clearSignature = () => {
//     sigRef.current.clear();
//   };

//   const saveSignature = async () => {
//     if (!file) {
//       alert("No PDF selected");
//       return;
//     }

//     if (sigRef.current.isEmpty()) {
//       alert("Please draw your signature");
//       return;
//     }

//     try {
//       const signatureImage =
//         sigRef.current
//           .getTrimmedCanvas()
//           .toDataURL("image/png");

//       const pdfBytes =
//         await file.arrayBuffer();

//       const pdfDoc =
//         await PDFDocument.load(pdfBytes);

//       const pngImage =
//         await pdfDoc.embedPng(signatureImage);

//       const pages = pdfDoc.getPages();

//       const firstPage = pages[0];

//       firstPage.drawImage(pngImage, {
//         x: 350,
//         y: 50,
//         width: 120,
//         height: 60,
//       });

//       const signedPdfBytes =
//         await pdfDoc.save();

//       const blob = new Blob(
//         [signedPdfBytes],
//         {
//           type: "application/pdf",
//         }
//       );

//       saveAs(blob, "signed-document.pdf");

//       alert("Signed PDF downloaded successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Error signing PDF");
//     }
//   };

//   return (
//     <div className="pdf-preview-container">

//       <div className="pdf-preview-card">

//         <h1 className="pdf-preview-title">
//           PDF Preview
//         </h1>

//         <p className="pdf-preview-subtitle">
//           Review and Sign Document
//         </p>

//         {file ? (
//           <div className="pdf-info">
//             <h3>{file.name}</h3>

//             <p>
//               PDF uploaded successfully.
//             </p>

//             <p>
//               Draw your signature below and
//               click "Download Signed PDF".
//             </p>
//           </div>
//         ) : (
//           <p className="no-pdf">
//             No PDF selected.
//           </p>
//         )}

//         <div className="signature-section">

//           <h2>Draw Your Signature</h2>

//           <SignatureCanvas
//             ref={sigRef}
//             penColor="black"
//             canvasProps={{
//               width: 500,
//               height: 200,
//               className: "signature-pad",
//             }}
//           />

//           <div className="signature-buttons">

//             <button onClick={clearSignature}>
//               Clear
//             </button>

//             <button onClick={saveSignature}>
//               Download Signed PDF
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default PreviewPdf;



import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import "./PreviewPdf.css";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PreviewPdf() {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.file;

  const [numPages, setNumPages] = useState(0);
  const [pageSizes, setPageSizes] = useState([]);
  const [pageWidth] = useState(window.innerWidth < 768 ? 320 : 700);

  const [signature, setSignature] = useState(null);
  const [showSigModal, setShowSigModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const sigCanvasRef = useRef();
  const pageWrapperRefs = useRef([]);
  const dragInfo = useRef(null);
  const resizeInfo = useRef(null);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    (async () => {
      try {
        const bytes = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(bytes);
        const sizes = pdfDoc.getPages().map((p) => p.getSize());
        if (!cancelled) setPageSizes(sizes);
      } catch (err) {
        console.error("Failed to read PDF page sizes:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [file]);



  useEffect(() => {
  const move = (e) => handleDragMove(e);
  const up = () => handleDragEnd();

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);

  return () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
  };
}, [signature]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderedHeightFor = (pageIndex) => {
    const size = pageSizes[pageIndex];
    if (!size) return pageWidth * 1.4;
    return pageWidth * (size.height / size.width);
  };

  const clearSignaturePad = () => {
    sigCanvasRef.current.clear();
  };

const saveSignatureFromPad = () => {
  const sigPad = sigCanvasRef.current;

  if (!sigPad) {
    alert("Signature pad not ready");
    return;
  }

  if (sigPad.isEmpty()) {
    alert("Please draw your signature first");
    return;
  }

  // const dataUrl = sigPad
  //   .getTrimmedCanvas()
  //   .toDataURL("image/png");



  const dataUrl = sigPad
  .getCanvas()
  .toDataURL("image/png");

  setSignature({
    dataUrl,
    page: 0,
    x: 50,
    y: 50,
    width: 180,
    height: 80,
  });

  setShowSigModal(false);
};

  // const handleDragStart = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   e.target.setPointerCapture(e.pointerId);

  //   dragInfo.current = {
  //     startX: e.clientX,
  //     startY: e.clientY,
  //     originX: signature.x,
  //     originY: signature.y,
  //     page: signature.page,
  //   };
  // };



  const handleDragStart = (e) => {
  e.preventDefault();

  dragInfo.current = {
    offsetX: e.clientX - signature.x,
    offsetY: e.clientY - signature.y,
  };
};


const handleDragMove = (e) => {
  if (!dragInfo.current || !signature) return;

  const pageRect = pageWrapperRefs.current[signature.page]?.getBoundingClientRect();

  if (!pageRect) return;

  let x = e.clientX - pageRect.left - dragInfo.current.offsetX;
  let y = e.clientY - pageRect.top - dragInfo.current.offsetY;

  x = Math.max(0, Math.min(x, pageRect.width - signature.width));
  y = Math.max(0, Math.min(y, pageRect.height - signature.height));

  setSignature((prev) => ({
    ...prev,
    x,
    y,
  }));
};

  const handleDragEnd = () => {
    dragInfo.current = null;
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);

    resizeInfo.current = {
      startX: e.clientX,
      startY: e.clientY,
      startWidth: signature.width,
      startHeight: signature.height,
    };
  };

  const handleResizeMove = (e) => {
    if (!resizeInfo.current || !signature) return;

    const dx = e.clientX - resizeInfo.current.startX;
    const dy = e.clientY - resizeInfo.current.startY;

    const newWidth = Math.max(60, resizeInfo.current.startWidth + dx);
    const newHeight = Math.max(30, resizeInfo.current.startHeight + dy);

    setSignature((prev) => ({ ...prev, width: newWidth, height: newHeight }));
  };

  const handleResizeEnd = () => {
    resizeInfo.current = null;
  };



  const placeSignature = (e, pageIndex) => {
  if (!signature || signature.page !== null) {
    const rect = pageWrapperRefs.current[pageIndex].getBoundingClientRect();

    const x = e.clientX - rect.left - signature.width / 2;
    const y = e.clientY - rect.top - signature.height / 2;

    setSignature((prev) => ({
      ...prev,
      page: pageIndex,
      x,
      y,
    }));
  }
};

  const handleDownload = async () => {
    if (!file) return;

    if (!signature) {
      alert("Please add and place your signature before downloading");
      return;
    }

    setIsExporting(true);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const pngImage = await pdfDoc.embedPng(signature.dataUrl);

      const pages = pdfDoc.getPages();
      const targetPage = pages[signature.page];
      const { width: actualW, height: actualH } = targetPage.getSize();

      const renderedW = pageWidth;
      const renderedH = renderedHeightFor(signature.page);

      const scaleX = actualW / renderedW;
      const scaleY = actualH / renderedH;

      const drawWidth = signature.width * scaleX;
      const drawHeight = signature.height * scaleY;

      const pdfX = signature.x * scaleX;
      const pdfY = actualH - signature.y * scaleY - drawHeight;

      targetPage.drawImage(pngImage, {
        x: pdfX,
        y: pdfY,
        width: drawWidth,
        height: drawHeight,
      });

      const signedBytes = await pdfDoc.save();
      const blob = new Blob([signedBytes], { type: "application/pdf" });
      saveAs(blob, "signed-document.pdf");
    } catch (err) {
      console.error(err);
      alert("Something went wrong while signing the PDF");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="pdf-preview-container">
      <div className="pdf-preview-card">
        <h1 className="pdf-preview-title">PDF Preview</h1>
        <p className="pdf-preview-subtitle">Review and Sign Document</p>

        {file ? (
          <>
            <div className="pdf-toolbar">
              <button className="toolbar-btn secondary" onClick={() => setShowSigModal(true)}>
                {signature ? "Edit Signature" : "Add Signature"}
              </button>

              <button
                className="toolbar-btn primary"
                onClick={handleDownload}
                disabled={isExporting}
              >
                {isExporting ? "Preparing..." : "Download Signed PDF"}
              </button>
            </div>

            {signature && (
              <p className="hint-text">
                Drag your signature anywhere on the document, resize using the
                bottom-right handle, then click Done.
              </p>
            )}

            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p>Loading PDF...</p>}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div
                  key={index}
                  className="pdf-page-wrapper"
                  ref={(el) => (pageWrapperRefs.current[index] = el)}
                  style={{ width: pageWidth }}
                   onClick={(e) => placeSignature(e, index)}
                >
                  <span className="page-badge">Page {index + 1}</span>

                  <Page pageNumber={index + 1} width={pageWidth} />

                 {signature && signature.page !== null && signature.page === index && (
  <div
    className="signature-overlay"
    style={{
      left: signature.x,
      top: signature.y,
      width: signature.width,
      height: signature.height,
    }}
     onPointerDown={handleDragStart}
  >
    <img
      src={signature.dataUrl}
      alt="signature"
      draggable={false}
     
     
    />

    <div
      className="resize-handle"
      onPointerDown={handleResizeStart}
      onPointerMove={handleResizeMove}
      onPointerUp={handleResizeEnd}
    />
  </div>
)}
                </div>
              ))}
            </Document>
          </>
        ) : (
          <div className="no-pdf">
            <p>No PDF selected.</p>
            <button className="toolbar-btn secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        )}
      </div>

      {showSigModal && (
        <div className="modal-backdrop" onClick={() => setShowSigModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Draw Your Signature</h2>

            {/* <SignatureCanvas
              ref={sigCanvasRef}
              penColor="black"
              canvasProps={{
                width: 460,
                height: 180,
                className: "signature-pad-canvas",
              }}
            /> */}


              <SignatureCanvas
                ref={sigCanvasRef}
                penColor="black"
                backgroundColor="white"
                canvasProps={{
                  width: 450,
                  height: 180,
                  className: "signature-pad-canvas",
                }}
              />  
            <div className="modal-buttons">
              <button className="toolbar-btn secondary" onClick={clearSignaturePad}>
                Clear
              </button>
              <button className="toolbar-btn primary" onClick={saveSignatureFromPad}>
                Save Signature
              </button>
              <button className="toolbar-btn ghost" onClick={() => setShowSigModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviewPdf;