// components/PdfViewer.jsx
// import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
// import { zoomPlugin } from "@react-pdf-viewer/zoom";

// // import { defaultLayoutPlugin, ToolbarProps, ToolbarSlot, TransformToolbarSlot } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// // Import styles
// import "@react-pdf-viewer/zoom/lib/styles/index.css";

import { useTheme } from "next-themes";
// import { ReactElement } from "react";

// import { toolbarPlugin, type ToolbarSlot, type TransformToolbarSlot } from '@react-pdf-viewer/toolbar';

import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { RenderGoToPageProps } from "@react-pdf-viewer/page-navigation";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
} from "@react-pdf-viewer/zoom";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { useState, useEffect } from "react";

function PdfViewer({ url }: { url: string }) {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const { setTheme, resolvedTheme } = useTheme();
  const [colors, setColors] = useState({
    primary: "",
    secondary: "",
    accent: "",
    background: "",
    foreground: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    const secondary = getComputedStyle(document.documentElement)
      .getPropertyValue("--secondary")
      .trim();
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const background = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();
    const foreground = getComputedStyle(document.documentElement)
      .getPropertyValue("--foreground")
      .trim();

    setColors({ primary, secondary, accent, background, foreground });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // or return a loading indicator
  }

  console.log(
    colors.primary,
    colors.secondary,
    colors.accent,
    colors.background,
    colors.foreground
  );
  return (
    <div className="">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
      <div
        style={{
          //   border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          color: colors.foreground,
          backgroundColor: colors.background,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            alignItems: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            padding: "4px",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: colors.background,
            color: colors.foreground,
          }}
        >
          <Toolbar>
            {(props: ToolbarSlot) => {
              const { CurrentScale, ZoomIn, ZoomOut } = props;
              return (
                <>
                  <div style={{ padding: "0px 2px" }}>
                    <ZoomOut>
                      {(props: RenderZoomOutProps) => (
                        <button
                          style={{
                            backgroundColor: colors.foreground,
                            border: "none",
                            borderRadius: "4px",
                            color: colors.background,
                            cursor: "pointer",
                            padding: "8px",
                          }}
                          onClick={props.onClick}
                        >
                          Zoom out
                        </button>
                      )}
                    </ZoomOut>
                  </div>
                  <div style={{ padding: "0px 2px" }}>
                    <CurrentScale>
                      {(props: RenderCurrentScaleProps) => (
                        <span>{`${Math.round(props.scale * 100)}%`}</span>
                      )}
                    </CurrentScale>
                  </div>
                  <div style={{ padding: "0px 2px" }}>
                    <ZoomIn>
                      {(props: RenderZoomInProps) => (
                        <button
                          style={{
                            backgroundColor: colors.foreground,
                            border: "none",
                            borderRadius: "4px",
                            color: colors.background,
                            cursor: "pointer",
                            padding: "8px",
                          }}
                          onClick={props.onClick}
                        >
                          Zoom in
                        </button>
                      )}
                    </ZoomIn>
                  </div>
                </>
              );
            }}
          </Toolbar>
        </div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Viewer
            fileUrl={url}
            plugins={[toolbarPluginInstance]}
            theme={resolvedTheme}
          />
        </div>
      </div>
    </div>
  );
}
export default PdfViewer;
