# Gist Test Assignment

### How to run test suite
1. Navigate to root directeory
2. Create a .env file and add the following line
    - GITHUB_AUTH_TOKEN=\<insert your token here>
2. Command: npm install 
3. Command: node gist.js

### Justification of Test Cases:

- create_gist and create_gist_e functions were created using Octokit to improve my understanding of the Github API
- test_new_gist demonstrates that its possible to create a new gist containing a file with the contents "UBC IRP Student QA
- test_new_gist_e shows that the file parameter is required when creating a gist. After removing the files object from test_new_gist the request returns an error, demonstrating that the files object is required, or that the absence of the files object in this case causes an error.
- no_user_test1 and no_user_test2 are get and pull requests respectively. Their identical no user-agent header error demonstrates that an appropriate User-Agent header is required when making requests. I tested for two different types of HTTP requests to ensure the error applies to more than one type of request.

### Output of Test Suit:
![Output of Test Suit](https://github.com/mark-van/gist-tests/blob/main/Images/test_output.PNG)

### Concluding Remarks:
One noteworthy result I observed is that requests will run properly when sent using curl, Axios, or XMLHttpRequest without the User-Agent header being explicitly set. I assume this is because these means of performing HTTP requests automatically set the User-agent, but I am unsure.