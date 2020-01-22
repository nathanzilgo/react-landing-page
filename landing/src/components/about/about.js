import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';

class About extends Component{

    
    constructor(props) {

        const tab_content = [
            {
                name: 'Nathan Fernandes',
                local: 'Campina Grande - PB, Brazil',
                institution: 'UFCG',
                description: 'Computer Science undergraduate student at Federal University of Campina Grande. Currently working with NodeJS, ReactJS/React Native and Spring Boot. Worked with the development of a web system for IEEE Students Management using React, Node and MongoDB; A private project including a telegram bot that catches orders for stock market trading systems using Python with Pandas and NumPy etc.',
            },
            {
                name: 'Technologies',
                local: 'Campina Grande - PB, Brazil',
                institution: 'UFCG',
                techs: ['ReactJS', 'NodeJS', 'Java + Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Python'],
                projects: [],

            }
        ]
    

        super(props)
        this.state = { activeTab: 0 };
    
        function view() {}
                return (
                    <div>
                        <h3>{tab_content[0].name}</h3>
                        <a>{tab_content[0].local}</a>
                        <a>{tab_content[0].institution}</a>
                        <a>{tab_content[0].description}</a>
                    </div>
                )
            }
        
    

    render(){
        return(
        <div>
            <h1 className="page-title">About Page</h1>

            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Info</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Contact</Tab>
                </Tabs>
                <section>
                    <div className="content"> {this.view}</div>
                </section>
            </div>    
   
        </div>
        );
    }
};

export default About;