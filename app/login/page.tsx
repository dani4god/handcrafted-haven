export default function LoginPage() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl font-bold text-dark mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to your Handcrafted Haven account
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-primary" />
              Remember me
            </label>
            <a href="#" className="text-sm text-accent hover:opacity-80 transition-opacity">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/register" className="text-accent font-bold hover:opacity-80 transition-opacity">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-400">or continue with</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="border border-gray-200 rounded-full py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              Google
            </button>
            <button className="border border-gray-200 rounded-full py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              Facebook
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}