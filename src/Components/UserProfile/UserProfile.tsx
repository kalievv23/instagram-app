import React from "react";
import styles from "./UserProfile.module.css";
import DefaultImageUserProfile from "../../Assets/Images/DefaultImageUserProfile.jpg";
import {
  settingIcon,
  plusActuallIcon,
  publicIcon,
  savedPublicsIcon,
  taggedPublicsIcon,
} from "../../Assets/Icons/svgIcons";
import _Button from "../UI/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../CustomHooks/useTypedSelector";
interface UserProfileProps {
  userName: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName }) => {
  const navigate = useNavigate();
  const user = useTypedSelector((s) => s.auth.user);

  return (
    <div className={styles.wrapper}>
      <div className={styles.profile_header}>
        <img
          className={styles.image_default_profile}
          src={DefaultImageUserProfile}
          alt="User photo"
        />
        <div className={styles.user_info_wrapper}>
          <div className={styles.username_with_buttons}>
            <h3 className={styles.username}>
              {user?.fullName ?? "where is your name ? get a name , please !!!"}
            </h3>
            <div className={styles.profile_buttons}>
              <_Button
                background="#efefef"
                color="black"
                onClick={() => {
                  navigate("edit");
                }}
                variant="contained"
                children={<b>Редактировать</b>}
              />
              <_Button
                background="#efefef"
                color="black"
                onClick={() => navigate("/archive/stories")}
                variant="contained"
                children={<b>Посмотреть архив</b>}
              />
            </div>
            <div className={styles.settingIcon}>{settingIcon}</div>
          </div>
          <div className={styles.subscrib_info}>
            <span>
              <b>{user?.summaryOfAccount.countOfContents}</b> публикаций
            </span>
            <span>
              <b>{user?.summaryOfAccount.countOfSubscribers}</b>{" "}
              {user?.summaryOfAccount.countOfSubscribers == 1
                ? "подписчик"
                : "подписчиков"}
            </span>
            <span>
              <b>{user?.summaryOfAccount.countOfSubscriptions}</b> подписок
            </span>
          </div>
          <div className={styles.user_bio}>
            <span className={styles.user_fullname}>{user?.fullName}</span>
            <br />
            <span>about_user</span>
          </div>
        </div>
      </div>
      <div className={styles.actuall_histories}>
        <div className={styles.actuall_history}>
          <div>{plusActuallIcon}</div>
          <p>Добавить</p>
        </div>
      </div>
      <div className={styles.publics_navbar}>
        <div onClick={() => navigate("")}>
          <div>{publicIcon}</div>
          <span>Публикации</span>
        </div>
        <div onClick={() => navigate("saved")}>
          <div>{savedPublicsIcon}</div>
          <span>Сохраненные</span>
        </div>
        <div onClick={() => navigate("tagged")}>
          <div>{taggedPublicsIcon}</div>
          <span>Отметки</span>
        </div>
      </div>
      <div className={styles.publics_wrapper}>
        <Outlet />
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default UserProfile;
