import React from 'react'



class Search extends React.Component {
    filterUpdate() {
       const val= this.myValue.value 
       this.props.filterUpdate(val)
    }

    render() {
        return (
            <header>
                <form>
                    <input type="text"
                   ref={(value)=>{this.myValue = value}}
              placeholder="type to filter..."
              onChange={this.filterUpdate.bind(this)}>
              
                    </input>
                </form>
            </header>
        );
    }
}

 
export default Search 