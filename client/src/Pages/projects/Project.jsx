import BookNow from "../../Components/Booknow/BookNow";
import FirstVideo from "../../img/1.mp4";
import secondVideo from "../../img/2.mp4";
import ThirdVideo from "../../img/3.mp4";
import FourthVideo from "../../img/4.mp4";
import FifthVideo from "../../img/5.mp4";

const Project = () => {
  return (
    <>
      <div>
        <div class="content"></div>
        <div class="atv">
          <h1>Projects</h1>
        </div>
        <div class="content" id="bgDark">
          <div class="portContainer">
            <div class="p1">
              <video autoPlay muted loop id="myVideo">
                <source src={FirstVideo} type="video/mp4" />
              </video>
              <video autoPlay muted loop id="myVideo">
                <source src={secondVideo} type="video/mp4" />
              </video>
              <video autoPlay muted loop id="myVideo">
                <source src={FifthVideo} type="video/mp4" />
              </video>
              <video autoPlay muted loop id="myVideo">
                <source src={ThirdVideo} type="video/mp4" />
              </video>
              <video autoPlay muted loop id="myVideo">
                <source src={FourthVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <BookNow />
    </>
  );
};

export default Project;
