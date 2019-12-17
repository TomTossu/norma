import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { View, Button, Text } from 'react-native';
import CommentInput from './commentInput';
import Icon from 'react-native-vector-icons/AntDesign';

const CommentItem = ({ title,
  username,
  text,
  id,
  updateComment,
  deleteComment,
  logged,
  currentUser }) => {
  const [textoParaMostrar, setTextoParaMostrar] = useState(text);
  const [element, setElement] = useState();
  const [showSomething, setShowSomething] = useState(true);
  const [repeat, setRepeat] = useState(false);

  const updateThisComment = (input, targetId) => {
    setTextoParaMostrar(input);
    setElement(commentElement);
   // updateComment(input, targetId);
  }

  const deleteThisComment = (targetId) => {
    setShowSomething(false);
    deleteComment(targetId);
  }

  /*Variables para render condicional de botones Edit y Delete.
    Si el usuario está loggeado y el comment pertenece a currentUser,
    aparecen los dos botones*/

  let editButton;
  let deleteButton;
  if (logged && currentUser == username) {
    editButton = (
      <Icon name="edit" style={{alignItems:'flex-end', color:'grey'}}
        title={'Edit'} size={10}
        onPress={() => {
          setElement(textBoxElement);
          console.log(id);
        }}
      >
        Edit
      </Icon>
    );
    deleteButton = (
      <Icon title={'Delete'} name="delete" size={15} onPress={() => deleteThisComment(id)}> Delete </Icon>
    );
  }

  /*Elemento que muestra un comentario y, si corresponde, dos botones (Edit, Delete) */
console.log('comment item', username)
  const commentElement = (
    <View>
      <Text>{textoParaMostrar}</Text>
      {/* {editButton} */}
      {deleteButton}
    </View>
  );

  /*Textbox para editar comentarios que reemplaza al elemento anterior 
  cuando uno hace click en Edit*/

  const textBoxElement = (
    <View className="row justify-content-center">
      <CommentInput
        title={title}
        placeholder={text}
        callback={updateThisComment}
        id={id}
      ></CommentInput>
      <Button title={'Back'}
        onPress={() => {
          setElement(commentElement);
        }}
      >
        Back
      </Button>
    </View>
  );

  let algoParaMostrar;

  if (showSomething) {
    algoParaMostrar = (<View>
      <Text h6>anonymous</Text>
      {element}
    </View>)
  }

  /*En el primer render se pone regularItem como valor del hook element*/
  useEffect(() => setElement(commentElement), []);

  console.log(textoParaMostrar);
  return (
    <Fragment>
      {algoParaMostrar}
    </Fragment>
  );
};

export default CommentItem;