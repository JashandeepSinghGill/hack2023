import styles from '../../styles/HomeBackground.module.css';
import HomeTypedAnim from './HomeTypedAnim';
import homeIng from "../../public/home.jpg";

const HomeBackground = () => {
    return (
        <div className={styles.homeBackImage}
        // style={{
        //     // backgroundImage: `url(${homeIng})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     width: "100%",
        //     height: "100%",
        //     position: "absolute",
        //     top: "0",
        //     left: "0",
        //     zIndex: "-1",
        // }}
        
        >
            <HomeTypedAnim />
        </div>
    );
    };

    export default HomeBackground;