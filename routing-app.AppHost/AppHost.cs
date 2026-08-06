var builder = DistributedApplication.CreateBuilder(args);

var angularApp = builder.AddJavaScriptApp("angularApp", "../angular-website", runScriptName: "start")
    .WithNpm(installCommand: "ci")
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
