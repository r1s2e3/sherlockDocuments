import axios from 'axios'

const environment = process.env.VUE_APP_ENV

const serverMap = {
  // development: 'http://localhost:3000',
  production: 'http://116.202.32.247:8020',
  development: 'http://116.202.32.247:8020'
}

// eslint-disable-next-line no-console
console.log({
  environment,
  server: serverMap[environment]
})

const Fetcher = axios.create({
  baseURL: serverMap[environment]
})

export default Fetcher
