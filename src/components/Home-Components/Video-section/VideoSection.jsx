import './video.css';

const VideoSection = () => {

  return (
    <div className="mid-section" >
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="https://www.skullcandy.eu/cdn/shop/videos/c/vp/4daa187e38b8445f86b7218200205d9c/4daa187e38b8445f86b7218200205d9c.HD-1080p-3.3Mbps-51214399.mp4?v=0" type="video/mp4" /></video>

      <div className="content">
        <h1>FEEL THE BASS. FOR REAL.</h1>
        <p>
          Our signature ARMOR® BassTech doesn’t just deliver sound — it unleashes it. Feel the raw power of every drop, punch, and pulse deep in your core. Whether you’re going beast mode or zoning out, dial it in your way. With ARMOR, it’s not just sound — it’s an experience you wear.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
