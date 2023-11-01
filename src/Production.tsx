import { Link } from "react-router-dom";
import "./employeesAP.css";

const Production = () => {
  return (
    <main className="flex items-center justify-center h-full">
      <section className="flex items-center w-full h-full sm:p-16 dark:bg-slate-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 text-slate-800 dark:text-gray-600"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            ></path>
            <rect
              width="176"
              height="32"
              x="168"
              y="320"
              fill="currentColor"
            ></rect>
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            ></polygon>
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            ></polygon>
          </svg>
          <p className="text-3xl">
            Looks like our services are currently offline
          </p>
          <Link to={"/"}>
            <p className="px-8 py-3 font-semibold bg-indigo-600 rounded text-slate-50 dark:bg-sky-400 dark:text-gray-900">
              Back to homepage
            </p>
          </Link>
        </div>
      </section>
    </main>
    // <main>
    //   <div className="top-bars">
    //     <input className="search-box" type="text" placeholder="Search" />
    //     <div className="dropdown">
    //       <button className="dropbtn">Dropdown</button>
    //       <div className="dropdown-content">
    //         <a href="#">Art Director</a>
    //         <a href="#">Motion Designer</a>
    //         <a href="#">Product Designer</a>
    //         <a href="#">Graphic Designer</a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="profile">
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Amanda Kherr #1</p>
    //       <div>
    //         <p className="position">Art Director</p>
    //         <span>80%</span>
    //         <progress className="progress1" max={80} value={80} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Alexander Johnson #2</p>
    //       <div>
    //         <p className="position">Motion Designer</p>
    //         <span>70%</span>
    //         <progress className="progress2" max={70} value={70} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Alexander Kherr #3</p>
    //       <div>
    //         <p className="position">Product Designer</p>
    //         <span>65%</span>
    //         <progress className="progress3" max={65} value={65} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Austin Kherr #4</p>
    //       <div>
    //         <p className="position">Graphic Designer</p>
    //         <span>78%</span>
    //         <progress className="progress4" max={78} value={78} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Aada Kherr #5</p>
    //       <div>
    //         <p className="position">Graphic Designer</p>
    //         <span>73%</span>
    //         <progress className="progress5" max={73} value={73} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Amanda Kherr #6</p>
    //       <div>
    //         <p className="position">Product Designer</p>
    //         <span>69%</span>
    //         <progress className="progress6" max={69} value={69} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Angel Johnson #7</p>
    //       <div>
    //         <p className="position">Motion Designerr</p>
    //         <span>65%</span>
    //         <progress className="progress7" max={65} value={65} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <span className="dot" />
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Alexander Kherr #8</p>
    //       <div>
    //         <p className="position">Graphic Designer</p>
    //         <span>50%</span>
    //         <progress className="progress8" max={50} value={50} />
    //       </div>
    //     </div>
    //     <div className="male">
    //       <img className="pp" src="male.jpg" />
    //       <p className="employee-name">Austin Kherr #9</p>
    //       <div>
    //         <p className="position">Motion Designer</p>
    //         <span>70%</span>
    //         <progress className="progress9" max={70} value={70} />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Production;
