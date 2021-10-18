import React from 'react';
import { Route,Switch} from 'react-router-dom';
import HomePage from './homePage';
import Counter from './counter';
import Calculator from './calculator';
import Clock from './clock';
import Posts from './posts';

function App(){


    return(
        <div>
            <HomePage/>
            
            <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/calculator" component={Calculator} />
                <Route exact path="/clock" component={Clock} />
                <Route exact path="/posts" component={Posts} />
            </Switch>
            
        </div>
    )
}


export default App;
