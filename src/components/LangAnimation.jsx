import { Heading } from ".";
import { language } from "./utils";

const LangAnimation = () => {
  return (
    <div className="">
      <Heading
        title="Skills"
        subTitle="Professional languages &amp; frameworks that i have used in my projects"
      />
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
