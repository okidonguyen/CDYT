const Cosmic = require('cosmicjs')
const api = Cosmic()
export const bucket = api.bucket({
  slug: 'cdyt-production',
  read_key: 'rzSv8CHChQgYql0xsOZ1igGdXTntjzZZ66LscRJXOJM0uEwZWE'
})