import Type from "typewriter-effect";

const Typewriter = () => {
  return (
    <Type
      options={{
        strings: [
          "MERN Stack Developer",
          "Love Using Python",
          "Sport Enthusiast",
          "Wanderer....",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};
export default Typewriter;
