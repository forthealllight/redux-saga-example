import './index.less';
import React,{Fragment} from 'react';
import ActivityList from '../../components/activityList';
export default class LoginSuccess extends React.Component{
  render(){
    const {toLoginOut,list}=this.props;
    return (
     <Fragment>
        <div className="m-login-out">
           <button onClick={toLoginOut}>Login out</button>
        </div>
        <ActivityList list={list}/>
     </Fragment>
   )
  }
}
