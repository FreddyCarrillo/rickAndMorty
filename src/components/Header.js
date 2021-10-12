import React from "react";
import { HomeStyles } from "../assets/css/home-style";
import logoHome from "../assets/images/logoHome.svg";
import logoTitleRickAndMorty from "../assets/images/titleRickAndMorty.png";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RickAndMortyService from "../services/RickAndMortyService";
import { useUI } from "../app/context/ui";
import { useHistory } from "react-router";

const Header = () => {

  const style = HomeStyles();
  const { blockUI } = useUI();
  const history = useHistory();
  const rickAndMortyService = new RickAndMortyService();

  const handleSearch = async (e) => {
    try {
      blockUI.current.open(true);
      e.preventDefault()
      let { data: search } = await rickAndMortyService.search(e.target[1].value);
      blockUI.current.open(false);
      history.push('/home/search', { search: search });
    } catch (error) {
      blockUI.current.open(false);
      history.push('/home/empty');
    }
  }

  return (
    <div>
      <img src={logoHome} alt='portal' width="100%" style={{ position: 'relative' }} className="animate__animated animate__fadeInDown" />
      <img src={logoTitleRickAndMorty} className={style.imgTitleRickAndMorty} alt='imgTitleRickAndMorty' />

      <Paper
        className={style.formSearch}
        onSubmit={handleSearch}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', m: '20px auto', alignItems: 'center', width: 500 }}

      >
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar personaje ..."
        />
      </Paper>
    </div>
  )
};

export default Header;
