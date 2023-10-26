import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
      <ul>
<li>hello</li>
<li>friend</li>
<li>bye</li>
</ul>
      <Heading level={2}>I Love Trump!</Heading>
      <h3>{user.username}</h3>
       <Image src={logo} width = {240} className="App-logo" alt="logo" />
        <Image src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU4bnZoMnBqMnlyaHlwd3JlN3pzeWN5ZDB4N3oxd24xajlsamczcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qjmp5vKEERPyw/giphy.gif" />
        
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);