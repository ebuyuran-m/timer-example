import {useState, useEffect} from 'react';

type TimerProps = {
  initial: number;
};

export default function Timer(props: TimerProps) {
  const [timer, setTimer] = useState(props.initial);
  let interval: NodeJS.Timer;

  useEffect(() => {
    initiateInterval();
    return () => {
      clear();
    }
  });

  function initiateInterval() {
    interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clear();
      }
    }, 1000);
  }

  function clear() {
    clearInterval(interval);
  }

  return (
    <div className={'timer'}>
      <div className={'timer-value'}>{timer}</div>
      <button className={'stop-button'} onClick={clear}>STOP COUNTER</button>
    </div>
  );
}
