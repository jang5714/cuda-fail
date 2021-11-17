import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const LOGIN = async (x) => {
  const res = await userAPI.login(x)
  return res.data
}
const JOIN = async (x) => {
  const res = await userAPI.join(x)
  return res.data
}
const EXIST = async (x) => {
  const res = await userAPI.exist(x)
  return res.data
}
const MODIFY = async (x) => {
  const res = await userAPI.modify(x)
  return res.data
}
const FIND = async (x) => {
  const res = await userAPI.find(x)
  return res.data
}

export const login = createAsyncThunk('users/login', LOGIN)
export const join = createAsyncThunk('users/join', JOIN)
export const exist = createAsyncThunk('users/exist', EXIST)
export const modify = createAsyncThunk('users/modify', MODIFY)
export const find = createAsyncThunk('users/find', FIND)


const changeNull = ls => {
  for (const i of ls) {
    document.getElementById(i).value = ''
  }
}  //모르겠음 ㅎㅎ...

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userState: { username: '', password: '', email: '', name: '', remeber: '', },
    usersState: [],
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [modify.fulfilled]: (state, action) => {
      localStorage.setItem('sessionUser', JSON.stringify(action.payload))
      window.location.href = ''
    },
    [join.fulfilled]: (state, action) => {
      state.userState = action.payload
      window.location.href = `/users/login`
    },
    [find.fulfilled]:(state, {meta, payload}) => {state.userState = payload},
    [exist.fulfilled]: (state, action) => {
      // if(action.payload){window.location.href='/users/join'}
      alert(`사용가능 한 이메일입니다.`)
    },
    [login.fulfilled]: (state, { meta, payload }) => {
      state.userState = payload
      window.localStorage.setItem('sessionUser', JSON.stringify(payload))
      try {
        if (payload.email != null) {
          alert(`${payload.name}님 환영합니다`)
          window.location.href = `/home`
        } else {
          alert('아이디, 비번 오류로 로그인 실패  ')
          changeNull(['username', 'password'])
        }
      } catch (e) {
        window.location.href = `/users/login`
      }
    }
  }

})
export const currentUserState = state => state.users.userState
export const currentUsersState = state => state.users.usersState
export const currentUserParam = state => state.users.param
export default userSlice.reducer;