export default function RegisterPage() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="font-playfair text-3xl font-bold text-dark mb-2">
            Create an Account
          </h1>
          <p className="text-gray-500 text-sm">
            Join the Handcrafted Haven community today
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-dark mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

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

          <div>
            <label className="block text-sm font-bold text-dark mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-2">
              I want to
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary">
              <option value="buyer">Shop for handcrafted items</option>
              <option value="seller">Sell my handcrafted items</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-primary mt-1" />
              <span>
                I agree to the{' '}
                <a href="/terms" className="text-accent hover:opacity-80">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-accent hover:opacity-80">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-accent font-bold hover:opacity-80 transition-opacity">
              Sign in
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