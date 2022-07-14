import "../../assets/style/chart/bar.css";

const ChartBar = ({ label, value, maxValue }) => {
  let fillHeigth = "0%";
  if (maxValue > 0) {
    fillHeigth = Math.round(value / maxValue) * 100 + "%";
  }

  return (
    <div className="chart-bar">
      <div className="char-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeigth }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
