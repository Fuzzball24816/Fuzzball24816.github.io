<div class="wrapper">
  <div class="header">I'm Nicholas, an Oregon based Web Developer.</div>

  <div class="flex">
    <div class="textbox">
      <div>
        <div class="title">&lt;About&gt;</div>
        Welcome to my corner of the web! I'm Nicholas, a web developer with a passion
        for design and functionality. Whether it's crafting captivating websites
        or designing serene garden layouts, I thrive on bringing dreams to life.
        Let's work together to build your digital oasis that reflects your unique
        vision and resonates with your audience. Let's make magic happen!
      </div>

      <div class="flex-with-gap">
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

      <div>
        <div class="title">&lt;Contact&gt;</div>
        <div></div>
        <a href="../contact" class="link">Contact me here</a>
      </div>
    </div>

    <img class="aboutPicture" src="nicholas.jpg" alt="Nicholas" />
  </div>
</div>
<img class="tree" src="tree.png" alt="It's a fucking tree" />

<style>
  .flex {
    display: flex;
  }

  .aboutPicture {
    height: 500px;
    margin-left: 50px;
    margin-top: 20px;
  }

  .boxwrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
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
    text-align: center;
  }

  .wrapper {
    margin: 0 auto;
    width: 55%;
    color: white;
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
    gap: 40px;
    flex-direction: column;
  }

  .header {
    color: lightgreen;
    font-size: 50px;
    text-align: center;
    margin-bottom: 25px;
  }

  .title {
    font-size: 40px;
    color: #eebf90;
    margin-bottom: 10px;
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

  .flex-with-gap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
