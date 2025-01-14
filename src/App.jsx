import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function PDFViewer() {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src="/AURORA.pdf" // Adjust the path if needed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src="/website_tnc_877271.pdf" // Adjust the path if needed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

function ContactUs() {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src="/website_contactUs_877271.pdf" // Adjust the path if needed
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDFViewer />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
