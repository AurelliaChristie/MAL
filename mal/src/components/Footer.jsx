import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #28242c;
    color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-top: 50px
`

function Footer(){
    return(
        <StyledFooter>
            <div className="text-center py-3">
                © 2021 Group 21 Skilvul#Tech4Impact. All rights reserved.
            </div>
        </StyledFooter>
    );
}

export default Footer;