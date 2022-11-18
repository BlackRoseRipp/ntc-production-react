import React, {useState} from 'react'
import { Document, Page } from 'react-pdf';
const BlogViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    return (
      <div className='container' style={{padding:"75px 0"}} >
        <Document file="Advances-in-Definitive-Drug-Screening-Methods-JAT-2021.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
}

export default BlogViewer