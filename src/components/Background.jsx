import './Background.css';
import video from '../assets/aac.mp4';
//import background from '../assets/miner.png';


const Background = ({children}) => {
    return (
        <div className='background-image'>
            <video autoPlay muted loop playsInline src={video} className='video'/>
            <div className='background-dim' />
            <div className="child" align="center">
                {children}
            </div>
        </div>
    );
}

export default Background;

//<video id="videoHome" playsinline="" autoplay="" loop="" preload="auto" data-autoplay=""><source src="https://gcdn.pcpf.kakaogames.com/ui-contents/aac/gameContents/aac_gameContents_1732513090009_65.mp4" type="video/mp4"></video>