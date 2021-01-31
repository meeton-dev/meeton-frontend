const conf = {
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:c8bdc44b-eedb-472c-9dc6-afaa2802a05a',
        
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region
        // Required only if it's different from Amazon Cognito Region
        // identityPoolRegion: 'eu-west-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_MLpyY8PVp',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '11s9djcv0pdko7u3l35mia8fa3',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
        responseType: 'code',
       
    },
}

export default conf;
