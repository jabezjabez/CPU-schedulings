function generateInputs() {
    var inputNumber = parseInt(document.getElementById("inputNumber").value);

    if (inputNumber > 0) {
      var form = document.getElementById("inputForm");
      form.innerHTML = ""; // Clear existing inputs

      for (var i = 1; i <= inputNumber; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.className = "Jobs";
        input.name = "Job" + i;
        input.placeholder = "Job " + i;
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
      }
    }
  }


// For the Modal
document.addEventListener("DOMContentLoaded", function() {
    var openModalButton = document.getElementById("openModalButton");
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementsByClassName("close")[0];
  
    openModalButton.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
  

//   for the chart

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Retrieve the starting and ending track input elements
var startingTrackInput = document.getElementById('startingTrack');
var endingTrackInput = document.getElementById('endingTrack');

// Create the chart with initial values
var myChart = new Chart(ctx, {
    type: 'line', // Change to line graph
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // X-axis labels
        datasets: [{
            label: 'Data', // Dataset label
            data: [10, 20, 30], // Dataset values
            backgroundColor: 'rgba(208, 0, 0, 0.7)', // Change the background color
            borderColor: '#D00000', // Change the border color
            borderWidth: 1 // Border width
        }]
    },
options: {
        responsive: true, // Make the chart responsive
        scales: {
            y: {
                beginAtZero: false, // Do not start the y-axis at zero
                suggestedMin: 0, // Initial suggested minimum
                suggestedMax: 100, // Initial suggested maximum
                grid: {
                    color: '#000000' // Color of the grid lines
                },
                ticks: {
                    color: '#000000' // Color of the tick labels
                }
            },
            x: {
                beginAtZero: false, // Do not start the y-axis at zero
                suggestedMin: 0, // Initial suggested minimum
                suggestedMax: 100, // Initial suggested maximum
                grid: {
                    color: '#000000' // Color of the grid lines
                },
                ticks: {
                    color: '#000000' // Color of the tick labels
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Update chart when the input values change
startingTrackInput.addEventListener('input', updateChart);
endingTrackInput.addEventListener('input', updateChart);

// Function to update the chart based on the input values
function updateChart() {
    // Retrieve the starting and ending track values
    var startingTrack = parseInt(startingTrackInput.value);
    var endingTrack = parseInt(endingTrackInput.value);
    
    // Update the chart options with the new suggested min and max values
    myChart.options.scales.y.suggestedMin = startingTrack;
    myChart.options.scales.y.suggestedMax = endingTrack;
    
    // Update the chart
    myChart.update();
}


