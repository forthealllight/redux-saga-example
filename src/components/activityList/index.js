import './index.less';
import React,{Fragment} from 'react';
import Item from '../activityItem/index.js';
export default class ActivityList extends React.Component{
  render(){
    const {list}=this.props;
    return (
      <Fragment>
      {
        list.map(function(item,index){
          return <Item key={item.username}/>
        })
      }
      </Fragment>
    )
  }
}
