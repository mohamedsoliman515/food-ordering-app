import React from "react";

const MainHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <span className="uppercase text-accent font-semibold leading-4">
        {subTitle}
      </span>
      <h2 className="text-primary font-bold italic text-4xl"> {title}</h2>
    </>
  );
};

export default MainHeading;
