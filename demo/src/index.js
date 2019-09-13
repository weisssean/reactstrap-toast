import React, {Component} from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Toaster  from '../../src/index'

import Example from '../../src'

class Demo extends Component {

  componentDidMount(){
    this.toaster.showToast("success","Success", "Showing toaster message");
  }
  render() {
    return <div>
      <h1>reactstrap-toast Demo</h1>
      <Toaster ref={(ref)=>{this.toaster = ref}}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
