import AuthLayout from "@/layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
      <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
      <button className="w-full bg-indigo-600 text-white py-2 rounded">
        Create Account
      </button>
    </AuthLayout>
  );
};

export default Register;
