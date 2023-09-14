import "./employeesAP.css";

const Production = () => {
  return (
    <main>
      <div className="top-bars">
        <input className="search-box" type="text" placeholder="Search" />
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Art Director</a>
            <a href="#">Motion Designer</a>
            <a href="#">Product Designer</a>
            <a href="#">Graphic Designer</a>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Amanda Kherr #1</p>
          <div>
            <p className="position">Art Director</p>
            <span>80%</span>
            <progress className="progress1" max={80} value={80} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Alexander Johnson #2</p>
          <div>
            <p className="position">Motion Designer</p>
            <span>70%</span>
            <progress className="progress2" max={70} value={70} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Alexander Kherr #3</p>
          <div>
            <p className="position">Product Designer</p>
            <span>65%</span>
            <progress className="progress3" max={65} value={65} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Austin Kherr #4</p>
          <div>
            <p className="position">Graphic Designer</p>
            <span>78%</span>
            <progress className="progress4" max={78} value={78} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Aada Kherr #5</p>
          <div>
            <p className="position">Graphic Designer</p>
            <span>73%</span>
            <progress className="progress5" max={73} value={73} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Amanda Kherr #6</p>
          <div>
            <p className="position">Product Designer</p>
            <span>69%</span>
            <progress className="progress6" max={69} value={69} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Angel Johnson #7</p>
          <div>
            <p className="position">Motion Designerr</p>
            <span>65%</span>
            <progress className="progress7" max={65} value={65} />
          </div>
        </div>
        <div className="male">
          <span className="dot" />
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Alexander Kherr #8</p>
          <div>
            <p className="position">Graphic Designer</p>
            <span>50%</span>
            <progress className="progress8" max={50} value={50} />
          </div>
        </div>
        <div className="male">
          <img className="pp" src="male.jpg" />
          <p className="employee-name">Austin Kherr #9</p>
          <div>
            <p className="position">Motion Designer</p>
            <span>70%</span>
            <progress className="progress9" max={70} value={70} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Production;
