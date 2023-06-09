import './App.css'


const heading = <div><p>Hello</p></div>;

// DRY do not repeat yourself


const addNumbers = (a, b) => {
  console.log(typeof a)
  return console.log(a + b);
}

addNumbers(1, 2);
addNumbers(4, 20);


const Nav = () => {

  return (
    <>
      <div>
        <h1>Hello</h1>
        {heading}
      </div>
    </>
  )

}

export default Nav

