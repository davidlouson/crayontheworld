import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';

const myCustomer = [
{
  'id' : 1,
  'name' : '홍길동일',
  'phone' : '01011111111',
  'image' : 'https://placeimg.com/64/64/1'
},
{
  'id' : 2,
  'name' : '홍길동이',
  'phone' : '01011112222',
  'image' : 'https://placeimg.com/64/64/2'
},
{
  'id' : 3,
  'name' : '홍길동삼',
  'phone' : '01011113333',
  'image' : 'https://placeimg.com/64/64/3'
}
]

function App() {
  return (
    <div className="gray-background">
      {
        myCustomer.map (c => {
          return (
            <Customer 
            key={c.id}
            namep={c.name}
            phonep={c.phone}
            imagep={c.image}
            />
          )
        })
      }

        <img src={logo} alt="logo" />
        <p>
          First React App Dev.
        </p>
    </div>

  );
}

export default App;
