import React from "react";
import ColumnHead from "../Components/Column/ColumnHead";
import ColumnCurrent from "../Components/Column/ColumnCurrent";
import ColumnClosed from "../Components/Column/ColumnClosed";
import ColumnArchivd from "../Components/Column/ColumnArchive";

const Home = () => {
  return (
    <React.Fragment>
      <ColumnHead />
      <ColumnCurrent />
      <ColumnClosed />
      <ColumnArchivd />
    </React.Fragment>
  );
};

export default Home;
