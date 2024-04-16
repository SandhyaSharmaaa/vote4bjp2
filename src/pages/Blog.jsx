import videoFile from "../assets/two.mp4";
import logo from "../assets/logo.png";
// import bjp from "../assets/bjp.png"
const App = () => {
  return (
    <main className="gradient-background">
      {/* <img className="image-text" src={bjp}></img> */}
      <h1>भारतीय जनता पार्टी</h1>
      <div className="video-div">
        <video width="750" height="500" autoPlay muted loop controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bottom-bar">
        <div className="text">
        आपका एक वोट विकसित भारत के संकल्प को पूरा करने में सहयोग करेगा। लोकतंत्र के महापर्व में भाग लें, कमल का बटन दबाकर मोदी जी को और मजबूत करें। - सम्राट चौधरी
        </div>
        <img className="image-flower" src={logo} />
      </div>
    </main>
  );
};

export default App;
