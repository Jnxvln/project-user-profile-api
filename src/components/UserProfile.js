import UserDataTable from "./UserDataTable";
import Spinner from "./Spinner";

const UserProfile = ({ user, loading }) => {
  let avatar_url;

  if (!user) {
    avatar_url = undefined;
  } else {
    avatar_url = `https://avatars.dicebear.com/api/croodles-neutral/${user.name}.svg`;
  }

  return (
    <div>
      <section className="card user-profile">
        {/* Show user name OR "User Profile" */}
        <div className="card-header">
          {!loading && user && user.name ? (
            <strong className="profile-header">{user.name}</strong>
          ) : (
            <strong>User Profile</strong>
          )}
        </div>

        {/* Show user avatar, if not loading */}
        {user && !loading && (
          <img
            src={avatar_url}
            className="card-img-top profile-image"
            alt={user.name}
          />
        )}

        <div className="card-body">
          {/* Show loading spinner OR user data */}
          {loading ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Spinner /> <span className="loading-text">Loading...</span>
            </div>
          ) : user ? (
            <UserDataTable user={user} />
          ) : (
            <div className="no-user-warning">No user loaded</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
