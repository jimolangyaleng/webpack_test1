var React = require('react');
var ReactDOM = require('react-dom');
// require('./style.css');
/* 内容区模块代码 */
// var ContentMode = React.createClass({
//         render: function(){
//             return (
//                 <div className="ContentMode">
//                     <div class="contents">{this.props.contents}</div>
//                     {this.props.children}
//                 </div>
//             )
//         }
// });
/* 页面div封装 上面三个模块 */
// var Page = React.createClass({
//     render: function(){
//         return (
//             <div className="homepage">
//                 <ContentMode  contents ="longen">测试啦</ContentMode >
//                 <ContentMode  contents ="longen2">测试二</ContentMode >
//             </div>
//             )
//         }
// });

//一
// var names = ["nihao","huang","xiao","ming"];
// var names = [
//                 <h1>huang</h1>,
//                 <h2>xiao</h2>,
//                 <h3>ming</h3>
//             ];


//二
// var Mymessage = React.createClass({
//     render: function(){
//         return <h1>{this.props.name}</h1>;
//     }
// });


//三
// var Mymessage = React.createClass({
//     render:function(){
//         return (
//             <ol>
//                 {
//                     React.Children.map(this.props.children,function(child){
//                         return <li>{child}</li>;
//                     })
//                 }
//             </ol>
//         );
//     }
// });


//四
// var data = "huang";
// var Mymessage = React.createClass({
//     propTypes:{
//         title: React.PropTypes.string.isRequired,
//     },
//     render: function(){
//         return <h1>{this.props.title}</h1>;
//     }
// });

//五
// var Mymessage = React.createClass({
//     getDefaultProps: function(){
//         return {
//             title: 'Hello World!'
//         };
//     },

//     render: function(){
//         return <h1>{this.props.title}</h1>;
//     }
// });


//六
// var Mymessage = React.createClass({
//     handleClick: function(){
//             // this.refs.ming.focus();
//              this.refs.ming.value = "黄小明";
//             alert("")
//         },
//     render: function(){
//         return (
//             <div>
//                 <input ref='ming' type='text'/>
//                 <input type='button' value='点击此处' onClick={this.handleClick} />
//             </div>
//          );
//     }
// });

//七
// var Mymessage = React.createClass({
//     handleClick: function(event){
//         this.setState({liked: !this.state.liked});
//     },

//     getInitialState: function(){
//         return {liked: false};
//     },

//     render: function(){
//         var text = this.state.liked?'like':'haven\'t like';
//         return (
//                 <p onClick={this.handleClick}>
//                     You {text} this,Click to toggle.
//                 </p>
//             );
//     }
// });

//八
// var Mymessage = React.createClass({
//     getInitialState: function(){
//         return {value: 'huangxiaoming'};
//     },
//     handleChange: function(event){
//         this.setState({value: event.target.value});
//     },
//     render: function(){
//         var value = this.state.value;
//         return (
//                 <div>
//                     <input type="text" value={value} onChange={this.handleChange} />
//                     <p>{value}</p>
//                 </div>
//                 );
//     }
// });


//九  组件的生命周期
// var Mymessage = React.createClass({
//   getInitialState: function(){
//     return {
//       opacity: 1.0
//     };
//   },

//   componentDidMount: function(){
//       this.timer = setInterval(function(){
//           var opacity = this.state.opacity;
//           opacity -= .05;
//           if(opacity < 0.1){
//               opacity = 0.1;
//           }
//           this.setState({
//             opacity: opacity
//           });
//       }.bind(this),100);  
//   },

//   render: function(){
//     return (
//         <div style={{opacity: this.state.opacity}}>
//             Hello {this.props.name}
//         </div>
//     );
//   }
// });

//十
// var Mymessage = React.createClass({
//   getInitialState: function(){
//       return {enable: false};
//   },
//   handleClick: function(){
//     this.setState({enable: !this.state.enable});
//   },
//   render: function(){
//     return (
//       <p>
//         <input type='text' disabled={this.state.enable} />
//         <button onClick={this.handleClick}>change State</button>
//       </p>
//     );
//   }
// });


//十一
var Search = React.createClass({
    render: function(){
      return (
          <div>
              {this.props.searchType}:<input type='text' />
              <button>Search</button>
          </div>
      );
    }
});
var Mymessage = React.createClass({
  render: function(){
    return (
        <div>
          <h1>Welcome</h1>
          <Search searchType='Title' />
          <Search searchType='Content' />
        </div>
    );
  }
});


/* 初始化到content容器内 */
ReactDOM.render(
       // <Page />,document.getElementById("content")
       // <Mymessage><span>huangxiaoming</span><span>zhangcaixia</span></Mymessage>,document.getElementById("content")
       <Mymessage name='huangxiaoming' />,document.getElementById("content")

);
// require("./style.css") // 载入 style.css
// document.write('It works.')
// document.write(require('./module1.js')) // 添加模块