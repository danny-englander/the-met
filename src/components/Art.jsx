import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
import ArtCard from "./ArtCard";

const Art = () => {
  // Set the artworks as an emoty array with useState.
  const [artWorks, getArtWorks] = useState([]);
  // Set the search term to an empty string.
  const [searchTerm, setSearchTerm] = useState("");
  // Set the page numbers to start at 0.
  const [pageNumber, setPageNumber] = useState(0);
  // Set the number of artworks per page.
  const artworksPerPage = 12;
  const pagesVisited = pageNumber * artworksPerPage;

  useEffect(() => {
    async function fetchArtWorks() {
      const URL = `https://api.artic.edu/api/v1/artworks?limit=20`;
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        getArtWorks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArtWorks();
  }, []);

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
