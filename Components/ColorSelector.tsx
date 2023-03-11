import { useState } from 'react';
import Card from './UI/Card';
// import styles from '../styles/ColorSelector.css '
type Props = {
  currentColor: string;
  onColorSelect: (color: string) => void;
};

const ColorSelector: React.FC<Props> = ({ currentColor, onColorSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = ['rgb(241 245 249)', 'rgb(254 242 242)', 'rgb(255 247 237)', 'rgb(247 254 231)', 'rgb(240 253 244)' , 'rgb(240 253 250)' ,'rgb(240 249 255)' ,' '];


  return (
    
    <div className="relative flex items-center justify-center h-10 w-10 hover:bg-green-50 " 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className="rounded-full h-6 w-6 cursor-pointer before:box-border before:border-solid after:box-border after:border-solid "
        style={{ backgroundColor: currentColor }}
        
      />
      <div className="absolute top-10 left-0 z-10">
        <div
          className={`mt-2 p-1 bg-white rounded-lg shadow-md   ${isHovered ? 'block' : 'hidden'}`}
          style={{ minWidth: '2rem' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {colors.map((color) => (
            <div
              key={color}
              className={`rounded-full h-6 w-6 cursor-pointer ${currentColor === color ? 'shadow-outline' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onColorSelect(color)}
            />
          ))}
        </div>
        <div className={`${isHovered ? 'block' : 'hidden'} absolute top-2 left-0 bottom-4 bg-white rounded-full h-4 w-4 flex-wrap`} style={{ zIndex: -1 }}></div>
      </div>
    </div>
  );
};

export default ColorSelector;


const colors = ['rgb(241 245 249)', 'rgb(254 242 242)', 'rgb(255 247 237)', 'rgb(247 254 231)', 'rgb(240 253 244)' , 'rgb(240 253 250)' ,'rgb(240 249 255)' ,' '];

