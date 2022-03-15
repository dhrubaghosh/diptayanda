import { TablePagination } from '@material-ui/core';
import './App.css';
import {SignInComponent} from './components/SignInComponent/SignInComponent';
import { SharedMaterialTable } from './SharedMaterialTable/SharedMaterialTable';
import SharedTable from './SharedMaterialTable/SharedTable';




function App() {
  return (
    <div className="App">
      {/* <h1 className="mt-48 text-3xl font-bold underline">
        Hello world!
      </h1> */}

      {/* <SignInComponent/> */}
      {/* <SharedMaterialTable /> */}
      <SharedTable />
      
    </div>
  );
}

export default App;
