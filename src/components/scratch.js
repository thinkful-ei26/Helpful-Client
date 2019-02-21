import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
const RenderJsonToCsv = () => {
  const [toCsv, setToCsv] = useState(null);
  const [showDownload, setShowDownload] = useState(null);

  function jsonToCsv(args) {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;
    data = args.data || null;
    console.log("$$$$$", args);
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ",";
    lineDelimiter = args.lineDelimiter || "\n";
    keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  const fetchEventData = async () => {
    await axios(`${API_BASE_URL}/rsvp/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    })
      .then(res => {
        return jsonToCsv(res);
      })
      .then(csv => {
        setToCsv(csv);
      });
  };

  async function downloadCSV(args) {
    let data, filename, link;

    filename = args.filename || "export.csv";

    data = encodeURI(toCsv);

    link = document.createElement("a");
    await link.setAttribute("href", data);
    await link.setAttribute("download", filename);
    return await link.click();
  }

  useEffect(() => {
    fetchEventData();
  }, []);

  console.log("--------------------", toCsv);
  return (
    <div>
      <p>Test:{toCsv}</p>
      <a href="#test" onClick={() => downloadCSV({ filename: "org-data.csv" })}>
        DownloadCSV
      </a>
    </div>
  );
};

export default RenderJsonToCsv;
