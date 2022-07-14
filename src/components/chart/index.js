import Bar from "./Bar";
import "../../assets/style/chart/chart.css";

const Chart = ({ items }) => {
  const dataPoinstValue = items.map((item) => item.value);
  const max = Math.max(...dataPoinstValue);
  
  return (
    <div className="chart">
      {items.map((item, i) => (
        <Bar
          key={i}
          value={item.value}
          maxValue={max}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
