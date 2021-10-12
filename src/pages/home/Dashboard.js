import React, { useEffect, useState } from "react";
import { HomeStyles } from "../../assets/css/home-style";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useUI } from "../../app/context/ui";
import { TargetsView } from "./TargetsView";
import RickAndMortyService from "../../services/RickAndMortyService";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import favoriteInactive from "../../assets/images/favorite.svg";
import favoriteActive from "../../assets/images/favoriteActive.svg";
import StarIcon from '@mui/icons-material/Star';

const Dashboard = (props) => {

    console.log(props);
    // const page = 1;
    const [page, setPage] = useState(1);
    const style = HomeStyles();
    const { blockUI } = useUI();
    const [valueTab, setValueTab] = useState('targetsAll');
    const [targetsAvailables, setTargetsAvailables] = useState([]);
    const history = useHistory();
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
        (newValue==='favorites')
            ? history.push('/home/favorite', { active: true })
            : history.push(`/home`, { tab: newValue });
        
    };

    const rickAndMortyService = new RickAndMortyService();

    const getDataTabList = async () => {
        try {
            blockUI.current.open(true);
            let characters;
            if (typeof localStorage.getItem(valueTab) === 'string'){

                let tempExt = [];
                
                if(localStorage.getItem('favoritesGlobal')){

                    let { data: dataReceived } = await rickAndMortyService.characters(valueTab, page);
                    
                    JSON.parse(localStorage.getItem('favoritesGlobal')).map((eGlobal) => {
                        
                        dataReceived.results.map((eTab) => {
                            if (eGlobal.id === eTab.id) {
                                tempExt.push(eGlobal);
                            }
                        })

                    });

                    if (tempExt.length > 0) {
                        let global = [
                            ...dataReceived.results,
                            ...tempExt
                        ];
                        let globalMap = global.map(item => [item.id, item]);
                        let globalMapArr = new Map(globalMap);
                        let dataGlobalFavorites = [...globalMapArr.values()];
                        setTargetsAvailables(dataGlobalFavorites);
                        localStorage.setItem(valueTab, JSON.stringify(dataGlobalFavorites));
                    } else {

                        let { data: dataReceived } = await rickAndMortyService.characters(valueTab, page);
                        let resSeteado = dataReceived.results.map((e) => ({
                            ...e,
                            favorite: false
                        }));
                        setTargetsAvailables(resSeteado);

                    }

                }else{

                    let { data: dataReceived } = await rickAndMortyService.characters(valueTab, page);
                    let resSeteado = dataReceived.results.map((e) => ({
                        ...e,
                        favorite: false
                    }));
                    setTargetsAvailables(resSeteado);
                    localStorage.setItem(valueTab, JSON.stringify(resSeteado));
                    setTargetsAvailables(resSeteado);
                }

            }else{

                let { data: dataReceived } = await rickAndMortyService.characters(valueTab,page);
                localStorage.setItem(`${valueTab}NumberPages`, JSON.stringify(dataReceived.info.pages));

                if (localStorage.getItem('favoritesGlobal')) {

                    let tempExistFavorites = [];

                    JSON.parse(localStorage.getItem('favoritesGlobal')).map((eGlobal) => {
                        dataReceived.results.map((eTab) => {
                            if (eGlobal.id === eTab.id) {
                                tempExistFavorites.push(eGlobal);
                            }
                        })
                    });

                    if (tempExistFavorites.length > 0){
                        let global = [
                            ...dataReceived.results,
                            ...tempExistFavorites
                        ];
                        let globalMap = global.map(item => [item.id, item]);
                        let globalMapArr = new Map(globalMap);
                        let dataGlobalFavorites = [...globalMapArr.values()];
                        setTargetsAvailables(dataGlobalFavorites);
                        localStorage.setItem(valueTab, JSON.stringify(dataGlobalFavorites));
                    }else{

                        let resSeteado = dataReceived.results.map((e) => ({
                            ...e,
                            favorite: false
                        }));
                        setTargetsAvailables(resSeteado);
                        localStorage.setItem(valueTab, JSON.stringify(resSeteado));
                    }
                    
                } else {
                    let resSeteado = dataReceived.results.map((e) => ({
                        ...e,
                        favorite: false
                    }));
                    setTargetsAvailables(resSeteado);
                    localStorage.setItem(valueTab, JSON.stringify(resSeteado));
                }

            }
            blockUI.current.open(false);
        } catch (e) {
            blockUI.current.open(false);
        }
    }

    useEffect(() => {

        // other
        
        let valueTab;
        if(props.tab){
            valueTab = 'favorites';
            let setearFavorites = [];

            if (localStorage.getItem('favoritesGlobal')){
                JSON.parse(localStorage.getItem('favoritesGlobal')).map((eFav) => {
                    if (eFav.favorite) {
                        setearFavorites.push(eFav);
                    }
                });
                setTargetsAvailables(setearFavorites);
            }else{
                setTargetsAvailables([]);
            }
            
        }
        else if (props.history?.location.state){
            console.log('entro aqui tab other');
            setPage(parseInt(props.history.location.state.page));
            // valueTab = 
            setValueTab(props.history.location.state.tab);
            getDataTabList();
        }
        else{
            console.log('entro aqui tab default');
            setPage(1);
            // valueTab = 'targetsAll';
            setValueTab('targetsAll');
            getDataTabList();
        }        
        
    }, [valueTab, props, page]);

    const handleRedirectViewFavorites = () => {
        (history.location.pathname !== '/home/favorite') 
            ? history.push('/home/favorite', {active:true})
            : history.push('/home')
    }

    return (
        <div>

            <Header/>

            <Box sx={{ width: '100%', typography: 'body1' }}>

                <TabContext value={valueTab}>
                    <Box className={style.boxFilter} sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} centered>
                            <Tab className="wrapperItemTab" label="All" value="targetsAll" />
                            <Tab className="wrapperItemTab" label="Female" value="female" />
                            <Tab className="wrapperItemTab" label="Male" value="male" />
                            <Tab className="wrapperItemTab" label="Genderless" value="genderless" />
                            <Tab className="wrapperItemTab" label="Alive" value="alive" />
                            <Tab className="wrapperItemTab" label="Dead" value="dead" />
                            <Tab className="wrapperItemTab" label="Unknown" value="unknown" />
                            <Tab className="wrapperItemTab" icon={<StarIcon/>} value="favorites" />
                        </TabList>
                    </Box>

                    <div className={style.infoFavoritos}>
                        <span>Mostrar favoritos:</span>
                        <figure>
                            <img onClick={handleRedirectViewFavorites} src={(props.tab)? favoriteActive :favoriteInactive} alt='imgFavorite' />
                        </figure>
                    </div>

                    <TabPanel value="targetsAll">
                        <TargetsView type="targetsAll" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="female">
                        <TargetsView type="female" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="male">
                        <TargetsView type="male" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="genderless">
                        <TargetsView type="genderless" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="alive">
                        <TargetsView type="alive" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="dead">
                        <TargetsView type="dead" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="unknown">
                        <TargetsView type="unknown" targetsAvailables={targetsAvailables} page={page}/>
                    </TabPanel>
                    <TabPanel value="favorites">
                        <TargetsView type="favorites" targetsAvailables={targetsAvailables} page={page} />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
};

export default Dashboard;
