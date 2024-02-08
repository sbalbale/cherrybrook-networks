// pages/resume.js
import PdfViewer from "../components/PdfViewer";
const Resume = () => {
  return (
    <div>      
    <PdfViewer url={"/assets/SeanBalbaleResume.Pdf"} />
    </div>
  );
};
export default Resume;
