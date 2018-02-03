module.exports = require('yajrpc/qup')({
  url: process.env.RPC || 'http://localhost:8332',
  user: 'adam',
  pass: 'MPJzfq97',
  batch: process.env.RPCBATCHSIZE || 500,
  concurrent: process.env.RPCCONCURRENT || 16
})
