import React, { Component } from 'react';
import {Card, CardActions, CardText, IconButton, CardTitle, CardMenu, Button} from 'react-mdl';
import { Link } from 'react-router-dom';


class Landing extends Component{
    render(){
        const card_url = 'url(https://media1.giphy.com/media/5wKfZYJHfdxW8/giphy.gif) center / cover';
        return(
            <div>
                <h1 className="page-title">Home</h1>

                <Card shadow={10} style={{width: '50vh', margin: 'auto', marginTop: '20vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '20vh', background: card_url}}>Bem vindo!</CardTitle>
                    <CardText>
                        Aqui você pode encontrar projetos para contribuir, avaliar e referências de tecnologias e tutoriais de programação!
                    </CardText>

                    <div style={{display: 'flex'}}>
                        <CardActions border>
                            <Link to="/projects">
                                <Button colored >Projetos ativos</Button>
                            </Link>
                        </CardActions>

                        <CardActions border>
                            <Link to="/technologies">
                                <Button colored >Tecnologias e tutoriais</Button>
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