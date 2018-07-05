var htmlWebpackPlugin=require('html-webpack-plugin');
var webpack=require('webpack');
var path=require('path');
var urlTarget='';
module.exports={
  entry:{
    main:'./src/app.js',
    vendor:['react', 'react-dom','react-redux','react-router','redux']
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].bundle.js',
    publicPath: '/'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:path.resolve(__dirname,'node_modules'),
        include:path.resolve(__dirname,'src'),
        query:{
          presets:['latest','stage-0', 'react'],
          plugins:['transform-decorators-legacy']
        }
      },{
        test:/\.tpl$/,
        loader:'ejs-loader'
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
      },{
        test:/\.less$/,
        loader:'style-loader!css-loader!postcss-loader!less-loader'
      },{
        test:/\.scss$/,
        loader:'style-loader!css-loader!postcss-loader!sass-loader'
      },{
        test:/\.html$/,
        loader:'html-loader'
      },{
        test:/\.(png|jpg|gif|svg)$/i,
        loader:'file-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader:'file-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.(csv|tsv)$/,
        loader:'csv-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.xml$/,
        loader:'xml-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      }
    ]
  },
  devServer:{
     hot:true,
     contentBase:path.resolve(__dirname,'dist'),
     publicPath:'/',
     proxy:{
       '**':{
         target:urlTarget,
         secure:false,
         changeOrigin:true
       }
     },
     setup:function(app){
       app.use('*',(req,res,next)=>{
         res.header('Access-Control-Allow-Credentials','true');
         res.header('Access-Control-Allow-Origin','*');
         res.header('Access-Control-Allow-Headers','origin,X-Requested-With','Content-Type','Accept');
         res.header('Access-Control-Allow-Methods','POST,GET');

         if(urlTarget==''){
           const url=req.originalUrl;
           //deal with the 'get' request
           let index=url.indexOf('?');
           if(index!=-1){
              url=url.slice(0,index);
           }
           if(url.length>1&&url.indexOf('.ico')=='-1'&&url.indexOf('.js')==-1&&url.indexOf('.css')==-1&&url.indexOf('.jpg')==-1&&url.indexOf('.png')==-1&&url.indexOf('.svg')==-1){
             const data=require('./mock'+url);
             res.json(data);
           }
         }
         next();
       });
     }
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor', filename:'vendor.bundle.js'
    }),
    new htmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      inject:'body',
      title:'webpack demo'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool:"inline-source-map"
}
