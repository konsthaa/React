const Greeting = ({name, age, isStudent}) => {
  console.log(name);
  return (
    <>
      <div>
        Hello, {name} and age {age} is {isStudent}
      </div>
      <div>Mooooooi</div>
    </>
  );
};

export default Greeting;
