import React, { Component } from 'react';
import   '../dist/LightboxPage.css'

class Gallery extends Component {
  state = {
    count: 0
  }

  incrementMe = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
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
                <input onClick={this.incrementMe} type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px" />
              {this.state.count}
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                <img className="draw"  src="https://i.imgur.com/m4BYRpOm.jpg" width="100%">
                </img>
                <div className="bob">
                <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
            </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                <img  className="draw" src="https://i.imgur.com/vOnmdyTm.jpg" width="100%">
                </img>
                <div className="bob">
                <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
            </div>
                </div>
             </div>





         <div className="column">
            <div className="content">
                <img className="draw" src="https://i.imgur.com/ORHjYIim.jpg" width="100%">
                </img>
                <div className="bob">
                <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/cCB7aixm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px" />
                </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/8ksi27Em.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
                </div>
                </div>
             </div>





    <div className="column">
            <div className="content">
                <img className="draw" src="https://i.imgur.com/6Cv4SeVm.jpg" width="100%">
                </img>
                <div className="bob">
                <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
            </div>
            </div>

        </div>

        <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/spcTMEnm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
                </div>
                </div>
             </div>



     <div className="column">
                <div className="content">
                    <img className="draw" src="https://i.imgur.com/5Js9WaQm.jpg" width="100%">
                    </img>
                    <div className="bob">
                    <input type="image" src="https://img.icons8.com/nolan/64/000000/like.png"  width="30px" height="30px"/>
                </div>
                </div>
             </div>

</div>
</div>

  );
}

}

export default Gallery;
