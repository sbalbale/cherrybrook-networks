// components/PdfViewer.jsx
import { Viewer, Worker,SpecialZoomLevel  } from "@react-pdf-viewer/core";
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Import styles
import '@react-pdf-viewer/zoom/lib/styles/index.css';

function PdfViewer({ url }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();
  return (
    <div className="h-screen w-screen py-32">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"></Worker>
        <Viewer
          defaultScale={SpecialZoomLevel.PageFit}
          theme={"auto"}
          fileUrl={url}
          // plugins={[defaultLayoutPluginInstance]}
        />
    </div>
  );
}
export default PdfViewer;
