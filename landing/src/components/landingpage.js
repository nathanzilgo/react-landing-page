import React, { Component } from 'react';
import {Card, CardActions, CardText, IconButton, CardTitle, CardMenu, Button} from 'react-mdl';
import { Link } from 'react-router-dom';


class Landing extends Component{
    render(){
        const card_url = 'url(https://media1.giphy.com/media/5wKfZYJHfdxW8/giphy.gif) center / cover';
        return(
            <div>
                <h1 className="page-title">Home</h1>

                <Card shadow={10} style={{width: '80vh', height: '60vh', margin: 'auto', marginTop: '10vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '60vh', background: card_url}}>Bem vindo!</CardTitle>
                    <CardText>
                        Aqui você vai poder encontrar projetos para contribuir e referências de tecnologias e tutoriais de programação!
                        <br/> 
                        A maioria das funcionalidades ainda estão em desenvolvimento.
                    </CardText>

                    <div style={{display: 'flex'}}>
                        <CardActions border>
                            <Link to="/projects">
                                <Button colored >Projetos ativos</Button>
                            </Link>
                        </CardActions>

                        <CardActions border>
                            <Link to="/technologies">
                                <Button colored >Referências</Button>
                            </Link>
                        </CardActions>
                    </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        );
    }
};

export default Landing;