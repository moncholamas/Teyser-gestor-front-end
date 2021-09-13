import React from 'react';
import { Divider,  Link,  ListItemIcon,  ListItemText,  makeStyles,  MenuItem,  MenuList } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import { useAuthState } from '../../context';
import { isExpired , decodeToken } from 'react-jwt'
import enlaces from '../../config/links'


export function Menu(){
    const userToken = useAuthState().token;
    const expired = isExpired(userToken);
    const user = decodeToken(userToken);

    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.background.paper,
        },
      }));

    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
      };

    //filtro un menu segun 
                    //// offline, operario o admin

    const menuParcial = enlaces.filter(enlace=>(
        expired?(enlace.logoff)
        :
        (
            user.rol==='admin'? (enlace.menuAdmin)
            :(
                enlace.menuOperario 
            )
        )
    ));

    return (
        <>
            <Link component={RouterLink} to="/" variant="h5">
                    Teyser Gestor
            </Link>
            <Divider></Divider>
            <MenuList className={classes.root}> 
                {
                    menuParcial.map((enlace, index)=> (
                        <MenuItem 
                            component={RouterLink} 
                            to={enlace.link} 
                            key={enlace.link}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            selected={index === selectedIndex}
                        >
                                    <ListItemIcon>
                                        < enlace.icon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        { enlace.nombre }
                                    </ListItemText>
                        </MenuItem>
                    ))
                }
                <Divider></Divider>

            </MenuList>          
     </>
        )};