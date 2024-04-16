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
          नमस्कार, आपसे आग्रह है कि कार्यकर्ता परिवारों व
          समर्थक परिवारों के वोट जल्द से जल्द डलवाकर मतदान बढ़ायें। माता– बहनों
          से अनुरोध है महिलाओं का मतदान प्रतिशत बढ़ायें। <br /> भारत माता की जय!!
          धन्यवाद।
        </div>
        <img className="image-flower" src={logo} />
      </div>
    </main>
  );
};

export default App;
