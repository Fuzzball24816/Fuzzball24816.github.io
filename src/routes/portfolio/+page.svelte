<div class="wrapper">
  <div class="header">I'm Nicholas, an Oregon based Web Developer.</div>
  <div class="textbox">
    <div class="section">
      <div class="section">
        <div class="about">
          <img class="aboutPicture" src="nicholas.jpg" alt="Nicholas" />
          <div>
            <div class="title">&lt;About&gt;</div>
            I'm a web developer who has a passion for design and functionality. I
            love working with people and helping build their dream. When I'm not
            designing websites i'm usually designing garden layouts! I love nature
            and being in the great outdoors.
          </div>
        </div>
      </div>
      <div class="portfolio">
        <div>
          <div class="title">&lt;Portfolio&gt;</div>
          <div>
            Here is a list of my current and past projects I am working on.
            These are websites I've either been hired to work on or passion
            projects of mine. You can find some of my work on my <a
              href="https://www.github.com/OregonNelson">Github</a
            >.
          </div>
        </div>
        <div class="boxwrap">
          <div class="box">
            <div>
              <a href="https://forensictoxicologyexpert.com/"
                >Forensic Toxicology Experts</a
              >
            </div>
            <img
              class="portfolioPicture"
              src="ft.png"
              alt="Forensic Toxicology Symbol"
            />
          </div>
          <div class="box">
            <div>
              <a href="https://rimworldstats.com/">Rimworld Stats</a>
            </div>
            <img class="portfolioPicture" src="Red_fox.png" alt="A fox" />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">&lt;Contact&gt;</div>
      <div></div>
      <a href="../contact" class="link">Contact me here</a>
    </div>
  </div>
</div>
<img class="tree" src="tree.png" alt="It's a fucking tree" />

<style>
  .aboutPicture {
    width: 400px;
    margin: 20px;
  }
  .about {
    display: flex;
  }
  .portfolio {
    display: flex;
    gap: 10px;
  }
  .boxwrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
  }
  .portfolioPicture {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  .box {
    border: 2px solid #90bfee;
    height: 170px;
    width: 170px;
    padding: 10px;
    background-color: #494949;
  }
  .wrapper {
    margin: 0 auto;
    width: 80%;
  }

  a {
    color: #90bfee;
  }

  a:visited {
    color: #90bfee;
  }

  .textbox {
    display: flex;
    font-size: large;
    gap: 20px;
    flex-direction: column;
    text-align: center;
    margin: 10px;
  }

  .header {
    color: lightgreen;
    font-size: 50px;
    text-align: center;
    margin-bottom: 25px;
  }

  .section {
    color: white;
  }

  .title {
    font-size: 40px;
    color: #eebf90;
    margin: 10px;
  }

  .link {
    color: gold;
    background-color: transparent;
    text-decoration: none;
  }
  .tree {
    width: 100%;
    height: 500px;
    position: fixed;
    bottom: 0;
    z-index: -1;
  }
</style>
