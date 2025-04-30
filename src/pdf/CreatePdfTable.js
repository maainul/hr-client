import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function CreatePdfTable() {
  const data = [
    {
      id: "1",
      Name: "Johnson",
      Phone: "9890987890",
      Email: "akajith919@gmail",
      Joined: "2024-03-09",
      Tot_amt: "4000",
      Paid_amt: "4000",
    },
    {
      id: "2",
      Name: "vishal",
      Phone: "9876567890",
      Email: "akajith919@gmail.com",
      Joined: "2024-03-23",
      Tot_amt: "5600",
      Paid_amt: "500",
    },
    {
      id: "2",
      Name: "vishal",
      Phone: "9876567890",
      Email: "akajith919@gmail.com",
      Joined: "2024-03-23",
      Tot_amt: "5600",
      Paid_amt: "500",
    },
  ];

  const handleGenerate = () => {
    const doc = new jsPDF();
    const title = "PDF Demo";
    const padding = 10;
    const titleWidth = doc.getTextWidth(title);
    const center = doc.internal.pageSize.width / 2 - titleWidth / 2;
    doc.setTextColor("red");
    doc.text(title, center, padding);
  };
}
