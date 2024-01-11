import { Link } from "react-router-dom";
import { Container, Tab, TabList, Tabs, Stack, Button } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, setUser } = useAuth();

  function logout() {
    setUser(null);
  }

  return (
    <Container py={3} borderBottomWidth={1} maxWidth="container.xl">
      <Stack justifyContent="space-between" direction="row">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            {user && (
              <Tab>
                <Link to="/profile">Profile</Link>
              </Tab>
            )}
            {!user && (
              <Tab>
                <Link to="/login">Login</Link>
              </Tab>
            )}
          </TabList>
        </Tabs>

        {user && (
          <div>
            <span>{user.username}</span>
            <Button colorScheme="red" onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
