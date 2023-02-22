import BookNow from "../../Components/Booknow/BookNow";
// import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className="content"></div>
      <div className="content"></div>
      <div class="atv">
        <h1>
          Backyard Transformation: How to Turn Your Outdoor Space into a Private
          Oasis
        </h1>

        <p>
          The backyard is often an overlooked and underutilized space, but it
          has the potential to be so much more. With a little planning and
          creativity, you can transform your backyard into a private oasis that
          you and your family can enjoy for years to come. Whether you have a
          small patio or a large yard, there are plenty of ways to make it more
          inviting and functional.
        </p>

        <h2>1. Create a focal point:</h2>
        <p>
          The first step in any backyard transformation is to create a focal
          point. This could be a water feature, a fire pit, a garden, or a piece
          of art. The focal point should be the first thing that catches the eye
          when someone enters your backyard. It should be something that makes
          the space feel special and unique.
        </p>

        <h2>2. Add seating:</h2>
        <p>
          Once you have a focal point, it's time to add seating. This could be a
          patio set, a bench, or even a hammock. The key is to create a space
          where people can sit, relax, and enjoy the backyard.
        </p>

        <h2>3. Incorporate lighting:</h2>
        <p>
          Lighting is an often-overlooked element in backyard design, but it can
          make a huge difference in how the space is perceived. String lights or
          lanterns can create a warm and inviting ambiance in the evening. You
          can also use lighting to highlight specific features or plants in your
          backyard.
        </p>

        <h2>4. Incorporate greenery:</h2>
        <p>
          Plants can add a lot of life and color to your backyard. Consider
          adding a mix of flowers, shrubs, and trees to create a lush and
          inviting environment. You can also incorporate a vegetable or herb
          garden for a functional and beautiful backyard space.
        </p>

        <h2>5. Add privacy:</h2>
        <p>
          A backyard should be a private oasis, away from the outside world.
          Incorporate privacy screens, fencing, or hedges to create a sense of
          seclusion. This will also help to block out any unwanted views or
          noise.
        </p>

        <h2>6. Make it fun:</h2>
        <p>
          Lastly, don't forget to make your backyard fun! Add a playground for
          kids, a pool for hot summer days, or even a bocce ball court for
          family game nights. The key is to create a space that everyone in the
          family will enjoy.
        </p>

        <p>
          By following these simple tips, you can transform your backyard into a
          private oasis that you and your family will love. With a little
          planning and creativity, you can create an outdoor space that is both
          beautiful and functional. So, go ahead and start planning your
          backyard transformation today!
        </p>
        <p style={{ color: "rgb(159, 159, 159)" }}>Myla M. Paduit</p>
      </div>
      <div class="sharing">
        <div id="contact">
          <div class="head">
            <h1>REQUEST A VISIT</h1>
            <p>Book an Appointment</p>
            <img id="close" src="./icons/icons8-close-window-100.png" alt="" />
          </div>
          <form action="data.php" method="post">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="number"
              name="PhoneNumber"
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              // name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" class="btns" value="send" />
          </form>
        </div>
      </div>

      <BookNow />
    </>
  );
};

export default Blog;
