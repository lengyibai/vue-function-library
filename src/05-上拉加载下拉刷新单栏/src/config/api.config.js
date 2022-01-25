const isPro = Object.is(process.env.NODE_ENV, 'production');

module.exports = {
  movie: isPro ? 'https://api.web.360kan.com' : 'movie',
};
