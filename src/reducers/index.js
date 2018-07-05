import {totalState }from '../state';
console.log(totalState);
export default function(state=totalState,action){
   switch (action.type) {
     case 'to_login_in':
       return Object.assign({},state,{isLogin:true});
     case 'to_login_out':
       return Object.assign({},state,{isLogin:false});
     case 'change_username':
       return Object.assign({},state,{username:action.value});
     case 'change_password':
       return Object.assign({},state,{password:action.value});
     case 'update_list':
       return Object.assign({},state,{activityList:action.list});
     default:
       return state;
   }
}
