import React, { Component } from "react"
/* to modules 
    import styles from '../static/css/styles.css'
*/


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      maxScroll:0,
      nextLevel:0,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    this.setState({ prevScrollpos: window.pageYOffset, nextLevel: 500 })
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos, nextLevel , maxScroll } = this.state;

    const currentScrollPos = window.pageYOffset;
    let currentMaxScroll = maxScroll;
    let currentNextLevel = nextLevel;
    const visible = prevScrollpos > currentScrollPos;

    if(currentScrollPos > currentMaxScroll){
        currentMaxScroll = currentScrollPos
        // console.log('Load more images...')
    }else{
        // console.log('Same images...')
    }

    if(currentScrollPos>currentNextLevel){
        console.log('Load more images...')
        currentNextLevel = currentNextLevel + 1000
        /*
            Load same counts image with started...
        */
       for (let index = 0; index < 20; index++) {
           let image = document.createElement('div')
           image.innerHTML = currentNextLevel;
           image.classList.add('image')
           image.classList.add('red')
           document.getElementById('container-images').append(image)
       }
    }

    this.setState({
      prevScrollpos: currentScrollPos,
      maxScroll: currentMaxScroll,
      nextLevel: currentNextLevel,
      visible
    });

    console.log('currentMaxScroll: ',currentMaxScroll)
    console.log('nextLevel: ',currentNextLevel)
  };

  render() {
    return (
        <div>
            <link rel="stylesheet" href="/static/css/styles.css" />
            <nav
            className={ ((!this.state.visible) ? "navbar--hidden" : "navbar") }
            >
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
            </nav>
            <div id="container-images">
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
                <div className="image">500</div>
            </div>
            
             
        </div>
    );
  }
}