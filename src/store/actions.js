import Fetcher from '../api/fetcher'
import endpoints from '../api/endpoints'

export default {
  authRequest: ({ commit }, userData) => {
    console.log(userData)
    return new Promise((resolve, reject) => {
      commit('auth_request')
      Fetcher({
        url: endpoints.tokenAuth,
        method: 'POST',
        data: {
          username: userData.username,
          password: userData.password
        }
      })
        .then((resp) => {
          const token = `Token ${resp.data.token}`
          localStorage.setItem('token', token)
          Fetcher.defaults.headers.common['Authorization'] = `Token ${ token}`
          commit('auth_success', {
            token,
            user: 'artiom'
          })
          resolve(resp)
        })
        .catch((err) => {
          console.log('login error,', err)
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err.response)
        })
    })
  },
  uploadFile: ({ state, commit }, { file }) => {
    return new Promise((resolve, reject) => {
      Fetcher({
        url: endpoints.uploadFile,
        method: 'POST',
        headers: {
          'Authorization': state.token
        },
        onUploadProgress ({ loaded, total }) {
          const uploadProgress = Math.round(loaded / total * 100)
          commit('setPercentage', uploadProgress)
        },
        data: {
          file
        }
      })
        .then((resp) => {
          console.log(resp)
          resolve(resp.data)
        })
        .catch((err) => {
          console.log('upload error,', err)
          reject(err.response)
        })
    })
  },
  getAllTypes: ({ state }) => {
    return new Promise((resolve, reject) => {
      Fetcher({
        url: endpoints.allTypes,
        method: 'GET',
        headers: {
          'Authorization': state.token
        }
      })
        .then((resp) => {
          console.log(resp)
          resolve(resp.data)
        })
        .catch((err) => {
          console.log('GetAllTypes error,', err)
          reject(err.response)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete Fetcher.defaults.headers.common['Authorization']
      resolve()
    })
  }
  // refreshtoken ({ commit }) {
  //   axios.get('/refresh')
  //     .then((response) => {
  //       const token = response.data.token
  //       localStorage.setItem('token', token)
  //       axios.defaults.headers.common['Authorization'] = `Token ${ token}`
  //       commit('auth_success', {
  //         token
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('refresh token error')
  //       commit('logout')
  //       localStorage.removeItem('token')
  //       console.log(error)
  //     })
  // },
  // autoRefreshToken ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setInterval(function () {
  //       // code goes here that will be run every 20 minutes.
  //       axios.get('/refresh')
  //         .then(response => {
  //           const token = response.data.access_token
  //           localStorage.setItem('token', token)
  //           axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  //           commit('auth_success', { token })
  //           resolve(response)
  //         })
  //         .catch(error => {
  //           console.log('refresh token error')
  //           console.log(error)
  //           reject(error)
  //         })
  //     }, 1200000)
  //   }
  //   )
  // },

}
