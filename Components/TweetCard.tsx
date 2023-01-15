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
};

const TweetCard: React.FC<Props> = ({ text, name, username, date, imageurl }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }

    toPng(element, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
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
        <Card>
          <div className='p-4'>
            <div className='flex flex-wrap items-center '>
              <img id="tweet-content" crossOrigin='anonymous' className='h-10 w-10 rounded-full' src={imageurl} />
              <div className='pl-4'>{name}</div>
            </div>
            <p className='break-normal py-2.5'>{text}</p>
          </div>
        </Card>
      </div>
      <button className="px-4 py-2 font-light text-lg text-white bg-indigo-500 rounded-md hover:bg-indigo-600" onClick={onButtonClick}>
        Download
      </button>
    </div>
  );
  

};

export default TweetCard;
