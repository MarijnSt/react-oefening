import React from "react";
import GetRandomUser, { User } from "./Api.service";
import { Container, DataList, UserContainer } from "./Api.styles";

const Api: React.FC = () => {
  const [data, setData] = React.useState([] as Array<User>);

  const getUsers = async () => {
    const users: User[] = await GetRandomUser();
    setData(users);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <DataList>
        {data.length > 0 ? (
          data.map((user) => (
            <UserContainer style={{ borderColor: user.gender === "male" ? "blue" : "red" }}>
              {/* <p>{user.gender}</p> */}
              <p>{user.name.title + " " + user.name.first + " " + user.name.last}</p>
              <img src={user.picture.thumbnail} alt="user thumbnail" />
            </UserContainer>
          ))
        ) : (
          <p>Fetching users...</p>
        )}
      </DataList>
    </Container>
  );
};

export default Api;
