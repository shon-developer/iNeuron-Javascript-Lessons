// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/ delete courses
// testprep = gets access to create/delete tests
// user - gets access to consume text

var user = "admin";

switch (key) {
  case "admin":
    return console.log("You get full access");
    break;

  case "admin":
    return console.log("gets access to create/ delete courses");
    break;

  case "admin":
    return console.log("gets access to create/delete tests");
    break;

  case "admin":
    return console.log("gets access to consume text");
    break;
  default:
    console.log("Trial user");
    break;
}
