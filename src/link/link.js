import React from 'react'
import classes from './link.module.css'


 const linkTag = [
   {username : 'SThink02',  id :'twitter', link : '#'},
   {username : 'Sthink', id : 'slack', link :'#'},
   {username : 'Zuri Team', id : 'btn_zuri',  link :'https://training.zuri.team/'},
   { username : 'Zuri Books', id: 'books', link :'https://books.zuri.team/'},
   {username :  'Python Books', id :'book_python',  link :'https://training.zuri.team/python-for-beginners?ref_id=<Sthink>'},
   { username : 'Background Check For Coders', id : 'pitch', link :'https://background.zuri.team/'},
   {username : 'Design Books' , id : 'book_design', link : 'https://training.zuri.team/design-rules'}
]

const listLink = () => {

    return (
        <div className={classes.parent_div}>
            <p>
            {linkTag.map((lstKey, v) => {
                if (lstKey.id === 'slack') {
                 // eslint-disable-next-line
                    return
                }
                else if (lstKey.id === 'twitter') {
                    return (
                        <a href={lstKey.link} className={classes.link_class_two} key={v}><p className={classes.p_cls} id= {lstKey.id}>{lstKey.username}</p></a>
                    )
                }
                else {
                    return (
                        <a href={lstKey.link} className={classes.link_class} key={v}><button  id= {lstKey.id} className={classes.button_class}>{lstKey.username}</button></a>
                    )
                }
        })}
        </p>
        </div>
    )
}


export default listLink;