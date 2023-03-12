import axios from "axios";
import { getToken } from "./authenticationService";

export const uploadFile = (file, reportName, patientId, reportIssueDate) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("reportName", reportName);
  formData.append("patientId", patientId);
  formData.append("rdate", reportIssueDate);
  console.log('In upload')
  return axios({
    'method': 'POST',
    'url': `http://localhost:8080/api/v1/report/upload`,
    'data': formData,
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': 'Bearer ' + getToken()
    },
  })
}

export const getAllReports = () => {
  return axios({
    'method': 'GET',
    'url': `http://localhost:8080/api/v1/report/files`, 
    headers: {
      'Authorization': 'Bearer ' + getToken()
    },
  })
}
