import "./PreviewPdf.css";
import { useLocation } from "react-router-dom";

function PreviewPdf() {
  const location = useLocation();
  const pdfUrl = location.state?.pdfUrl;

  return (
    <div className="pdf-preview-container">

      <div className="pdf-preview-card">

        <h1 className="pdf-preview-title">
          PDF Preview
        </h1>

        <p className="pdf-preview-subtitle">
          Review your uploaded document
        </p>

        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title="PDF Preview"
            className="pdf-frame"
          />
        ) : (
          <p className="no-pdf">
            No PDF selected.
          </p>
        )}

      </div>

    </div>
  );
}

export default PreviewPdf;