import React from 'react';
import Dashboard from './Dashboard';
import { HomeStyles } from "../../assets/css/home-style";
import { useHistory } from 'react-router';

export const Favorite = (props) => {

    const style = HomeStyles();
    const history = useHistory();
    console.log('props', props);
    // console.log(history);
    // const handleExists = (props.history.location.state.active) ? props.history.location.state.active : 'none';

    return (
        <div>
            <Dashboard tab="favorites"/>
            
        </div>
    )
}
