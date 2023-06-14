import 'antd/dist/reset.css';
import StartPageContent from '../components/StartPageContent';
import Footer from '../components/Footer';

function Start() {
  return (
    <div className="start-page" >
        <StartPageContent/>
        <Footer
            title="Create an Account"
        />
    </div>
  );
}

export default Start;