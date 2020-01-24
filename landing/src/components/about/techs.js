import React, { Component } from 'react';
import { Tab, Tabs, Button, IconButton } from 'react-mdl';
import { Card, CardActions, CardMenu, CardText, CardTitle } from 'react-mdl';


class Info extends Component {

    constructor(props){
        
        super(props);
        this.state = {
        
            name: 'Nathan Fernandes',
            profile_img: 'url(https://media-exp1.licdn.com/dms/image/C4D03AQHNNvV7V5OJLg/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=cEShSafB91b01YULXQ6iOO6o7LwvWEiFU2I3rdfM7DI) center / cover',
            local: 'Campina Grande - PB, Brazil',
            institution: 'UFCG',
            description: 'Computer Science undergraduate student at Federal University of Campina Grande. Currently working with NodeJS, ReactJS/React Native and Spring Boot. Worked with the development of a web system for IEEE Students Management using React, Node and MongoDB; A private project including a telegram bot that catches orders for stock market trading systems using Python with Pandas and NumPy etc.',
        
        }
    }
    render(){
        return(
            <div className="info-container">

                <Card shadow={10} style={{width: '100vh', margin: 'auto', marginTop: '5vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '40vh', background: this.state.profile_img}}>{this.state.name}</CardTitle>
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

            </div>
        );
    }
    
}

export default Info;