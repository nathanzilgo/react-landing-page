import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation, Header, Layout, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {Card, CardActions, CardText, CardMedia, IconButton, CardTitle, CardMenu, Button} from 'react-mdl';

import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
    const back_url = 'url(https://miro.medium.com/max/3840/1*_gg1Te-7SJfk9E2D-mORfw.png) center / cover';
    const card_url = 'url(https://media1.giphy.com/media/5wKfZYJHfdxW8/giphy.gif) center / cover';
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
            <Drawer title="Others">
                <Navigation>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                </Navigation>

            </Drawer>
            <Content>
                <div className="page-content"></div>
                <Main/>
            </Content>

            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#0099fg', height: '176px', background: card_url}}>Bem vindo!</CardTitle>
                <CardText>
                    Eai gaykkkkkk
                </CardText>
                <CardActions border>
                    <Button colored>Ta in shockk????</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            
            <Footer size="mini" style={{opacity: 0.9}}>
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Contact</a>
                        <a href="#">Open Projects</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </Layout>
        
    </div>
  );
}

export default App;
