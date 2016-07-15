var project = {
    title: "Sample Web Application Security Assessment",
    issues: [
        {
            title: "Some issue, maybe RCE",
            score: 10,
            description: "an attacker has RCE",
            pages: [
                "https://security.love/RCE"
            ],
            verification: {
                text: "Below shows a screenshot of the RCE and the code used",
                images: [
                    {
                        url: "images/RCE.png",
                        description: "The RCE is seen above in the vim file"
                    },
                    {
                        code: "netcat -l 5548",
                        description: "The code used for the RCE"
                    },
                    {
                        demo: "<a href=\"https://security.love/RCE\">The evil URL!!!</a>",
                        description: "The URL that has the RCE"
                    }
                ]
            },
            recommendation: "Remove the RCE!!"
        },
        {
            title: "Cross-site Scripting!!!",
            score: 7,
            description: "There's cross site scripting on this website!!",
            pages: [
               "https://security.love/coolSVGXSS/" 
            ],
            verification: {
                text: "Below shows a popup!!",
                images: [
                    {
                        url: "images/xss.png",
                        description: "Notice how there's an XSS popup!!"
                    }
                ]
            },
            recommendation: "Fix the popup!"
        },
        {
            title: "Clickjacking!!",
            score: 1,
            description: "There's no frame protection!",
            pages: [
                "Site Wide"
            ],
            verification: {
                text: "The website can be framed and stuff, see below",
                images: [
                    {
                        demo: "<iframe src=\"https://security.love\"></iframe>",
                        description: "See how it's framed?!"
                    }
                ]
            },
            recommendation: "Set a good CSP Policy!!"
        }
    ]
}
