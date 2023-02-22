import BookNow from "../../Components/Booknow/BookNow";
import work from "../../img/work.jpg";

const About = () => {
  return (
    <div>
      <div class="atv">
        <h1 class="marginTop">SO-CAL EXPERTS</h1>
        <p>
          Way To Go Are Leading Contractors In Southern California For Over 15
          Years
        </p>
        <p>
          When it comes to your home, we know that you want nothing but the
          best. Each homeowner wants to remodel their house as per their style
          and the modern trends; this is where we come in!{" "}
        </p>
        <img src={work} alt="" />
      </div>
      <div class="atv ">
        <h1>We Make Beautiful Yards & Happy Clients</h1>
        <p>
          We are professional exterior remodelers, and we renovate/remodel the
          outdoor living spaces of your house, such as the front yard, back
          yard, and driveway, etc. Our project managers, builders, and designers
          will help you out in finding serenity in your own beautiful backyards!
          In short, we are your go-to option for outdoor remodeling services!
        </p>

        <h1>Way To Go's Way To Work</h1>
        <p>
          With our customers satisfaction at the top of our minds, we follow
          these guidelines to ensure the best experience for every home we step
          into.
        </p>

        <h1>15 Years Of Experience In Landscape Transformation</h1>
        <p>
          Our experience in the field has trained us enough, and our team would
          love to share it with you through our premium construction and
          remodeling services. Furthermore, our design team seamlessly blends
          the craftsmanship and design projects to offer the desired and wanted
          final results to the client.
        </p>
        <h1>This Is Our Passion</h1>
        <p>
          Way to Go Builders, Inc was established with the core idea that every
          client deserves quality, innovation, and attention to detail in every
          aspect of their exterior remodeling project. Furthermore, our design
          team seamlessly blends the craftsmanship and design projects to offer
          the desired and wanted final results to the client.
        </p>
        <p>
          Way to Go Builders staff has extensive experience in exterior home
          remodeling and construction and is ready to serve you with nothing but
          the best. Therefore, most of our business comes from referrals and
          returning clients. We take pride in our valuable customers as they are
          the reason we are here today!{" "}
        </p>
      </div>
      <BookNow />
    </div>
  );
};

export default About;
