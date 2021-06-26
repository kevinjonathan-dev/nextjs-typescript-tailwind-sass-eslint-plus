import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './styles.module.scss';

const Intro: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const isMobile = useMediaQuery({
    query: '(max-width:640px)',
  });

  return (
    <div className={`${styles.main} `}>
      <h1 className="text-center">
        Henlo, this is your clean project template with:
      </h1>
      <ul>
        <li>Next JS</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>Sass</li>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>Some other cool additions</li>
      </ul>

      <h1>Happy Coding!</h1>
      <p>{`You are viewing this from ${isMobile ? 'Mobile' : 'Desktop'}`}</p>
      <p>
        Follow me on <a href="https://github.com/kevinjonathan911">Github</a>
      </p>
    </div>
  );
};

export default Intro;
