import React, { Component } from 'react';
import {Card, CardActions, CardText, IconButton, CardTitle, CardMenu, Button} from 'react-mdl';
import { Link } from 'react-router-dom';

class Tech extends Component{
    render(){
        const imgs = {
            production: 'url(https://media3.giphy.com/media/OQcPes29d8sUg/source.gif) center / cover'
        }
        return(
        <div>
            <h1 className="page-title">Em desenvolvimento :[</h1>

            <Card shadow={10} style={{width: '50vh', margin: 'auto', marginTop: '20vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '20vh', background: imgs.production}}>Ainda em desenvolvimento!</CardTitle>
                    <CardText>
                        Em breve os recursos estarão disponíveis.
                    </CardText>

                    <div style={{display: 'flex'}}>
                        <CardActions border>
                            <Link to="/projects">
                                <Button colored >Projetos ativos</Button>
                            </Link>
                        </CardActions>

                        <CardActions border>
                            <Link to="/contact">
                                <Button colored >Relatar bugs</Button>
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

export default Tech;