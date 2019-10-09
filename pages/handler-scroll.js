import React, { Component } from 'react'

class Scroll extends Component {
    componentDidMount =  () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = e => {
        

        let element = e.target 
        

        console.log('classname: ',e.target.classList)

        console.log('scrollTop: ', e.srcElement.body.scrollTop) 
        console.log('scrollHeight: ', e.srcElement.body.scrollHeight) 
            
        /*
        console.log('scrollHeight: ', element.scrollHeight) 
        console.log('scrollTop: ', element.scrollTop) 
        console.log('scrollTop: ', element.clientHeight) 

        */

        if(element.scrollHeight - element.scrollTop === element.clientHeight){
            console.log('fired scroll!')
        }
    }
    render(){
        return(
            <div className="content-container" onScroll={this.handleScroll} >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem non explicabo dicta aut illo. Porro iure molestias nulla accusantium cupiditate quas sequi eaque optio? Optio excepturi animi doloremque hic deleniti.</p>
                <br/>
            </div>
        )
    }
}

export default Scroll;