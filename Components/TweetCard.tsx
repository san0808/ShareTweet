import { useState, useEffect, useCallback, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import Card from './UI/Card';

type Props = {
  text: string;
  name: string;
  username: string;
  date: string;
  imageurl: string;
  pic: string;
};

const TweetCard: React.FC<Props> = ({ text, name, username, date, imageurl ,pic}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [bgColor, setBgColor] = useState("gray-200");
  const [fileName, setFileName] = useState('my-image-name');

  
  const onButtonClick = useCallback(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }

    const userFileName = window.prompt('Enter the file name:', fileName);
    if (!userFileName) {
      return;
    }
    
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
  }, []);

  useEffect(() => {
    if (ref.current !== null) {
      onButtonClick();
    }
  }, [ref]);
  

  return (
    <div className='my-6 flex flex-col  items-center'>
      <div id='screenshot-target' ref={ref}>
      <Card style={{ backgroundColor: bgColor }}>
          <div className='p-4'>
            <div className='flex flex-wrap items-center '>
              <img id="tweet-content" crossOrigin='anonymous' className='h-10 w-10 rounded-full' src={imageurl} />
              <div className='pl-4'>{name}</div>
            </div>
            <p className=' py-2.5'>{text}</p>
            {pic && <img className="rounded-lg h-100 w-100" src={pic}/>}
            {/* <img className="rounded-lg h-100 w-100" src={pic}/> */}
          </div>
        </Card>
      </div>

      <div className='my-6'>
      <Card >
        <div>
        {/* <form>
          <input type="radio" id="gray" name="color" value="gray" onClick={() => setBgColor("gray-200")}/>
          <label htmlFor="gray">Gray</label>

          <input type="radio" id="red" name="color" value="red" onClick={() => setBgColor("red-500")}/>
          <label htmlFor="red">Red</label>
          
          
        </form> */}

        </div>
        <button className="px-4 py-2 font-light text-lg text-white bg-cyan-600 rounded-md hover:bg-cyan-700" onClick={onButtonClick}>
        Download
        </button>
      </Card>
      </div>
    </div>
  );
  

};

export default TweetCard;
