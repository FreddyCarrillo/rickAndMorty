import { makeStyles } from '@mui/styles';

export const HomeStyles = makeStyles(() => ({
    imgTitleRickAndMorty: {
        left: 'calc(50% - 420px / 2 + 22px)',
        width: '347px',
        height: '122px',
        zIndex: '10',
        position: 'absolute',
        marginTop: '130px'
    },

    formSearch: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        marginTop: '293px !important',
        backgroundColor: '#081F32 !important',
        border: 'solid 1px white',
        '& button':{
            color: 'white'
        },
        '& div':{
            color: 'white'
        }
    },

    boxFilter:{
        backgroundColor: '#F2F2F2',
        '& .wrapperItemTab': {
            width: '185px',
            padding: '20px',
            fontSize: '12px',
            color: 'black'
        },
        '& .MuiTabs-indicator':{
            backgroundColor: '#34C759 !important'
        }
    },

    wrapperTargets:{
        margin: '20px 129px',
        '& .infoFavoritos':{
            '& span':{
                float: 'left',
                fontSize: '14px',
                fontFamily: 'Montserrat',
                letterSpacing: '1.3px',
                fontWeight: '600',
            },
            '& figure':{
                float: 'left',
                margin: '-5px 0px 0px 18px',
                padding: '0px',
            }
        }
    },

    wrapperTarget:{
        borderRadius: '6px',
        height: '182px',
        border: '1px solid #E0E0E0',
        '& .blockImageLeft':{
            '& .imgPadre':{
                position: 'absolute', 
                width: '12.6%', 
                borderRadius: '3px 0px 0px 4px', 
                zIndex: '-1'
            },
            '& .imgHijo':{
                position: 'relative', 
                zIndex: '1', 
                margin: '142px 0px 0px 143px', 
                cursor: 'pointer'
            }
        },
        '& .wrapperDataItemTarget':{
            paddingLeft: '20px',
            paddingTop: '2px',
            '& .circleIconAlive':{
                color: 'rgb(39, 174, 96)',
                width: '12px',
                paddingTop: '13px',
                marginRight: '10px'
            },
            '& .circleIconDead': {
                color: '#EB5757',
                width: '12px',
                paddingTop: '13px',
                marginRight: '10px'
            },
            '& .circleIconUnknown': {
                color: '#8a7f7f',
                width: '12px',
                paddingTop: '13px',
                marginRight: '10px'
            },
            '& .info1':{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingRight: '8px',
                marginBottom: '0px'
            },
            '& span':{
                fontSize: '15px',
                fontFamily: 'Montserrat',
                fontWeight: '500'
            },
            '& .name':{
                fontSize: '16px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontFamily: 'Montserrat',
                paddingRight: '13px'
            },
            '& .infoStory':{
                fontFamily: 'Montserrat',
                fontSize: '12px',
                letterSpacing: '0.5px',
                fontWeight: '500',
                marginTop: '3px',
            },
            '& .dataInfoStory':{
                fontSize: '12px',
                fontWeight: '600'
            }
        }
    },

    infoFavoritos:{
        marginLeft: '152px',
        marginTop: '52px',
        '& span': {
            float: 'left',
            fontSize: '14px',
            fontFamily: 'Montserrat',
            letterSpacing: '1.3px',
            fontWeight: '600',
        },
        '& figure': {
            float: 'left',
            margin: '-5px 0px 0px 18px',
            padding: '0px',
        }
    },

    wrapperIconsSearch:{
        textAlign: 'center',
        paddingTop: '17px',
        '& .iconArrowBack':{
            '& svg':{
                fontSize: '40px',
                color: '#e4400f'
            }
        },
        '& .iconStar': {
            '& svg': {
                fontSize: '40px',
                color: '#dcbf29'
            }
        }
    },

    wrapperEmpty:{
        marginTop: '60px',
        '& .p1':{
            fontSize: '28px'
        },
        '& .p2':{
            fontSize: '16px',
            fontWeight: '300',
            marginBottom: '31px'
        },
        '& button':{
            borderRadius: '19px',
            backgroundColor: '#11555F',
            padding: '5px 19px',
            fontSize: '15px',
            textTransform: 'none',
            fontWeight: '700',
            '&:hover':{
                backgroundColor: '#f8500b !important'
            }
        }
    },

    wrapperBlock2Modal:{
        position: 'absolute',
        width: '46%',
        marginTop: '200px',
        height: '205px',
        textAlign: 'center',
        paddingTop: '79px',
        backgroundColor: '#F2F2F2',
        zIndex: '1',
        '& .infoLigth':{
            fontSize: '12px',
            letterSpacing: '0.7px'
        },
        '& .infoStrong':{
            fontWeight: '900',
            letterSpacing: '0.7px'
        }
    },

    wrapperBlock3Modal:{
        width: '46%',
        height: '184px',
        zIndex: '1',
        position: 'absolute',
        marginTop: '405px',
        textAlign: 'center',
        paddingTop: '15px',
        backgroundColor: 'white',
        borderBottom: 'solid 1px #868383',
        '& .info':{
            textAlign: 'left',
            paddingLeft: '30px',
            fontSize: '18px',
            letterSpacing: '0.7px',
            fontWeight: '900',
        }
        
    },

    infoBlock3: {
        border: 'solid 1.7px #b0aeae',
        borderRadius: '7px',
        height:'65px',
        paddingTop: '11px',
        '& span': {
            float: 'left',
            fontSize: '11px',
            fontFamily: 'Montserrat',
            letterSpacing: '1.3px',
            color: 'gray'
        },
        '& figure': {
            float: 'left',
            margin: '-5px 0px 0px 18px',
            padding: '0px',
        },
        '& div':{
            fontSize: '14px',
            display: 'block',
            marginTop: '24px',
            textAlign: 'left',
            paddingLeft: '21px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            paddingRight: '10px',
            textOverflow: 'ellipsis'
        }
    },

    wrapperBlock4Modal:{
        width: '46%',
        height: 'auto',
        zIndex: '1',
        position: 'absolute',
        marginTop: '600px',
        textAlign: 'center',
        paddingTop: '15px',
        backgroundColor: 'white',
        borderBottom: 'solid 1px #868383',
        paddingBottom: '56px',
        '& .info': {
            textAlign: 'left',
            paddingLeft: '30px',
            fontSize: '18px',
            letterSpacing: '0.7px',
            fontWeight: '900',
        }
    },

    infoBlock4: {
        border: 'solid 1.7px #b0aeae',
        height: '74px',
        paddingTop: '11px',
        borderRadius: '7px',
        paddingLeft: '16px',
        '& span': {
            fontSize: '12px',
            color: 'gray',
            display: 'block',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            paddingRight: '10px',
            textOverflow: 'ellipsis'
        },
        '& div': {
            fontSize: '14px',
            display: 'block',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            paddingRight: '10px',
            textOverflow: 'ellipsis'
        }
    },

    modalDetailWrapper:{
        overflow: 'auto !important'
    },

    wrapperPaginator:{
        '& nav':{
            margin: '40px auto'
        }
    }

}));
