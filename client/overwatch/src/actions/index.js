import axios from 'axios';
import { SET_CURRENT_USER, SET_SEARCH_USER,SET_CURRENT_NAME, SET_CURRENT_TOKEN, SET_SEARCH_FAILURE, SET_USER_INVITE, SET_USER_INVITE_LOADING, SET_USER_INVITE_FAILURE, SET_CURRENT_VIDEO_LIST, SET_CURRENT_STREAM,SET_CURRENT_OWL,SET_CURRENT_TEAM,SET_CURRENT_TEAM_LOADING, SET_SEARCH_USER_LOADING } from './types'
import jwtDecode from 'jwt-decode';
import { TwitchClient } from '../config'


export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}


export function login(data,second) {
  let BASE_URL = 'http://localhost:3000'
  return dispatch => {
    return axios.post(`${BASE_URL}/api/auth/login`, data).then(res => {
      const token = JSON.stringify(res.data.token);
      const decode = jwtDecode(token)
      console.log(decode)
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(second))
    });
  }
}

  export function logout() {
    return dispatch => {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('state');
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
    }
  }



  export function signup(data) {
    let BASE_URL = 'http://localhost:3000'
    return dispatch => {
      return axios.post(`${BASE_URL}/api/auth/signup`, data).then(res => {
        const token = JSON.stringify(res.data.token);
        console.log(token);
        localStorage.setItem('jwtToken', token);
        // dispatch(setCurrentUser(jwtDecode(token)));
      }).catch( e => {
        console.log(e)
      })
    }
  }


  export function search(data){
    var answer = localStorage.getItem('jwtToken')
    answer = JSON.parse(answer)
    console.log(answer)
    let BASE_URL = 'http://localhost:3000/api/users/search'
    return dispatch => {
    return axios.post(BASE_URL,data, { headers: {"Authorization" : `Bearer ${answer}`} }).then(res => {
      const information = res.data;
      console.log(information);
      return dispatch(setSearchUser(information))
    }).catch(e => {
      console.log(e)
      alert('There was a problem with your request')
      return dispatch(SET_SEARCH_FAILURE)
    })
    }
  }

  export function invite(data){
    let token = localStorage.getItem('jwtToken')
    token = JSON.parse(token)
    let BASE_URL = 'http://localhost:3000/api/mail'
    return dispatch => {
      return axios.post(BASE_URL,data,{headers:{"Authorization" : `Bearer ${token}`}}).then ( res => {
        const response = res.data;
        console.log(response);
        alert('Message sent!')
        return dispatch(setUserInvite(response))
      }).catch(e => {
        return dispatch(setUserInviteFailure(false))
      })
    }
  }

  export function watch(){
    let BASE_URL ='https://api.twitch.tv/helix/streams?game_id=488552&first=10&language=en'
    let config = {
        headers : {
        'Client-ID':TwitchClient
        }
    }
      return dispatch => {
        return axios.get(BASE_URL,config).then( res => {
          const info = res.data
          console.log(info)
          return dispatch(setCurrentVideoList(info))
        }).catch(e => {
          console.log(e)
        })
      }
  }
  export function getStreams(){
    let BASE_URL ='https://api.twitch.tv/helix/videos?user_id=67955580'
    let config = {
        headers : {
        'Client-ID':TwitchClient
        }
    }
      return dispatch => {
        return axios.get(BASE_URL,config).then( res => {
          const info = res.data
          console.log(info)
          return dispatch(setCurrentStreamList(info))
        }).catch(e => {
          console.log(e)
        })
      }
  }

  export function OWL(data){
    let token1 = localStorage.getItem('jwtToken')
    token1 = JSON.parse(token1)
    console.log(token1)
    let BASE_URL = 'http://localhost:3000/api/owl'
    return dispatch => {
    return axios.get(BASE_URL,data, { headers: {"Authorization" : `Bearer ${token1}`} }).then(res => {
      const information = res.data;
      return dispatch(setCurrentRank(information))
    }).catch(e => {
      console.log(e)
      alert('There was a problem with your request')
    })
    }
  }

  export function OWLTeam(data){
    let rosterToken = localStorage.getItem('jwtToken')
    rosterToken = JSON.parse(rosterToken)
    console.log(rosterToken)
    let BASE_URL = 'http://localhost:3000/api/owl/roster'
    return dispatch => {
    return axios.post(BASE_URL,data, { headers: {"Authorization" : `Bearer ${rosterToken}`} }).then(res => {
      const information = res.data;
      return dispatch(setCurrentRank(information))
    }).catch(e => {
      console.log(e)
      alert('There was a problem with your request')
    })
    }
  }


  export function setCurrentToken(token){
    return{
      type:SET_CURRENT_TOKEN,
      token
    };
  }


  export function setCurrentStreamList(info){
    return {
      type:SET_CURRENT_STREAM,
      info
    }
  }

  export function setCurrentVideoList(info){
    return{
      type:SET_CURRENT_VIDEO_LIST,
      info
    }
  }

  export function setUserInviteFailure(info){
    return{
      type:SET_USER_INVITE_FAILURE,
      info
    }
  }

  export function setUserInviteLoading(info){
    return{
      type:SET_USER_INVITE_LOADING,
      info
    };
  }

  export function setUserInvite(response){
    return{
      type:SET_USER_INVITE,
      response
    };
  }

  export function SET_SEARCH_FALIURE(information){
    return{
      type:SET_SEARCH_FAILURE,
      information
    }
  }

  export function setSearchUserLoading(information){
    return{
      type:SET_SEARCH_USER_LOADING,
      information
    };
  }

  export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
  
  export function setCurrentName(user) {
    return {
      type: SET_CURRENT_NAME,
      user
    };
  }

  export function setSearchUser(information){
    return{
      type:SET_SEARCH_USER,
      information
    }
  }



  export function setCurrentRank(information){
    return{
      type:SET_CURRENT_OWL,
      information
    }
  }

  export function setCurrentTeam(information){
    return{
      type:SET_CURRENT_TEAM,
      information
    }
  }

  export function setCurrentTeamLoading(info){
    return{
      type:SET_CURRENT_TEAM_LOADING,
      info
    }
  }

 


