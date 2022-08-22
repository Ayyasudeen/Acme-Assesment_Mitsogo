var mq = window.matchMedia("(max-width: 450px)");

function changeNavWidth() {
}

function revokeOverFlowX() {
  document.querySelector('body').style.overflowX = "auto";
}

function openNav() {
  if (document.getElementById("mySidenav").style.width == "250px") {
    document.querySelector('body').style.overflowX = "hidden";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".nav-items").style.borderTopLeftRadius = "0px";
    if (mq.matches) {
      // window width is at less than 450px
      document.querySelector(".main-view").style.width = "100%";
    } else {
      document.querySelector(".main-view").style.width = "100%";
    }
    setTimeout(revokeOverFlowX, 500);
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector('body').style.overflowX = "hidden";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".nav-items").style.borderTopLeftRadius = "25px";
    setTimeout(changeNavWidth, 500);

    if (mq.matches) {
      // window width is at less than 450px
      document.querySelector(".main-view").style.width = "250%";
    }
  }

  const sideNavWidth = document.getElementById("mySidenav").offsetWidth;

  console.log(sideNavWidth)
}

function hoverFunc() {
  document.querySelector(".dropdown-content").style.display = "block";
}

function hoverOut() {
  document.querySelector(".dropdown-content").style.display = "none"
}

function hoverFuncNotif() {
  document.querySelector(".dropdown-content1").style.display = "block"
  document.querySelector(".notif-circle").style.display = "none"
}

function hoverOutNotif() {
  document.querySelector(".dropdown-content1").style.display = "none"
  document.querySelector(".notif-circle").style.display = "block"
}



var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, '#B5B3FB');
gradient.addColorStop(1, '#ffffff00');

var gradient1 = ctx.createLinearGradient(0, 0, 0, 200);
gradient1.addColorStop(0, '#B0EAFF');
gradient1.addColorStop(1, '#ffffff00');


const config = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [15000, 10000, 15000, 18000, 15000, 24000],
        label: "Products Sold",
        borderColor: "#B5B3FB",
        fill: true,
        backgroundColor: gradient,
        pointBackgroundColor: "#B5B3FB",
        tension: 0.4
      },
      {
        data: [19000, 7500, 17000, 12500, 17000, 10000],
        label: "Total Views",
        borderColor: "#B0EAFF",
        fill: true,
        backgroundColor: gradient1,
        pointBackgroundColor: "#B0EAFF",
        tension: 0.4
      }
    ],
    pointStyle: 'circle',
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        min: 5000,
        max: 25000,
        ticks: {
          callback: function (label) {
            return label / 1000 + 'k';
          }
        }
      }
    },

  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

const config1 = {
  type: "doughnut",
  data: {
    labels: [
      'France',
      'Italy',
      'Japan',
      'Canada'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [4260, 3970, 4260, 3970],
      backgroundColor: [
        '#80E2FF',
        '#F49FA8',
        '#FFDF94',
        '#B5B3FB'
      ],
      hoverOffset: 4,
      pointStyle: 'circle',
      // pointRadius: 1,

    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
  }
};

const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config1
);






