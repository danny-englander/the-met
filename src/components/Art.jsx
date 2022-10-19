import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
import ArtCard from "./ArtCard";

const Art = () => {
  return (
    <>
      hello
      <div>Art</div>
      <ArtCard />
      <Pagination />
    </>
  );
};

export default Art;
