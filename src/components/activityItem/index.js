import './index.less';
import React,{Fragment} from 'react';
import time from '../../assets/svgs/time.svg';
import check from '../../assets/svgs/check.svg';
import like from '../../assets/svgs/like.svg';
import user1 from '../../assets/images/user1.jpg';
import scene from '../../assets/images/scene.jpg';
export default class Item extends React.Component{
  render(){
    return <Fragment>
              <div className="m-activityList-item">
                 <div className="m-activityList-item-header">
                    <div className="u-image"><img src={user1}/></div>
                    <div className="u-name">Username</div>
                    <div className="u-channel">Channel name</div>
                 </div>
                 <div className="m-activityList-item-title">
                    <div className="left">
                     <div className="u-detail">Activity Title Name Make it Longer May Longer than One Line</div>
                     <div className="u-time">
                       <div className="u-icon">
                         <object  type="image/svg+xml" data={time}>
                           time svg
                         </object>
                       </div>
                       <div className="u-text">14 May 2016 12:22 - 14 May 2016 18:00</div>
                     </div>
                    </div>
                    <div className="right">

                    </div>
                 </div>
                 <div className="m-activityList-item-body">
                    [No longer than 300 chars] Vivamus sagittis, diam in lobortis,
                    sapien arcu mattis erat, vel aliquet
                    sem urna et risus. Ut feugiat sapien mi potenti...
                 </div>
                 <div className="m-activityList-item-footer">
                    <div className="u-mego">
                      <object  type="image/svg+xml" data={check}>
                        check svg
                      </object>
                    </div>
                    <div className="u-text">I am going!</div>
                    <div className="u-like">
                      <object  type="image/svg+xml" data={like}>
                        like svg
                      </object>
                    </div>
                    <div className="u-text">I like it</div>
                 </div>
              </div>
           </Fragment>
  }
}
