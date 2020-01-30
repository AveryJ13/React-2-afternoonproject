import React, {Component} from 'react'
import '../App.css'
import data from './Data'
class Display extends Component{

    
    constructor(props){
        super(props)
        this.state = {
           index: 0
        }
    }


    handleNext = () => {
        if (this.state.index < 24){
        this.setState({index: this.state.index + 1})}
        else this.setState({index: 24})
    }

    handlePrevious = () => {
        if (this.state.index > 0){
        this.setState({index: this.state.index - 1})}
        else this.setState({index: 0})
        
    }

    render(){console.log(data)
        return(
            <div>
                <div className = 'header'>
        <h3 className = 'text'>Home</h3>
                </div>
                <div className = 'blackBox'>
                    <div className = 'whiteBox'>
                        <div className = 'topText'>
                            <h2>{data[this.state.index].name.first} {data[this.state.index].name.last}</h2>
        <h2>{data[this.state.index].id}/25</h2>
                        </div>
                        <div className = 'midText'>
        <p>From: {data[this.state.index].city}</p>
        <p>Job Title:  {data[this.state.index].title}</p>
        <p>Employer:  {data[this.state.index].employer}</p>
                        </div>
                        <div className = 'bottomText'>
                            <div>Favorite Movies</div>
                            <ol>
        <li>  {data[this.state.index].favoriteMovies[0]}</li>
                                <li>  {data[this.state.index].favoriteMovies[1]}</li>
                                <li>  {data[this.state.index].favoriteMovies[2]}</li>
                            </ol>
                        </div>
                        
                    </div>
                    <div className = 'blackBoxBottom'>
                    <button className = 'previousButton' onClick = {this.handlePrevious}>Previous</button>
                    <button className = 'nextButton' onClick = {this.handleNext}>Next</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Display