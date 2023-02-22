import React from "react";
import BookNow from "../../Components/Booknow/BookNow"

const Virtual = () => {
  return (
    <div>
      <div class="contentS" id="bgDark">
        <iframe
          width="100%"
          height="640"
          // style={{width: "100%", height: "640px", border:" none", max-width:" 100"}}
          allow="xr-spatial-tracking; vr; gyroscope; accelerometer; fullscreen; autoplay; xr"
          scrolling="no"
          allowfullscreen="true"
          frameborder="0"
          src="https://webobook.com/public/63c30ebce861d82c634e4472,en?ap=true&si=true&sm=false&sp=true&sfr=true&sl=false&sop=false&"
          allowvr="yes"
        ></iframe>
        {/* <iframe
          src="https://webobook.com/public/63c30ebce861d82c634e4472,en?ap=true&si=true&sm=false&sp=true&sfr=true&sl=false&sop=false&"

          frameborder="0"
        ></iframe> */}
      </div>
      <BookNow />
    </div>
  );
};

export default Virtual;
