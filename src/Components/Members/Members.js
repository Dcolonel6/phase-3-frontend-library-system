import React from "react";
import Table from "react-bootstrap/Table";
import { FactoryServerCommunication } from "../Utilities/server";
const Members = () => {
  const [allmembers, setMembers] = React.useState([]);
  React.useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    FactoryServerCommunication("/members", "GET")(setMembers);
  };
  const listTrsOfMembers = allmembers.map(
    ({ id, name, is_librarian, username },index) => {
      return (
        <tr key ={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{username ? username : "No username given"}</td>
          <td>{is_librarian ? "YES" : "NO"}</td>
        </tr>
      );
    }
  );
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Librarian</th>
        </tr>
      </thead>
      <tbody>
        {listTrsOfMembers}
      </tbody>
    </Table>
  );
};

export default Members;
