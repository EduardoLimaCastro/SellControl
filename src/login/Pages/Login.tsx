import React from "react";
import { useSectionInView } from "../../shared/libs/hooks";

const Login = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      className="bg-[#EBF2FC] h-screen w-[100%] pt-[60px]"
      id="home"
    >
      Login
    </section>
  );
};

export default Login;
