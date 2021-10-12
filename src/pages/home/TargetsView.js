import React, { useEffect, useState } from 'react';
import { HomeStyles } from "../../assets/css/home-style";
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle'; 
import Tooltip from '@mui/material/Tooltip';
import favoriteInactive from "../../assets/images/favorite.svg";
import favoriteActive from "../../assets/images/favoriteActive.svg";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import logoModal from "../../assets/images/bgModal.svg";
import Avatar from '@mui/material/Avatar';
import InfoIcon from '@mui/icons-material/Info';
import RickAndMortyService from "../../services/RickAndMortyService";
import { useUI } from "../../app/context/ui";
import Pagination from '@mui/material/Pagination';
import { useHistory } from 'react-router';

export const TargetsView = (props) => {


    const { blockUI } = useUI();

    const style = HomeStyles();

    const [targets, setTargets] = useState([]);

    const history = useHistory();

    const rickAndMortyService = new RickAndMortyService();

    const [viewPage, setViewPage] = useState(parseInt(history.location.state?.page) || 1);
    
    const numberPages = parseInt(localStorage.getItem(`${props.type}NumberPages`));

    const handleFavorite = (item) => {

        let keysLS = Object.keys(localStorage);
        let global = [];
        for (let i = 0; i < keysLS.length; i++) {
            if (keysLS[i] !== 'genderlessNumberPages' &&
                keysLS[i] !== 'maleNumberPages'    &&
                keysLS[i] !== 'femaleNumberPages'  &&
                keysLS[i] !== 'aliveNumberPages'   &&
                keysLS[i] !== 'deadNumberPages'    &&
                keysLS[i] !== 'unknownNumberPages' &&
                keysLS[i] !== 'targetsAllNumberPages'){
                    global = [
                        ...global,
                        ...JSON.parse(localStorage.getItem(keysLS[i]))
                    ];
            }
        }

        let globalMap = global.map(item => [item.id, item]);
        let globalMapArr = new Map(globalMap);
        let dataGlobalFavorites = [...globalMapArr.values()];

        // setar al global 

        let favoritesGlobalUpdated = dataGlobalFavorites.map((e) => {
            if (e.id === item.id) {
                return {
                    ...e,
                    favorite: !item.favorite
                }
            } else {
                return {
                    ...e
                }
            }
        });

        localStorage.setItem('favoritesGlobal', JSON.stringify(favoritesGlobalUpdated));

        // setear al individual

        let favoriteUpdated = targets.map((e)=>{
            if(e.id===item.id){
                return {
                    ...e,
                    favorite: !item.favorite
                }
            }else{
                return {
                    ...e
                }
            }
        });

        setTargets(favoriteUpdated);
        localStorage.setItem(props.type, JSON.stringify(favoriteUpdated));
    }

    const [infoModalDetailBasic, setInfoModalDetailBasic] = useState({});
    const [infoEpisodesModal, setInfoEpisodesModal] = useState([]);

    const handleViewDetails = (item) => {

        try {

            setInfoModalDetailBasic({
                image: item.image,
                status: item.status,
                name: item.name,
                specie: item.species,
                information: {
                    gender: item.gender,
                    origin: item.origin.name,
                    type: item.type || ''
                }
            });

            setOpen(true);
            
            let container = [];
            item.episode.map(async(e)=>{
                let resp = await getEpisodes(e);
                container = [...container, {
                    nameEpisode: resp.name,
                    capEpisode: resp.episode,
                    dateEpisode: resp.air_date
                }];
                setInfoEpisodesModal(container);
            });

        } catch (error) {
            
        }
        
    }

    const getEpisodes = async(element)=>{
        try {
            blockUI.current.open(true);
            const {data: datos} = await rickAndMortyService.episodes(element);
            blockUI.current.open(false);
            return datos;
        } catch (error) {
            blockUI.current.open(false);
        }
    }

    const handleChangePagination = (e) => {
        history.push(`${history.location.pathname}?page=${e.target.textContent}`, { tab: props.type, page: e.target.textContent});
    }

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTargets(props.targetsAvailables);
    }, [props.targetsAvailables, props.page]);

    return (
        <div className={style.wrapperTargets}>

            <Grid container spacing={3}>
                {
                    targets?.map((e, i)=>(
                        <Grid item xs={4} key={`itemTarget_${i}`}>
                            <Tooltip title={e.name} placement="top">
                                <Grid container className={style.wrapperTarget}>
                                    <Grid item xs={6} className="blockImageLeft">
                                        
                                            <div>
                                                <img src={e.image} alt='portal' className="imgPadre animate__animated animate__fadeInDown" />
                                                <img onClick={() => { handleFavorite(e)}} src={(e.favorite) ? favoriteActive : favoriteInactive} alt='imgFavorite' className="imgHijo animate__animated animate__fadeInDown" />
                                            </div>
                                        
                                    </Grid>
                                    <Grid item xs={6} className="wrapperDataItemTarget" onClick={(event) => { handleViewDetails(e) }}>
                                        <div className="info1">
                                            <span>
                                                {
                                                    (e.status === 'Alive') && <CircleIcon className="circleIconAlive" />
                                                }
                                                {
                                                    (e.status === 'Dead') && <CircleIcon className="circleIconDead" />
                                                }
                                                {
                                                    (e.status === 'unknown') && <CircleIcon className="circleIconUnknown" />
                                                }
                                                {e.status} - {e.species}
                                            </span>
                                            
                                        </div>
                                        <div className="name">{e.name}</div>
                                        <div className="infoStory">Last known location:</div>
                                        <div className="dataInfoStory">{e.location.name}</div>
                                        <div className="infoStory">First seen in::</div>
                                        <div className="dataInfoStory">{e.origin.name}</div>
                                    </Grid>
                                </Grid>
                            </Tooltip>
                        </Grid>
                    ))
                }
            </Grid>
            
            {
                (history.location.pathname !== '/home/favorite')
                    &&
                        <Grid container className={style.wrapperPaginator}>
                            <Pagination onChange={handleChangePagination} count={numberPages} defaultPage={viewPage} color="secondary" size="large" />
                        </Grid>
            }

            <Modal
                className={style.modalDetailWrapper}
                open={open}
                onClose={()=>{setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        borderRadius: '22px 22px 0px 22px',
                        margin: '312px auto 0px auto',
                        width: 662,
                        height: 900,
                        bgcolor: 'white',
                    }}>
                    <img src={logoModal} alt='portal' width="46%" style={{ position: 'absolute', borderRadius: '22px 22px 0px 0px' }} className="animate__animated animate__fadeInDown" />
                    <div style={{
                            position: 'absolute',
                            marginTop: '116px',
                            marginLeft: '257px',
                            zIndex: '2'
                            }}>
                        <Avatar
                            className="animate__animated animate__fadeInDown"
                            alt="Remy Sharp"
                            src={infoModalDetailBasic?.image || ''}
                            sx={{
                                width: 156,
                                height: 156
                            }}
                        />
                    </div>

                    {/* INFO GENERAL */}

                    <div className={style.wrapperBlock2Modal}>
                        <p className="infoLigth">{(infoModalDetailBasic.status) ? infoModalDetailBasic?.status.toUpperCase() : ''}</p>
                        <p className="infoStrong">{infoModalDetailBasic.name}</p>
                        <p className="infoLigth">{(infoModalDetailBasic.specie) ? infoModalDetailBasic?.specie.toUpperCase() : ''}</p>
                    </div>

                    {/* UBICACION */}

                    <div className={style.wrapperBlock3Modal}>
                        <p className="info">Información</p>
                        <Grid container>
                            <Grid item sm={4} style={{ padding: '25px'}}>
                                <div className={style.infoBlock3}>
                                    <figure>
                                        <InfoIcon style={{width:'15px', color:'gray'}}/>
                                    </figure>
                                    <span>Gender</span>
                                    <div>{(infoModalDetailBasic.information) ? infoModalDetailBasic.information.gender : ''}</div>
                                </div>
                            </Grid>
                            <Grid item sm={4} style={{ padding: '25px' }}>
                                <div className={style.infoBlock3}>
                                    <figure>
                                        <InfoIcon style={{ width: '15px', color: 'gray' }} />
                                    </figure>
                                    <span>Origin</span>
                                    <div>{(infoModalDetailBasic.information) ? infoModalDetailBasic.information.origin : ''}</div>
                                </div>
                            </Grid>
                            <Grid item sm={4} style={{ padding: '25px' }}>
                                <div className={style.infoBlock3}>
                                    <figure>
                                        <InfoIcon style={{ width: '15px', color: 'gray' }} />
                                    </figure>
                                    <span>Type</span>
                                    <div>{(infoModalDetailBasic.information) ? infoModalDetailBasic?.information.type : 'Unknown'}</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    {/* EPISODIOS */}

                    <div className={style.wrapperBlock4Modal}>
                        <p className="info">Episodios</p>
                        <Grid container>
                            {
                                infoEpisodesModal.map((e)=>(
                                    <Grid key={`modal${e.i}`} item sm={3} style={{ padding: '0px 10px', marginBottom: '18px' }}>
                                        <div className={style.infoBlock4}>
                                            <span>{e.nameEpisode}</span>
                                            <div>{e.capEpisode}</div>
                                            <span>{e.dateEpisode}</span>
                                        </div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>

                </Box>
            </Modal>

        </div>
    )
}
