import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Like = ({status,onLike,album}) => {

    return (       
    <FontAwesomeIcon 
    className='h4' 
    icon={faHeart} 
    style={{cursor:"pointer", color: (status === true) ? "#0275d8" : "grey"}}
    onClick={() => onLike(album)}

    />
            
  );
            
            
    }
             
            
export default Like;