import React from 'react';
import "./Footer.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn'
import { IconButton } from '@material-ui/core';

function Footer() {
  return (
        <div className="footer-container">
            <IconButton href="https://github.com/npham014/Hotel-California/tree/master" target="_blank">
                <GitHubIcon className="ghIcon"/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/nathan-pham-186a2b14b/" target="_blank">
                <LinkedIn className="liIcon"/>
            </IconButton>
        </div>
    );
}

export default Footer;
