'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp(props) {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SignUp, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            console.log(this.state);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        'span',
                        null,
                        'First Name'
                    ),
                    ' ',
                    React.createElement('input', { name: 'firstName', onChange: this.handleChange, placeholder: 'first name' }),
                    ' ',
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        null,
                        'Last Name'
                    ),
                    ' ',
                    React.createElement('input', { name: 'lastName', onChange: this.handleChange, placeholder: 'last name' }),
                    ' ',
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        null,
                        'Email:'
                    ),
                    ' ',
                    React.createElement('input', { name: 'email', onChange: this.handleChange, placeholder: 'email' }),
                    ' ',
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        null,
                        'Password:'
                    ),
                    React.createElement('input', { type: 'password', name: 'password', onChange: this.handleChange, placeholder: 'password' }),
                    ' ',
                    React.createElement('br', null),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Sign Up'
                    )
                )
            );
        }
    }]);

    return SignUp;
}(React.Component);

ReactDOM.render(React.createElement(SignUp, null), document.getElementById('app'));
