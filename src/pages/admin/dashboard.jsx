const AdminDashboard = () => {
  return (
    <div>
      <div>
        <header className="header">
          <div className="logo">
            <img src="/images/WELLCHEK.svg" />
          </div>
          <div className="nav">
            <h2>Good Morning!</h2>
            <a href="/login" className="login_button">
              Login
            </a>
          </div>
        </header>
        <div className="main-container">
          <div className="aside">
            <div>
              <div className="active">
                <img src="/images/home.svg" alt="home-icon" />
                Home
              </div>
              <div className="non-active">
                <img src="/images/sleep.svg" alt="home-icon" />
                Sleep
              </div>
              <div className="non-active">
                <img src="/images/meditate.svg" alt="home-icon" />
                Meditate
              </div>
              <div className="non-active">
                <img src="/images/nutrition.svg" alt="home-icon" />
                Nutrition
              </div>
              <div className="non-active">
                <img src="/images/fitness.svg" alt="home-icon" />
                FItness
              </div>
              <div className="non-active">
                <img src="/images/community.svg" alt="home-icon" />
                Community
              </div>
            </div>
            <div>
              <div className="non-active">
                <img src="/images/settings.svg" alt="home-icon" />
                Setting
              </div>
              <div className="non-active">
                <img src="/images/logout.svg" alt="home-icon" />
                Logout
              </div>
            </div>
          </div>
          <div className="content_area">
            <div className="tips-section">
              <h3>Top tips from our community</h3>
              <div className="arrow-container">
                <img
                  className="arrow-box"
                  src="/images/arrow-left.svg"
                  alt=""
                />
                <img
                  className="arrow-box"
                  src="/images/arrow-right.svg"
                  alt=""
                />
              </div>
            </div>
            <div className=" section_five">
              <div className="posts">
                <div className="cards">
                  <div>
                    <img className="photo" src="/images/sleeping.jpg" />
                  </div>
                  <h4>
                    Do you want to improve your sleeping habit for better
                    health?
                  </h4>
                  <p>
                    Improve sleep habits by maintaining a consistent schedule,
                    creating a calm sleep environment, and limiting screen time
                    before bedtime for better overall sleep quality.
                  </p>
                  <div className="rating-container">
                    <div className="star-rating">
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star-w.svg" alt="Star" />
                    </div>
                    Jan 14
                  </div>
                </div>
                <div className="cards">
                  <div>
                    <img className="photo" src="/images/sleeping.jpg" />
                  </div>
                  <h4>
                    Nourishing Choices: Three Strategies for Healthier Eating
                    Habits
                  </h4>
                  <p>
                    Improve sleep habits by maintaining a consistent schedule,
                    creating a calm sleep environment, and limiting screen time
                    before bedtime for better overall sleep quality.
                  </p>
                  <div className="rating-container">
                    <div className="star-rating">
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star-w.svg" alt="Star" />
                    </div>
                    Jan 14
                  </div>
                </div>
                <div className="cards">
                  <div>
                    <img className="photo" src="/images/sleeping.jpg" />
                  </div>
                  <h4>
                    Easy and Effective Ways to Overcome Stress and Anxiety
                  </h4>
                  <p>
                    Opt for a balanced diet with fruits, vegetables, and lean
                    proteins. Practice portion control to prevent overeating,
                    and ensure hydration to curb unnecessary snacking.
                  </p>
                  <div className="rating-container">
                    <div className="star-rating">
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star.svg" alt="Star" />
                      <img src="/images/star-w.svg" alt="Star" />
                    </div>
                    Jan 14
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Sound sleep</h3>
            </div>
            <div className=" section_five">
              <div className="posts">
                <div className="sleep-cards">
                  <div>
                    <img className="photo" src="/images/sleeping-2.jpg" />
                  </div>
                  <h5>Breathing session before bed</h5>

                  <div className="rating-container">
                    <div className="sleep_flex-container">
                      Sleep <img src="/images/box.svg" alt="" />
                      Amaka oji
                    </div>
                  </div>
                </div>
                <div className="sleep-cards">
                  <div className="sleep-lock_box">
                    <img className="lock-box"  src="/images/lock.svg" alt="" />
                    <img className="photo" src="/images/sleeping-2.jpg" />
                  </div>
                  <h5>Breathing session before bed</h5>
                  <div className="rating-container">
                    <div className="sleep_flex-container">
                      Sleep <img src="/images/box.svg" alt="" />
                      Amaka oji
                    </div>
                  </div>
                </div>
                <div className="sleep-cards">
                  <div>
                    <img className="photo" src="/images/sleeping-2.jpg" />
                  </div>
                  <h5>Breathing session before bed</h5>

                  <div className="rating-container">
                    <div className="sleep_flex-container">
                      Sleep <img src="/images/box.svg" alt="" />
                      Amaka oji
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
