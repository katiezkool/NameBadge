import React from 'react'


 class NameBadge extends React.Component{

    state= {
        name: ''
    }

    render (){

        console.log (this)
        console.log (this.props.name)
        console.log(this.state);

        return (
            <div>
                <section><h1>Hello!</h1>
                <h2>My name is...</h2>
                </section>
                <article>
                    <h3>{this.state.name}</h3> </article>
                <input type='text' placeholder='Type your name here...' value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>

            </div>


        )
    }
}

export default NameBadge