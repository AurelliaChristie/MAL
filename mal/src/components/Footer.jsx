import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #343a40;
    color: white;
    bottom: 0;
    width: 100%;
    position: absolute;
`

function Footer(){
    return(
        <StyledFooter>
            <div className="footer-copyright text-center py-3">
                © 2021 Group 21 Skilvul#Tech4Impact. All rights reserved.
            </div>
        </StyledFooter>
    );
}

export default Footer;