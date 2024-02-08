// pages/resume.js
import PdfViewer from "../components/PdfViewer";
const Resume = () => {
  return (
    <div>      
    <PdfViewer url={"/assets/SeanBalbaleResume.pdf"} />
    </div>
  );
};
export default Resume;
