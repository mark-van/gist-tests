require('dotenv').config();
const axios = require('axios');
const authToken = process.env.GITHUB_AUTH_TOKEN;


//Used the Github API JavaScript Library to familirize myself with the API
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: authToken });
const create_gist = async () => {
    try{
        await octokit.request('POST /gists', {
            files: {"create_gist.txt":{
                "content": "UBC IRP Student QA!"
            }}
          })
    }catch (e){
        console.log("ERROR at create_gist", e);
    }    
}
const create_gist_e = async () => {
    try{
        await octokit.request('POST /gists', {
           //no files parameter
          })
    }catch (e){
        console.log("create_gist_e", e);
    }    
}

/** TEST CASES */
//makng http request with axios to create complete the three required tests


//Test that you can create a new gist containing a file with the contents "UBC IRP Student QA!"
const test_new_gist = async () => {
    const config = {headers:{"Authorization":`token ${authToken}`,
                    "User-Agent": "mark-van",
                    "Accept": "application/vnd.github.v3+json"
                }}
    try {
        post = `https://api.github.com/gists`;
        data = {
            files: {"test_new_gist.txt":{
                "content": "UBC IRP Student QA!"
            }}
          };
        res = await axios.post(post,data,config);
        console.log('test_new_gist succeeded in creating gist');
    } catch (e){
        console.log("ERROR at test_new_gist", e);
    }
}

//Test that when creating a new gist the file parameter is in fact required.
const test_new_gist_e = async () => {
    const config = {headers:{"Authorization":`token ${authToken}`,
                    "User-Agent": "mark-van",
                    "Accept": "application/vnd.github.v3+json"
                }}
    try {
        post = `https://api.github.com/gists`;
        data = {
            //no files parameter
          };
        res = await axios.post(post,data,config);
        console.log(res.data);
    } catch (e){
        console.log("ERROR at test_new_gist_e", e.response.data);
    }
}

//Test that the "User Agent" header is required when making a get request.
const no_user_test1 = async () => {
    try {
        const config = {headers:{"User-Agent": ""}}
        res = await axios.get('https://api.github.com/users/mark-van',config)
        //console.log(res.data);
    } catch (e){
        console.log("ERROR at no_user_test1", e.response.data);
    }
}

//Test that the "User Agent" header is required when making a post request.
const no_user_test2 = async () => {
    const config = {headers:{"Authorization":`token ${authToken}`,
                    "User-Agent": "",
                    "Accept": "application/vnd.github.v3+json"
                }}
    try {
        post = `https://api.github.com/gists`;
        data = {
            files: {"test_new_gist.txt":{
                "content": "UBC IRP Student QA!"
            }}
          };
        res = await axios.post(post,data,config);
       // console.log(res.data);
    } catch (e){
        console.log("ERROR at no_user_test2", e.response.data);
    }
}


/* RUN TEST CASES */
test_new_gist()
test_new_gist_e()
no_user_test1()
no_user_test2()