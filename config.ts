const config = {
    SEO: {
        title: "New Quikit App",
        description: "Cloned from Git"
    }, 
    s3: {
        
    },
    colors: {
        //light:dark
        theme: "dark"
    },
    auth: {
     // The URL to redirect users to after authentication
    callback: "/dashboard"
    },
    orm: {
        schema: "lib/schemas/user.schema.ts"
    }
}
export default config;