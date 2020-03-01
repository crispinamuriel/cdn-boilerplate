class SignUp extends React.Component {  //1 define Parent class app
    constructor(props) {  //3. create constructor, pass props and call super(props)
        super(props); //3a. getting props ability from React.Component
        this.state = {
            firstName: '',    //4. define state
            lastName: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);    //6.  bind methods to use 'this' keyword inside   : 'this.setState({})
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit (e) {                         //5. define methods to use in JSX or to pass as props to child classes
        e.preventDefault();
        console.log(this.state);
    }
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value     
        });
    }
    render() {          //7. render method returns JSX
        return(
            <div className="container">        {/*8. JSX must be returned inside a single parent element (usually a div) or React.Fragment*/}
                <form onSubmit={this.handleSubmit}>  {/*9. methods will be found on this. or this.props */}
                   <span>First Name</span> <input name="firstName" onChange={this.handleChange} placeholder="first name"></input> <br />  {/*10.span is an inline element*/}
                   <span>Last Name</span> <input name="lastName" onChange={this.handleChange} placeholder="last name"></input> <br />     {/*11.input name is required to make a controlled form*/}
                   <span>Email:</span> <input name="email" onChange={this.handleChange} placeholder="email"></input> <br />               {/*12if method was from parent, found on this.props.methodName*/}
                   <span>Password:</span><input type="password" name="password" onChange={this.handleChange} placeholder="password"></input> <br />  {/*13.to obfuscate pw put type as password*/}
                   <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<SignUp />, document.getElementById('app')); //2. using rDOM to render app in HTML file
