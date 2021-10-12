import { makeStyles } from '@mui/styles';

export const WelcomeStyles = makeStyles(() => ({

  wrapperWelcome:{
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'black',
    zIndex: '1',
    '& .bienvenido':{
      marginTop: '214px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '24px',
      textAlign: 'center',
      color: '#FFFFFF'
    },
    '& .info':{
      color: 'white',
      padding: '0px 317px',
      fontSize: '12px',
      lineHeight: '31px'
    },
    '& .wrapperBtnContinuar':{
      '& div':{
        width: '97px',
        margin: 'auto',
        color: 'white',
        background: '#11555F',
        borderRadius: '60px',
        fontSize: '12px',
        padding: '7px 2px',
        cursor: 'pointer',
      }
    }
  },

  fondoPortada:{
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-100'
  },

  overlay:{
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-100',
    backgroundColor: 'rgb(0 0 0 / 3%)'
  },

  imgSuazo:{
    width: '134.81px',
    height: '50px',
    marginTop: '190px',
    zIndex: '10'
  },

  imgTitleRickAndMorty:{
    left: 'calc(50% - 671px / 2 + 22px)',
    width: '673.81px',
    height: '158px',
    zIndex: '10',
    position: 'absolute',
    marginTop: '269px'
  }
  
}));
