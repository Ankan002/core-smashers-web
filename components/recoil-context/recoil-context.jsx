"use client";

const { RecoilRoot } = require("recoil");

const RecoilContext = (props) => {
  const { children } = props;
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContext;
