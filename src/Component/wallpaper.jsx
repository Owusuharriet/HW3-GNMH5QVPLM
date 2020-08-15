import React from 'react';

function Wallpaper(props) {
    console.log('wallpaper props',props);
    return(
        <article className="wallpaper">
            <img src={props.src} alt={props.alt} className="wallpaper" />
            
          </article>

    )
}
export default Wallpaper