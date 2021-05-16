import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  console.log(...dataPointValues);
  const totalMaxValue = Math.max(...dataPointValues);
  console.log(totalMaxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
