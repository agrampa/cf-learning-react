// add devServer for SPAs, fallback true will send the original index.html if hits 404


devtool: 'eval',
devServer: {
  historyApiFallback: true,
},
entry: 
