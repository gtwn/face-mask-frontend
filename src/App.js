import Nav from "./components/Nav"
import './assets/main.css'
import 'react-dropzone-uploader/dist/styles.css'
import Upload from "./components/Upload"

function App() {
 

  return (
    <div>
      <Nav></Nav>
      <div className="mt-24 pl-7 pr-8 h-32">
        <Upload></Upload>
      </div>
      
    </div>
  );
}

export default App;
