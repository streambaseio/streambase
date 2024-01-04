/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { convertTextToArray } from "./chars";

interface TextProps {
  text: string;
  rgb?: boolean;
  className?: string;
}
interface VirtualLedProps {
  text?: string;
  rgb?: boolean;
  rotate?: string;
}
export const VirtualLed = (props: VirtualLedProps) => {
  const [digit, setDigit] = useState({
    chars: null as any,
    numberOfLed: 0
  });
  const [mat, setMat] = useState(new Array());
  const [rotationL, setRotationL] = useState(0 as any)
  const [rotationR, setRotationR] = useState(0 as any)

  useEffect(() => {
    setDigit(convertTextToArray(props.text?.toLowerCase() || ''));
  }, [])
  useEffect(() => {
    if (digit.chars) {
      if (mat.length == 0) {
        led(true);
      } else {
        write();
        if (props.rotate) {
          rotate(props.rotate);
        }
      }

    }
  }, [mat, digit]);

  const write = () => {
    for (let i = 0; i < digit.chars.length; i++) {
      for (let j = 0; j < digit.chars[i].length; j++) {
        mat[i][digit.chars[i][j]].className = "led";
        if (props.rgb) {
          mat[i][digit.chars[i][j]].classList.add('rgb');
        }
      }
    }
  }
  const led = (clear: boolean) => {
    const matrix = document.querySelector('.matrix') as HTMLElement;
    if (clear) {
      matrix.innerHTML = '';
    }

    const _mat = []
    for (let i = 0; i < 5; i++) {
      _mat[i] = newLine(matrix);
    }

    setMat(_mat);
  }

  const newLine = (matrix: HTMLElement) => {
    const ledWidth = 20; // specify the width of a single LED
    const ledMargin = 5; // specify the margin of a single LED
    let numberOfLeds = Math.floor((matrix.clientWidth + ledMargin) / (ledWidth + 2 * ledMargin));
    if (numberOfLeds * (ledWidth + 2 * ledMargin) > matrix.clientWidth) {
      numberOfLeds--;
    }
    if (digit.numberOfLed && digit.numberOfLed > numberOfLeds) {
      numberOfLeds = digit.numberOfLed;
    }
    var line = new Array();
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    for (let i = 0; i < numberOfLeds; i++) {
      const led = document.createElement('div');

      led.classList.add('led');
      led.classList.add('off');
      led.style.width = `${ledWidth}px`; // set the width of the LED

      line[i] = led;
      lineDiv.appendChild(led);
      matrix.appendChild(lineDiv);
    }
    return line;
  }

  const clear = () => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        mat[i][j].classList.add('off');
      }
    }
  }

  const rotate = (direction: string) => {
    if (direction == "left" && rotationL == 0) {
      setRotationL(setInterval(function () { moveLeft() }, 250));
      clearInterval(rotationR);
      setRotationR(0);
    }
    else if (direction == "right" && rotationR == 0) {
      setRotationR(setInterval(function () { moveRight() }, 250));
      clearInterval(rotationL);
      setRotationL(0);
    }
  }

  const moveLeft = () => {
    for (var i = 0; i < mat.length; i++) {
      var first = mat[i][0].className;
      for (var j = 0; j < mat[i].length - 1; j++)
        mat[i][j].className = mat[i][j + 1].className;
      mat[i][mat[i].length - 1].className = first;
    }
  }
  const moveRight = () => {
    for (var i = 0; i < mat.length; i++) {
      var last = mat[i][mat[i].length - 1].className;
      for (var j = mat[i].length - 1; j > 0; j--)
        mat[i][j].className = mat[i][j - 1].className;
      mat[i][0].className = last;
    }
  }

  const stop = () => {
    clearInterval(rotationL);
    clearInterval(rotationR);
    setRotationR(0);
    setRotationL(0);
  }

  return (
    <div className='flex flex-col items-center justify-center base w-full'>
      <div className='matrix'> </div>
    </div>
  )
}

