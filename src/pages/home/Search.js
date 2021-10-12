import React from 'react'
import Header from '../../components/Header';
import { TargetsView } from './TargetsView';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { HomeStyles } from "../../assets/css/home-style";
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router';

export const Search = (props) => {

    const history = useHistory();
    const targetsAvailables = props.location.state.search.results;
    const style = HomeStyles();

    const handleBack = () => {
        history.goBack();
    }

    const handleGoFavorites = () => {
        history.push('/home/favorite', { active: true });
    }

    return (
        <div>
            <Header />
            <div className={style.wrapperIconsSearch}>
                <Tooltip title="Regresar" placement="left">
                    <IconButton onClick={handleBack} className="iconArrowBack" aria-label="add an alarm">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Ir a favoritos" placement="right">
                    <IconButton onClick={handleGoFavorites} className="iconStar" aria-label="add an alarm">
                        <StarIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <TargetsView type="search" targetsAvailables={targetsAvailables} />
        </div>
    )
}
