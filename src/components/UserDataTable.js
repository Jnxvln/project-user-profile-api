const UserDataTable = ({ user }) => {
  return (
    <section>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <strong>Name: </strong>
            </td>
            <td>{user.name}</td>
          </tr>

          <tr>
            <td>
              <strong>Username: </strong>
            </td>
            <td>{user.username}</td>
          </tr>

          <tr>
            <td>
              <strong>Email: </strong>
            </td>
            <td>{user.email}</td>
          </tr>

          <tr>
            <td>
              <strong>Address: </strong>
            </td>
            <td>
              {user.address && (
                <address>
                  {user.address.street}
                  <br />
                  {user.address.city}, {user.address.zipcode}
                </address>
              )}
            </td>
          </tr>

          <tr>
            <td>
              <strong>Phone: </strong>
            </td>
            <td>{user.phone}</td>
          </tr>

          <tr>
            <td>
              <strong>Website: </strong>
            </td>
            <td>{user.website}</td>
          </tr>

          <tr>
            <td>
              <strong>Employer: </strong>
            </td>
            <td>{user.company && user.company.name}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UserDataTable;
