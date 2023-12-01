import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar, NoteCollection, UINewNote, UIEditNote} from "./ui-components";
import { Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><NoteNavBar/> <NoteCollection/></div>}/>
        <Route exact path='/new' element={<UINewNote/>} />
        <Route exact path='/edit' element={<UIEditNote/>} />
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "@aws-amplify/ui-react/styles.css";
// import { API, Storage } from 'aws-amplify';
// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Text,
//   Table,
//   TableBody,
//   TableHead,
//   TableCell,
//   TableRow,
//   TextField,
//   View,
//   withAuthenticator,
//   Link,
// } from "@aws-amplify/ui-react";
// import { listNotes } from "./graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";

// const App = ({ signOut, user }) => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   async function fetchNotes() {
//     const apiData = await API.graphql({ query: listNotes });
//     const notesFromAPI = apiData.data.listNotes.items;
//     console.log("hi")
//     console.log(user.username)
//     console.log("id: " + user.attributes.email.substring(0, user.attributes.email.indexOf('@')))
    
//     await Promise.all(
//       notesFromAPI.map(async (note) => {
//         if (note.image) {
//           const url = await Storage.get(note.name);
//           note.image = url;
//         }
//         return note;
//       })
//     );
//     setNotes(notesFromAPI);
//   }

//   async function createNote(event) {
//     event.preventDefault();
//     const form = new FormData(event.target);
//     const image = form.get("image");
//     const data = {
//       name: form.get("name"),
//       description: form.get("description"),
//       image: image.name,
//       author: user.attributes.email,
//     };
//     if (!!data.image) await Storage.put(data.name, image);
//     await API.graphql({
//       query: createNoteMutation,
//       variables: { input: data },
//     });
//     fetchNotes();
//     event.target.reset();
//   }
  
//   async function deleteNote({ id, name }) {
//     const newNotes = notes.filter((note) => note.id !== id);
//     setNotes(newNotes);
//     await Storage.remove(name);
//     await API.graphql({
//       query: deleteNoteMutation,
//       variables: { input: { id } },
//     });
//   }

//   return (
//     <View className="App">
//       <Heading level={1}>David's Notes App</Heading>
      
//       <Heading level={2}>Current Notes</Heading>
//       <table border="0.5px" align="center"><tbody><tr><td> 
//       <p><Text as = "strong" color = {'#FFA500'}> Time </Text></p>
//       <ul>
//       <li><Text as = "strong" fontSize = {30} color = {'#C0C0C0'}> Money</Text></li>
//       <li> <a href = "george.html">QUOTES</a> </li>
//       <li> <a href = "home.html">WEDDING</a> </li>
//       <li> <a href = "trynew.html">trynew</a> </li>
//       </ul>
     
//       <View margin="3rem 0">
//         <Table><TableBody> {notes.map((note) => (
//           <TableRow key={note.id || note.name}>
//             <TableCell>
//             <Text as="strong" fontWeight={700}>
//             {note.author.substring(0,note.author.indexOf("@"))}
//             </Text></TableCell><TableCell><Link
//             href = {note.description}
//             color = "#007EB9"
//             isExternal={true}
//             >
//               {note.name}
//               </Link>
//           </TableCell><TableCell>
//             {note.image && (
//       <Image
//         src={note.image}
//         alt={`visual aid for ${notes.naçme}`}
//         style={{ width: 80 }}
//       />
//     )}</TableCell><TableCell>
//             <Button variation="link" onClick={() => deleteNote(note)}>
//               <Text as = "strong" fontSize = {50}> Delete Me </Text>
//             </Button></TableCell></TableRow> ))}
//         </TableBody></Table>
//       <hr/>
//       </View></td></tr></tbody></table>
//       <Button onClick={signOut}>Sign Out</Button>
//       <View as="form" margin="3rem 0" onSubmit={createNote}>
//         <Flex direction="row" justifyContent="center">
//           <TextField
//             name="name"
//             placeholder="Site Name"
//             label="Site Name"
//             labelHidden
//             variation="quiet"
//             required
//           />
          
//           <TextField
//             name="description"
//             placeholder="Note Description"
//             label="Note Description"
//             labelHidden
//             variation="quiet"
//             required
//           />
//           <View
//             name="image"
//             as="input"
//             type="file"
//             style={{ alignSelf: "end" }}
//           />
//           <Button type="submit" variation="primary">
//             Create Note
//           </Button>
//         </Flex>
//       </View>
//     </View>
//   );
// };

// export default withAuthenticator(App);