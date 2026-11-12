const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  return (
    <>
      <ul className="toolbar__list">
        {filters.map((item, index) => (
          <li className="toolbar__item" key={index}>
            <button
              className={`toolbar__button ${selected === item ? "active" : ""}`}
              onClick={() => onSelectFilter(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Toolbar;
