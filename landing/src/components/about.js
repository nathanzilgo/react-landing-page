import React, { Component } from 'react';
import { Tab, Tabs } from 'react-mdl';

class About extends Component{

    
    constructor(props) {

        const tab_content = [
            {
                name: 'Nathan Fernandes',
                local: 'Campina Grande - PB, Brazil',
                institution: 'UFCG',
                description: ':]'
            },
            {
                techs: ['ReactJS', 'NodeJS', 'Java + Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Python'],
                projects: [],

            },
            {
                name: 'Tchubirabirom yeeeh'
            }
        ]
        

        super(props)
        this.state = { activeTab: 0 };

        function view() {
            if (this.state.activeTab === 0){
                return (
                    <div>
                        <h3>{tab_content[0].name}</h3>
                        <a>{tab_content[0].local}</a>
                        <a>{tab_content[0].institution}</a>
                        <a>{tab_content[0].description}</a>
                    </div>
                )
            }
            else if(this.state.activeTab === 1){
                return(
                    <div>
                        <h3>Tecnologias</h3>
                        <a>{tab_content[1].local}</a>
                        <a>{tab_content[1].institution}</a>
                    </div>
                )
            }
            else if(this.state.activeTab === 2){
                return(
                    <div>
                        <h3>Dereguejohnson</h3>
                        <a>{tab_content[2].name}</a>
                    </div>
                )
            }
        }
    }

    render(){
        return(
        <div>
            <h1 className="page-title">About Page</h1>

            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Info</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Dereguejohnson</Tab>
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