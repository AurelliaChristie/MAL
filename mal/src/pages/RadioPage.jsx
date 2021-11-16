import React, {useEffect} from "react";
import { Container} from "react-bootstrap";
import SearchBar from "../components/Searchbar";
import TopRadio from "../components/radio/dummyRadio";
import { useParams } from "react-router-dom";

function RadioPage() {

  const { playlistId } = useParams();

  useEffect(() => {
    async function getAlbumDetail() {
      try{
        const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumDetail', error);
      }
    }
    getAlbumDetail();
  }, [])

  useEffect(() => {
    async function getAlbumTracks() {
      try{
        const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumTracks', error);
      }
    }
    getAlbumTracks();
  }, [])



    return (
        <Container fluid>
            <div>     
                <SearchBar />
                <h3 className="mx-4">Top Playlist</h3>
                <TopRadio />
            </div>
        </Container>
    )
}

export default RadioPage;