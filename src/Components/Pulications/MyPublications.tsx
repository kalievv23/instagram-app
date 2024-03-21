import CameraImage from "../../Assets/Images/cameraImage.png";
import styles from "./Styles.module.css";

const MyPublications = () => {
  return (
    <>
      <div className={styles.camera_image}>
        <img src={CameraImage} alt="Upload photo" />
      </div>
      <h3 className={styles.sub_heading}>Поделиться фото</h3>
      <p>Фото, которыми вы делитесь, будут показываться в вашем профиле.</p>
      <p className={styles.upload_photo}>Поделитесь своим первым фото</p>
    </>
  );
};

export default MyPublications;
