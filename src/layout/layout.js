import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ListLink from '../link/link'
import classes from './layout.module.css'
import ImageManager from '../image/image'
import Footer from '../footer/footer';

const layout = () => {
    return (
        <div  className={classes.layout_class}>
            <p className={classes.icon}>
                <FontAwesomeIcon className={classes.icon_second} icon='fa-solid fa-ellipsis' />
                <FontAwesomeIcon className={classes.icon_first}  icon='fa-solid fa-arrow-up-right-from-square' /></p>
                <ImageManager />
                <ListLink />
            <p style={{
                display : 'flex',
                justifyContent : 'space-between',
                margin : 'auto',
                height : '80px',
                width: '100px',
                paddingTop : '1rem',
                paddingBottom: '6rem'
            }} ><FontAwesomeIcon style={{
                height : '36px',
                width: '36px',
                color : 'red'
            }} icon='fa-brands fa-slack' />
            <FontAwesomeIcon style={{
                height : '36px',
                width: '36px',
            }} icon='fa-brands fa-github' /></p>
            <hr />
            <Footer />
        </div>
    )
}

export default layout;