// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../config";
// const RenderJsonToCsv = () => {
//   const [toCsv, setToCsv] = useState(null);
//   const [showDownload, setShowDownload] = useState(null);

//   function jsonToCsv(args) {
//     let result, ctr, keys, columnDelimiter, lineDelimiter, data;
//     data = args.data || null;
//     if (data == null || !data.length) {
//       return null;
//     }

//     columnDelimiter = args.columnDelimiter || ",";
//     lineDelimiter = args.lineDelimiter || "\n";
//     keys = Object.keys(data[0]);

//     result = "";
//     result += keys.join(columnDelimiter);
//     result += lineDelimiter;

//     data.forEach(function(item) {
//       ctr = 0;
//       keys.forEach(function(key) {
//         if (ctr > 0) result += columnDelimiter;
//         result += item[key];
//         ctr++;
//       });
//       result += lineDelimiter;
//     });
//     return result;
//   }

//   const fetchEventData = async () => {
//     await axios(`${API_BASE_URL}/rsvp/all`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
//       }
//     })
//       .then(res => {
//         return jsonToCsv(res);
//       })
//       .then(csv => {
//         setToCsv(csv);
//       });
//   };

//   function exportToCsv(filename, rows) {
//     var processRow = function(row) {
//       var finalVal = "";
//       for (var j = 0; j < row.length; j++) {
//         var innerValue = row[j] === null ? "" : row[j].toString();
//         if (row[j] instanceof Date) {
//           innerValue = row[j].toLocaleString();
//         }
//         var result = innerValue.replace(/"/g, '""');
//         if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
//         if (j > 0) finalVal += ",";
//         finalVal += result;
//       }
//       return finalVal + "\n";
//     };

//     var csvFile = "";
//     for (var i = 0; i < rows.length; i++) {
//       csvFile += processRow(rows[i]);
//     }

//     var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
//     if (navigator.msSaveBlob) {
//       // IE 10+
//       navigator.msSaveBlob(blob, filename);
//     } else {
//       var link = document.createElement("a");
//       if (link.download !== undefined) {
//         // feature detection
//         // Browsers that support HTML5 download attribute
//         var url = URL.createObjectURL(blob);
//         link.setAttribute("href", url);
//         link.setAttribute("download", filename);
//         link.style.visibility = "hidden";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     }
//   }

//   useEffect(() => {
//     fetchEventData();
//   }, []);

//   return (
//     <div>
//       <p>Test:{toCsv}</p>
//       {console.table(toCsv)}
//       <a href="#test" onClick={() => exportToCsv("data.csv", toCsv)}>
//         DownloadCSV
//       </a>
//     </div>
//   );
// };

// export default RenderJsonToCsv;
