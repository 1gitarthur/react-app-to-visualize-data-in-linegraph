import LineGraph from './LineGraph';

const data = [
  { label: 'January', value: 100 },
  { label: 'February', value: 200 },
  { label: 'March', value: 300 },
  // ...
];

const App = () => {
  return (
    <div>
      <LineGraph data={data} />
    </div>
  );
};

export default App;
