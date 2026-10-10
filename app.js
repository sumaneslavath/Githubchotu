
console.log("==================================================");
console.log("          SUMAN ESLAVATH - PROFILE");
console.log("==================================================");

const profile = {
    name: "Suman Eslavath",
    experience: "4+ Years",
    previousCompany: "Amazon Development Center India Private Limited",
    previousRole: "Cloud Security Engineer",
    targetRole: "AWS Cloud Engineer / DevOps Engineer",
    cloudPlatform: "Amazon Web Services (AWS)",
    cloudSkills: [
        "IAM",
        "EC2",
        "S3",
        "VPC",
        "CloudTrail",
        "CloudWatch",
        "GuardDuty",
        "Security Hub",
        "AWS Config",
        "KMS"
    ],
    devopsSkills: [
        "Git",
        "GitHub",
        "Terraform",
        "AWS CI/CD",
        "Docker",
        "CloudFormation"
    ],
    monitoringTools: [
        "Grafana",
        "Prometheus"
    ]
};

console.log(`Name             : ${profile.name}`);
console.log(`Experience       : ${profile.experience}`);
console.log(`Previous Company : ${profile.previousCompany}`);
console.log(`Previous Role    : ${profile.previousRole}`);
console.log(`Target Role      : ${profile.targetRole}`);
console.log(`Cloud Platform   : ${profile.cloudPlatform}`);

console.log("\nAWS Cloud Skills:");
profile.cloudSkills.forEach(skill => console.log(`- ${skill}`));

console.log("\nDevOps Skills:");
profile.devopsSkills.forEach(skill => console.log(`- ${skill}`));

console.log("\nMonitoring Tools:");
profile.monitoringTools.forEach(tool => console.log(`- ${tool}`));

console.log("\n==================================================");
console.log("GitHub Actions Demo Successful!");
console.log("Profile application executed successfully.");
console.log("==================================================");
