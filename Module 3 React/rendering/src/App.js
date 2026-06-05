import logo from './logo.svg';
import './App.css';
import withLoading from './components/withLoading';
import DataComponent from './components/DataComponent';

const EnhancedDataComponent = withLoading(DataComponent);

function App() {
  return (
    <div>
      <EnhancedDataComponent data="Hers is some data"/>
    </div>
  );
}

export default App;
