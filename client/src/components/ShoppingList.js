import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items:[
      {id: uuid(), name: 'Coffee'},
      {id: uuid(), name: 'Chicken'},
      {id: uuid(), name: 'lemon'},
      {id: uuid(), name: 'Cat Supply'}
    ]//items
  }//state

  render(){
    const {items} = this.state; //destructing
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom:'3rem'}}
          onClick={() => {
            const name = prompt("Enter Item: ","Potato");
            if(name){
              this.setState( {items:[...this.state.items,{id:uuid(),name}]});//'name:name' in ES6 can be name.
            }
          }}
        >Add Item</Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({id,name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn" color="danger" size="sm" onClick={()=>{
                    this.setState(state => ({items:state.items.filter(item=>item.id!==id)}));
                  }}
                  >&times;</Button>
                {name}</ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );//return
  }//render
}

export default ShoppingList;
