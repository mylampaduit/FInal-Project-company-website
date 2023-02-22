// import "./Accomplish.css";

import { useEffect, useState } from "react";

const Accomplish = () => {
  const [count, setcount] = useState(0);
  // const [pooolcount, setpoolcount] = useState(0);
  // const [grasscount, setgrasscount] = useState(0);

  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setcount(count);
      }, 100);
    }
  };
  // const counterPool = (minimum, maximum) => {
  //   for (let pooolcount = minimum; pooolcount <= maximum; pooolcount++) {
  //     setTimeout(() => {
  //       setpoolcount(pooolcount);
  //     }, 100);
  //   }
  // };
  // const counterGrass = (minimum, maximum) => {
  //   for (let grasscount = minimum; grasscount <= maximum; grasscount++) {
  //     setTimeout(() => {
  //       setgrasscount(grasscount);
  //     }, 100);
  //   }
  // };
  useEffect(() => {
    counter(0, 628989);
  }, []);

  return (
    <>
      <div class="content" id="bgDark">
        <h1 id="numberingHead">
          We've Accomplished A Lot, But We Still Have A Long Way To Go....
        </h1>
        <div class="numbering">
          <div class="first">
            <h1>
              <span class="count">{count}</span>
            </h1>
            <p>Sqft.Pavers Installed</p>
          </div>
          <div class="first">
            <h1>
              <span class="count"> {count}</span>
            </h1>
            <p>Sqft. Artificial Grass</p>
          </div>
          <div class="first">
            <h1>
              <span class="count">{count}</span>
            </h1>
            <p>Sqft. Pools Remodeled</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accomplish;
