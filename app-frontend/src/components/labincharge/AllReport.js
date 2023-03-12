import React, { useState, useEffect } from 'react';
import { getAllReports } from "../../api/file-upload.service";
import { Table } from 'react-bootstrap';
import axios from "axios";

function AllReport() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch the reports when the component mounts
    getAllReports().then(response => setReports(response.data));
  }, []);

  const filteredReports = reports.filter((report) =>
    report.patientId && report.patientId.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>All Reports</h2>
      <input
        type="text"
        placeholder="Search by patient ID"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Report Id</th>
            <th>Report Name</th>
            <th>Patient ID</th>
            <th>Issue Date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report, index) => (
            <tr key={report.reportId}>
              <td>{index + 1}</td>
              <td>{report.reportName}</td>
              <td>{report.patientId}</td>
              <td>{report.reportIssueDate}</td>
              <td>
                <a href={report.url} onClick={(e) => {
                  e.preventDefault();
                  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
                  axios.get(report.url, { headers, responseType: 'blob' })
                    .then(response => {
                      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                      const link = document.createElement('a');
                      link.href = url;
                      link.setAttribute('download', report.reportName);
                      document.body.appendChild(link);
                      link.click();
                    })
                    .catch(error => {
                      console.error('Error downloading file: ', error);
                    });
                }}>
                  Download
                </a>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllReport;
