import React from "react";
import Header from "./components/Header";

const Page = (props) => {
  console.log(this.props.children)
  return (
    <div>
      <Header />
      {this.props.children}
    </div>
  );
};

export default Page;
