# Gist Test Assignment

### How to run test suite
- Navigate to root directeory
- Command: npm install 
- Command: node gist.js

### Justification of Test Cases:

- create_gist and and create_gist_e fuction were created using Octokit for the purpose of improving my undertanding of the API
- test_new_gist demonstrates that its possible to create a new gist containing a file with the contents "UBC IRP Student QA
- test_new_gist_e is a proof by contridiciton. After removing the files object from test_new_gist, the request return an error. Demonstrating tha the files object is required, or that the abscence of the files object in this case causes an error.
-no_user_test1 and no_user_test2 are get and pull requests repsctively. Their identical no user-agent header error demonstrates thar an approrpiatre User-Agent header is required when making requests. I tested for two different types of HTTP requests ensure the error applies to more than one type of request.

### Output of Test Suit:
![Output of Test Suit](https://github.com/mark-van/gist-tests/blob/main/Images/test_output.PNG)

### Concluding Remarks:
One noteworthy result I observed is that requests will run properly when sent using curl, axios, or XMLHttpRequest without the User-Agent header being explixitly set to anything. I assume this is becuase these means of performing HTTP requests automitical set the User-agant, but I am unsure.