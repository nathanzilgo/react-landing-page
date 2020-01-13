import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation, Header, Layout, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';

import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
    
    const GitHub = 'https://github.com/nathanzilgo';
    const LinkedIn = 'https://www.linkedin.com/in/nathan-fernandes98/';
    const back_url = 'url(https://miro.medium.com/max/3840/1*_gg1Te-7SJfk9E2D-mORfw.png) center / cover';
    
    const img_url = 'https://p7.hiclipart.com/preview/522/51/735/tony-tony-chopper-monkey-d-luffy-one-piece-treasure-cruise-chibi-chopper.jpg';
  return (
    
    <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: back_url}}>
            <Header transparent title="Nathan Fernande's Landing Page" style={{color: 'whitblanchedalmonde'}}>
                <Navigation>
                    <Link to="/technologies">Technologies</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
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

            

            
            <Footer size="mini" style={{width: '200vh', margin: 'auto', opacity: '0.8'}}>
                <img src={img_url} style={{width:' 5vh', height:'5vh'}}></img>
                <FooterSection type="left" logo='Zap'>
                    
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
