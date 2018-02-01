/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMysqlServer'
  // },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 85,
  realHost: "http://overdriveawards.in",
  emails: ["chintan@wohlig.com", "jagruti@wohlig.com", "tushar@wohlig.com", "chirag@wohlig.com", "harsh@wohlig.com","sayali.ghule@wohlig.com","rohan@wohlig.com","sohan@wohlig.com","sanjay.network18@gmail.com","singhvikramrajpurohit@gmail.com","Vishwanath.Narayan@nw18.com","rohan.khule@wohlig.com","snehal.thakare@wohlig.com"]

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
