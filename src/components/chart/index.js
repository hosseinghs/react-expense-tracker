import Bar from "./Bar";
import "../../assets/style/chart/chart.css";

const Chart = ({ items }) => {
  return (
    <div className="chart">
      {items.map((item, i) => (
        <Bar
          key={i}
          value={item.value}
          maxValue={item.maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
