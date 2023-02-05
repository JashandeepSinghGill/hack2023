import { TypeAnimation } from "react-type-animation";
import "react-slideshow-image/dist/styles.css";
import HomeSlideShow from "./HomeSlideShow";
import styles from "../../styles/HomeBackground.module.css";
import Link from "next/link";

const HomeTypedAnim = () => {
  return (
    // <div className="d-flex align-items-stretch vh-100 justify-content-center">
    <div className={`container ${styles.homeBackRound1}`}>
      {/* <div className="row align-items-stretch vh-100 justify-content-center"> */}
      <div
        className={`row align-items-center vh-100 justify-content-center align-content-center`}
      >
        <div className="col-12 d-flex align-items-center justify-content-center">
          <TypeAnimation
            className=""
            sequence={[
              "Calgary Explore the Beauty",
              2000,
              "Calgary Weather",
              3000,
              "Calgary Dont Miss Out Events",
              5000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "4em",
              color: "white",
              fontWeight: "bold",
              // textShadow: "2px 2px 4px #000000"
            }}
          />
        </div>
        <div className="col-12 d-flex justify-content-center pt-5">
          <Link href="./Chats">
            <button type="button" className={`${styles.btnWhite}`}>
              Chat
            </button>
          </Link>

          <Link href="https://heartfelt-tiramisu-9601ea.netlify.app/">
            <button type="button" className={styles.btnWhite}>
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTypedAnim;
