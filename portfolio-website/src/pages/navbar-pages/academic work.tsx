
const AcademicWork = () =>{
    const pdfUrl = import.meta.env.BASE_URL + 'files/cgen.pdf';
    const pdfUrl1 = import.meta.env.BASE_URL + 'files/kernel.pdf';
    return(<>

    <h1>My Academic Work</h1>
    <div className="pdf-wrapper" style={{height: '80vh'}}>
      <iframe
        title="CV"
        src={pdfUrl}
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
    <div className="pdf-wrapper" style={{height: '80vh'}}>
      <iframe
        title="CV"
        src={pdfUrl1}
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
    </>)
}

export default AcademicWork