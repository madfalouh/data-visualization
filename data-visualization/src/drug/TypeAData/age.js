const data = {
  labels: [
    "00-04",
    "05-09",
    "10-15",
    "16-20",
    "21-24",
    "25-29",
    "30-39",
    "40-49",
    "50-59",
    "60-69",
    "70-79",
    "80->",
    "Unk",
  ],
  datasets: [
    {
      label: "Drug Type A Involved",
      data: [6, 2, 3, 38, 24, 34, 59, 41, 18, 12, 4, 1, 4],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Not Drug Involved",
      data: [25, 34, 85, 438, 328, 337, 550, 383, 372, 234, 105, 54, 41],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

export default data;
