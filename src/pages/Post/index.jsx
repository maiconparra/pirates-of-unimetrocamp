import React from 'react';
import { withRouter } from 'react-router-dom';

import min_header from '../../assets/images/header_min.svg';
import min_footer from '../../assets/images/footer_min.svg';
import lg_header from '../../assets/images/header.svg';

import './index.css';

function Post()
{
    return (
        <div className="post-page">
            <div className="header-container">
                <img src={min_header} id="min-header"/>
                <img src={lg_header} id="lg-header" />
                <h1>Criar seu Post</h1>
            </div>
            <div className="body-container">
                <input type="text" placeholder="Titulo do Post"/>
                <textarea name="Post" cols="30" rows="10">Digite aqui suas idéias.</textarea>
            </div>
            <div className="footer-container">
               <ul>
                   <li><button>Voltar</button></li>
                   <li><button>Postar</button></li>
               </ul>
            </div>
        </div>
    );
}

export default withRouter(Post);