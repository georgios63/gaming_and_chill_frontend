import News from "../../components/News";
import UserLibrary from "../../components/UserLibrary";
import "./styles.css";

const UserPage = () => {
  return (
    <div className="user-page-container">
      <p>Hello from User profile page</p>
      <div className="user-library">
        <UserLibrary />
      </div>
      <div className="news-container">
        <News />
      </div>
    </div>
  );
};

export default UserPage;
