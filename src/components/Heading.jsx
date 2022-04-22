const Heading = ({title, subTitle}) => {
  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">{title}</strong>
      </h1>
      <div className="heading-underline" />
      <p style={{ color: "white" }} className="text-center mb-4">
        {subTitle}
      </p>
    </div>
  );
}
export default Heading