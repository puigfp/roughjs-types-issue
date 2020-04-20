import React, { useEffect, useRef, RefObject } from 'react';
import logo from './logo.svg';
import './App.css';

import rough from "roughjs/bundled/rough.esm.js";

export function RoughSquare({ filled = false }: { filled?: boolean }) {
  let ref: RefObject<SVGSVGElement> = useRef(null);

  useEffect(() => {
    let svg = ref.current;
    if (svg === null) {
      return;
    }
    let rc = rough.svg(svg);
    svg.appendChild(
      rc.rectangle(10, 10, 80, 80, {
        fill: filled ? "black" : undefined,
        fillWeight: 0.3,
        strokeWidth: 0.5,
        roughness: 1,
      })
    );

    return () => {
      svg!.innerHTML = "";
    };
  }, [filled]);

  return <svg ref={ref} style={{ height: "100px", width: "100px" }} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RoughSquare/>
      </header>
    </div>
  );
}

export default App;
