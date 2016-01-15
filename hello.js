import React from 'react';

let {
	Component
} = React

export default class Hello extends Component {
 render() {
   return (
     <div>
         Hello, {this.props.name}!
     </div>
   )
 }
}