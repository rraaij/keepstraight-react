import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const datapointValues = props.dataPoints.map(p => p.value);
    const totalMax = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
