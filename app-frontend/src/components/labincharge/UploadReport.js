import React, { useState } from "react";
import { uploadFile } from "../../api/file-upload.service";

const UploadReport = () => {
  const [file, setFile] = useState(null);
  const [reportName, setReportName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [reportIssueDate, setReportIssueDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await uploadFile(file, reportName, patientId, reportIssueDate);
      alert("Report uploaded successfully!");
      setReportName("");
      setPatientId("");
      setReportIssueDate("");
      setFile(null);
    } catch (error) {
      alert("Failed to upload report");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Report Name:</label>
        <input
          type="text"
          className="form-control"
          value={reportName}
          onChange={(event) => setReportName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Patient ID:</label>
        <input
          type="text"
          className="form-control"
          value={patientId}
          onChange={(event) => setPatientId(event.target.value)}
        />
      </div><br/>
      <div className="form-group">
        <label>Report Issue Date:</label>
        <input
          type="date"
          className="form-control"
          value={reportIssueDate}
          onChange={(event) => setReportIssueDate(event.target.value)}
        />
      </div><br/>
      <div className="form-group">
        <label>Report File:</label>
        <input type="file" className="form-control-file" onChange={handleFileChange} />
      </div><br/>
      <button type="submit" className="btn btn-primary" disabled={!file || isLoading}>
        {isLoading ? "Uploading..." : "Upload Report"}
      </button>
    </form>
  );
};

export default UploadReport;
