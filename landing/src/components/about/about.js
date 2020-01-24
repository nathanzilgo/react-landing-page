import React, { Component } from 'react';
import { Spinner } from 'react-mdl';
import Info from './info';

class About extends Component{

    
    constructor(props) {
    
        super(props);
        this.state = { activeTab: 0 };
           
    }  

    render(){
        let flush;
        if(this.state.activeTab === 0){
            flush = <Info/>;
        }else{
            flush = <Spinner/>;
        }

        return(
        <div>
            <h1 className="page-title">About</h1>

            <div className="tabs">
                <section>
                    
                    <div className="content">{flush}</div>
                </section>
            </div>    
   
        </div>
        );
    }
};

export default About;