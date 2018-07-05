import {delay} from 'redux-saga';
import {take,all,fork,put,call} from 'redux-saga/effects';
import fetchSmart from '../fetch';
function * watchUsername(){
  while(true){
    const action= yield take('CHANGE_USERNAME');
    yield put({type:'change_username',value:action.value});
  }
}
function * watchPassword(){
  while(true){
    const action=yield take('CHANGE_PASSWORD');
    yield put({type:'change_password',value:action.value});
  }
}
function * getList(){
  try {
   yield delay(3000);
   const res = yield call(fetchSmart,'/list',{
     method:'POST',
     body:JSON.stringify({})
   });
   yield put({type:'update_list',list:res.data.activityList});
 } catch(error) {
   yield put({type:'update_list_error', error});
 }
}
function * watchIsLogin(){
  while(true){
    //监听登入事件
    const action1=yield take('TO_LOGIN_IN');
    const res=yield call(fetchSmart,'/login',{
      method:'POST',
      body:JSON.stringify({
        username:action1.username,
        password:action1.password
      })
    });
    //根据返回的状态码判断登陆是否成功
    if(res.status===10000){
      yield put({type:'to_login_in'});
      //登陆成功后获取首页的活动列表
      yield fork(getList);
    }
    //监听登出事件
    const action2=yield take('TO_LOGIN_OUT');
    yield put({type:'to_login_out'});
  }
}
export default function * rootSaga() {
  yield all([
    fork(watchIsLogin),
    fork(watchUsername),
    fork(watchPassword)
  ]);
}
