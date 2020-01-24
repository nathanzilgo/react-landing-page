import React, { Component } from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl';

class Contact extends Component{
    render(){
        const icons = {
            phone: 'url(https://img.icons8.com/carbon-copy/2x/phone.png) center / cover',
            email: 'url(http://cdn.onlinewebfonts.com/svg/img_489898.png) center / cover',

        }
        return(
        <div>
            <h1 className="page-title">Contact</h1>

            <List style={{width: '100vh', backgroundColor: 'white', margin: 'auto'}}>
                
                <ListItem threeLine>
                    <ListItemContent avatar="person" href="nathan.pedroza@ccc.ufcg.edu.br" subtitle="nathan.pedroza@ccc.ufcg.edu.br">Email</ListItemContent>
                    <ListItemAction>
                    <a href="nathan.pedroza@ccc.ufcg.edu.br"></a>
                    </ListItemAction>
                </ListItem>

                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="+55 83 991363063">Phone</ListItemContent>
                    <ListItemAction>
                    <a href="#"></a>
                    </ListItemAction>
                </ListItem>

                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="https://www.linkedin.com/in/nathan-fernandes98">LinkedIn</ListItemContent>
                    <ListItemAction>
                    <a href="https://www.linkedin.com/in/nathan-fernandes98"><Icon name="send" /></a>
                    </ListItemAction>
                </ListItem>

                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="https://web.facebook.com/nathanfpedroza">Facebook</ListItemContent>
                    <ListItemAction>
                        <a href="https://web.facebook.com/nathanfpedroza"><Icon name="send" /></a>
                    </ListItemAction>
                </ListItem>
            </List>


        </div>
        );
    }
};

export default Contact;