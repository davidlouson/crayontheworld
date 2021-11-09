import react from 'react';

class Customer extends react.Component {
    render () {
        return (
            <div>
                <CustomerMain namep={this.props.namep} phonep={this.props.phonep} />
                <CustomerAdd imagep={this.props.imagep} />
            </div>
        )
    }
}

class CustomerMain extends react.Component {
    render () {
        return (
            <div>
                <p>{this.props.namep}</p>
                <p>{this.props.phonep}</p>
            </div>
        )
    }
}

class CustomerAdd extends react.Component {
    render() {
        return (
            <div>
                <img src={this.props.imagep} alt="profile" />
            </div>
        )
    }
}

export default Customer;