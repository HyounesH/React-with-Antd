import React,{Component} from "react";
import { Calendar } from 'antd';

class Contact extends Component{
     onPanelChange=(value, mode)=> {
        console.log(value, mode);
      }
    render(){
        return(
            <Calendar onPanelChange={this.onPanelChange} />
        );
    }
}
export default Contact;