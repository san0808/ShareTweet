import { useState, useEffect, useCallback, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import Card from './UI/Card';
import ColorSelector from './ColorSelector';

type Props = {
  text: string;
  name: string;
  username: string;
  date: string;
  imageurl: string;
  pic: string;
  onColorSelect: (color: string) => void;
};

const TweetCard: React.FC<Props> = ({ text, name, username, date, imageurl ,pic}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [selectedColor, setSelectedColor] = useState('rgb(241 245 249)');
  const [fileName, setFileName] = useState('my-image-name');

  const colors = ['rgb(241 245 249)', 'rgb(254 242 242)', 'rgb(255 247 237)', 'rgb(247 254 231)', 'rgb(240 253 244)' , 'rgb(240 253 250)' ,'rgb(240 249 255)' ,' '];


  
  const onButtonClick = useCallback(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }
  
    const userFileName = `tweet by ${username} ${date}`;
    setFileName(userFileName + '.png');
  
    toPng(element, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = userFileName + '.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username, date]);

  useEffect(() => {
    if (ref.current !== null) {
      onButtonClick();
    }
  }, [ref]);
  
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className='my-6 flex flex-col  items-center'>
      <div id='screenshot-target' ref={ref}>
      <Card style={{ backgroundColor: selectedColor }}>
          <div className='p-4'>
            <div className='flex flex-wrap items-center '>
              <img id="tweet-content" crossOrigin='anonymous' className='h-10 w-10 rounded-full' src={imageurl} />
              <div className='pl-4'>{name}</div>
            </div>
            <p className=' py-2.5' dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br>") }}></p>
            {pic && <img className="rounded-lg h-100 w-100" src={pic}/>}
            
          </div>
        </Card>
      </div>

      <div className='my-6'>
      
      <Card  >
      <div className="flex flex-row items-center">
        <ColorSelector currentColor={selectedColor} onColorSelect={setSelectedColor} />
        <button className="mx-4 px-4 py-2 font-light text-lg text-white bg-cyan-600 rounded-md hover:bg-cyan-700" onClick={onButtonClick}>
        Download
        </button>
      </div>
      </Card>
      </div>
    </div>
  );
  

};

export default TweetCard;
