import logo from "@/assets/branding/logo.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="StudyGenie" className="h-10" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
