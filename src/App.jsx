function App() {
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

export default App;
