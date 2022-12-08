import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="top-row">
          <h1>Minimalist Room</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <img src="images/1.png" alt="image" />
        </div>
        <div className="second-row">
          <div className="box">
            <h3 className="title">Project overview</h3>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <div className="desc-ps">
              <p>July 22 - 2022</p>
              <p>Interior Design - Furnitur</p>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Design Process</h3>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <p>
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </div>
          <div className="box box image">
            <img src="images/2.png" />
          </div>
          <div className="box image">
            <img src="images/3.png" />
          </div>
          <div className="box full-width image">
            <img src="images/4.png" />
          </div>
          <div className="box image">
            <img src="images/5.png" />
          </div>
          <div className="box image">
            <img src="images/6.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
