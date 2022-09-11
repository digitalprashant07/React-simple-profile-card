import {useState} from 'react';
import './card.css';
import image from '../../src/assets/profile.png';

const Card = () => {
  const [count, setCount] = useState("Prasant Maurya");
  const [about, setAbout] = useState("Web Developer");
  const [us, setUs] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,");



  return (

    <div className='card'>
        <div className='upper-container'>
            <div className='image-container'>
              <img src={image} alt=''></img>
            </div>
        </div>
        <div className='lower-container'>
            <h3> {count}</h3>
            <h4> {about}</h4>
            <p> {us}</p>
            <button>View profile</button>
        </div>
    </div>

    
  );
};

export default Card;
