import  React from 'react'

import Wallpaper from './wallpaper'
import hulk from '../img/hulk-1.jpg'
import venom2 from '../img/venom-2.jpg'
import venom from '../img/venom-1.jpg'




function SampleWallpaper() {
    return(
        <div className="sample-wallpaper">
            <Wallpaper src={venom} alt="Wallpaper" />
            <Wallpaper src={venom2} alt="Wallpaper #2" />
            <Wallpaper src={hulk} alt="Wallpaper" />

          </div>
          
        
    );
    
}

export default SampleWallpaper;


/* commented 
<article className="wallpaper">
<img src={venom} alt="Wallpaper #1" className="wallpaper" />
</article>


<article className="wallpaper">
<img src={hulk} alt="Wallpaper #1" className="wallpaper" />
</article>


<article className="wallpaper">
  
<img src={venom2} alt="Wallpaper #1" className="wallpaper" />
</article>
*/
