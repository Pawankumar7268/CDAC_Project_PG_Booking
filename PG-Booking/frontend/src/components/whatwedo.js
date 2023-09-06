
import './whatwedo.css';
function whatwedo() {
  return (

    <div class="container">
   <div class="row">
        <div class="col-md-12 text-center">
          <div class="section-titleV1 ">
            <h2>What We Do</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="about-us-content">
            <div class="au-icon">

              <img src={require("./images/compass.png")} alt="" />

            </div>
            <div class="au-content">
              <a href="#"><h4>MISSION</h4></a>
              <p> Our mission is to provide you with a home away from home, where you can live, connect, and thrive.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="about-us-content">
            <div class="au-icon">
              <img src="icons/shiny-diamond.png" alt="" />
              <img src={require("./images/shiny-diamond.png")} alt="" />

              <img href="D:\react_project_trial\what_we_do\src\icons\visions.png" />
            </div>
            <div class="au-content">
              <a href="#"><h4>VISION</h4></a>
              <p>Our vision is creating a legacy  diverse communities that transcend geographical boundaries.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="about-us-content">
            <div class="au-icon">
              <img src={require("./images/history.png")} alt="" />


            </div>
            <div class="au-content">
              <a href="#"><h4>HISTORY</h4></a>
              <p>Our journey was marked by milestones - from beta testing to the grand launch, each step was significant.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="about-us-content">
            <div class="au-icon">
              <img src={require("./images/work.png")} alt="" />

            </div>
            <div class="au-content">
              <a href="#"><h4>WORK</h4></a>
              <p>our platform provide provide a solution for those who want PG and landlords who want to serv their PG accomodations </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default whatwedo;
