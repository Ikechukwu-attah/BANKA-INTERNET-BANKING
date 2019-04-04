/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */


const _express = _interopRequireDefault(require('express'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  res.send('welcome onboard');
});
app.use(_express.default.json());
app.listen(3000, () => {
  console.log('server runinig');
}); // eslint-disable-next-line semi-style
