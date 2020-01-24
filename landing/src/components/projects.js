import React, { Component } from 'react';
import {Card, CardActions, CardText, CardMedia, IconButton, CardTitle, CardMenu, Button} from 'react-mdl';

class Projects extends Component{
    render(){

        const imgs = {
            orpheus: 'url(https://www.creativefabrica.com/wp-content/uploads/2019/01/Harp-icon-by-rudezstudio-6-580x386.jpg) center / cover',
            ieee: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png) center / cover'
        }
        const orpheus_url = 'https://github.com/Orpheus-Software';
        const ieee_url = 'https://github.com/Guardians-DSC/ieee-front';
        const card_url = 'url(https://media1.giphy.com/media/5wKfZYJHfdxW8/giphy.gif) center / cover';
        return(
            
            <div>
                <div>
                    <h1 className="page-title">Projects </h1>
                </div>
            
                <div style={{display: 'flex'}}>
                    <Card shadow={10} style={{width: '50vh', margin: 'auto', marginTop: '10vh', borderRadius: '10px'}}>
                        <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '20vh', background: imgs.orpheus}}>Orpheus Platform</CardTitle>
                        <CardText>
                            Aplicação voltada a organização e aprendizado musicais em Nodejs, MongoDB e ReactJS
                        </CardText>
                        <CardActions border>
                            <Button colored href={orpheus_url}>Repository</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} style={{width: '50vh', margin: 'auto', marginTop: '10vh', borderRadius: '10px'}}>
                        <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '20vh', background: imgs.ieee}}>IEEE Management System</CardTitle>
                        <CardText>
                            Sistema de administração desenvolvido por GUARDIANS UFCG para membros do grupo IEEE.
                        </CardText>
                        <CardActions border>
                            <Button colored href={ieee_url}>Repository</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            </div>
        );
    }
};

export default Projects;