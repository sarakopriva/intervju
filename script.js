const canvas = document.getElementById("my-bar-chart");

const labels = [
  "Arctic",
  "North Atlantic",
  "South Atlantic",
  "Indian",
  "North Pacific",
  "South Pacific",
  "Southern",
];

const volumes = [18750, 146000, 160000, 264000, 341000, 329000, 71800]; // 10^3 km3

const dataObj = {
  labels: labels,
  datasets: [
    {
      label: "Volume",
      data: volumes,
    },
  ],
};

const context = canvas.getContext("2d");
new Chart(context, { type: "bar", data: dataObj });
