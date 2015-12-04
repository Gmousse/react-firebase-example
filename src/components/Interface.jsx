import React from 'react';
import Rebase from 're-base';

let base = Rebase.createClass('https://mise-en-commun.firebaseio.com/');
import '../css/main.css';

class Interface extends React.Component {
    constructor() {
        super();
        this.state = {
            words: [''],
            step: 1
        }
    }

    componentDidMount() {
        this.ref = base.syncState('words', {
          context: this,
          state: 'words',
          asArray: true,
          then() {console.log("pointend connected")}
        });
    }

    _displayWords() {
        return this.state.words.map((word)=> <h2 style={{marginRight: "10px"}}> {word} </h2>)
    }

    _changeState() {
        if(this.state.step == 1) {
            this.setState({
                words: ["You","cant","blame","gravity","for falling in love"],
                step: 2
            })
        } else {
            this.setState({
                words: ["The","only","source","of","knowledge","is","experience"],
                step: 1
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div id="page" style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{textAlign: "center"}}>Mise en commun de code!</h1>
                <div style={{margin: "50px auto 0px auto", width: "auto", display:"flex", flexDirection: "row"}}>
                    {this._displayWords()}
                </div>
                <button onClick={this._changeState.bind(this,2)} style={{display: "flex", margin: "50px auto 0px auto", width: 200, height:50}} text="Click on Me!">
                    Vas y cliques là !
                </button>
            </div>
        )
    }
}
export default Interface;
