import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';

class Info extends Component {

    constructor(props){
        const info = {
        
            name: 'Nathan Fernandes',
            // profile_img: 
            local: 'Campina Grande - PB, Brazil',
            institution: 'UFCG',
            description: 'Computer Science undergraduate student at Federal University of Campina Grande. Currently working with NodeJS, ReactJS/React Native and Spring Boot. Worked with the development of a web system for IEEE Students Management using React, Node and MongoDB; A private project including a telegram bot that catches orders for stock market trading systems using Python with Pandas and NumPy etc.',
        
        }
    }
    render(){
        return(
            <div className="info-container">

                <Card shadow={10} style={{width: '50vh', margin: 'auto', marginTop: '20vh', borderRadius: '10px'}}>
                    <CardTitle style={{textShadow: '2px 2px 3px black', color: 'white', height: '20vh', background: profile_img}}>Nathan Fernandes Pedroz</CardTitle>
                    <CardText>
                        {this.props.local}    
                    </CardText>
                    <CardText>
                        {this.props.description}
                    </CardText>
                    
                    <CardActions border>
                        <Button colored href={"/contact"}>Contact</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            </div>
        )
    }
    
}