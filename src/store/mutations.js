// https://vuex.vuejs.org/en/mutations.html

export default {
  auth_request (state) {
    state.authStatus = 'loading'
  },
  auth_success (state, token) {

    state.authStatus = 'success'
    state.token = token
    // state.user = user
  },
  auth_error (state) {
    state.authStatus = 'error'
  },
  logout (state) {
    state.authStatus = ''
    state.token = ''
  },
  setLoading (state, status) {
    state.isLoading = status
  },
  setPercentage (state, num) {
    state.percentage = num
  }
}
