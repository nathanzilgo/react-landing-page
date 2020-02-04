import React, { Component } from 'react';
import { Button, IconButton } from 'react-mdl';
import { Card, CardActions, CardMenu, CardText, CardTitle } from 'react-mdl';

const photo_another = require('./another.jpeg');
const mongo_img = 'url(https://mundohacker.net.br/wp-content/uploads/2019/06/1906852_93c6.jpg) center / cover';

class Info extends Component {

    constructor(props){
        
        super(props);
        this.state = {
        
            name: 'Nathan Fernandes',
            local: 'Campina Grande - PB, Brazil',
            institution: 'UFCG',
            description: 'Computer Science undergraduate student at Federal University of Campina Grande. Currently working with NodeJS, ReactJS/React Native and Spring Boot. Worked with the development of a web system for IEEE Students Management using React, Node and MongoDB and a private project including a telegram bot that catches orders for stock market trading systems using Python with Pandas and NumPy etc.',
        
        }

    }
    render(){
        return(
            <div className="info-container" style={{display: 'flex'}}>

                <Card shadow={10} style={{width: '100vh', margin: 'auto', marginTop: '5vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '40vh', background: `url(${photo_another}) center / cover`}}>{this.state.name}</CardTitle>
                    <CardText>
                        {this.state.local}    
                    </CardText>
                    <CardText>
                        {this.state.description}
                    </CardText>

                    <CardActions border>
                        <Button colored href={"/contact"}>Contact</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <div className="techs-div" style={{marginLeft: '2vh', marginRight: '0vh'}}>
                    
                    <Card shadow={0} style={{width: '40vh', height: '5vh', background: 'url(https://miro.medium.com/max/1200/0*ggE6W4KOacza5qNF.jpg) center / cover', marginTop: '5vh', marginRight: '10vh'}} onClick="">
                        <CardTitle expand />
                        
                        
                        
                        <CardActions style={{height: '10vh', padding: '2vh', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '2vh', fontWeight: '500'}}>
                                NodeJS JavaScript Engine
                                
                            </span>
                            <IconButton name="link" href="https://nodejs.org/en/"></IconButton>  
                        </CardActions>
                        
                    </Card>
                    
                    
                    <Card shadow={0} style={{width: '40vh', height: '5vh', background: 'url(https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png) center / cover', marginTop: '5vh', marginRight: 'auto'}}>
                        <CardTitle expand />
                        
                        <CardActions style={{height: '10vh', padding: '2vh', background: 'rgba(0,0,0,0.2)'}}>

                            <span style={{color: '#fff', fontSize: '2vh', fontWeight: '500'}}>
                                ReactJS JavaScript user interface library
                                
                            </span>
                            <IconButton name="link" href="https://pt-br.reactjs.org/"></IconButton>        
                        </CardActions>
                    </Card>
                    
                    

                </div>
                <Card shadow={0} style={{width: '40vh', height: '5vh',  background: mongo_img, marginTop: '5vh', marginRight: '2vh', marginLeft: '0vh'}}>
                        <CardTitle expand />
                        
                        <CardActions style={{height: '10vh', padding: '2vh', background: 'rgba(0,0,0,0.6)'}}>

                            <span style={{color: '#fff', fontSize: '2vh', fontWeight: '500'}}>
                                MongoDB NoSQL database software 
                                
                            </span>
                            <IconButton name="link" href="https://pt-br.reactjs.org/"></IconButton>        
                        </CardActions>
                    </Card>

            </div>
        );
    }
    
}

export default Info;