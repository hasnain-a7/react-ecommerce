

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Choose the Best Electronics for Your Needs',
      date: 'January 15, 2025',
      summary: 'Choosing the right electronics can be overwhelming. In this blog post, we share tips on how to make the best choice based on your needs and budget.',
      link: '/blog/how-to-choose-electronics'
    },
    {
      title: 'Top 10 Gadgets You Can’t Live Without in 2025',
      date: 'January 10, 2025',
      summary: '2025 is full of innovative gadgets that can make your life easier. Check out our list of the top 10 must-have gadgets this year!',
      link: '/blog/top-10-gadgets'
    },
    {
      title: 'Why Sustainable Electronics Matter',
      date: 'January 5, 2025',
      summary: 'Sustainable electronics are becoming more important. We discuss why you should care about sustainable tech and how it benefits both the environment and your wallet.',
      link: '/blog/sustainable-electronics'
    }
  ];

  return (
    <div className="container mx-auto p-5 bg-slate-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">Latest Blog Posts</h2>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <a
              href={post.link}
              className="font-bold text-slate-400"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
