const ProjectList = (props) => {
  const { filterImages } = props;

  return (
    <>
      <ul className="projectList">
        {filterImages.map((item, index) => (
          <li className="projectList__item" key={index}>
            <img src={item.img} className="projectList__img" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
