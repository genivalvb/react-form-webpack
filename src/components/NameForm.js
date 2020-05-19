import React,{ Component } from 'react'

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            llogin: '',
            lfirstName: '',
            llastName: '',
            sexChoose: '',
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSexChangeSelect = this.handleSexChangeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleLoginChange(event) {
        this.setState({ llogin: event.target.value });
    }
    
    handleFirstNameChange(event) {
        this.setState({ lfirstName: event.target.value })
    }

    handleLastNameChange (event) {
        this.setState({ llastName: event.target.value });
    }

    handleSexChangeSelect (event) {
        this.setState({ sexChoose: event.target.value })
    }

    handleSubmit(event) {
        alert('O nome enviado foi: ' + this.state.llogin + ' ' + this.state.lfirstName + ' ' + this.state.llastName + ' ' + this.state.sexChoose);
        event.preventDefault();
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
                    <div>
                        <label>Login:
                        <input type="text" value={this.state.llogin} onChange={this.handleLoginChange}/>
                        </label>
                    </div>                
                    <div>
                        <label>First Name:
                        <input type="text" value={this.state.lfirstName} onChange={this.handleFirstNameChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={this.state.llastName} onChange={this.handleLastNameChange} />
                    </div>
                    <div>
                        <select value={ this.state.sexChoose} onChange-={this.handleSexChangeSelect}>
                            <option value="Homem" >Homem</option>
                            <option value="Mulher">Mulher</option>
                        </select>
                    </div>
                    
                    <input type="submit" value="Submit"></input>
                </form>
                <br />
                <div>
                    <h3>Your first name is: {this.state.lfirstName}</h3>
                    <h3>Your last name is: {this.state.llastName}</h3>
                    <h3>Your login is: {this.state.llogin}</h3>
                    
                </div>
            </div>

        );
    }
}

