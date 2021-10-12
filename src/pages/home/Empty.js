import React from 'react'
import Header from '../../components/Header'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router';
import { HomeStyles } from '../../assets/css/home-style';
import Button from '@mui/material/Button';

export const Empty = () => {

    const history = useHistory();
    const style = HomeStyles();

    const handleBack = () => {
        history.goBack();
    }

    const handleGoFavorites = () => {
        history.push('/home/favorite', { active: true });
    }
    
    const handleHome = () => {
        history.push('/home');
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
                <div className={`${style.wrapperEmpty} animate__animated animate__bounceInUp`}>
                    <p className="p1">Uh-oh!</p>
                    <p className="p2">¡Pareces perdido en tu viaje!</p>
                    <Button onClick={handleHome} variant="contained" size="small">
                        Eliminar filtros
                    </Button>
                </div>
            </div>
        </div>
    )
}
