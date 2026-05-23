import Link from 'next/link';

const teamMembers = [
  { name: 'Daniel', role: 'Lead Developer', initials: 'D' },
  { name: 'Member 2', role: 'Frontend Developer', initials: 'M2' },
  { name: 'Member 3', role: 'Backend Developer', initials: 'M3' },
  { name: 'Member 4', role: 'UI/UX Designer', initials: 'M4' },
];

const values = [
  {
    emoji: '🤝',
    title: 'Community',
    description:
      'We believe in fostering a strong community of artisans and customers who share a passion for handcrafted items.',
  },
  {
    emoji: '🌱',
    title: 'Sustainability',
    description:
      'We promote sustainable consumption by connecting buyers with artisans who use eco-friendly materials and practices.',
  },
  {
    emoji: '💎',
    title: 'Quality',
    description:
      'Every item on our platform is handcrafted with care and attention to detail, ensuring the highest quality for our customers.',
  },
  {
    emoji: '❤️',
    title: 'Passion',
    description:
      'We are passionate about supporting local artisans and helping them share their creativity with the world.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">

      <div className="bg-primary py-12 px-6 text-center">
        <h1 className="font-playfair text-4xl font-bold text-secondary mb-3">
          About Us
        </h1>
        <p className="text-secondary opacity-70 text-sm">
          Learn more about Handcrafted Haven and our mission
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Mission */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl font-bold text-dark mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Handcrafted Haven is an innovative web application that aims to
            provide a platform for artisans and crafters to showcase and sell
            their unique handcrafted items.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            We serve as a virtual marketplace, connecting talented creators
            with potential customers who appreciate the beauty and quality of
            handmade products.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-dark text-center mb-10">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block mb-4">{value.emoji}</span>
                <h3 className="font-playfair font-bold text-dark text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-dark text-center mb-10">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold text-xl">
                    {member.initials}
                  </span>
                </div>

                <h3 className="font-playfair font-bold text-dark text-lg mb-1">
                  {member.name}
                </h3>

                <p className="text-sm text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-secondary rounded-xl p-10 text-center">
          <h2 className="font-playfair text-2xl font-bold text-dark mb-4">
            Join Our Community
          </h2>

          <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
            Whether you are an artisan or a customer, we welcome you to
            Handcrafted Haven.
          </p>

          <div className="flex gap-4 justify-center">

            <Link
              href="/shop"
              className="bg-primary text-secondary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Start Shopping
            </Link>

            <Link
              href="/register"
              className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Become a Seller
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}