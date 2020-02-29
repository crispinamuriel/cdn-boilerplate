class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                   <span>First Name</span> <input name="firstName" onChange={this.handleChange} placeholder="first name"></input> <br /> 
                   <span>Last Name</span> <input name="lastName" onChange={this.handleChange} placeholder="last name"></input> <br /> 
                   <span>Email:</span> <input name="email" onChange={this.handleChange} placeholder="email"></input> <br /> 
                   <span>Password:</span><input type="password" name="password" onChange={this.handleChange} placeholder="password"></input> <br /> 
                   <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<SignUp />, document.getElementById('app'));
