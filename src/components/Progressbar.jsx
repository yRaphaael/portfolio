function Progressbar() {
    return (
      <>
        <div className="progressbars">
          <div className="progressbar">
            <div className="language-icon">
              <img src="./java-svg.svg" />
            </div>
            <div className="progressbar-measure-1"><span>1 year</span></div>
            
          </div>
          <div className="progressbar">
            <div className="language-icon">
              <img src="./javascript-svg.svg" />
            </div>
            <div className="progressbar-measure-2"><span>2 months</span></div>
          </div>
          <div className="progressbar">
            <div className="language-icon">
              <img src="./sql-svg.svg" width={50} height={50} />
            </div>
            <div className="progressbar-measure-3"><span>3 years</span></div>
          </div>
          <div className="progressbar">
            <div className="language-icon">
              <img src="./react-svg-icon.svg" width={50} height={50} />
            </div>
            <div className="progressbar-measure-4"><span>2 months</span></div>
          </div>
        </div>
      </>
    );
  }
  
  export default Progressbar