import 'antd/dist/reset.css';
import StartPageContent from '../components/StartPageContent';
import Footer from '../components/Footer';

function Start() {
  return (
    <div >
        <StartPageContent/>
        <Footer
            title="Create an Account"
        />
    </div>
  );
}

export default Start;