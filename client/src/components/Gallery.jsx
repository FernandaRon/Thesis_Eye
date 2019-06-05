import React, { Component } from 'react';
import   '../dist/LightboxPage.css'

class Gallery extends Component {
  constructor(props) {
    super(props);
  this.state = {
     Like: 0,
    Like2: 0,
    Like3: 0,
    Like4: 0,
    Like5: 0,
    Like6: 0,
    Like7: 0,
    Like8: 0,
    Like9: 0
  }

  this.handleClick = this.handleClick.bind(this)
  this.handleClick2 = this.handleClick2.bind(this)
  this.handleClick3 = this.handleClick3.bind(this)
   this.handleClick4 = this.handleClick4.bind(this)
 this.handleClick5 = this.handleClick5.bind(this)
 this.handleClick6 = this.handleClick6.bind(this)
 this.handleClick7 = this.handleClick7.bind(this)
this.handleClick8 = this.handleClick8.bind(this)
this.handleClick9 = this.handleClick9.bind(this)
}


  handleClick() {
    let newCount = this.state.Like + 1
    this.setState({
    Like : newCount
    })
  }

  handleClick2() {
    let newCount = this.state.Like2 + 1
    this.setState({
    Like2 : newCount
    })
  }


  handleClick3() {
    let newCount = this.state.Like3 + 1
    this.setState({
    Like3 : newCount
    })
  }


  handleClick4() {
    let newCount = this.state.Like4 + 1
    this.setState({
    Like4 : newCount
    })
  }

  handleClick5() {
    let newCount = this.state.Like5 + 1
    this.setState({
    Like5 : newCount
    })
  }

  handleClick6() {
    let newCount = this.state.Like6 + 1
    this.setState({
    Like6 : newCount
    })
  }


  handleClick7() {
    let newCount = this.state.Like7 + 1
    this.setState({
    Like7 : newCount
    })
  }

  handleClick8() {
    let newCount = this.state.Like8 + 1
    this.setState({
    Like8 : newCount
    })
  }


  handleClick9() {
    let newCount = this.state.Like9 + 1
    this.setState({
    Like9 : newCount
    })
  }






  render () {
  return (
    <div className="main">

<div id="header">
        <h1><strong> ART WORK </strong></h1>
</div>
    <div className="row">


        <div className="column">
            <div className="content">
                <img className="draw" src=" https://i.imgur.com/bq19Bbsm.jpg" width="100%">
                </img>
                <div className="bob">
                <input onClick={this.handleClick} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="25px" height="25px" />
              {this.state.Like}
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                <img className="draw"  src="https://i.imgur.com/m4BYRpOm.jpg" width="100%">
                </img>
                <div className="bob">
                <input onClick={this.handleClick2} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="25px" height="25px"/>
                {this.state.Like2}
            </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                <img  className="draw" src="https://i.imgur.com/vOnmdyTm.jpg" width="100%">
                </img>
                <div className="bob">
                <input onClick={this.handleClick3} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px"/>
                {this.state.Like3}
            </div>
                </div>
             </div>





         <div className="column">
            <div className="content">
                <img className="draw" src="https://i.imgur.com/ORHjYIim.jpg" width="100%">
                </img>
                <div className="bob">
                <input onClick={this.handleClick4} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="25px" height="25px"/>
                {this.state.Like4}
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/cCB7aixm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input  onClick={this.handleClick5}  type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px" />
                    {this.state.Like5}
                </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/8ksi27Em.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input onClick={this.handleClick6} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px"/>
                    {this.state.Like6}
                </div>
                </div>
             </div>





    <div className="column">
            <div className="content">
                <img className="draw" src="https://i.imgur.com/6Cv4SeVm.jpg" width="100%">
                </img>
                <div className="bob">
                <input onClick={this.handleClick7} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px"/>
                {this.state.Like7}
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/spcTMEnm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input onClick={this.handleClick8} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px"/>
                    {this.state.Like8}
                </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/5Js9WaQm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input onClick={this.handleClick9} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"   width="25px" height="25px"/>
                    {this.state.Like9}
                </div>
                </div>
             </div>

</div>
</div>

  );
}

}

export default Gallery;
