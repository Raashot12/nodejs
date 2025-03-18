// const http = require( "http" )

// const PORT = 3000

// const server = http.createServer()

// server.on( "request", ( req, res ) => {
//   res.writeHead( 200, { "Content-Type": "application/json" } )
//   res.end( JSON.stringify( { id: 1, name: "Rasheed Iskillu" } ) )
// } )
// server.listen( PORT, () => {
//   console.log( `Listening on port`, 3000 )
// } ) // 127/0.0.1 => localhost

// const http = require( "http" );

// const PORT = 3000;

// const server = http.createServer();

// server.on( "request", ( req, res ) => {
//   if ( req.url === "/friends" ) {
//     res.writeHead( 200, { "Content-Type": "application/json" } );
//     res.end( JSON.stringify( { id: 1, name: "Rasheed Iskilu" } ) );
//   } else if ( req.url === "/messages" ) {
//     res.setHeader( "Content-Type", "text/html" );
//     res.write( "<html>" );
//     res.write( "<body>" );
//     res.write( "<ul>" );
//     res.write( "<li>Hello Rasheed!</li>" );
//     res.write( "<li>What are your thoughts on astronomy?</li>" );
//     res.write( "</ul>" );
//     res.write( "</body>" );
//     res.write( "</html>" );
//     res.end();
//   } else {
//     res.statusCode = 404; // Fixed: `=` instead of `==`
//     res.end( "Not Found" );
//   }
// } );

// server.listen( PORT, () => {
//   console.log( `Listening on port ${ PORT }` );
// } );
// const friends = [
//   { id: 1, name: "Rasheed Iskilu" },
//   { id: 2, name: "Dare Ladejobi" },
//   { id: 3, name: "Oreoluwa Johnson" },
//   { id: 4, name: "Sameer Antulay" },
//   { id: 5, name: "Tunde Williams" },
// ];

// const http = require( "http" );

// const PORT = 3000;

// const server = http.createServer();

// server.on( "request", ( req, res ) => {
//   const items = req.url.split( "/" )
//   if ( items[1] === "friends" ) {
//     res.setHeader( "Content-Type", "application/json" );
//     if ( items?.length === 3 ) {
//       const findFriendIndex = Number( items[2] );
//       res.end( JSON.stringify( friends[findFriendIndex] ) )
//     } else {
//       res.end( JSON.stringify( friends ) )
//     }
//     res.end( JSON.stringify( { id: 1, name: "Rasheed Iskilu" } ) );
//   } else if ( items[1] === "messages" ) {
//     res.setHeader( "Content-Type", "text/html" );
//     res.write( "<html>" );
//     res.write( "<body>" );
//     res.write( "<ul>" );
//     res.write( "<li>Hello Rasheed!</li>" );
//     res.write( "<li>What are your thoughts on astronomy?</li>" );
//     res.write( "</ul>" );
//     res.write( "</body>" );
//     res.write( "</html>" );
//     res.end();
//   } else {
//     res.statusCode = 404; // Fixed: `=` instead of `==`
//     res.end( "Not Found" );
//   }
// } );

// server.listen( PORT, () => {
//   console.log( `Listening on port ${ PORT }` );
// } );
