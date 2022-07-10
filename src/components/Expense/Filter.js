import "../../assets/style/expense/filter.css";
const ExpenseFilter = ({ selectedYear, filterYear }) => {
  const updateFilter = (e) => {
    filterYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select defaultValue={selectedYear} onChange={updateFilter}>
          <option value="-1">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
