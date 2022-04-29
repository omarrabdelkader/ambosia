import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="img-p">
        <img
          className="first-img"
          src="https://i.ibb.co/KXF72rW/eiliv-sonas-aceron-Zu-IDLSz3-XLg-unsplash.jpg"
          alt="pexels-photo-326279"
        />
        <div className="get-started">
          <h3>Who Are We?</h3>
          <p className="home-p">
            While eating healthy might encourage you to go to the gym, you
            should consume nutritious foods. Providing nutritious meals at a
            reasonable price. Our website allows us to communicate with our
            customers more effectively. Since junk food has been all around us,
            and our major purpose is to give nutritious meals, our website makes
            it simple for us to contact our customers, and we offer healthy
            meals at a reasonable price. You can make your own recipe while you're entertaining your guests.
            Furthermore, you have complete control over every aspect of your
            food. Depending on your mood, you may select whatever you like. If
            you're having guests over, this is also an opportunity to improve
            your own recipe. epending on your mood, you may select whatever you like.
            It's a lot easier on our website. There's a lot we can provide. Our
            website is extremely user-friendly, and Ambrosia offers several
            services that might benefit our consumers.
          </p>
          {/* <Link to='/' type="button" className="btn btn-outline-dark btn-started">Get started</Link> */}
        </div>
      </section>
      <section className="img-p">
        <div className="get-started">
          <h3>Create your own recipe</h3>
          <p className="view-p">
            You can make your own recipe while you're entertaining your guests.
            Furthermore, you have complete control over every aspect of your
            food. Depending on your mood, you may select whatever you like. If
            you're having guests over, this is also an opportunity to improve
            your own recipe. because You are free to come up with your own
            recipe. Depending on your mood, you may select whatever you like.
            It's a lot easier on our website. There's a lot we can provide. Our
            website is extremely user-friendly, and Ambrosia offers several
            services that might benefit our consumers.  While eating healthy might encourage you to go to the gym, you
            should consume nutritious foods. Providing nutritious meals at a
            reasonable price. Our website allows us to communicate with our
            customers more effectively. here's a lot we can provide. Our
            website is extremely user-friendly.
          </p>
          <Link
            to="/origin"
            type="button"
            className="btn btn-outline-dark btn-started"
          >
            Create New Recipe
          </Link>
        </div>
        <img
          src="https://i.ibb.co/4fPGd76/alice-pasqual-ticu-PP5l2qg-unsplash.jpg"
          className="first-img"
        />
      </section>
      <section>
        <div className="view">
          <h3 className="quotes">Health flows from the inside out</h3>
          <img
            className="third-pic"
            src="https://i.ibb.co/NYwvqQ7/monika-grabkowska-P1aohbi-T-EY-unsplash.jpg"
            alt=""
          />
          <p className="view-p">
            You can go through our menu because there is a lot of information
            there. So, what exactly are you waiting for? Today is your chance to
            try out a new dish.
          </p>
          <Link
            to="/outlook"
            type="button"
            className="btn btn-outline-dark btn-third"
          >
            Menu
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
