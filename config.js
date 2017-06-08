/**
 * Created by ace on 6/8/17.
 */
const env = process.env;

export default {
  port: env.port || env.PORT || 3000
};