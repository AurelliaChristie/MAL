import React from "react";
import { Container} from "react-bootstrap";
import SearchBar from "../components/Searchbar";
import TopRadio from "../components/radio/dummyRadio";

function PlaylistPage() {
    return (
        <Container fluid>
            <div>     
                <SearchBar />
                <h3 className="mx-4">Top Radio</h3>
                <TopRadio />
            </div>
        </Container>
    )
}

export default PlaylistPage;