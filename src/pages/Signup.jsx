import 'antd/dist/reset.css';
import SignupContent from '../components/SignupContent';
import Footer from '../components/Footer';

function Signup() {
  return (
    <div>
      <SignupContent/>
      <Footer
          title="Sign Up"
      />
    </div>
  );
}

export default Signup;