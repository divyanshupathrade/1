import AuthLayout from "@/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
      <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
      <button className="w-full bg-indigo-600 text-white py-2 rounded">
        Login
      </button>
    </AuthLayout>
  );
};

export default Login;
