import { language } from "./utils";

const LangAnimation = () => {
  return (
    <div className="">
      <h1 className="project-heading">
        <strong className="purple">Skills</strong>
      </h1>
      <div className="heading-underline" />
      <p style={{ color: "white" }}>
        Professional languages & frameworks that i have used in my projects
      </p>
      <div className="carousel-parent position-relative">
        <div className="gallery">
          {language.map((item, index) => {
            return (
              <span style={{ "--i": index }} key={item.id}>
                <div className="test">
                  <img className="caro-img" src={item.img} alt="" />
                  <h5 className="text-center">{item.name}</h5>
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LangAnimation;
