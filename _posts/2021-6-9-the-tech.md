---
title: The Tech
date: 2021-06-09
tags: 
  - JavaScript
  - VuePress
  - AWS
  - Cloudfront
author: John
location: Wisconsin 
---

## Intro
I thought an interesting first "real" post might be very briefly explaining the tech used on this site. It's pretty simple, but I find it interesting. Actually, a major motivator for making this site was to try this entire setup out and investigate its viability for potential future use. I'll keep it brief since I assume most of you are fairly familiar with each of these. I'll say at the top, for anyone interested in knowing if this setup could be useful for a simple personal or small business website, I dare say your answer appears to be yes if you've got a little technical skill (or at least the ability to stick with something). Also, as a disclaimer I'm still relatively new to a lot of these items in AWS so this might not be the most efficient/performant. Definitely feel free to reach out with any critiques!

Topics covered:
- [VuePress](#vuepress)
- [GitHub](#github)
- [CodeBuild](#codebuild)
- [S3](#s3-simple-storage-service)
- [CloudFront](#cloudfront)

## VuePress
I'd seen static site generators around for a while, and "young" me said they were a waste of time. I've obviously changed my mind. When looking into them I found the typical ones like Gatsby and Jekyll, but I enjoy Vue so I landed on VuePress. Not much more to it than that. Being able to set up new pages (and posts for that matter) simply using markdown is pretty nice, though I'll admit I definitely slept on markdown for a while so I'm still learning. In case you were interested in a similar setup I'll provide my config.js here. Noteworthy item is that this is still the default blog theme. Among my many to-do items is modifying that a bit. Also, I would be interested to know if anyone has any recommendations on VuePress-y things I should look into.

The promised config:

``` js
plugins: [
    ['@vuepress/blog', {
        directories: [{
            id: 'posts',
            dirname: '_posts',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
                lengthPerPage: 5,
            },
        }],
        frontmatters: [
            {
                id: 'tags',
                keys: ['tags'],
                path: '/tag/',
                layout: 'Tags',
                scopeLayout: 'Index'
            },
        ],
        sitemap: {
        hostname: 'https://www.jslowik.com'
        },
    }]
]
```

## GitHub
This one probably doesn't need any explanation, but figured I'd add it anyway. This site uses GitHub as a remote git repository host. Actually struggling to think of more to say than even that. I enjoy GitHub so I kept using it. A remote host for the repository was especially necessary for the next section.

## CodeBuild
The first AWS resource on the list. For once the resource name is pretty self explanatory. How CodeBuild fits in to the flow here is a webhook is triggered when there is a push or merge to the primary remote branch. CodeBuild will spin up a Linux build server, run through the buildspec I provided in the repository to install the necessary npm packages, and then run the VuePress build which will generate the static files. These files will be copied over to the next item on the list, S3, and the final step is the current CloudFront cache will be invalidated.

## S3 (Simple Storage Service)
S3 is pretty simple. Simply a place to store things (objects) on AWS. I swear I'm done with the puns. What's happening here is the static files generated from CodeBuild are copied into an S3 bucket (think folder) when the build has finished. For my purposes here S3 is only the holding spot for the static files. The intention is not to have the user access the site here, but rather at the next stop - CloudFront.

## CloudFront
The final link in the chain is CloudFront. To put it simply CloudFront is a CDN. It serves the static files from of S3. The main reason this simple blog is served from CloudFront rather than simply from the S3 bucket is because I wanted to try it, but a better reason would be performance as users can access these files from an edge location located near their geographic location. If the files are already cached at that edge location the service will be very fast. Even in the event of a cache miss the files are fetched via AWS's backbone network so you won't rely on the user's ISP. Clearly overkill for this particular project, but I've enjoyed the experience.

## Conclusion
So there's a brief overview. There are a couple smaller services involved such as CloudWatch for build logs as well as things like billing alarms, Certificate Manager for the SSL certificate, and of course IAM for the role and permissions management. I didn't think these would be too interesting as they're more "things you have to do" than actual choices I made within AWS.

In any case, thanks for taking the time. Definitely feel free to reach out if you have questions or tips!