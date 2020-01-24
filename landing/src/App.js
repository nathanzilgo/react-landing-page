import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation, Header, Layout, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';

import Main from './components/routes';
import { Link } from 'react-router-dom';

function App() {
    
    const GitHub = 'https://github.com/nathanzilgo';
    const LinkedIn = 'https://www.linkedin.com/in/nathan-fernandes98/';
    const back_url = 'url(https://miro.medium.com/max/3840/1*_gg1Te-7SJfk9E2D-mORfw.png) center / cover';
    
    const img_url = 'https://p7.hiclipart.com/preview/522/51/735/tony-tony-chopper-monkey-d-luffy-one-piece-treasure-cruise-chibi-chopper.jpg';
  return (
    
    <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: back_url}}>
            <Header transparent title="A simple ReactJS Landing Page" style={{color: 'whitblanchedalmonde', textShadow: '3px 3px 2px black '}}>
                <Navigation>
                    <Link style={{textShadow: '3px 3px 3px black '}} to="/">Home</Link>
                    <Link style={{textShadow: '3px 3px 3px black '}} to="/technologies">References</Link>
                    <Link style={{textShadow: '3px 3px 3px black '}} to="/projects">Projects</Link>
                    <Link style={{textShadow: '3px 3px 3px black '}} to="/about">About</Link>
                    <Link style={{textShadow: '3px 3px 3px black '}} to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="My profiles">
                <Navigation>
                    <a href={GitHub}>GitHub</a>
                    <a href={LinkedIn}>LinkedIn</a>
                    
                </Navigation>

            </Drawer>
            <Content>
                <div className="page-content"></div>
                <Main/>
                
            </Content>

            

            
            <Footer size="mini" style={{ minWidth: '100%', margin: 'auto', height: '2vh', opacity: '0.8'}}>
                <img src={img_url} style={{width:' 5vh', height:'5vh'}}></img>
                <FooterSection type="left" logo='Footer'>
                    
                    <FooterLinkList>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Open Projects</Link>
                        
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </Layout>
        
    </div>
  );
}

export default App;
