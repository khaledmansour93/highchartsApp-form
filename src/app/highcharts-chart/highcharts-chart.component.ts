import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'; // The Chart object from which an instance is created to draw chart

@Component({
  selector: 'app-highcharts-chart',
  templateUrl: './highcharts-chart.component.html',
  styleUrls: ['./highcharts-chart.component.scss']
})
export class HighchartsChartComponent implements OnInit {

  data: any = [];
  types: string[]; // Array of chart types
  chart: Chart;

  constructor() {
    this.types = ['Bar', 'Line', 'Pie'];
  }

  public onChange(event: any): void { // Function to be executed when switching chart types
    const newVal = event.target.value; // Getting selected chart type value
    switch (newVal) {
      case this.types[0]:
        this.chart = new Chart({
          chart: {  // General options for the chart
            type: 'bar' // The default series type for the chart
          },
          title: {  // The chart's main title
            text: 'Monthly Average Rainfall'  // The title of the chart
          },
          subtitle: { // The chart's subtitle
            text: 'Source: WorldClimate.com'  // The subtitle of the chart
          },
          xAxis: {  // The X axis or category axis. Normally this is the horizontal axis
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
              'Aug', 'Sep', 'Oct'],
            title: {  // The axis title, showing next to the axis line
              text: null  // The actual text of the axis title
            },
            gridLineWidth: 1, // The width of the grid lines extending the ticks across the plot area
            lineWidth: 0  // The width of the line marking the axis itself
          },
          yAxis: {  // The Y axis or value axis. Normally this is the vertical axis
            min: 0, // The minimum value of the axis
            title: {  // The axis title, showing next to the axis line
              text: 'Rainfall (mm)',  // The actual text of the axis title
            },
            labels: { // The axis labels show the number or category for each tick.
              overflow: 'justify' // How to handle overflowing labels on horizontal axis
            },
            gridLineWidth: 0  // The width of the grid lines extending the ticks across the plot area
          },
          tooltip: {  // Options for the tooltip that appears when the user hovers over a series or point
            valueSuffix: ' mm'  // A string to append to each series' y value
          },
          plotOptions: {  // A wrapper object for config objects for each series type
            bar: {  // A bar series is a special type of column series where the columns are horizontal

              // The corner radius of the border surrounding each column or bar
              borderRadius: parseInt('50%'),

              dataLabels: { // Options for the series data labels, appearing next to each data point

                // Enable or disable the data labels
                enabled: true
              },
              // Padding between each value groups, in x axis units
              groupPadding: 0.1,
            }
          },
          legend: { // A box containing a symbol and name for each series item or point item in the chart
            layout: 'horizontal', // The layout of the legend items
            align: 'right', // The horizontal alignment of the legend box within the chart area
            verticalAlign: 'top', // The vertical alignment of the legend box
            x: -40, // The x offset of the legend relative to its horizontal alignment align within chart
            y: 80,  // The vertical offset of the legend relative to it's vertical alignment verticalAlign within chart
            floating: true, // When the legend is floating, the plot area ignores it and is allowed to be placed below it.
            borderWidth: 1, // The width of the drawn border around the legend
            backgroundColor:  // The background color of the legend
              '#FFFFFF',
            shadow: true  // Whether to apply a drop shadow to the legend
          },
          credits: {  // Highchart by default puts a credits label in the lower right corner of the chart
            enabled: true // Whether to show the credits text
          },
          series: [{  // Series options for specific data and the data itself
            name: 'Year 1990',
            type: 'bar',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2000',
            type: 'bar',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2010',
            type: 'bar',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2018',
            type: 'bar',
            data: this.data // An array of data points for the series
          }]
        });
        break;
      case this.types[1]:
        this.chart = new Chart({
          chart: {  // General options for the chart
            type: 'line' // The default series type for the chart
          },
          title: {  // The chart's main title
            text: 'Monthly Average Rainfall'  // The title of the chart
          },
          subtitle: { // The chart's subtitle
            text: 'Source: WorldClimate.com'  // The subtitle of the chart
          },
          yAxis: { // The Y axis or value axis. Normally this is the vertical axis
            title: { // The axis title, showing next to the axis line
              text: 'Rainfall (mm)' // The actual text of the axis title
            }
          },
          xAxis: { // The X axis or category axis. Normally this is the horizontal axis
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
              'Aug', 'Sep', 'Oct']
          },
          legend: { // A box containing a symbol and name for each series item or point item in the chart
            layout: 'vertical', // The layout of the legend items
            align: 'right', // The horizontal alignment of the legend box within the chart area
            verticalAlign: 'middle' // The vertical alignment of the legend box
          },
          tooltip: {  // Options for the tooltip that appears when the user hovers over a series or point
            valueSuffix: ' mm'  // A string to append to each series' y value
          },
          plotOptions: { // A wrapper object for config objects for each series type
            series: { // General options for all series types
              label: { // Series labels are placed as close to the series as possible in a natural way, seeking to avoid other series
                connectorAllowed: false // Allow labels to be placed distant to the graph if necessary, and draw a connector line to the graph
              },
            }
          },
          series: [{ // Series options for specific data and the data itself
            name: 'Year 1990',
            type: 'line',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2000',
            type: 'line',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2010',
            type: 'line',
            data: this.data // An array of data points for the series
          }, {
            name: 'Year 2018',
            type: 'line',
            data: this.data // An array of data points for the series
          }],
          responsive: { // Allows setting a set of rules to apply for different screen or chart sizes
            rules: [{ // A set of rules for responsive settings executed from the top down
              condition: { // Under which conditions the rule applies
                maxWidth: 500 // The responsive rule applies if the chart width is less than this
              },
              chartOptions: { // A full set of chart options to apply as overrides to the general chart options. The chart options are applied when the given rule is active
                legend: { // A box containing a symbol and name for each series item or point item in the chart
                  layout: 'horizontal', // The layout of the legend items
                  align: 'center',  // The horizontal alignment of the legend box within the chart area
                  verticalAlign: 'bottom' // The vertical alignment of the legend box
                }
              }
            }]
          }
        });
        break;
      case this.types[2]:
        this.chart = new Chart({
          chart: { // General options for the chart
            plotBackgroundColor: undefined, // The background color or gradient for the plot area
            plotBorderWidth: undefined, // The pixel width of the plot area border
            plotShadow: false, // Whether to apply a drop shadow to the plot area
            type: 'pie' // The default series type for the chart
          },
          title: {  // The chart's main title
            text: 'Monthly Average Rainfall'  // The title of the chart
          },
          tooltip: { // Options for the tooltip that appears when the user hovers over a series or point

            // The HTML of the point's line in the tooltip
            pointFormat: '{series.name}: <b>{point.y:.1f} mm</b>'
          },
          plotOptions: { // A wrapper object for config objects for each series type
            pie: { // A pie chart is a circular graphic which is divided into slices to illustrate numerical proportion
              allowPointSelect: true, // Allow this series' points to be selected by clicking on the graphic (columns, point markers, pie slices, map areas etc)

              /* You can set the cursor to "pointer" if you have click events attached to the series, to signal to 
              the user that the points and lines can be clicked */
              cursor: 'pointer',
              dataLabels: { // Options for the series data labels, appearing next to each data point
                enabled: true, // Enable or disable the data labels
                format: '<b>{point.name}</b>: {point.y:.1f} mm' // A format string for the data label
              }
            }
          },
          series: [{ // Series options for specific data and the data itself
            name: 'Months',
            type: 'pie',
            colorByPoint: true, // Gives color to each slice of a pie chart
            data: [{ // An array of data points for the series
              name: 'Jan',
              y: this.data[0],
              sliced: true, // Whether to display a slice offset from the center
              selected: true
            }, {
              name: 'Feb',
              y: this.data[1]
            }, {
              name: 'Mar',
              y: this.data[2]
            }, {
              name: 'Apr',
              y: this.data[3]
            }, {
              name: 'May',
              y: this.data[4]
            }, {
              name: 'Jun',
              y: this.data[5]
            }, {
              name: 'Jul',
              y: this.data[6]
            }, {
              name: 'Aug',
              y: this.data[7]
            }, {
              name: 'Sep',
              y: this.data[8]
            }, {
              name: 'Oct',
              y: this.data[9]
            }]
          }]
        });
        break;
    }
  }

  ngOnInit(): void {  // When component initialized, the code block here will execute
    this.data = JSON.parse(localStorage.getItem("values")!);  // Getting data after form submission
    this.chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {  // The chart's main title
        text: 'Monthly Average Rainfall'  // The title of the chart
      },
      subtitle: { // The chart's subtitle
        text: 'Source: WorldClimate.com'  // The subtitle of the chart
      },
      xAxis: {  // The X axis or category axis. Normally this is the horizontal axis

        // If categories are present for the xAxis, names are used instead of numbers for that axis
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct'],

        // Configure a crosshair that follows either the mouse pointer or the hovered point.
        crosshair: true
      },
      yAxis: {  // The Y axis or value axis. Normally this is the vertical axis

        min: 0, // The minimum value of the axis

        title: {  // The axis title, showing next to the axis line

          text: 'Rainfall (mm)' // The actual text of the axis title
        }
      },
      tooltip: {  // Options for the tooltip that appears when the user hovers over a series or point

        // The HTML of the tooltip header line
        headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',

        // The HTML of the point's line in the tooltip
        pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>',

        // A string to append to the tooltip format
        footerFormat: '</table>',

        // When the tooltip is shared, the entire plot area will capture mouse movement or touch events
        shared: true,

        // Use HTML to render the contents of the tooltip instead of SVG
        useHTML: true
      },
      plotOptions: {  // A wrapper object for config objects for each series type

        column: { // Column series display one column per value along an X axis

          // Padding between each column or bar, in x axis units
          pointPadding: 0.2,

          // The width of the border surrounding each column or bar
          borderWidth: 0
        }
      },
      series: [{ // Series options for specific data and the data itself
        type: 'column',
        name: 'Tokyo',
        data: this.data  // An array of data points for the series
      }]
    });
  }
}
